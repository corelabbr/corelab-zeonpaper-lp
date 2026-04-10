# Zeonpaper LP — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete Zeonpaper landing page (10 seções) com sistema de variantes A/B via parâmetro `?v=`, deploy no Netlify para preview remoto antes de publicar no domínio final.

**Architecture:** Site estático HTML5 com um único `index.html` contendo todas as 10 seções. `css/style.css` para todos os estilos (mobile-first). `js/variants.js` define as configurações de cada variante. `js/main.js` lê `?v=` da URL, faz merge com o base e aplica overrides via `data-variant-key` nos elementos do DOM. Sem build step, sem npm.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid), JavaScript ES6 vanilla, Google Fonts (Inter), Netlify (deploy/preview)

---

## Estrutura de arquivos

```
/
├── index.html              ← LP completa, todas as 10 seções
├── css/
│   └── style.css           ← todos os estilos, mobile-first
├── js/
│   ├── variants.js         ← configuração das variantes A/B/C
│   └── main.js             ← lê ?v=, aplica overrides + accordion FAQ
├── assets/
│   └── mockup.svg          ← ilustração do dashboard
└── netlify.toml            ← config de deploy
```

---

## Task 1: Scaffold — estrutura base do projeto

**Files:**
- Rewrite: `index.html`
- Create: `css/style.css`
- Create: `js/variants.js`
- Create: `js/main.js`
- Create: `netlify.toml`

- [ ] **Step 1: Rewrite index.html com shell base**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Zeonpaper — Controle financeiro simples para MEIs, microempresas e pequenos negócios. Saia das planilhas sem precisar de ERP.">
  <title>Zeonpaper — Controle Financeiro para Pequenos Negócios</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- seções serão adicionadas aqui nas tarefas seguintes -->

  <script src="js/variants.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Criar css/style.css com variáveis e reset**

```css
/* === VARIÁVEIS === */
:root {
  --color-primary: #16A34A;
  --color-primary-dark: #15803D;
  --color-primary-light: #DCFCE7;
  --color-bg: #FFFFFF;
  --color-bg-alt: #F9FAFB;
  --color-text: #111827;
  --color-text-muted: #4B5563;
  --color-border: #E5E7EB;
  --radius: 8px;
  --radius-lg: 12px;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --max-width: 1100px;
}

/* === RESET === */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  background: var(--color-bg);
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
button { cursor: pointer; font-family: inherit; }

/* === CONTAINER === */
.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
}

/* === SEÇÕES === */
.section {
  padding: 56px 0;
}
.section--alt {
  background: var(--color-bg-alt);
}
@media (min-width: 1024px) {
  .section { padding: 88px 0; }
}

.section__title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 12px;
  line-height: 1.25;
}
@media (min-width: 1024px) {
  .section__title { font-size: 2.25rem; }
}
.section__lead {
  text-align: center;
  color: var(--color-text-muted);
  font-size: 1.125rem;
  max-width: 640px;
  margin: 0 auto 40px;
}
.section__close {
  text-align: center;
  color: var(--color-text-muted);
  font-style: italic;
  margin-top: 32px;
  font-size: 0.9375rem;
}

/* === BOTÕES === */
.btn {
  display: inline-block;
  padding: 14px 28px;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  text-align: center;
  border: 2px solid transparent;
}
.btn--primary {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}
.btn--primary:hover {
  background: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}
.btn--secondary {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}
.btn--secondary:hover {
  background: var(--color-primary-light);
}
.btn--outline {
  background: transparent;
  color: var(--color-text);
  border-color: var(--color-border);
}
.btn--outline:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
.btn--large {
  padding: 18px 40px;
  font-size: 1.125rem;
}

/* === HERO === */
.hero {
  background: var(--color-bg);
  padding: 64px 0 48px;
}
@media (min-width: 1024px) {
  .hero { padding: 96px 0 80px; }
}
.hero__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}
@media (min-width: 1024px) {
  .hero__inner { grid-template-columns: 1fr 1fr; gap: 64px; }
}
.hero__tagline {
  display: inline-block;
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.9375rem;
  margin-bottom: 16px;
}
.hero__headline {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.15;
  color: var(--color-text);
  margin-bottom: 20px;
}
@media (min-width: 640px) {
  .hero__headline { font-size: 2.5rem; }
}
@media (min-width: 1024px) {
  .hero__headline { font-size: 3rem; }
}
.hero__subheadline {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  margin-bottom: 16px;
  line-height: 1.6;
}
.hero__body {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  margin-bottom: 32px;
  line-height: 1.7;
}
.hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
}
.hero__social-proof {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: 6px;
}
.hero__social-proof::before {
  content: '✓';
  color: var(--color-primary);
  font-weight: 700;
}
.hero__mockup {
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

/* === PROBLEMA === */
.pain-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 40px;
}
@media (min-width: 640px) {
  .pain-grid { grid-template-columns: 1fr 1fr; }
}
.pain-card {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 24px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  box-shadow: var(--shadow);
}
.pain-card__icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  line-height: 1;
}
.pain-card p {
  font-size: 0.9375rem;
  color: var(--color-text);
  font-style: italic;
  line-height: 1.5;
}

/* === POSICIONAMENTO === */
.spectrum {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  margin: 48px auto;
  max-width: 720px;
}
.spectrum::after {
  content: '';
  position: absolute;
  top: 6px;
  left: 20%;
  right: 20%;
  height: 2px;
  background: var(--color-border);
  z-index: 0;
}
.spectrum__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0 8px;
}
.spectrum__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-border);
  border: 2px solid #fff;
  margin-bottom: 16px;
  box-shadow: 0 0 0 2px var(--color-border);
}
.spectrum__item--center .spectrum__dot {
  width: 24px;
  height: 24px;
  background: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-light);
  margin-top: -5px;
}
.spectrum__label {
  font-weight: 700;
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  margin-bottom: 6px;
}
.spectrum__label--highlight {
  color: var(--color-primary);
  font-size: 1.0625rem;
}
.spectrum__desc {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  line-height: 1.4;
}

/* === COMO FUNCIONA === */
.steps {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-top: 48px;
}
@media (min-width: 1024px) {
  .steps { grid-template-columns: repeat(3, 1fr); gap: 40px; }
}
.step {
  text-align: center;
  padding: 0 16px;
}
.step__number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  font-weight: 800;
  font-size: 1.125rem;
  margin-bottom: 12px;
}
.step__icon {
  font-size: 2rem;
  margin-bottom: 12px;
}
.step__title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.step__desc {
  color: var(--color-text-muted);
  font-size: 0.9375rem;
}

/* === BENEFÍCIOS === */
.benefits-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 48px;
}
@media (min-width: 640px) {
  .benefits-grid { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 1024px) {
  .benefits-grid { grid-template-columns: repeat(3, 1fr); }
}
.benefit-card {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 24px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  box-shadow: var(--shadow);
}
.benefit-card__icon {
  font-size: 1.375rem;
  flex-shrink: 0;
  line-height: 1;
}
.benefit-card p {
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.5;
}

/* === PARA QUEM É === */
.fit-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 40px;
}
@media (min-width: 1024px) {
  .fit-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
}
.fit-card {
  border-radius: var(--radius);
  padding: 28px 32px;
  border: 2px solid var(--color-border);
}
.fit-card--yes {
  border-color: var(--color-primary);
  background: #F0FDF4;
}
.fit-card--no {
  border-color: var(--color-border);
  background: #fff;
}
.fit-card__title {
  font-size: 1.0625rem;
  font-weight: 700;
  margin-bottom: 16px;
}
.fit-list li {
  padding: 6px 0;
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  border-bottom: 1px solid var(--color-border);
  line-height: 1.5;
}
.fit-list li:last-child { border-bottom: none; }

/* === DEPOIMENTOS === */
.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 48px;
}
@media (min-width: 1024px) {
  .testimonials-grid { grid-template-columns: repeat(3, 1fr); }
}
.testimonial-card {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.testimonial-card__text {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  font-style: italic;
  flex: 1;
}
.testimonial-card__text::before { content: '"'; }
.testimonial-card__text::after { content: '"'; }
.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: 12px;
}
.testimonial-card__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary-light);
  color: var(--color-primary-dark);
  font-weight: 700;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.testimonial-card__author strong {
  display: block;
  font-size: 0.9375rem;
}
.testimonial-card__author span {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

/* === PRECIFICAÇÃO === */
.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 48px;
  align-items: start;
}
@media (min-width: 1024px) {
  .pricing-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
}
.pricing-card {
  background: #fff;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  text-align: center;
  box-shadow: var(--shadow);
  position: relative;
}
.pricing-card--featured {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px var(--color-primary-light), var(--shadow-md);
}
.pricing-card__top-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-primary);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 16px;
  border-radius: 99px;
  white-space: nowrap;
}
.pricing-card__badge {
  display: inline-block;
  background: var(--color-bg-alt);
  color: var(--color-text-muted);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 99px;
  margin-bottom: 16px;
}
.pricing-card__name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 16px;
}
.pricing-card__price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
  margin-bottom: 4px;
}
.pricing-card__amount {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-text);
}
.pricing-card__period {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
}
.pricing-card__billing {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin-bottom: 4px;
}
.pricing-card__trial {
  font-size: 0.8125rem;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 24px;
}
.pricing-card .btn { width: 100%; }
.pricing-faq-link {
  text-align: center;
  margin-top: 24px;
  font-size: 0.9375rem;
  color: var(--color-primary);
}
.pricing-faq-link a:hover { text-decoration: underline; }
.pricing-filter {
  max-width: 640px;
  margin: 32px auto 0;
  padding: 20px 24px;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}
.pricing-filter p + p { margin-top: 8px; }

/* === FAQ === */
.faq-list {
  max-width: 720px;
  margin: 48px auto 0;
}
.faq-item {
  border-bottom: 1px solid var(--color-border);
}
.faq-item__question {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 20px 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  line-height: 1.4;
}
.faq-item__question:hover { color: var(--color-primary); }
.faq-item__icon {
  font-size: 1.375rem;
  line-height: 1;
  color: var(--color-primary);
  transition: transform 0.2s;
  flex-shrink: 0;
  font-style: normal;
  font-weight: 400;
}
.faq-item__question[aria-expanded="true"] .faq-item__icon {
  transform: rotate(45deg);
}
.faq-item__answer {
  padding-bottom: 20px;
  color: var(--color-text-muted);
  line-height: 1.7;
  font-size: 0.9375rem;
}

/* === CTA FINAL === */
.cta-final {
  background: var(--color-primary);
}
.cta-final__inner {
  text-align: center;
  padding-top: 56px;
  padding-bottom: 56px;
}
@media (min-width: 1024px) {
  .cta-final__inner { padding-top: 80px; padding-bottom: 80px; }
}
.cta-final__headline {
  font-size: 1.75rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.25;
  max-width: 680px;
  margin: 0 auto 16px;
}
@media (min-width: 1024px) {
  .cta-final__headline { font-size: 2.25rem; }
}
.cta-final__sub {
  color: rgba(255,255,255,0.85);
  font-size: 1.125rem;
  margin-bottom: 32px;
}
.cta-final .btn--primary {
  background: #fff;
  color: var(--color-primary);
  border-color: #fff;
  font-size: 1.125rem;
  padding: 16px 40px;
}
.cta-final .btn--primary:hover {
  background: var(--color-primary-light);
  border-color: var(--color-primary-light);
}
.cta-final__footer {
  color: rgba(255,255,255,0.7);
  font-size: 0.875rem;
  margin-top: 16px;
}
```

- [ ] **Step 3: Criar js/variants.js**

```js
window.VARIANTS = {
  v1: {},
  v2: {
    hero_headline: 'Controle financeiro simples para o seu pequeno negócio',
    hero_cta_primary: 'Comece grátis agora',
  },
  v3: {
    hero_tagline: 'Simples. Prático. Acessível.',
    hero_headline: 'Organize suas contas a pagar e receber em minutos',
    hero_cta_primary: 'Experimentar grátis',
    primary_color: '#0057A8',
  },
};
```

- [ ] **Step 4: Criar js/main.js com lógica de variantes + accordion FAQ**

```js
(function () {
  // === VARIANT SYSTEM ===
  var params = new URLSearchParams(window.location.search);
  var vKey = 'v' + (params.get('v') || '1');
  var variant = (window.VARIANTS && window.VARIANTS[vKey]) || {};

  Object.entries(variant).forEach(function (entry) {
    var key = entry[0];
    var value = entry[1];

    if (key === 'primary_color') {
      document.documentElement.style.setProperty('--color-primary', value);
      return;
    }

    var el = document.querySelector('[data-variant-key="' + key + '"]');
    if (el) el.textContent = value;
  });

  // === FAQ ACCORDION ===
  document.querySelectorAll('.faq-item__question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = btn.nextElementSibling;
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      answer.hidden = isOpen;
    });
  });
})();
```

- [ ] **Step 5: Criar netlify.toml**

```toml
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

- [ ] **Step 6: Commit**

```bash
git add index.html css/style.css js/variants.js js/main.js netlify.toml
git commit -m "feat: scaffold base structure — HTML shell, CSS, JS, Netlify config"
```

---

## Task 2: Mockup SVG do dashboard

**Files:**
- Create: `assets/mockup.svg`

- [ ] **Step 1: Criar assets/mockup.svg**

Crie o diretório `assets/` e o arquivo `mockup.svg` com o seguinte conteúdo:

```svg
<svg viewBox="0 0 520 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- fundo do card -->
  <rect width="520" height="320" rx="14" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1.5"/>

  <!-- header -->
  <rect x="24" y="24" width="140" height="14" rx="4" fill="#BBF7D0"/>
  <rect x="24" y="46" width="90" height="10" rx="3" fill="#E5E7EB"/>

  <!-- stat cards -->
  <rect x="24" y="74" width="140" height="76" rx="8" fill="white" stroke="#E5E7EB" stroke-width="1"/>
  <rect x="24" y="84" width="72" height="9" rx="3" fill="#E5E7EB"/>
  <rect x="24" y="101" width="100" height="18" rx="4" fill="#111827"/>
  <rect x="24" y="128" width="60" height="8" rx="3" fill="#DCFCE7"/>

  <rect x="180" y="74" width="140" height="76" rx="8" fill="white" stroke="#E5E7EB" stroke-width="1"/>
  <rect x="180" y="84" width="72" height="9" rx="3" fill="#E5E7EB"/>
  <rect x="180" y="101" width="100" height="18" rx="4" fill="#111827"/>
  <rect x="180" y="128" width="60" height="8" rx="3" fill="#FEE2E2"/>

  <rect x="336" y="74" width="160" height="76" rx="8" fill="#DCFCE7" stroke="#BBF7D0" stroke-width="1"/>
  <rect x="336" y="84" width="80" height="9" rx="3" fill="#86EFAC"/>
  <rect x="336" y="101" width="110" height="18" rx="4" fill="#16A34A"/>
  <rect x="336" y="128" width="60" height="8" rx="3" fill="#86EFAC"/>

  <!-- tabela: header -->
  <rect x="24" y="170" width="472" height="1" fill="#E5E7EB"/>
  <rect x="24" y="160" width="90" height="9" rx="3" fill="#D1D5DB"/>
  <rect x="180" y="160" width="70" height="9" rx="3" fill="#D1D5DB"/>
  <rect x="310" y="160" width="70" height="9" rx="3" fill="#D1D5DB"/>
  <rect x="420" y="160" width="60" height="9" rx="3" fill="#D1D5DB"/>

  <!-- linha 1 -->
  <rect x="24" y="186" width="130" height="9" rx="3" fill="#E5E7EB"/>
  <rect x="180" y="186" width="80" height="9" rx="3" fill="#E5E7EB"/>
  <rect x="308" y="182" width="68" height="18" rx="9" fill="#FEF3C7"/>
  <rect x="420" y="186" width="60" height="9" rx="3" fill="#E5E7EB"/>
  <rect x="24" y="204" width="472" height="1" fill="#F3F4F6"/>

  <!-- linha 2 -->
  <rect x="24" y="216" width="110" height="9" rx="3" fill="#E5E7EB"/>
  <rect x="180" y="216" width="80" height="9" rx="3" fill="#E5E7EB"/>
  <rect x="308" y="212" width="68" height="18" rx="9" fill="#DCFCE7"/>
  <rect x="420" y="216" width="60" height="9" rx="3" fill="#E5E7EB"/>
  <rect x="24" y="234" width="472" height="1" fill="#F3F4F6"/>

  <!-- linha 3 -->
  <rect x="24" y="246" width="145" height="9" rx="3" fill="#E5E7EB"/>
  <rect x="180" y="246" width="80" height="9" rx="3" fill="#E5E7EB"/>
  <rect x="308" y="242" width="68" height="18" rx="9" fill="#FEE2E2"/>
  <rect x="420" y="246" width="60" height="9" rx="3" fill="#E5E7EB"/>
  <rect x="24" y="264" width="472" height="1" fill="#F3F4F6"/>

  <!-- linha 4 -->
  <rect x="24" y="276" width="120" height="9" rx="3" fill="#E5E7EB"/>
  <rect x="180" y="276" width="80" height="9" rx="3" fill="#E5E7EB"/>
  <rect x="308" y="272" width="68" height="18" rx="9" fill="#DCFCE7"/>
  <rect x="420" y="276" width="60" height="9" rx="3" fill="#E5E7EB"/>
</svg>
```

- [ ] **Step 2: Commit**

```bash
git add assets/mockup.svg
git commit -m "feat: add dashboard mockup SVG"
```

---

## Task 3: Seção Hero (1/10)

**Files:**
- Modify: `index.html` — adicionar seção dentro do `<body>`, antes dos scripts

- [ ] **Step 1: Adicionar Hero ao index.html**

Substitua o comentário `<!-- seções serão adicionadas aqui... -->` pelo HTML abaixo:

```html
  <!-- HERO -->
  <section class="hero" id="hero">
    <div class="container hero__inner">
      <div class="hero__content">
        <p class="hero__tagline" data-variant-key="hero_tagline">
          O jeito simples de sair da planilha e organizar o financeiro do seu pequeno negócio.
        </p>
        <h1 class="hero__headline" data-variant-key="hero_headline">
          Organize o financeiro da sua empresa sem depender de planilhas
        </h1>
        <p class="hero__subheadline" data-variant-key="hero_subheadline">
          Para MEIs, microempresas e pequenos negócios que precisam controlar contas a pagar e receber com mais clareza, sem ERP pesado e sem complicação.
        </p>
        <p class="hero__body" data-variant-key="hero_body">
          Se o financeiro do seu negócio ainda vive em planilhas, o Zeonpaper ajuda você a organizar contas a pagar e receber com mais clareza, menos erro manual e sem a complexidade de um ERP.
        </p>
        <div class="hero__ctas">
          <a href="#" class="btn btn--primary" data-variant-key="hero_cta_primary">
            Testar grátis por 7 dias — sem cartão
          </a>
          <a href="#como-funciona" class="btn btn--secondary" data-variant-key="hero_cta_secondary">
            Ver como funciona
          </a>
        </div>
        <p class="hero__social-proof" data-variant-key="hero_social_proof">
          Mais de 1.200 pequenos negócios já saíram da planilha
        </p>
      </div>
      <div class="hero__visual">
        <img src="assets/mockup.svg" alt="Dashboard Zeonpaper — painel de contas a pagar e receber" class="hero__mockup">
      </div>
    </div>
  </section>

  <!-- placeholder para seções seguintes -->
```

- [ ] **Step 2: Verificar no browser**

Abrir `index.html` no browser (arrastar o arquivo ou `open index.html`). Deve exibir:
- Tagline verde
- Headline grande
- Subheadline e body text
- 2 botões
- Social proof
- Mockup SVG do dashboard

Verificar em viewport 375px (mobile) e 1280px (desktop).

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add hero section"
```

---

## Task 4: Seções Problema e Posicionamento (2 e 3/10)

**Files:**
- Modify: `index.html` — adicionar após o Hero

- [ ] **Step 1: Adicionar seção Problema**

Substituir `<!-- placeholder para seções seguintes -->` por:

```html
  <!-- PROBLEMA -->
  <section class="section section--alt" id="problema">
    <div class="container">
      <h2 class="section__title">Sua planilha ainda aguenta?</h2>
      <p class="section__lead">O negócio cresceu. A planilha ficou para trás. E o financeiro virou uma fonte de ansiedade.</p>
      <div class="pain-grid">
        <div class="pain-card">
          <span class="pain-card__icon">😰</span>
          <p>"Você não sabe ao certo o que vence essa semana."</p>
        </div>
        <div class="pain-card">
          <span class="pain-card__icon">😬</span>
          <p>"Você já esqueceu de cobrar alguém — ou de pagar algo."</p>
        </div>
        <div class="pain-card">
          <span class="pain-card__icon">😤</span>
          <p>"Você passa tempo demais organizando o que deveria ser simples."</p>
        </div>
        <div class="pain-card">
          <span class="pain-card__icon">🤯</span>
          <p>"O financeiro está mais na sua cabeça do que em qualquer lugar."</p>
        </div>
      </div>
      <p class="section__close">Não é falta de disciplina. É ferramenta errada para o momento certo.</p>
    </div>
  </section>

  <!-- POSICIONAMENTO -->
  <section class="section" id="posicionamento">
    <div class="container">
      <h2 class="section__title">O espaço do Zeonpaper</h2>
      <div class="spectrum">
        <div class="spectrum__item spectrum__item--left">
          <div class="spectrum__dot"></div>
          <span class="spectrum__label">Planilha</span>
          <span class="spectrum__desc">Simples demais, vira bagunça</span>
        </div>
        <div class="spectrum__item spectrum__item--center">
          <div class="spectrum__dot"></div>
          <span class="spectrum__label spectrum__label--highlight">Zeonpaper</span>
          <span class="spectrum__desc">Controle financeiro simples e profissional</span>
        </div>
        <div class="spectrum__item spectrum__item--right">
          <div class="spectrum__dot"></div>
          <span class="spectrum__label">ERP completo</span>
          <span class="spectrum__desc">Robusto demais, pesado demais</span>
        </div>
      </div>
      <p class="section__close">O Zeonpaper foi feito para quem já passou da planilha, mas ainda não precisa de ERP.</p>
    </div>
  </section>

  <!-- placeholder para seções seguintes -->
```

- [ ] **Step 2: Verificar no browser**

- Seção Problema: 4 cards de dor visíveis, fundo cinza claro
- Seção Posicionamento: 3 nós no espectro, nó central verde e maior

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add problema and posicionamento sections"
```

---

## Task 5: Seções Como Funciona e Benefícios (4 e 5/10)

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar seções**

Substituir `<!-- placeholder para seções seguintes -->` por:

```html
  <!-- COMO FUNCIONA -->
  <section class="section section--alt" id="como-funciona">
    <div class="container">
      <h2 class="section__title">Três passos para sair da planilha</h2>
      <div class="steps">
        <div class="step">
          <div class="step__number">1</div>
          <div class="step__icon">📋</div>
          <h3 class="step__title">Cadastre suas contas</h3>
          <p class="step__desc">Registre contas a pagar e receber em segundos — sem configuração técnica.</p>
        </div>
        <div class="step">
          <div class="step__number">2</div>
          <div class="step__icon">📊</div>
          <h3 class="step__title">Acompanhe o caixa em tempo real</h3>
          <p class="step__desc">Veja de forma clara o que entra, sai e vence — sem fórmulas de planilha.</p>
        </div>
        <div class="step">
          <div class="step__number">3</div>
          <div class="step__icon">✅</div>
          <h3 class="step__title">Tome decisões com clareza</h3>
          <p class="step__desc">Tenha o financeiro organizado e tome decisões sem depender de planilhas.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- BENEFÍCIOS -->
  <section class="section" id="beneficios">
    <div class="container">
      <h2 class="section__title">O que muda quando você sai da planilha</h2>
      <div class="benefits-grid">
        <div class="benefit-card">
          <span class="benefit-card__icon">👁️</span>
          <p>Veja com clareza o que entra, sai e vence</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-card__icon">✏️</span>
          <p>Reduza erros e retrabalho do controle manual</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-card__icon">📁</span>
          <p>Organize contas a pagar e receber sem sistema complexo</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-card__icon">🎯</span>
          <p>Ganhe mais controle financeiro no dia a dia</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-card__icon">⚡</span>
          <p>Simples de adotar — sem implantação longa</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-card__icon">🚀</span>
          <p>Comece em minutos, sem precisar de treinamento</p>
        </div>
      </div>
    </div>
  </section>

  <!-- placeholder para seções seguintes -->
```

- [ ] **Step 2: Verificar no browser**

- Como funciona: 3 passos com número verde, ícone, título e descrição (1 coluna mobile, 3 colunas desktop)
- Benefícios: grid 6 cards (1→2→3 colunas)

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add como-funciona and beneficios sections"
```

---

## Task 6: Seções Para quem é e Depoimentos (6 e 7/10)

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar seções**

Substituir `<!-- placeholder para seções seguintes -->` por:

```html
  <!-- PARA QUEM É -->
  <section class="section section--alt" id="para-quem">
    <div class="container">
      <h2 class="section__title">O Zeonpaper é para você?</h2>
      <div class="fit-grid">
        <div class="fit-card fit-card--yes">
          <h3 class="fit-card__title">✅ Ideal para:</h3>
          <ul class="fit-list">
            <li>MEIs, microempresas e pequenos negócios</li>
            <li>Quem ainda usa planilha ou caderno para controlar o financeiro</li>
            <li>Quem já percebeu que a planilha não acompanha mais</li>
            <li>Quem quer organização financeira prática, sem ERP pesado</li>
            <li>Prestadores de serviço, clínicas, pequenos comércios e negócios locais</li>
          </ul>
        </div>
        <div class="fit-card fit-card--no">
          <h3 class="fit-card__title">❌ Não indicado para:</h3>
          <ul class="fit-list">
            <li>Empresas que precisam de ERP completo</li>
            <li>Quem busca solução contábil ou fiscal avançada</li>
            <li>Operações com financeiro já estruturado e time dedicado</li>
            <li>Quem não enxerga problema no processo atual</li>
          </ul>
        </div>
      </div>
      <p class="section__close">O Zeonpaper faz mais sentido para quem quer sair do improviso e ganhar clareza financeira com simplicidade — não para quem precisa de uma operação financeira avançada.</p>
    </div>
  </section>

  <!-- DEPOIMENTOS -->
  <section class="section" id="depoimentos">
    <div class="container">
      <h2 class="section__title">Quem já saiu da planilha</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <p class="testimonial-card__text">Eu tinha uma planilha enorme que vivia desatualizada. Esquecia de lançar coisas, perdia cobranças. Com o Zeonpaper eu finalmente sei o que entra e o que vence — todo dia, sem precisar lembrar de atualizar nada.</p>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">MF</div>
            <div>
              <strong>Mariana F.</strong>
              <span>Dona de estúdio de estética, SP</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <p class="testimonial-card__text">Minha planilha tinha fórmulas quebradas e eu perdi o controle do caixa uma vez. Foi um susto. Hoje uso o Zeonpaper e sei exatamente o que paga quando. É simples e direto.</p>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">RC</div>
            <div>
              <strong>Ricardo C.</strong>
              <span>Dono de loja de materiais, MG</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <p class="testimonial-card__text">Como autônomo, o financeiro era sempre aquela parte chata que eu deixava para depois. Com o Zeonpaper comecei em 10 minutos e hoje tenho clareza do que recebi, do que espero receber e do que tenho a pagar.</p>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">TM</div>
            <div>
              <strong>Thiago M.</strong>
              <span>Designer freelancer, RS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- placeholder para seções seguintes -->
```

- [ ] **Step 2: Verificar no browser**

- Para quem é: 2 colunas (desktop), card verde para "Ideal" e cinza para "Não indicado"
- Depoimentos: 3 cards com texto em itálico, avatar com iniciais e nome/cargo

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add para-quem and depoimentos sections"
```

---

## Task 7: Seção Precificação (8/10)

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar seção Precificação**

Substituir `<!-- placeholder para seções seguintes -->` por:

```html
  <!-- PRECIFICAÇÃO -->
  <section class="section section--alt" id="precos">
    <div class="container">
      <h2 class="section__title">Escolha o plano ideal para sair da planilha</h2>
      <p class="section__lead">Feito para pequenos negócios que precisam controlar contas a pagar e receber com simplicidade, sem ERP pesado.</p>
      <div class="pricing-grid">
        <div class="pricing-card">
          <h3 class="pricing-card__name">Mensal</h3>
          <div class="pricing-card__badge">Sem compromisso</div>
          <div class="pricing-card__price">
            <span class="pricing-card__amount">R$ 49,90</span>
            <span class="pricing-card__period">/mês</span>
          </div>
          <p class="pricing-card__billing">Cobrado mensalmente</p>
          <p class="pricing-card__trial">7 dias grátis, sem cartão</p>
          <a href="#" class="btn btn--outline">Começar grátis</a>
        </div>
        <div class="pricing-card pricing-card--featured">
          <div class="pricing-card__top-badge">Mais escolhido</div>
          <h3 class="pricing-card__name">Trimestral</h3>
          <div class="pricing-card__price">
            <span class="pricing-card__amount">R$ 39,90</span>
            <span class="pricing-card__period">/mês</span>
          </div>
          <p class="pricing-card__billing">R$ 119,70 cobrado a cada 3 meses</p>
          <p class="pricing-card__trial">7 dias grátis, sem cartão</p>
          <a href="#" class="btn btn--primary">Começar grátis</a>
        </div>
        <div class="pricing-card">
          <h3 class="pricing-card__name">Anual</h3>
          <div class="pricing-card__badge">Melhor custo-benefício</div>
          <div class="pricing-card__price">
            <span class="pricing-card__amount">R$ 29,90</span>
            <span class="pricing-card__period">/mês</span>
          </div>
          <p class="pricing-card__billing">R$ 358,80 cobrado anualmente</p>
          <p class="pricing-card__trial">7 dias grátis, sem cartão</p>
          <a href="#" class="btn btn--outline">Começar grátis</a>
        </div>
      </div>
      <p class="pricing-faq-link"><a href="#faq">Tem dúvidas? Veja o FAQ →</a></p>
      <div class="pricing-filter">
        <p><strong>Ideal para:</strong> MEIs, microempresas e pequenos negócios que precisam organizar contas a pagar e receber com simplicidade.</p>
        <p><strong>Não indicado para:</strong> quem precisa de ERP completo, contabilidade ou operação financeira avançada.</p>
      </div>
    </div>
  </section>

  <!-- placeholder para seções seguintes -->
```

- [ ] **Step 2: Verificar no browser**

- 3 cards de planos (1 col mobile, 3 col desktop)
- Plano Trimestral com borda verde e badge "Mais escolhido" no topo
- Preços exibidos corretamente, "7 dias grátis, sem cartão" em verde em todos

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add pricing section"
```

---

## Task 8: Seção FAQ (9/10)

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar seção FAQ**

Substituir `<!-- placeholder para seções seguintes -->` por:

```html
  <!-- FAQ -->
  <section class="section" id="faq">
    <div class="container">
      <h2 class="section__title">Dúvidas frequentes</h2>
      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-item__question" aria-expanded="false">
            Para quem o Zeonpaper faz sentido?
            <span class="faq-item__icon">+</span>
          </button>
          <div class="faq-item__answer" hidden>
            <p>O Zeonpaper é ideal para MEIs, microempresas e pequenos negócios que ainda usam planilhas ou cadernos para controlar o financeiro e querem organização prática sem implantar um sistema pesado.</p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-item__question" aria-expanded="false">
            O Zeonpaper substitui meu contador?
            <span class="faq-item__icon">+</span>
          </button>
          <div class="faq-item__answer" hidden>
            <p>Não. O Zeonpaper cuida do controle financeiro operacional — contas a pagar e receber, clareza de caixa. Contabilidade é uma função diferente e complementar.</p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-item__question" aria-expanded="false">
            Preciso saber de finanças para usar?
            <span class="faq-item__icon">+</span>
          </button>
          <div class="faq-item__answer" hidden>
            <p>Não. O Zeonpaper foi feito para o dono do negócio, não para especialistas. Se você sabe o que entra e o que sai do seu negócio, você consegue usar.</p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-item__question" aria-expanded="false">
            O que está incluso em todos os planos?
            <span class="faq-item__icon">+</span>
          </button>
          <div class="faq-item__answer" hidden>
            <p>Todos os planos incluem controle de contas a pagar e receber, visão de caixa e alertas de vencimento — sem limite de lançamentos. Não há restrição de funcionalidades por plano.</p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-item__question" aria-expanded="false">
            Como funciona o período grátis?
            <span class="faq-item__icon">+</span>
          </button>
          <div class="faq-item__answer" hidden>
            <p>São 7 dias completos sem precisar cadastrar cartão. Se cancelar antes do prazo, não cobra nada. Simples assim.</p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-item__question" aria-expanded="false">
            Como faço a migração da minha planilha?
            <span class="faq-item__icon">+</span>
          </button>
          <div class="faq-item__answer" hidden>
            <p>A importação é simples e o suporte está disponível para ajudar se precisar. Você não precisa fazer a migração sozinho.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- placeholder para seções seguintes -->
```

- [ ] **Step 2: Verificar accordion no browser**

- Clicar em qualquer pergunta: resposta deve expandir, ícone `+` deve girar 45°
- Clicar novamente: deve fechar

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add faq section with accordion"
```

---

## Task 9: Seção CTA Final (10/10)

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar seção CTA Final**

Substituir `<!-- placeholder para seções seguintes -->` por:

```html
  <!-- CTA FINAL -->
  <section class="cta-final" id="cta-final">
    <div class="container cta-final__inner">
      <h2 class="cta-final__headline">Chega de depender de planilhas para cuidar do financeiro do seu negócio.</h2>
      <p class="cta-final__sub">Comece grátis por 7 dias. Sem cartão. Sem complicação.</p>
      <a href="#" class="btn btn--primary">Começar agora — grátis</a>
      <p class="cta-final__footer">Feito para MEIs, microempresas e pequenos negócios.</p>
    </div>
  </section>
```

- [ ] **Step 2: Verificar no browser**

- Fundo verde
- Headline e subheadline brancas
- Botão branco com texto verde

- [ ] **Step 3: Verificar scroll completo da página**

Abrir `index.html` e rolar do Hero até o CTA Final. Todas as 10 seções devem estar visíveis e sem quebras de layout em mobile (375px) e desktop (1280px).

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add cta-final section — all 10 sections complete"
```

---

## Task 10: Verificar sistema de variantes

**Files:**
- Nenhum arquivo novo — verificação do que foi criado na Task 1

- [ ] **Step 1: Testar v1 (base)**

Abrir `index.html` sem parâmetro (ou com `?v=1`). Deve carregar com:
- Headline: "Organize o financeiro da sua empresa sem depender de planilhas"
- CTA: "Testar grátis por 7 dias — sem cartão"
- Cor primária: verde `#16A34A`

- [ ] **Step 2: Testar v2**

Abrir `index.html?v=2`. Deve exibir:
- Headline: "Controle financeiro simples para o seu pequeno negócio"
- CTA: "Comece grátis agora"
- Cor primária: verde (sem override)

- [ ] **Step 3: Testar v3**

Abrir `index.html?v=3`. Deve exibir:
- Tagline: "Simples. Prático. Acessível."
- Headline: "Organize suas contas a pagar e receber em minutos"
- CTA: "Experimentar grátis"
- Cor primária: azul `#0057A8` (botões, tagline, números dos steps ficam azuis)

- [ ] **Step 4: Commit (apenas se algum ajuste foi necessário)**

```bash
git add js/variants.js js/main.js
git commit -m "fix: adjust variant system after testing"
```

---

## Task 11: Deploy no Netlify para preview remoto

- [ ] **Step 1: Push das alterações para o GitHub**

```bash
git push origin main
```

- [ ] **Step 2: Criar conta/login no Netlify**

Acessar `netlify.com` → login com GitHub.

- [ ] **Step 3: Conectar o repositório**

1. Clicar em "Add new site" → "Import an existing project"
2. Selecionar GitHub → autorizar → escolher o repositório `corelab-zeonpaper-lp`
3. Configurações de build:
   - **Build command:** deixar vazio (site estático)
   - **Publish directory:** `.` (ponto — raiz do projeto)
4. Clicar em "Deploy site"

- [ ] **Step 4: Obter a URL de preview**

Após o deploy (30–60 segundos), a URL ficará disponível no dashboard do Netlify no formato:
`https://[nome-aleatorio].netlify.app`

Testar a URL com `?v=1`, `?v=2`, `?v=3` para confirmar que as variantes funcionam remotamente.

- [ ] **Step 5: (Opcional) Configurar domínio customizado**

Quando estiver aprovado para publicar no domínio final:
1. Netlify dashboard → "Domain settings"
2. Adicionar domínio customizado: `lp.zeonpaper.com.br`
3. Configurar o CNAME no DNS do domínio apontando para o Netlify

---

## Critérios de aceite

- [ ] Todas as 10 seções renderizam corretamente no mobile (375px) e desktop (1280px)
- [ ] `?v=1` ou sem parâmetro → versão base sem erros no console
- [ ] `?v=2` → headline e CTA alterados conforme `variants.js`
- [ ] `?v=3` → tagline, headline, CTA e cor primária alterados
- [ ] FAQ accordion abre/fecha corretamente
- [ ] Deploy no Netlify acessível remotamente via URL pública
- [ ] Nenhuma dependência externa além de Google Fonts
