/**
 * zp-plans.js — Fonte única de verdade dos planos Zeonpaper.
 *
 * ► Para mudar preço, nome, features ou modal: edite só este arquivo.
 *   Todas as páginas atualizam automaticamente no próximo deploy.
 *
 * Funciona em dois modos:
 *   • Home  (.pricing-grid existe) → renderiza os cards completos com grupos de features
 *   • SEO   (#zp-pricing-root existe) → renderiza cards simples + injeta modal + JS
 */
(function () {
  'use strict';

  /* =========================================================================
   * PLANOS — edite aqui
   * ======================================================================= */
  var PLANS = [
    {
      key: 'organiza',
      name: 'Organiza',
      namePF: 'Controla',
      price: '39,90',
      pricePF: '16,90',
      priceNote: 'Depois dos 7 dias grátis. Cancele quando quiser.',
      desc: 'O ponto de partida ideal. Saia da planilha hoje e organize o financeiro do seu negócio sem complicação.',
      descPF: 'O ponto de partida pra assumir o controle do seu dinheiro e sair da planilha, sem complicação.',
      featured: false,
      popTag: null,
      ctaLabel: 'Começar grátis',
      ctaClass: 'btn btn-outline',
      inherits: null,
      highlights: [
        { label: 'Contas a pagar e receber' },
        { label: 'Fluxo de caixa em tempo real' },
        { label: 'Alertas automáticos de vencimento' },
        { label: 'Pagamentos e recebimentos em massa' },
        { label: '1 conta Open Finance incluída' },
        { label: 'Relatórios gerenciais e DRE' }
      ],
      featureGroups: [
        {
          title: 'Controle financeiro',
          items: [
            { label: 'Contas a pagar e receber' },
            { label: 'Fluxo de caixa em tempo real' },
            { label: 'Lançamentos recorrentes' },
            { label: 'Alertas automáticos de vencimento' }
          ]
        },
        {
          title: 'Operação em escala',
          items: [
            { label: 'Pagamentos e recebimentos em massa', badge: 'novo' },
            { label: 'Parcelamento e amortização', badge: 'novo' },
            { label: 'Recibos automáticos de recebimento', badge: 'novo' }
          ]
        },
        {
          title: 'Cadastros e relatórios',
          items: [
            { label: 'Contas bancárias e contatos' },
            { label: '1 conta Open Finance incluída' },
            { label: 'Agenda financeira e centro de custos' },
            { label: 'Relatórios gerenciais e DRE' }
          ]
        }
      ],
      extraNote: null,
      extras: [
        { icon: 'building-2', label: 'PJ adicional',              value: '+ R$ 19,90/mês' },
        { icon: 'landmark',   label: 'Conta Open Finance adicional', value: '+ R$ 9,90/mês' }
      ]
    },
    {
      key: 'cresce',
      name: 'Cresce',
      namePF: 'Prospera',
      price: '54,90',
      pricePF: '29,90',
      priceNote: 'Depois dos 7 dias grátis. Cancele quando quiser.',
      desc: 'A escolha de quem já saiu da planilha e quer emitir nota fiscal no mesmo lugar do financeiro.',
      descPF: 'Pra quem já se organizou e quer ver o dinheiro render e crescer, com DRE e relatórios num só lugar.',
      featured: true,
      popTag: 'MAIS ESCOLHIDO',
      ctaLabel: 'Começar com Cresce',
      ctaClass: 'btn btn-cta',
      inherits: 'Organiza',
      highlights: [
        { label: 'Multiempresas e usuários ilimitados' },
        { label: 'Emissão de NF-e e NFS-e — 50/mês' },
        { label: 'Suporte prioritário' }
      ],
      featureGroups: [
        {
          title: 'Controle financeiro',
          items: [
            { label: 'Contas a pagar e receber' },
            { label: 'Fluxo de caixa em tempo real' },
            { label: 'Lançamentos recorrentes' },
            { label: 'Alertas automáticos de vencimento' }
          ]
        },
        {
          title: 'Operação em escala',
          items: [
            { label: 'Pagamentos e recebimentos em massa', badge: 'novo' },
            { label: 'Parcelamento e amortização', badge: 'novo' },
            { label: 'Recibos automáticos de recebimento', badge: 'novo' }
          ]
        },
        {
          title: 'Cadastros e relatórios',
          items: [
            { label: 'Contas bancárias e contatos' },
            { label: '1 conta Open Finance incluída' },
            { label: 'Agenda financeira e centro de custos' },
            { label: 'Relatórios gerenciais e DRE' },
            { label: 'Multiempresas e usuários ilimitados' }
          ]
        },
        {
          title: 'Nota fiscal e suporte',
          items: [
            { label: 'Emissão de NF-e e NFS-e — 50/mês' },
            { label: 'Suporte prioritário' }
          ]
        }
      ],
      extraNote: null,
      extras: [
        { icon: 'receipt',    label: 'NFs excedentes', value: 'R$ 0,40/unidade' },
        { icon: 'building-2', label: 'PJ adicional',   value: '+ R$ 19,90/mês'  },
        { icon: 'landmark',   label: 'Conta Open Finance adicional', value: '+ R$ 9,90/mês' }
      ]
    },
    {
      key: 'pro',
      name: 'Pro',
      namePF: 'Realiza',
      price: '75,90',
      pricePF: '49,90',
      priceNote: 'Depois dos 7 dias grátis. Cancele quando quiser.',
      desc: 'Para quem já tem volume alto e quer automação completa com atendimento dedicado.',
      descPF: 'Pra realizar seus objetivos com previsibilidade total, relatórios completos e suporte dedicado.',
      featured: false,
      popTag: null,
      ctaLabel: 'Começar com Pro',
      ctaClass: 'btn btn-outline',
      inherits: 'Cresce',
      highlights: [
        { label: 'Emissão de NF-e e NFS-e — 100/mês' },
        { label: 'Resumo diário do caixa no WhatsApp', badge: 'novo' },
        { label: 'Onboarding com consultoria de migração' },
        { label: 'Suporte dedicado no WhatsApp' }
      ],
      featureGroups: [
        {
          title: 'Controle financeiro',
          items: [
            { label: 'Contas a pagar e receber' },
            { label: 'Fluxo de caixa em tempo real' },
            { label: 'Lançamentos recorrentes' },
            { label: 'Alertas automáticos de vencimento' }
          ]
        },
        {
          title: 'Operação em escala',
          items: [
            { label: 'Pagamentos e recebimentos em massa', badge: 'novo' },
            { label: 'Parcelamento e amortização', badge: 'novo' },
            { label: 'Recibos automáticos de recebimento', badge: 'novo' }
          ]
        },
        {
          title: 'Cadastros e relatórios',
          items: [
            { label: 'Contas bancárias e contatos' },
            { label: '1 conta Open Finance incluída' },
            { label: 'Agenda financeira e centro de custos' },
            { label: 'Relatórios gerenciais e DRE' },
            { label: 'Multiempresas e usuários ilimitados' }
          ]
        },
        {
          title: 'Nota fiscal e automação',
          items: [
            { label: 'Emissão de NF-e e NFS-e — 100/mês' },
            { label: 'Resumo diário do caixa no WhatsApp', badge: 'novo' }
          ]
        },
        {
          title: 'Atendimento dedicado',
          items: [
            { label: 'Onboarding assistido com consultoria de migração' },
            { label: 'Suporte prioritário no WhatsApp' }
          ]
        }
      ],
      extraNote: null,
      extras: [
        { icon: 'receipt',    label: 'NFs excedentes', value: 'R$ 0,40/unidade' },
        { icon: 'building-2', label: 'PJ adicional',   value: '+ R$ 19,90/mês'  },
        { icon: 'landmark',   label: 'Conta Open Finance adicional', value: '+ R$ 9,90/mês' }
      ]
    }
  ];

  /* =========================================================================
   * COMPARATIVO — matriz recurso × plano (fonte única da tabela expansível)
   *   valor: true = incluído · false/null = não incluído (—) · string = texto
   * ======================================================================= */
  var COMPARISON = [
    { title: 'Controle financeiro', rows: [
      { label: 'Contas a pagar e receber',            values: { organiza: true, cresce: true, pro: true } },
      { label: 'Fluxo de caixa em tempo real',        values: { organiza: true, cresce: true, pro: true } },
      { label: 'Lançamentos recorrentes',             values: { organiza: true, cresce: true, pro: true } },
      { label: 'Alertas automáticos de vencimento',   values: { organiza: true, cresce: true, pro: true } }
    ]},
    { title: 'Operação em escala', rows: [
      { label: 'Pagamentos e recebimentos em massa',  values: { organiza: true, cresce: true, pro: true } },
      { label: 'Parcelamento e amortização',          values: { organiza: true, cresce: true, pro: true } },
      { label: 'Recibos automáticos de recebimento',  values: { organiza: true, cresce: true, pro: true } }
    ]},
    { title: 'Cadastros e relatórios', rows: [
      { label: 'Contas bancárias e contatos',         values: { organiza: true, cresce: true, pro: true } },
      { label: 'Conta Open Finance incluída',         values: { organiza: '1', cresce: '1', pro: '1' } },
      { label: 'Agenda financeira e centro de custos', values: { organiza: true, cresce: true, pro: true } },
      { label: 'Relatórios gerenciais e DRE',         values: { organiza: true, cresce: true, pro: true } },
      { label: 'Multiempresas e usuários ilimitados', values: { organiza: false, cresce: true, pro: true }, pjOnly: true }
    ]},
    { title: 'Nota fiscal', rows: [
      { label: 'Emissão de NF-e e NFS-e',             values: { organiza: false, cresce: true, pro: true }, pjOnly: true },
      { label: 'Resumo diário do caixa no WhatsApp',  values: { organiza: false, cresce: false, pro: true } }
    ]},
    { title: 'Suporte', rows: [
      { label: 'Suporte prioritário',                 values: { organiza: false, cresce: true, pro: true } },
      { label: 'Onboarding com consultoria de migração', values: { organiza: false, cresce: false, pro: true } },
      { label: 'Suporte dedicado no WhatsApp',        values: { organiza: false, cresce: false, pro: true } }
    ]},
    { title: 'Cobranças por uso', rows: [
      { label: 'NFs excedentes',            values: { organiza: false, cresce: 'R$ 0,40/un', pro: 'R$ 0,40/un' }, pjOnly: true },
      { label: 'PJ adicional',              values: { organiza: 'R$ 19,90/mês', cresce: 'R$ 19,90/mês', pro: 'R$ 19,90/mês' } },
      { label: 'Conta Open Finance adicional', values: { organiza: 'R$ 9,90/mês', cresce: 'R$ 9,90/mês', pro: 'R$ 9,90/mês' } }
    ]}
  ];

  /* =========================================================================
   * Helpers
   * ======================================================================= */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function icon(name, size) {
    size = size || 15;
    return '<i data-lucide="' + esc(name) + '" width="' + size + '" height="' + size + '"></i>';
  }

  /* =========================================================================
   * Doctype PF / PJ — o preço-base é de Pessoa Física; PJ soma o adicional
   * ======================================================================= */
  var PJ_ADICIONAL = 19.90; // R$/mês — adicional de Pessoa Jurídica (CNPJ) por empresa

  function toPJPrice(pfPrice) {
    var base = parseFloat(String(pfPrice).replace(',', '.'));
    if (isNaN(base)) return pfPrice;
    var pj = Math.round((base + PJ_ADICIONAL) * 100) / 100;
    return pj.toFixed(2).replace('.', ',');
  }

  function pfName(p) { return p.namePF || p.name; }
  function pfNameByName(pjName) {
    for (var i = 0; i < PLANS.length; i++) {
      if (PLANS[i].name === pjName) return PLANS[i].namePF || pjName;
    }
    return pjName;
  }
  function ctaLabelPF(p) {
    return (p.namePF && p.ctaLabel) ? p.ctaLabel.split(p.name).join(pfName(p)) : p.ctaLabel;
  }

  var DOCTYPE_CSS = [
    '.plan-doctype{display:flex;gap:6px;max-width:340px;margin:0 auto 1.8rem;background:rgba(121,59,237,.08);border-radius:999px;padding:4px}',
    '.plan-doctype-btn{flex:1;padding:.6rem .5rem;border:0;border-radius:999px;background:transparent;font-family:inherit;font-size:.9rem;font-weight:600;color:var(--text-dark);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:6px;transition:background .2s,color .2s}',
    '.plan-doctype-btn.active{background:var(--primary);color:#fff;box-shadow:0 4px 14px rgba(121,59,237,.25)}',
    '.plan-doctype-tag{font-size:.62rem;font-weight:700;padding:2px 6px;border-radius:999px;background:rgba(255,255,255,.18);color:inherit}',
    '.plan-doctype-btn:not(.active) .plan-doctype-tag{background:rgba(121,59,237,.12);color:var(--primary)}',
    '.comparison-table .cmp-price-row th[scope="row"]{font-weight:700}',
    '.comparison-table .cmp-price{font-weight:800;font-size:.95rem;color:var(--text-dark);white-space:nowrap}',
    '.comparison-table .cmp-featured .cmp-price{color:var(--primary)}',
    '.comparison-table .cmp-pfval{display:none}',
    '.comparison-table.cmp-pf .cmp-pjval{display:none}',
    '.comparison-table.cmp-pf .cmp-pfval{display:inline}'
  ].join('');

  function injectDoctypeCss() {
    if (document.getElementById('zp-doctype-css')) return;
    var s = document.createElement('style');
    s.id = 'zp-doctype-css';
    s.textContent = DOCTYPE_CSS;
    document.head.appendChild(s);
  }

  function buildDoctypeToggle() {
    return '<div class="plan-doctype" role="tablist" aria-label="Tipo de conta">'
      +   '<button type="button" class="plan-doctype-btn active" data-doctype="pj" role="tab" aria-selected="true">Conta PJ</button>'
      +   '<button type="button" class="plan-doctype-btn" data-doctype="pf" role="tab" aria-selected="false">Conta PF</button>'
      + '</div>';
  }

  function applyDoctype(type) {
    var isPJ = type === 'pj';
    document.querySelectorAll('[data-name-pj]').forEach(function (el) {
      var v = isPJ ? el.getAttribute('data-name-pj') : el.getAttribute('data-name-pf');
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('.plan-desc').forEach(function (el) {
      var d = isPJ ? el.getAttribute('data-desc-pj') : el.getAttribute('data-desc-pf');
      if (d != null) el.textContent = d;
    });
    document.querySelectorAll('.plan-price-amount').forEach(function (el) {
      var v = isPJ ? el.getAttribute('data-price-pj') : el.getAttribute('data-price-pf');
      if (v) el.textContent = v;
    });
    document.querySelectorAll('.plan-extras-item--pj').forEach(function (el) {
      el.style.display = isPJ ? '' : 'none';
    });
    document.querySelectorAll('.plan-feat--pj').forEach(function (el) {
      el.style.display = isPJ ? '' : 'none';
    });
    document.querySelectorAll('.cmp-price').forEach(function (el) {
      var v = isPJ ? el.getAttribute('data-price-pj') : el.getAttribute('data-price-pf');
      if (v) el.textContent = 'R$ ' + v;
    });
    document.querySelectorAll('.cmp-row--pj').forEach(function (el) {
      el.style.display = isPJ ? '' : 'none';
    });
    var cmpTable = document.querySelector('.comparison-table');
    if (cmpTable) cmpTable.classList.toggle('cmp-pf', !isPJ);
    document.querySelectorAll('.plan-doctype-btn').forEach(function (b) {
      var on = b.getAttribute('data-doctype') === type;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    try { localStorage.setItem('zp_doctype', type); } catch (_) {}
  }

  function initDoctype() {
    document.addEventListener('click', function (e) {
      var btn = e.target && e.target.closest ? e.target.closest('[data-doctype]') : null;
      if (!btn) return;
      applyDoctype(btn.getAttribute('data-doctype'));
    });
    var saved = 'pj';
    try { saved = localStorage.getItem('zp_doctype') || 'pj'; } catch (_) {}
    applyDoctype(saved);
  }

  /* =========================================================================
   * Renderização — home (.pricing-grid)
   * ======================================================================= */
  function buildHomeCards() {
    return PLANS.map(function (p, i) {
      var cls = 'price-card'
        + (i === 0 ? ' active' : '')
        + (p.featured ? ' featured' : '')
        + (i === PLANS.length - 1 ? ' anchor' : '');

      var hlItems = (p.highlights && p.highlights.length)
        ? p.highlights
        : (p.featureGroups[0] ? p.featureGroups[0].items : []);
      var lis = hlItems.map(function (it) {
        var pj = /NF-e|NFS-e|nota fiscal|multiempresa/i.test(it.label);
        return '<li' + (pj ? ' class="plan-feat--pj"' : '') + '>' + icon('check', 15) + ' ' + esc(it.label)
          + (it.badge ? ' <span class="plan-feature-new">' + esc(it.badge) + '</span>' : '')
          + '</li>';
      }).join('');
      var featsHead = p.inherits
        ? '<p class="plan-inherit">' + icon('check-check', 15) + ' Tudo do <strong data-name-pj="' + esc(p.inherits) + '" data-name-pf="' + esc(pfNameByName(p.inherits)) + '">' + esc(p.inherits) + '</strong>, e mais:</p>'
        : '<p class="plan-feature-group-title">Recursos inclusos</p>';
      var feats = featsHead + '<ul class="plan-features-list">' + lis + '</ul>';

      var extras = p.extras
        ? '<div class="plan-extras">'
          + p.extras.map(function (e) {
              var isPJ = /PJ adicional|NFs excedentes/i.test(e.label);
              return '<div class="plan-extras-item' + (isPJ ? ' plan-extras-item--pj' : '') + '">'
                + '<span>' + icon(e.icon, 12) + ' ' + esc(e.label) + '</span>'
                + '<span>' + esc(e.value) + '</span>'
                + '</div>';
            }).join('')
          + '</div>'
        : '';

      return '<div class="' + cls + '" data-plan-card="' + esc(p.key) + '">'
        + (p.popTag ? '<div class="pop-tag">' + esc(p.popTag) + '</div>' : '')
        + '<h3 class="plan-name" data-name-pj="' + esc(p.name) + '" data-name-pf="' + esc(pfName(p)) + '">' + esc(p.name) + '</h3>'
        + '<p class="plan-desc" data-desc-pj="' + esc(p.desc) + '" data-desc-pf="' + esc(p.descPF || p.desc) + '">' + esc(p.desc) + '</p>'
        + '<div class="plan-price">'
        +   '<span class="plan-price-currency">R$</span>'
        +   '<span class="plan-price-amount" data-price-pf="' + esc(p.pricePF) + '" data-price-pj="' + esc(p.price) + '">' + esc(p.price) + '</span>'
        +   '<span class="plan-price-period">/mês</span>'
        + '</div>'
        + '<p class="plan-price-note">' + esc(p.priceNote) + '</p>'
        + '<button type="button" class="' + p.ctaClass + '" style="width:100%;"'
        +   ' data-lead-modal data-plan="' + esc(p.key) + '" data-name-pj="' + esc(p.ctaLabel) + '" data-name-pf="' + esc(ctaLabelPF(p)) + '">' + esc(p.ctaLabel) + '</button>'
        + '<p class="plan-cta-note">7 dias de teste · sem cartão de crédito</p>'
        + '<hr class="plan-features-divider">'
        + '<div class="plan-features">' + feats + '</div>'
        + (p.extraNote ? '<p class="plan-nf-note">' + esc(p.extraNote) + '</p>' : '')
        + extras
        + '</div>';
    }).join('');
  }

  /* =========================================================================
   * Renderização — caixa comparativa expansível (home)
   * ======================================================================= */
  function buildComparison() {
    function cell(v) {
      if (v === true)  return '<span class="cmp-yes">' + icon('check', 16) + '</span>';
      if (!v)          return '<span class="cmp-no" aria-label="Não incluído">—</span>';
      return '<span class="cmp-val">' + esc(v) + '</span>';
    }
    var head = '<tr><th scope="col" class="cmp-corner">Recurso</th>'
      + PLANS.map(function (p) {
          return '<th scope="col"' + (p.featured ? ' class="cmp-featured"' : '') + ' data-name-pj="' + esc(p.name) + '" data-name-pf="' + esc(pfName(p)) + '">' + esc(p.name) + '</th>';
        }).join('')
      + '</tr>';

    var priceRow = '<tr class="cmp-price-row"><th scope="row">Preço mensal</th>'
      + PLANS.map(function (p) {
          return '<td' + (p.featured ? ' class="cmp-featured"' : '') + '>'
            + '<span class="cmp-price" data-price-pf="' + esc(p.pricePF) + '" data-price-pj="' + esc(p.price) + '">R$ ' + esc(p.price) + '</span>'
            + '</td>';
        }).join('')
      + '</tr>';

    var body = priceRow + COMPARISON.map(function (group) {
      var groupRow = '<tr class="cmp-group"><th scope="colgroup" colspan="' + (PLANS.length + 1) + '">'
        + esc(group.title) + '</th></tr>';
      var rows = group.rows.map(function (row) {
        var pjRow = /^PJ adicional/i.test(row.label);
        var cells = PLANS.map(function (p) {
          var inner = row.pjOnly
            ? '<span class="cmp-pjval">' + cell(row.values[p.key]) + '</span><span class="cmp-pfval">' + cell(false) + '</span>'
            : cell(row.values[p.key]);
          return '<td' + (p.featured ? ' class="cmp-featured"' : '') + '>' + inner + '</td>';
        }).join('');
        var cls = pjRow ? ' class="cmp-row--pj"' : (row.pjOnly ? ' class="cmp-row--pjonly"' : '');
        return '<tr' + cls + '><th scope="row">' + esc(row.label) + '</th>' + cells + '</tr>';
      }).join('');
      return groupRow + rows;
    }).join('');

    return '<div class="plan-compare">'
      + '<button type="button" class="plan-compare-toggle" aria-expanded="false" aria-controls="plan-compare-panel">'
      +   '<span>Comparar todos os recursos dos planos</span>'
      +   icon('chevron-down', 20)
      + '</button>'
      + '<div class="plan-compare-panel" id="plan-compare-panel" hidden>'
      +   '<div class="plan-compare-scroll">'
      +     '<table class="comparison-table"><thead>' + head + '</thead><tbody>' + body + '</tbody></table>'
      +   '</div>'
      + '</div>'
      + '</div>';
  }

  function initComparison(gridEl) {
    if (!gridEl || document.querySelector('.plan-compare')) return;
    gridEl.insertAdjacentHTML('afterend', buildComparison());
    var toggle = document.querySelector('.plan-compare-toggle');
    var panel  = document.getElementById('plan-compare-panel');
    if (!toggle || !panel) return;
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      toggle.classList.toggle('open', !open);
      panel.hidden = open;
    });
  }

  /* =========================================================================
   * Renderização — SEO (#zp-pricing-root)
   * ======================================================================= */
  function buildSeoCards() {
    return PLANS.map(function (p) {
      var cls = 'plan-card' + (p.featured ? ' featured' : '');
      var ctaCls = p.featured ? 'plan-cta' : 'plan-cta secondary';
      var firstGroup = p.featureGroups[0].items.slice(0, 4);
      var lis = firstGroup.map(function (it) { return '<li>' + esc(it.label) + '</li>'; }).join('');
      return '<div class="' + cls + '">'
        + (p.popTag ? '<div class="plan-badge">' + esc(p.popTag) + '</div>' : '')
        + '<div class="plan-name">' + esc(p.name) + '</div>'
        + '<div class="plan-price">R$' + esc(p.price) + '<span>/mês</span></div>'
        + '<p class="plan-desc">' + esc(p.desc) + '</p>'
        + '<ul class="plan-features">' + lis + '</ul>'
        + '<button type="button" class="' + ctaCls + '"'
        +   ' data-lead-modal data-plan="' + esc(p.key) + '">' + esc(p.ctaLabel) + '</button>'
        + '<p class="plan-cta-note">7 dias de teste · sem cartão</p>'
        + '</div>';
    }).join('');
  }

  /* =========================================================================
   * Modal HTML
   * ======================================================================= */
  var MODAL_HTML = ''
    + '<div class="lead-overlay" id="plan-modal" role="dialog" aria-modal="true" aria-labelledby="plan-modal-title">'
    +   '<div class="lead-modal">'
    +     '<button class="lead-close" id="plan-modal-close" aria-label="Fechar">&#x2715;</button>'
    +     '<div class="lead-plan-badge" id="plan-modal-badge">Organiza</div>'
    +     '<h2 class="lead-title" id="plan-modal-title">Comece seu teste grátis</h2>'
    +     '<p class="lead-subtitle">7 dias grátis · Sem cartão · Cancele quando quiser</p>'
    +     '<form id="plan-modal-form" novalidate>'
    +       '<input type="text"     name="nome"         class="lead-input" placeholder="Seu nome"                autocomplete="name"         required>'
    +       '<input type="email"    name="email"        class="lead-input" placeholder="Seu melhor e-mail"       autocomplete="email"        required>'
    +       '<input type="tel"      name="telefone"     class="lead-input" placeholder="WhatsApp (com DDD)"      autocomplete="tel" inputmode="numeric" maxlength="15" required>'
    +       '<input type="text"     name="cnpj"         class="lead-input" placeholder="CNPJ"                    autocomplete="off" inputmode="numeric" maxlength="18" required>'
    +       '<div class="lead-password-wrap">'
    +         '<input type="password" name="senha"      class="lead-input lead-password-input" placeholder="Crie uma senha forte" autocomplete="new-password" minlength="8" required>'
    +         '<button type="button" class="lead-password-toggle" aria-label="Mostrar senha" tabindex="-1">'
    +           '<i data-lucide="eye" width="18" height="18"></i>'
    +         '</button>'
    +       '</div>'
    +       '<ul class="pwd-rules" data-pwd-rules>'
    +         '<li data-rule="length"><i data-lucide="circle" width="13" height="13"></i> 8 caracteres ou mais</li>'
    +         '<li data-rule="upper"><i data-lucide="circle" width="13" height="13"></i> 1 letra maiúscula</li>'
    +         '<li data-rule="lower"><i data-lucide="circle" width="13" height="13"></i> 1 letra minúscula</li>'
    +         '<li data-rule="number"><i data-lucide="circle" width="13" height="13"></i> 1 número</li>'
    +       '</ul>'
    +       '<input type="password" name="senha_confirm" class="lead-input" placeholder="Confirme sua senha" autocomplete="new-password" minlength="8" required>'
    +       '<div class="lead-error" data-lead-error hidden></div>'
    +       '<button type="submit" class="lead-submit">Criar minha conta grátis</button>'
    +       '<p class="lead-terms-microcopy">Ao continuar, você concorda com nossos '
    +         '<a href="https://www.zeonpaper.com.br/termos" target="_blank" rel="noopener">Termos</a> e '
    +         '<a href="https://www.zeonpaper.com.br/privacidade" target="_blank" rel="noopener">Política de Privacidade</a>.'
    +       '</p>'
    +       '<input type="hidden" name="utm_source"><input type="hidden" name="utm_medium">'
    +       '<input type="hidden" name="utm_campaign"><input type="hidden" name="utm_content">'
    +       '<input type="hidden" name="utm_term"><input type="hidden" name="utm_adgroup">'
    +       '<input type="hidden" name="matchtype"><input type="hidden" name="keyword">'
    +     '</form>'
    +     '<div class="lead-success" data-lead-success hidden>'
    +       '<div class="lead-success-icon"><i data-lucide="check-circle-2" width="44" height="44"></i></div>'
    +       '<h3 class="lead-success-title">Conta criada com sucesso!</h3>'
    +       '<p class="lead-success-text">Te enviamos um e-mail de boas-vindas. Em instantes você vai para a tela de login.</p>'
    +     '</div>'
    +   '</div>'
    + '</div>';

  /* =========================================================================
   * Modal CSS (injetado uma vez, apenas nas páginas SEO)
   * ======================================================================= */
  var MODAL_CSS = [
    '.lead-overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);z-index:2000;display:flex;align-items:center;justify-content:center;padding:1.5rem;opacity:0;visibility:hidden;transition:opacity .25s,visibility .25s}',
    '.lead-overlay.open{opacity:1;visibility:visible}',
    '.lead-plan-badge{display:inline-block;background:var(--primary-light);color:var(--primary);font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:.25rem .75rem;border-radius:999px;margin-bottom:1rem}',
    '.lead-modal{background:#fff;border-radius:1rem;padding:2.5rem;width:100%;max-width:440px;max-height:90vh;overflow-y:auto;position:relative;transform:translateY(16px) scale(.97);transition:transform .25s}',
    '.lead-overlay.open .lead-modal{transform:none}',
    '.lead-close{position:absolute;top:1rem;right:1rem;width:32px;height:32px;border:none;background:rgba(0,0,0,.05);border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:var(--text-gray)}',
    '.lead-close:hover{background:rgba(0,0,0,.1)}',
    '.lead-title{font-size:1.35rem;font-weight:800;color:var(--text-dark);margin-bottom:.35rem;letter-spacing:-.02em}',
    '.lead-subtitle{font-size:.88rem;color:var(--text-gray);margin-bottom:2rem;line-height:1.5}',
    '.lead-input{width:100%;padding:.85rem 1rem;border:1.5px solid rgba(0,0,0,.12);border-radius:.6rem;font-family:inherit;font-size:.95rem;color:var(--text-dark);background:#fff;outline:none;transition:border-color .2s;margin-bottom:1rem}',
    '.lead-input:focus{border-color:var(--primary)}.lead-input::placeholder{color:#94a3b8}.lead-input.invalid{border-color:#ef4444;background:#fef2f2}',
    '.lead-password-wrap{position:relative}.lead-password-wrap .lead-input{padding-right:3rem}',
    '.lead-password-toggle{position:absolute;top:calc(50% - .5rem);right:.5rem;transform:translateY(-50%);background:transparent;border:0;padding:.5rem;cursor:pointer;color:#94a3b8;display:flex;align-items:center;justify-content:center;border-radius:6px}',
    '.lead-password-toggle:hover{color:var(--primary)}',
    '.lead-submit{width:100%;padding:1rem;border:none;border-radius:.6rem;background:var(--gradient);color:#fff;font-family:inherit;font-size:1rem;font-weight:700;cursor:pointer;margin-top:.5rem;transition:opacity .2s}',
    '.lead-submit:disabled{opacity:.4;cursor:not-allowed}.lead-submit:not(:disabled):hover{opacity:.9}.lead-submit.is-loading{opacity:.7;cursor:wait}',
    '.lead-error{background:#fef2f2;color:#b91c1c;border:1px solid #fecaca;border-radius:8px;padding:.65rem .85rem;font-size:.85rem;line-height:1.35;margin-bottom:.85rem}',
    '.lead-error a{color:inherit;text-decoration:underline;font-weight:600}',
    '.pwd-rules{list-style:none;padding:0;margin:-.4rem 0 .85rem;display:grid;grid-template-columns:1fr 1fr;gap:.25rem .6rem}',
    '.pwd-rules li{display:flex;align-items:center;gap:.35rem;font-size:.78rem;color:#94a3b8;line-height:1.25;transition:color .15s}',
    '.pwd-rules li.met{color:#16a34a;font-weight:500}',
    '.lead-success{text-align:center;padding:1rem 0}',
    '.lead-success-icon{color:#16a34a;display:flex;justify-content:center;margin-bottom:.75rem}',
    '.lead-success-title{font-size:1.25rem;font-weight:700;color:var(--text-dark);margin:0 0 .5rem}',
    '.lead-success-text{color:#475569;font-size:.95rem;line-height:1.5;margin:0}',
    '.lead-terms-microcopy{font-size:.75rem;color:#64748b;text-align:center;margin:.75rem 0 0;line-height:1.45}',
    '.lead-terms-microcopy a{color:var(--primary);text-decoration:underline}',
    '.plan-cta-note{font-size:.78rem;color:var(--text-gray);text-align:center;margin-top:.5rem}'
  ].join('');

  /* =========================================================================
   * Modal + registro (usado nas páginas SEO; a home usa o JS inline próprio)
   * ======================================================================= */
  function initModal() {
    var overlay  = document.getElementById('plan-modal');
    if (!overlay) return;

    var badge     = document.getElementById('plan-modal-badge');
    var form      = document.getElementById('plan-modal-form');
    var closeBtn  = document.getElementById('plan-modal-close');
    var successEl = overlay.querySelector('[data-lead-success]');
    var currentPlan = '';

    // ── Constantes ──────────────────────────────────────────────────────
    var API_URL   = 'https://back.zeonpaper.com.br/api/register/submit';
    var WEBHOOK   = 'https://hook.us1.make.com/4w9ewge45cwym9rj6vcmrycu1ifrz1sr';
    var LOGIN_URL = 'https://app.zeonpaper.com.br/login';
    var EMAIL_RE  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var UTM_KEYS  = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','utm_adgroup','matchtype','keyword'];
    var PLAN_MAP  = { organiza:'ORGANIZA', cresce:'CRESCE', pro:'PRO' };

    // ── Cookies / UTM ────────────────────────────────────────────────────
    function writeCookie(k,v){var e=new Date(Date.now()+30*864e5).toUTCString();document.cookie=k+'='+encodeURIComponent(v)+'; expires='+e+'; path=/; SameSite=Lax';}
    function readCookie(k){var m=document.cookie.match('(?:^|; )'+k+'=([^;]*)');return m?decodeURIComponent(m[1]):'';}
    function getVisitorId(){var k='zp_visitor_id',v=readCookie(k);if(!v){v='zp_'+(window.crypto&&window.crypto.randomUUID?window.crypto.randomUUID():Date.now().toString(36)+'_'+Math.random().toString(36).slice(2));writeCookie(k,v);}return v;}
    (function(){var p=new URLSearchParams(window.location.search);UTM_KEYS.forEach(function(k){if(p.has(k))writeCookie(k,p.get(k));});if(!readCookie('zp_landing_page'))writeCookie('zp_landing_page',window.location.href.split('#')[0]);if(!readCookie('zp_referrer')&&document.referrer)writeCookie('zp_referrer',document.referrer);getVisitorId();})();
    function getUtmObj(){var o={};UTM_KEYS.forEach(function(k){var v=readCookie(k);if(v)o[k]=v;});return o;}
    function getAttr(){var o=getUtmObj();o.zp_visitor_id=getVisitorId();o.landing_page=readCookie('zp_landing_page')||window.location.href.split('#')[0];o.current_page=window.location.href.split('#')[0];var r=readCookie('zp_referrer')||document.referrer;if(r)o.referrer=r;o.segment='OUTRO';o.companySize='MEI';o.employeesCount='SOLO';o.companyAge='LT_1';return o;}

    // Hidrata campos UTM ocultos no form
    (function(){var utm=getUtmObj();UTM_KEYS.forEach(function(k){var el=form.querySelector('input[name="'+k+'"]');if(el&&utm[k])el.value=utm[k];});})();

    // ── Máscaras ─────────────────────────────────────────────────────────
    function maskCNPJ(v){var d=(v||'').replace(/\D/g,'').slice(0,14);if(d.length<=2)return d;if(d.length<=5)return d.replace(/^(\d{2})(\d+)/,'$1.$2');if(d.length<=8)return d.replace(/^(\d{2})(\d{3})(\d+)/,'$1.$2.$3');if(d.length<=12)return d.replace(/^(\d{2})(\d{3})(\d{3})(\d+)/,'$1.$2.$3/$4');return d.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/,'$1.$2.$3/$4-$5');}
    function isValidCNPJ(v){var c=(v||'').replace(/\D/g,'');if(c.length!==14||/^(\d)\1{13}$/.test(c))return false;var calc=function(s){var n=s.split('').map(Number),w=n.length===12?[5,4,3,2,9,8,7,6,5,4,3,2]:[6,5,4,3,2,9,8,7,6,5,4,3,2],sum=0;for(var i=0;i<n.length;i++)sum+=n[i]*w[i];var r=sum%11;return r<2?0:11-r;};var d1=calc(c.slice(0,12)),d2=calc(c.slice(0,12)+d1);return d1===parseInt(c.charAt(12),10)&&d2===parseInt(c.charAt(13),10);}
    function maskPhone(v){var d=(v||'').replace(/\D/g,'').slice(0,11);if(!d)return'';if(d.length<=2)return'('+d;if(d.length<=6)return d.replace(/^(\d{2})(\d+)/,'($1) $2');if(d.length<=10)return d.replace(/^(\d{2})(\d{4})(\d+)/,'($1) $2-$3');return d.replace(/^(\d{2})(\d{5})(\d+)/,'($1) $2-$3');}

    var cnpjInp = form.querySelector('input[name="cnpj"]');
    if(cnpjInp)cnpjInp.addEventListener('input',function(){var p=cnpjInp.selectionStart,b=cnpjInp.value;cnpjInp.value=maskCNPJ(cnpjInp.value);if(b.length<cnpjInp.value.length)p+=(cnpjInp.value.length-b.length);try{cnpjInp.setSelectionRange(p,p);}catch(_){}});
    var telInp = form.querySelector('input[name="telefone"]');
    if(telInp)telInp.addEventListener('input',function(){var p=telInp.selectionStart,b=telInp.value;telInp.value=maskPhone(telInp.value);if(b.length<telInp.value.length)p+=(telInp.value.length-b.length);try{telInp.setSelectionRange(p,p);}catch(_){}});

    // ── Senha ─────────────────────────────────────────────────────────────
    var pwdToggle = form.querySelector('.lead-password-toggle');
    if(pwdToggle)pwdToggle.addEventListener('click',function(){var inp=form.querySelector('input[name="senha"]');if(!inp)return;var s=inp.type==='text';inp.type=s?'password':'text';pwdToggle.setAttribute('aria-label',s?'Mostrar senha':'Ocultar senha');var ic=pwdToggle.querySelector('[data-lucide]');if(ic){ic.setAttribute('data-lucide',s?'eye':'eye-off');if(window.lucide)lucide.createIcons();}});

    function evalPwd(p){return{length:p.length>=8,upper:/[A-Z]/.test(p),lower:/[a-z]/.test(p),number:/\d/.test(p)};}
    function isStrong(p){var r=evalPwd(p);return r.length&&r.upper&&r.lower&&r.number;}
    var pwdInp=form.querySelector('input[name="senha"]'),rulesEl=form.querySelector('[data-pwd-rules]');
    if(pwdInp&&rulesEl)pwdInp.addEventListener('input',function(){var r=evalPwd(pwdInp.value);['length','upper','lower','number'].forEach(function(k){var li=rulesEl.querySelector('[data-rule="'+k+'"]');if(!li)return;li.classList.toggle('met',r[k]);var ic=li.querySelector('[data-lucide]');if(ic){ic.setAttribute('data-lucide',r[k]?'check-circle-2':'circle');if(window.lucide)lucide.createIcons();}});});

    // ── Validação + submit ────────────────────────────────────────────────
    function g(name){var el=form.querySelector('[name="'+name+'"]');return el?el.value:'';}
    function showErr(html){var b=form.querySelector('[data-lead-error]');if(b){b.innerHTML=html;b.hidden=false;}}
    function hideErr(){var b=form.querySelector('[data-lead-error]');if(b){b.hidden=true;b.innerHTML='';}}
    function setInv(name){var el=form.querySelector('[name="'+name+'"]');if(el){el.classList.add('invalid');el.focus();}}
    function clearInv(){form.querySelectorAll('.invalid').forEach(function(el){el.classList.remove('invalid');});}
    function setLoad(on){var btn=form.querySelector('[type="submit"]');if(!btn)return;btn.disabled=!!on;btn.classList.toggle('is-loading',!!on);if(on){btn._lbl=btn.textContent;btn.textContent='Criando sua conta...';}else if(btn._lbl){btn.textContent=btn._lbl;}}
    function normalPhone(v){var d=(v||'').replace(/\D/g,'');return d.length>=12&&d.startsWith('55')?d:'55'+d;}
    function apiPhone(v){var d=(v||'').replace(/\D/g,'');if(d.length>=12&&d.startsWith('55'))d=d.slice(2);return'+55-0'+d;}

    function validate(){
      clearInv();hideErr();
      var nome=g('nome').trim(),email=g('email').trim(),tel=g('telefone'),cnpj=g('cnpj'),senha=g('senha'),senha2=g('senha_confirm');
      if(nome.length<2){setInv('nome');showErr('Digite seu nome.');return null;}
      if(!EMAIL_RE.test(email)){setInv('email');showErr('Digite um e-mail válido.');return null;}
      if(tel.replace(/\D/g,'').length<10){setInv('telefone');showErr('Digite seu WhatsApp com DDD.');return null;}
      if(!isValidCNPJ(cnpj)){setInv('cnpj');showErr('CNPJ inválido. Confira os dígitos.');return null;}
      if(!isStrong(senha)){setInv('senha');showErr('Senha não atende aos requisitos.');return null;}
      if(senha!==senha2){setInv('senha_confirm');showErr('As senhas não conferem.');return null;}
      return {nome:nome,email:email,tel:tel,cnpj:cnpj,senha:senha};
    }

    form.addEventListener('submit',function(e){
      e.preventDefault();
      var d=validate();if(!d)return;
      var attr=getAttr(),vid=getVisitorId(),apiPlan=PLAN_MAP[(currentPlan||'').toLowerCase()]||'';
      var payload={username:d.email,password:d.senha,name:d.nome,phone:apiPhone(d.tel),country_id:'BR',taxNumber:d.cnpj.replace(/\D/g,''),segment:attr.segment,companySize:attr.companySize,employeesCount:attr.employeesCount,companyAge:attr.companyAge,media:Object.keys(attr).map(function(k){return encodeURIComponent(k)+'='+encodeURIComponent(attr[k]);}).join('&'),customFields:attr};
      if(apiPlan)payload.plan=apiPlan;
      setLoad(true);
      window.dataLayer=window.dataLayer||[];
      window.dataLayer.push({event:'lead_capturado',lead_nome:d.nome,lead_email:d.email,lead_plano:currentPlan||'',zp_visitor_id:vid});
      fetch(WEBHOOK,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({etapa:1,nome:d.nome,email:d.email,telefone:normalPhone(d.tel),cnpj:d.cnpj.replace(/\D/g,''),plano:currentPlan||'',zp_visitor_id:vid,attribution:attr}),keepalive:true}).catch(function(){});
      fetch(API_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
        .then(function(r){return r.json().catch(function(){return{};}).then(function(j){return{status:r.status,body:j};});})
        .then(function(r){
          var b=r.body||{},err=b.error||{},code=err.code||b.message||b.name||'',msg=err.customMessage||err.message||b.message||'';
          if(b.status==='ok'){
            var tid=(b.dataResponse&&b.dataResponse.tenant_id)||'';
            window.dataLayer.push({event:'conta_criada',lead_email:d.email,lead_plano:currentPlan||'',tenant_id:tid,zp_visitor_id:vid});
            form.hidden=true;if(successEl){successEl.hidden=false;if(window.lucide)lucide.createIcons();}
            setTimeout(function(){var qs=new URLSearchParams();qs.set('email',d.email);qs.set('from','lp');if(tid)qs.set('tenant_id',tid);qs.set('zp_visitor_id',vid);window.location.href=LOGIN_URL+'?'+qs.toString();},1200);
            return;
          }
          setLoad(false);
          if(r.status===401||code==='email_already_registered'||code==='user_already_exists'){showErr('Este e-mail já está cadastrado. <a href="'+LOGIN_URL+'" target="_blank">Faça login</a>.');setInv('email');}
          else if(code.indexOf('taxNumber')>=0||code.indexOf('cnpj')>=0){showErr('CNPJ inválido ou já em uso. Confira os dígitos.');setInv('cnpj');}
          else{showErr(msg||'Não foi possível criar sua conta agora. Tente novamente.');}
        })
        .catch(function(){setLoad(false);showErr('Falha de conexão. Confira sua internet e tente novamente.');});
    });

    // ── Abrir / fechar ───────────────────────────────────────────────────
    function openModal(plan){
      currentPlan=plan;
      if(badge)badge.textContent=plan?plan.charAt(0).toUpperCase()+plan.slice(1):'Plano';
      overlay.classList.add('open');document.body.style.overflow='hidden';
      form.hidden=false;if(successEl)successEl.hidden=true;
      hideErr();clearInv();setLoad(false);
      setTimeout(function(){var n=form.querySelector('[name="nome"]');if(n)n.focus();},50);
    }
    function closeModal(){
      overlay.classList.remove('open');document.body.style.overflow='';
      form.reset();form.hidden=false;if(successEl)successEl.hidden=true;
      hideErr();clearInv();setLoad(false);
    }

    // Delegação de evento: funciona para botões inseridos dinamicamente
    document.addEventListener('click',function(e){
      var el=e.target.closest('[data-lead-modal]');
      if(el&&overlay){e.preventDefault();openModal(el.dataset.plan||'');}
    });
    closeBtn.addEventListener('click',closeModal);
    overlay.addEventListener('click',function(e){if(e.target===overlay)closeModal();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&overlay.classList.contains('open'))closeModal();});
  }

  /* =========================================================================
   * Init — roda imediatamente se DOM já está pronto, senão aguarda
   * ======================================================================= */
  function init() {
    var homeGrid = document.querySelector('.pricing-grid');
    var seoRoot  = document.getElementById('zp-pricing-root');

    // Modo home: renderiza os cards + a caixa comparativa; o JS inline da home cuida do modal
    if (homeGrid) {
      injectDoctypeCss();
      homeGrid.insertAdjacentHTML('beforebegin', buildDoctypeToggle());
      homeGrid.innerHTML = buildHomeCards();
      initComparison(homeGrid);
      initDoctype();
    }

    // Modo SEO: renderiza cards simples + injeta modal CSS + HTML + JS
    if (seoRoot) {
      seoRoot.innerHTML = buildSeoCards();

      if (!document.getElementById('plan-modal')) {
        // CSS
        var style = document.createElement('style');
        style.textContent = MODAL_CSS;
        document.head.appendChild(style);

        // HTML
        var wrap = document.createElement('div');
        wrap.innerHTML = MODAL_HTML;
        document.body.appendChild(wrap.firstElementChild);

        // JS
        initModal();
      }
    }

    // Reinicializa ícones Lucide após inserção dinâmica
    if (window.lucide) lucide.createIcons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
