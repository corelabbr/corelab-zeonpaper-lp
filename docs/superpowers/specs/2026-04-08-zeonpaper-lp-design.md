# Zeonpaper LP — Design Spec

**Data:** 2026-04-08  
**Status:** Aprovado  
**Domínio:** lp.zeonpaper.com.br

---

## 1. Objetivo

Construir a landing page completa do Zeonpaper com suporte a variantes A/B/C via parâmetro de URL (`?v=1`, `?v=2`, etc.), sem dependências externas, com deploy direto via GitHub Pages ou Netlify.

---

## 2. Stack

- **HTML5** — estrutura semântica, todas as 10 seções
- **CSS3** — inline em `<style>` ou arquivo separado `css/style.css`, mobile-first
- **JS Vanilla** — sem frameworks; dois arquivos: `variants.js` e `main.js`
- **Sem dependências externas** — nenhum npm, nenhum build step

---

## 3. Estrutura de arquivos

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── variants.js     ← configuração de cada variante
│   └── main.js         ← lê ?v= e aplica overrides no DOM
└── assets/
    └── mockup.svg      ← ilustração do dashboard (placeholder)
```

---

## 4. Sistema de variantes

### Como funciona

1. `main.js` lê `window.location.search` na carga da página
2. Extrai o valor de `?v=` (padrão: `1`)
3. Busca o objeto correspondente em `variants.js`
4. Aplica overrides no DOM via `data-variant-key` nos elementos HTML

### Estrutura do `variants.js`

```js
const variants = {
  v1: {}, // base — sem overrides, usa conteúdo padrão do HTML
  v2: {
    hero_headline: "Texto alternativo para headline",
    hero_cta_primary: "Texto alternativo do CTA",
  },
  v3: {
    hero_tagline: "Outra abordagem de tagline",
    hero_cta_primary: "Começar de graça",
    primary_color: "#0057A8",
  },
};
```

### Campos sobrescrevíveis (data-variant-key)

| Chave | Elemento |
|---|---|
| `hero_tagline` | Tagline acima da headline |
| `hero_headline` | Headline principal |
| `hero_subheadline` | Subheadline |
| `hero_body` | Mensagem de apoio |
| `hero_cta_primary` | Texto do CTA principal |
| `hero_cta_secondary` | Texto do CTA secundário |
| `hero_social_proof` | Linha de social proof |
| `pricing_highlight` | Plano em destaque (mensal/trimestral/anual) |
| `primary_color` | Cor primária via CSS variable `--color-primary` |

---

## 5. Seções da LP (ordem fixa)

1. **Hero** — tagline, headline, subheadline, mensagem de apoio, 2 CTAs, social proof, mockup
2. **Problema** — "Sua planilha ainda aguenta?" — 4 cards de dor
3. **Posicionamento** — espectro visual Planilha ←→ Zeonpaper ←→ ERP
4. **Como funciona** — 3 passos simples com ícone + descrição
5. **Benefícios** — grid 6 cards
6. **Para quem é** — duas colunas: Ideal para / Não indicado para
7. **Depoimentos** — 3 cards com personas fictícias
8. **Precificação** — 3 planos (Mensal, Trimestral★, Anual)
9. **FAQ** — 6 perguntas em accordion
10. **CTA Final** — headline + botão + linha de reforço

---

## 6. Design

### Paleta
- **Cor primária:** `#16A34A` (verde — confiança, organização), sobrescrevível por variante
- **Fundo principal:** `#FFFFFF`
- **Fundo alternado:** `#F9FAFB`
- **Texto:** `#111827` (títulos), `#4B5563` (corpo)
- **Bordas/divisores:** `#E5E7EB`

### Tipografia
- **Família:** `Inter`, fallback `system-ui, sans-serif` (via Google Fonts CDN)
- **Headline hero:** 2.5rem–3.5rem, bold
- **Subheadline:** 1.125rem–1.25rem, regular
- **Corpo:** 1rem

### Responsividade
- Mobile-first; breakpoints: `640px` (sm), `1024px` (lg)
- Hero: coluna única no mobile, 2 colunas no desktop (texto + mockup)
- Grid de benefícios: 1 col → 2 col → 3 col
- Cards de preços: 1 col → 3 col

### Estilo visual
- Flat, clean, sem gradientes
- Ícones outline (SVG inline ou Unicode como placeholder)
- Espaçamento generoso (padding de seções: 80px desktop, 48px mobile)
- Sombra sutil nos cards: `box-shadow: 0 1px 3px rgba(0,0,0,0.1)`

---

## 7. Copy (textos fixos — v1 base)

O copy segue fielmente o brief aprovado. Dados fictícios usados em:
- Social proof: "Mais de 1.200 pequenos negócios já saíram da planilha"
- Depoimentos: 3 personas fictícias com nome, cargo e texto narrativo
- Preços: R$ 49,90 / R$ 39,90 / R$ 29,90 conforme tabela do brief

---

## 8. Não está no escopo

- Backend, banco de dados, formulários funcionais
- Analytics ou integração com ferramentas de A/B testing externas
- Animações complexas (apenas transições CSS simples)
- Autenticação ou área logada

---

## 9. Critérios de aceite

- [ ] Todas as 10 seções renderizam corretamente no mobile e desktop
- [ ] `?v=1` (ou sem parâmetro) carrega a versão base sem erros
- [ ] `?v=2` sobrescreve os campos configurados em `variants.js`
- [ ] Nenhuma dependência externa além de Google Fonts
- [ ] Deploy funciona via GitHub Pages sem configuração adicional
