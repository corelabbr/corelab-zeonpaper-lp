import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const PORT = Number(process.env.PORT || 8787);
const ROOT = process.cwd();
const API_URL = 'https://back.zeonpaper.com.br/api/register/submit';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

function sendJson(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
}

async function proxyRegister(req, res) {
  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {});
    return;
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'method_not_allowed' });
    return;
  }

  let payload;
  try {
    payload = JSON.parse(await readBody(req));
  } catch {
    sendJson(res, 400, { error: 'invalid_json' });
    return;
  }

  try {
    const upstream = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await upstream.text();
    let body = text;
    try {
      body = JSON.parse(text);
    } catch {
      // Keep non-JSON responses visible for debugging.
    }

    sendJson(res, upstream.status, {
      proxied: true,
      upstream_status: upstream.status,
      upstream_body: body,
    });
  } catch (error) {
    sendJson(res, 502, {
      proxied: true,
      error: 'upstream_request_failed',
      message: error instanceof Error ? error.message : String(error),
    });
  }
}

async function serveFile(req, res) {
  const url = new URL(req.url || '/', `http://${req.headers.host || '127.0.0.1'}`);
  const requestPath = url.pathname === '/' ? '/zp-visitor-test.html' : url.pathname;
  const filePath = normalize(join(ROOT, decodeURIComponent(requestPath)));

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  try {
    const content = await readFile(filePath);
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[extname(filePath)] || 'application/octet-stream',
    });
    res.end(content);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
}

const server = createServer((req, res) => {
  if ((req.url || '').startsWith('/api/register-test')) {
    void proxyRegister(req, res);
    return;
  }

  void serveFile(req, res);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`ZP visitor test server: http://127.0.0.1:${PORT}/zp-visitor-test.html`);
});
