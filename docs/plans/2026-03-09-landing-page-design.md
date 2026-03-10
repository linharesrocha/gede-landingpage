# Gedê App — Landing Page Design

## Contexto

Landing page estática para o Gedê App, sistema de agendamento para barbearias. Separada do app principal (Next.js), hospedada no GitHub Pages com domínio próprio no futuro.

## Decisões de Stack

- **HTML/CSS/JS puro** — sem frameworks, sem build step, sem dependências
- **GitHub Pages** — hospedagem gratuita, suporta domínio próprio
- **JS mínimo** — apenas scroll suave e highlight de nav

Justificativa: a LP é 100% estática, tem um único CTA (WhatsApp) e conteúdo que raramente muda. Frameworks adicionariam complexidade sem benefício.

## Arquitetura de Arquivos

```
gede-landingpage/
├── index.html
├── style.css
├── main.js
└── assets/
    ├── logo.png
    ├── mockup-barber.png
    └── mockup-admin.png
```

## Design Tokens

Extraídos do Figma (node 111:954):

```css
--green:        #34a740;
--green-dark:   #17381a;
--green-light:  #e7f4e9;
--bg:           #f5f5f5;
--text-grey:    #3a3b3c;
--border:       #d8d8d8;
```

**Font:** `system-ui, -apple-system, sans-serif` (equivalente ao SF Pro do Figma)

## CTA

Único CTA da página: WhatsApp `https://wa.me/5531963841551`

Aparece em dois lugares:
- Hero: botão "Começar gratuitamente"
- Pricing: botão "Começar agora"

O botão "veja como funciona" faz scroll suave até a seção "Apenas 4 Passos".

## Seções (em ordem)

### 1. Hero
- Navbar: logo + links de navegação + botão "Log In" (link WhatsApp)
- Headline: "Seu cliente agenda. / Você só atende."
- Subtítulo descritivo
- 2 CTAs: Começar gratuitamente (verde, WhatsApp) + veja como funciona (outline, scroll)
- Tagline: "Soluções de agendamento instantâneo — do seu jeito 🍉"
- 2 mockups do app à direita
- Background: gradiente branco → verde suave

### 2. Sua Marca
- Headline: "Seu agendamento com a **sua marca** — não a nossa."
- Subtítulo à direita
- 3 cards: Seu Nome / Domínio personalizado / Seu fluxo personalizado

### 3. Porque usar o Gedê App?
- Título com destaque em itálico verde
- Subtítulo descritivo à direita
- 3 linhas de benefício com stat em pill verde:
  - "Mais clientes entrando..." → **até 30% mais agendamentos**
  - "Um aumento real no seu faturamento..." → **+R$ 720 no mês**
  - "Sua agenda fica mais estável..." → **Economia média de 60 horas por mês**

### 4. Tagline
- Frase grande: "Gedê App não é só uma agenda. É uma forma de você **ganhar mais**, **atender melhor** e viver com **mais tempo livre**."
- Emojis decorativos: 💸 ✌️

### 5. Apenas 4 Passos
- Título: "Apenas *4 Passos*"
- 4 cards numerados (01–04):
  1. Cliente escolhe o serviço
  2. Seleciona o dia
  3. Escolhe o horário
  4. Confirma horários e informações
- Faixa: "Em menos de *1 minuto* seu cliente *está marcado* 💰"

### 6. Planos & Consultas
- Título: "*Planos* & Consultas"
- Subtítulo: "Um único plano com tudo incluído. Sem taxas escondidas."
- Card único — Plano Business **R$ 59/mês**
- Badge: "30 dias grátis para testar"
- 7 features com checkmark verde:
  - Agenda automática
  - Link exclusivo
  - Clientes ilimitados
  - Serviços ilimitados
  - Confirmação por WhatsApp
  - Painel admin completo
  - Suporte pelo Gedê
- Botão: "Começar agora" (WhatsApp)
- Rodapé: "Aceita PIX, cartão de crédito e boleto."

## Responsividade

- Desktop: layout fiel ao Figma
- Mobile: seções empilhadas, mockups ocultos ou reduzidos, navbar vira menu hamburguer

## GitHub Pages

- Repositório público: `gede-landingpage`
- Deploy automático via branch `main`
- Domínio próprio: configurar `CNAME` quando disponível
