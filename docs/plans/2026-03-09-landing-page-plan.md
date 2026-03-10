# Gedê Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Construir a landing page estática do Gedê App em HTML/CSS/JS puro, fiel ao design do Figma, pronta para GitHub Pages.

**Architecture:** Uma única página `index.html` com 6 seções. CSS com variáveis para design tokens. JS mínimo para scroll suave e highlight de nav. Assets do Figma salvos localmente em `assets/`.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid), Vanilla JS, GitHub Pages

**CTA WhatsApp:** `https://wa.me/5531963841551`

---

### Task 1: Setup inicial e assets

**Files:**
- Create: `index.html`
- Create: `style.css`
- Create: `main.js`
- Create: `assets/` (pasta)

**Step 1: Baixar assets do Figma**

As URLs expiram em 7 dias a partir de 2026-03-09. Salvar com os nomes corretos:

```bash
cd /home/guilherme/workspace/PRIVATE/gede-landingpage

# Logo
curl -L "https://www.figma.com/api/mcp/asset/d12f3c42-f6c6-4415-a0a5-f2b33c035ef0" -o assets/logo.png

# Mockup - tela do cliente (barbershop booking)
curl -L "https://www.figma.com/api/mcp/asset/6db4297c-b10a-4f04-b1a1-0f4b42b4a3dd" -o assets/mockup-cliente.png

# Mockup - tela admin
curl -L "https://www.figma.com/api/mcp/asset/99bcc4c0-d4df-454a-9a2e-662f778f333e" -o assets/mockup-admin.png

# Frame do celular (body do mockup)
curl -L "https://www.figma.com/api/mcp/asset/730caff4-f8a1-4132-ad29-b5b5d66d9120" -o assets/phone-body.png

# Ícones da seção "Sua Marca"
curl -L "https://www.figma.com/api/mcp/asset/5a2e31e8-286e-4787-8c3c-4b07d89c3491" -o assets/icon-nome.png
curl -L "https://www.figma.com/api/mcp/asset/2dbaa7f1-549c-4c49-9f3b-43b8701dfdd1" -o assets/icon-dominio.png
curl -L "https://www.figma.com/api/mcp/asset/264c0a5f-db9c-4194-bf31-79141a297f5a" -o assets/icon-fluxo.png
```

**Step 2: Criar index.html boilerplate**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gedê App — Seu cliente agenda. Você só atende.</title>
  <meta name="description" content="Transforme seu agendamento em um mini-site profissional com nome, domínio próprio e visual personalizado." />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- seções aqui -->
  <script src="main.js"></script>
</body>
</html>
```

**Step 3: Criar style.css com design tokens**

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --green:       #34a740;
  --green-dark:  #17381a;
  --green-dark2: #18511e;
  --green-light: #e7f4e9;
  --green-pill:  rgba(52, 167, 64, 0.15);
  --green-icon:  rgba(52, 167, 64, 0.1);
  --bg:          #f5f5f5;
  --white:       #ffffff;
  --text:        #111827;
  --text-grey:   #3a3b3c;
  --text-light:  #4a5565;
  --border:      #d8d8d8;
  --red:         #b44444;

  --font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --radius-card: 40px;
  --radius-btn:  100px;
  --max-w: 1380px;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
}
```

**Step 4: Criar main.js skeleton**

```js
// Smooth scroll para links de navegação internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' })
  })
})
```

**Step 5: Verificar estrutura**

Abrir `index.html` no browser — deve carregar sem erros no console.

**Step 6: Commit**

```bash
cd /home/guilherme/workspace/PRIVATE/gede-landingpage
git add .
git commit -m "feat: project setup, assets, and base styles"
```

---

### Task 2: Navbar + Hero

**Files:**
- Modify: `index.html` — adicionar `<nav>` e `<section id="hero">`
- Modify: `style.css` — estilos de nav e hero

**Step 1: Adicionar HTML do nav e hero dentro de `<body>`**

```html
<!-- NAVBAR -->
<nav class="navbar">
  <div class="navbar__inner">
    <a href="#" class="navbar__logo">
      <img src="assets/logo.png" alt="Gedê" height="36" />
    </a>
    <ul class="navbar__links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#marca">Funcionalidades</a></li>
      <li><a href="#porque">Como funciona</a></li>
      <li><a href="#planos">Preços</a></li>
      <li><a href="#passos">Recursos</a></li>
      <li><a href="#">Sobre nós</a></li>
    </ul>
    <a href="https://wa.me/5531963841551" target="_blank" rel="noopener" class="btn btn--green btn--sm">Log In</a>
    <button class="navbar__hamburger" aria-label="Menu">&#9776;</button>
  </div>
</nav>

<!-- HERO -->
<section id="hero" class="hero">
  <div class="hero__content">
    <div class="hero__left">
      <h1 class="hero__headline">
        <span class="hero__headline--dark">Seu cliente agenda.</span>
        <span class="hero__headline--green">Você só atende.</span>
      </h1>
      <p class="hero__subtitle">
        Transforme seu agendamento em um mini-site profissional, com nome, domínio próprio e visual personalizado, algo que nenhum concorrente oferece.
      </p>
      <div class="hero__cta-group">
        <a href="https://wa.me/5531963841551" target="_blank" rel="noopener" class="btn btn--green">Comece gratuitamente</a>
        <a href="#passos" class="btn btn--outline">▶ veja como funciona</a>
      </div>
      <div class="hero__tagline">
        <span>🍉</span>
        <span>Soluções de agendamento instantâneo — <em>do seu jeito</em>.</span>
      </div>
    </div>
    <div class="hero__mockups">
      <div class="hero__mockup">
        <img src="assets/phone-body.png" alt="" class="hero__phone" />
        <img src="assets/mockup-cliente.png" alt="App cliente" class="hero__screen" />
      </div>
      <div class="hero__mockup">
        <img src="assets/phone-body.png" alt="" class="hero__phone" />
        <img src="assets/mockup-admin.png" alt="App admin" class="hero__screen" />
      </div>
    </div>
  </div>
</section>
```

**Step 2: Adicionar CSS do navbar e hero em `style.css`**

```css
/* ── NAVBAR ── */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--white);
  border-bottom: 1px solid var(--border);
}

.navbar__inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 14px 40px;
  display: flex;
  align-items: center;
  gap: 32px;
}

.navbar__links {
  display: flex;
  list-style: none;
  gap: 28px;
  flex: 1;
  justify-content: center;
}

.navbar__links a {
  text-decoration: none;
  color: var(--text);
  font-size: 16px;
  transition: color 0.2s;
}

.navbar__links a:hover { color: var(--green); }

.navbar__hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-left: auto;
}

/* ── BUTTONS ── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: var(--radius-btn);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s, transform 0.15s;
  white-space: nowrap;
}

.btn:hover { opacity: 0.88; transform: translateY(-1px); }

.btn--green { background: var(--green); color: #fff; }
.btn--outline { background: transparent; border: 1.5px solid var(--green-dark); color: var(--green-dark); font-weight: 700; }
.btn--sm { padding: 8px 20px; font-size: 15px; }

/* ── HERO ── */
.hero {
  background: linear-gradient(135deg, rgba(52,167,64,0.1) 0%, #fff 50%);
  border-radius: var(--radius-card);
  margin: 30px;
  padding: 80px 60px 0;
  overflow: hidden;
  min-height: 720px;
}

.hero__content {
  max-width: var(--max-w);
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 40px;
}

.hero__left { flex: 0 0 520px; padding-bottom: 60px; }

.hero__headline {
  font-size: 60px;
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero__headline--dark { display: block; color: var(--green-dark); font-weight: 500; }
.hero__headline--green { display: block; color: var(--green); font-weight: 600; }

.hero__subtitle {
  font-size: 18px;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 460px;
}

.hero__cta-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.hero__tagline {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg);
  border-radius: 29px;
  padding: 10px 20px;
  font-size: 14px;
  width: fit-content;
}

.hero__tagline em { font-style: italic; }

.hero__mockups {
  flex: 1;
  display: flex;
  gap: 24px;
  align-items: flex-end;
  padding-top: 20px;
}

.hero__mockup {
  position: relative;
  width: 260px;
  flex-shrink: 0;
}

.hero__phone {
  width: 100%;
  display: block;
}

.hero__screen {
  position: absolute;
  top: 6%;
  left: 6%;
  width: 88%;
  border-radius: 32px;
}
```

**Step 3: Verificar no browser**

Abrir `index.html` — navbar fixa no topo, hero com headline verde/escura, dois mockups à direita.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: navbar and hero section"
```

---

### Task 3: Seção "Sua Marca"

**Files:**
- Modify: `index.html` — adicionar `<section id="marca">`
- Modify: `style.css` — estilos da seção

**Step 1: HTML após `</section>` do hero**

```html
<!-- SEÇÃO 2: SUA MARCA -->
<section id="marca" class="section section--marca">
  <div class="section__inner">
    <div class="marca__header">
      <div class="marca__header-left">
        <h2 class="heading-lg">
          Seu agendamento com a <strong class="text-green">sua marca</strong>
          <span class="text-red"> — não a nossa.</span>
        </h2>
      </div>
      <p class="marca__header-right text-grey">
        Enquanto outras plataformas exibem o nome delas no link, no Gedê App você tem:
      </p>
    </div>

    <div class="cards">
      <div class="card">
        <img src="assets/icon-nome.png" alt="" class="card__icon" />
        <h3 class="card__title">Seu Nome</h3>
        <p class="card__desc">Identificação dentro do App, você terá o nome da sua Loja como Título</p>
      </div>
      <div class="card card--gradient">
        <img src="assets/icon-dominio.png" alt="" class="card__icon" />
        <h3 class="card__title">Domínio personalizado</h3>
        <p class="card__desc">Seu cliente nunca sente que está entrando em um sistema genérico.</p>
      </div>
      <div class="card card--gradient">
        <img src="assets/icon-fluxo.png" alt="" class="card__icon" />
        <h3 class="card__title">Seu fluxo personalizado</h3>
        <p class="card__desc">Seu agendamento vira "um site oficial", não um formulário solto.</p>
      </div>
    </div>
  </div>
</section>
```

**Step 2: CSS da seção**

```css
/* ── SEÇÕES BASE ── */
.section {
  margin: 8px 27px;
  border-radius: var(--radius-card);
  overflow: hidden;
  border: 1px solid var(--border);
}

.section__inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 60px 60px 0;
}

/* ── TIPOGRAFIA ── */
.heading-lg {
  font-size: 52px;
  font-weight: 500;
  line-height: 1.1;
  color: var(--green-dark);
}

.text-green { color: var(--green); font-weight: 700; }
.text-red   { color: var(--red); font-size: 28px; font-weight: 400; }
.text-grey  { color: var(--text-grey); }

/* ── MARCA ── */
.section--marca {
  background: linear-gradient(135deg, #fff 50%, var(--green-light) 100%);
  padding-bottom: 0;
}

.marca__header {
  display: flex;
  align-items: flex-start;
  gap: 60px;
  margin-bottom: 48px;
}

.marca__header-left { flex: 1; }
.marca__header-right { flex: 0 0 400px; font-size: 18px; line-height: 1.6; padding-top: 16px; }

/* ── CARDS ── */
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background: var(--bg);
  border-radius: var(--radius-card) var(--radius-card) 0 0;
  padding: 30px 30px 0;
  margin: 0 -60px;
}

.card {
  background: var(--white);
  border-radius: var(--radius-card);
  padding: 40px 40px 36px;
  min-height: 256px;
}

.card--gradient {
  background: linear-gradient(120deg, #fff 60%, var(--green-light) 100%);
}

.card__icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-bottom: 48px;
}

.card__title {
  font-size: 20px;
  font-weight: 600;
  color: var(--green-dark2);
  margin-bottom: 12px;
}

.card__desc {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-grey);
  max-width: 260px;
}
```

**Step 3: Verificar no browser**

Seção com fundo gradiente, headline 2 cores, 3 cards sobre fundo cinza.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: sua marca section"
```

---

### Task 4: Seção "Porque usar o Gedê App?"

**Files:**
- Modify: `index.html` — adicionar `<section id="porque">`
- Modify: `style.css`

**Step 1: HTML**

```html
<!-- SEÇÃO 3: PORQUE -->
<section id="porque" class="section section--white">
  <div class="section__inner section__inner--porque">
    <div class="porque__header">
      <h2 class="heading-lg">
        <em class="text-green">Porque usar o</em> Gedê App?
      </h2>
      <p class="text-grey porque__subtitle">
        Selecionamos as principais vantagens do Gedê App para você entender como ele vai transformar sua rotina de agendamentos e simplificar o dia a dia do seu negócio.
      </p>
    </div>

    <div class="benefit">
      <div class="benefit__icon-wrap">
        <img src="assets/icon-check.svg" alt="" class="benefit__icon" />
      </div>
      <div class="benefit__body">
        <h3 class="benefit__title">Mais clientes entrando — sem você precisar responder ninguém</h3>
        <p class="benefit__sub">Destaque: profissionais que usam o Gedê App relatam</p>
        <span class="benefit__stat">até 30% mais agendamentos.</span>
      </div>
    </div>

    <div class="benefit">
      <div class="benefit__icon-wrap">
        <img src="assets/icon-money.svg" alt="" class="benefit__icon" />
      </div>
      <div class="benefit__body">
        <h3 class="benefit__title">Um aumento real no seu faturamento</h3>
        <p class="benefit__sub">Atender apenas 3 clientes a mais por semana — com o ticket médio de R$ 60,00 — já vira</p>
        <span class="benefit__stat">+R$ 720 no mês.</span>
      </div>
    </div>

    <div class="benefit">
      <div class="benefit__icon-wrap">
        <img src="assets/icon-clock.svg" alt="" class="benefit__icon" />
      </div>
      <div class="benefit__body">
        <h3 class="benefit__title">Sua agenda fica mais estável e previsível</h3>
        <p class="benefit__sub">Seu mês fica mais organizado, e sem perdas de clientes ou seja mais tempo pra dar foco no que realmente importa</p>
        <span class="benefit__stat">Economia média de 60 horas por mês.</span>
      </div>
    </div>
  </div>
</section>
```

> Nota: os ícones `icon-check.svg`, `icon-money.svg`, `icon-clock.svg` podem ser substituídos por ícones inline SVG simples ou baixados do Figma (nodes 142:1504, 144:1550, 145:1582).

**Step 2: CSS**

```css
/* ── PORQUE ── */
.section--white { background: var(--white); }

.section__inner--porque { padding-bottom: 60px; }

.porque__header {
  display: flex;
  align-items: flex-start;
  gap: 60px;
  margin-bottom: 40px;
}

.porque__subtitle { flex: 0 0 500px; font-size: 17px; line-height: 1.7; padding-top: 12px; }

.benefit {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  padding: 40px 50px;
  margin-bottom: 8px;
}

.benefit__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--green-icon);
  flex-shrink: 0;
}

.benefit__icon { width: 20px; height: 20px; }

.benefit__body { flex: 1; }

.benefit__title {
  font-size: 28px;
  font-weight: 600;
  color: var(--green-dark);
  line-height: 1.3;
  margin-bottom: 10px;
}

.benefit__sub {
  font-size: 20px;
  color: var(--text-grey);
  margin-bottom: 12px;
}

.benefit__stat {
  display: inline-block;
  background: var(--green-pill);
  color: var(--green);
  font-size: 26px;
  font-weight: 600;
  padding: 4px 16px;
  border-radius: 100px;
}
```

**Step 3: Verificar no browser**

3 linhas de benefício com ícone circular verde, stat em pill verde.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: porque usar section"
```

---

### Task 5: Seção Tagline "Não é só uma agenda"

**Files:**
- Modify: `index.html`
- Modify: `style.css`

**Step 1: HTML**

```html
<!-- SEÇÃO 5: TAGLINE -->
<section class="section section--tagline">
  <div class="tagline__inner">
    <span class="tagline__emoji tagline__emoji--left">💸</span>
    <div class="tagline__text">
      <p class="tagline__line1">Gedê App não é só uma agenda.</p>
      <p class="tagline__line2">
        É uma forma de você <em>ganhar mais</em>, <em>atender melhor</em>
        <br />e viver com <em>mais tempo livre</em>.
      </p>
    </div>
    <span class="tagline__emoji tagline__emoji--right">✌️</span>
  </div>
</section>
```

**Step 2: CSS**

```css
/* ── TAGLINE ── */
.section--tagline {
  border: none;
  background: transparent;
  margin: 0 27px;
}

.tagline__inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 60px;
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;
}

.tagline__text { flex: 1; text-align: center; }

.tagline__line1 {
  font-size: 52px;
  font-weight: 500;
  color: var(--green-dark);
  margin-bottom: 8px;
}

.tagline__line2 {
  font-size: 38px;
  font-weight: 500;
  color: var(--green-dark);
  line-height: 1.4;
}

.tagline__line2 em {
  font-style: italic;
  color: var(--green);
}

.tagline__emoji {
  font-size: 80px;
  line-height: 1;
  flex-shrink: 0;
}
```

**Step 3: Verificar no browser**

Frase grande centralizada com emojis nas laterais, termos em verde itálico.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: tagline section"
```

---

### Task 6: Seção "Apenas 4 Passos"

**Files:**
- Modify: `index.html`
- Modify: `style.css`

**Step 1: HTML**

```html
<!-- SEÇÃO 4: 4 PASSOS -->
<section id="passos" class="section section--passos">
  <div class="section__inner section__inner--passos">
    <div class="passos__header">
      <h2 class="heading-lg">Apenas <em class="text-green">4 Passos</em></h2>
      <p class="text-grey" style="margin-top: 8px;">Simples, rápido e sem confusão</p>
    </div>

    <div class="passos__cards">
      <div class="passo-card">
        <div class="passo-card__num">01</div>
        <h3 class="passo-card__title">Cliente escolhe o serviço</h3>
        <p class="passo-card__desc">Vê todos os serviços disponíveis e escolhe o que precisa.</p>
      </div>
      <div class="passo-card">
        <div class="passo-card__num">02</div>
        <h3 class="passo-card__title">Seleciona o dia</h3>
        <p class="passo-card__desc">Calendário mostra apenas os dias que você trabalha.</p>
      </div>
      <div class="passo-card">
        <div class="passo-card__num">03</div>
        <h3 class="passo-card__title">Escolhe o horário</h3>
        <p class="passo-card__desc">Só aparece os horários livres na agenda.</p>
      </div>
      <div class="passo-card">
        <div class="passo-card__num">04</div>
        <h3 class="passo-card__title">Confirma horários e informações</h3>
        <p class="passo-card__desc">Pronto! Ele recebe confirmação e você é notificado.</p>
      </div>
    </div>
  </div>

  <div class="passos__banner">
    <p class="passos__banner-text">
      Em menos de <em>1 minuto</em> seu cliente <em>está marcado</em>
    </p>
    <span class="passos__banner-emoji">💰</span>
  </div>
</section>
```

**Step 2: CSS**

```css
/* ── PASSOS ── */
.section--passos {
  background: linear-gradient(135deg, #fff 50%, var(--green-light) 100%);
}

.section__inner--passos { padding-bottom: 0; }

.passos__header { text-align: center; margin-bottom: 48px; }

.passos__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 0;
}

.passo-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  padding: 32px;
  min-height: 280px;
}

.passo-card__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--green-icon);
  border-radius: 16px;
  width: 56px;
  height: 56px;
  font-size: 22px;
  font-weight: 700;
  color: var(--green);
  margin-bottom: 32px;
}

.passo-card__title {
  font-size: 17px;
  font-weight: 600;
  color: var(--green-dark);
  line-height: 1.4;
  margin-bottom: 12px;
}

.passo-card__desc {
  font-size: 16px;
  color: var(--text-grey);
  line-height: 1.5;
}

.passos__banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background: linear-gradient(160deg, #fff 50%, var(--green-light) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  margin: 16px 0 0;
  padding: 32px 60px;
}

.passos__banner-text {
  font-size: 36px;
  font-weight: 500;
  color: var(--green-dark);
}

.passos__banner-text em {
  font-style: italic;
  color: var(--green);
}

.passos__banner-emoji { font-size: 60px; transform: rotate(15deg); }
```

**Step 3: Verificar no browser**

4 cards numerados em grid + faixa "Em menos de 1 minuto".

**Step 4: Commit**

```bash
git add .
git commit -m "feat: 4 passos section"
```

---

### Task 7: Seção "Planos & Consultas"

**Files:**
- Modify: `index.html`
- Modify: `style.css`

**Step 1: HTML**

```html
<!-- SEÇÃO 6: PLANOS -->
<section id="planos" class="section section--planos">
  <div class="section__inner section__inner--planos">
    <h2 class="heading-lg text-center">
      <em class="text-green">Planos</em> & Consultas
    </h2>
    <p class="text-grey text-center planos__subtitle">
      Um único plano com tudo incluído. Sem taxas escondidas.
    </p>

    <div class="plan-card">
      <div class="plan-card__left">
        <h3 class="plan-card__name">Plano Business</h3>
        <p class="plan-card__desc">Controle total sobre todas as ferramentas e atualizações</p>
        <div class="plan-card__price">
          <span class="plan-card__amount">R$ 59</span>
          <span class="plan-card__period">/mês</span>
        </div>
        <div class="plan-card__badge">30 dias grátis para testar</div>
      </div>

      <div class="plan-card__right">
        <ul class="plan-features">
          <li class="plan-feature"><span class="plan-feature__check">✓</span> Agenda automática</li>
          <li class="plan-feature"><span class="plan-feature__check">✓</span> Link exclusivo</li>
          <li class="plan-feature"><span class="plan-feature__check">✓</span> Clientes ilimitados</li>
          <li class="plan-feature"><span class="plan-feature__check">✓</span> Serviços ilimitados</li>
          <li class="plan-feature"><span class="plan-feature__check">✓</span> Confirmação por WhatsApp</li>
          <li class="plan-feature"><span class="plan-feature__check">✓</span> Painel admin completo</li>
          <li class="plan-feature"><span class="plan-feature__check">✓</span> Suporte pelo Gedê</li>
        </ul>
      </div>
    </div>

    <div class="planos__cta">
      <a href="https://wa.me/5531963841551" target="_blank" rel="noopener" class="btn btn--green">Começar agora</a>
    </div>
    <p class="planos__footer text-grey text-center">Aceita PIX, cartão de crédito e boleto.</p>
  </div>
</section>
```

**Step 2: CSS**

```css
/* ── PLANOS ── */
.section--planos { background: var(--white); }

.section__inner--planos { padding: 60px; }

.text-center { text-align: center; }

.planos__subtitle {
  font-size: 20px;
  margin: 16px auto 48px;
}

.plan-card {
  max-width: 900px;
  margin: 0 auto;
  border: 2px solid var(--green);
  border-radius: var(--radius-card);
  padding: 48px;
  display: flex;
  gap: 60px;
  align-items: flex-start;
}

.plan-card__name {
  font-size: 28px;
  font-weight: 600;
  color: var(--green-dark);
  margin-bottom: 8px;
}

.plan-card__desc {
  font-size: 17px;
  color: var(--text-grey);
  margin-bottom: 24px;
}

.plan-card__price {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 16px;
}

.plan-card__amount {
  font-size: 56px;
  font-weight: 700;
  color: var(--green);
  line-height: 1;
}

.plan-card__period {
  font-size: 16px;
  color: var(--green);
}

.plan-card__badge {
  background: var(--green-icon);
  color: var(--green);
  font-size: 15px;
  font-weight: 500;
  padding: 8px 20px;
  border-radius: 29px;
  width: fit-content;
}

.plan-card__right { flex: 1; }

.plan-features {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 24px;
  padding-top: 16px;
}

.plan-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: #364153;
}

.plan-feature__check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: var(--green);
  color: #fff;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

.planos__cta { text-align: center; margin-top: 40px; }

.planos__footer { font-size: 15px; margin-top: 16px; }
```

**Step 3: Verificar no browser**

Card com borda verde, preço grande, 7 features em 2 colunas, botão CTA centrado.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: planos section"
```

---

### Task 8: Responsividade mobile

**Files:**
- Modify: `style.css` — media queries
- Modify: `main.js` — hamburger menu

**Step 1: Adicionar media queries no final do `style.css`**

```css
/* ── RESPONSIVIDADE ── */
@media (max-width: 900px) {
  .hero { padding: 40px 24px 0; margin: 16px; }
  .hero__content { flex-direction: column; }
  .hero__left { flex: none; }
  .hero__mockups { display: none; } /* esconde mockups no mobile */
  .hero__headline { font-size: 38px; }

  .section { margin: 8px 12px; }
  .section__inner { padding: 40px 24px 0; }

  .marca__header { flex-direction: column; gap: 16px; }
  .marca__header-right { flex: none; }
  .cards { grid-template-columns: 1fr; margin: 0 -24px; padding: 24px 24px 0; }

  .porque__header { flex-direction: column; gap: 16px; }
  .porque__subtitle { flex: none; }
  .benefit { padding: 28px 24px; }
  .benefit__title { font-size: 20px; }

  .tagline__line1 { font-size: 30px; }
  .tagline__line2 { font-size: 24px; }
  .tagline__emoji { font-size: 48px; }

  .passos__cards { grid-template-columns: 1fr 1fr; }

  .plan-card { flex-direction: column; gap: 32px; padding: 32px 24px; }
  .plan-features { grid-template-columns: 1fr; }

  .navbar__links { display: none; }
  .navbar__hamburger { display: block; }
  .navbar__inner { flex-wrap: wrap; }
  .navbar__links.open {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;
    padding: 16px 0;
  }

  .heading-lg { font-size: 36px; }
}

@media (max-width: 480px) {
  .passos__cards { grid-template-columns: 1fr; }
  .hero__cta-group { flex-direction: column; }
  .passos__banner-text { font-size: 22px; }
}
```

**Step 2: Adicionar lógica do hamburger em `main.js`**

```js
// Hamburger menu
const hamburger = document.querySelector('.navbar__hamburger')
const navLinks  = document.querySelector('.navbar__links')

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open')
})

// Fechar menu ao clicar em link
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'))
})
```

**Step 3: Verificar no browser**

Redimensionar a janela para < 900px. Navbar deve mostrar hamburger, mockups desaparecem, cards empilham.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: mobile responsiveness"
```

---

### Task 9: GitHub Pages setup

**Files:**
- Create: `README.md`
- Create: `.gitignore`

**Step 1: Criar `.gitignore`**

```
.DS_Store
Thumbs.db
*.log
```

**Step 2: Criar `README.md`**

```markdown
# Gedê App — Landing Page

Landing page estática hospedada no GitHub Pages.

## Deploy

1. Push para branch `main`
2. GitHub Pages serve automaticamente

## Domínio próprio (futuro)

Criar arquivo `CNAME` na raiz com o domínio:
```
gede.app
```

## Assets

Assets do Figma salvos em `assets/`. Se precisar atualizar, buscar no Figma file `5XHZosj0bV0kj0f4DCzYPx`, node `111:954`.
```

**Step 3: Habilitar GitHub Pages no repositório**

No GitHub:
1. Criar repositório público `gede-landingpage`
2. Settings → Pages → Source: `Deploy from branch` → `main` → `/ (root)`
3. Adicionar remote e push:

```bash
git remote add origin https://github.com/<user>/gede-landingpage.git
git push -u origin main
```

**Step 4: Commit e push**

```bash
git add .
git commit -m "docs: readme and gitignore for github pages"
git push
```

---

### Task 10: Polimento visual final

**Files:**
- Modify: `style.css` — ajustes de espaçamento, hover states, transições

**Step 1: Adicionar hover nos cards e transições suaves**

```css
.card { transition: transform 0.2s, box-shadow 0.2s; }
.card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(52,167,64,0.12); }

.passo-card { transition: transform 0.2s; }
.passo-card:hover { transform: translateY(-4px); }

/* Fade-in suave no scroll (opcional, via JS) */
.fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.5s, transform 0.5s; }
.fade-in.visible { opacity: 1; transform: translateY(0); }
```

**Step 2: Adicionar observer de scroll em `main.js` (opcional)**

```js
// Fade-in ao scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
}, { threshold: 0.1 })

document.querySelectorAll('.card, .benefit, .passo-card').forEach(el => {
  el.classList.add('fade-in')
  observer.observe(el)
})
```

**Step 3: Verificar página completa**

Percorrer a página inteira no browser, checar:
- [ ] Todas as seções renderizam corretamente
- [ ] CTAs abrem WhatsApp
- [ ] Scroll suave funciona
- [ ] Mobile < 900px: hamburger funciona, layout empilha
- [ ] Mobile < 480px: sem overflow horizontal

**Step 4: Commit final**

```bash
git add .
git commit -m "feat: polish - hover states, fade-in animations"
```
