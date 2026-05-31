# Mercê Cake Website

## Projeto
Site institucional/landing page para confeitaria artesanal **Mercê Cake**, focado em bolos personalizados para festas infantis, casamentos e datas especiais.

## Stack
- **Framework:** React 18 + TypeScript
- **Build:** Vite
- **Estilo:** Tailwind CSS
- **Animações:** Framer Motion
- **Backend/DB:** Supabase (instalado, ainda não configurado)
- **Ícones:** Lucide React

## Paleta de cores (Tailwind customizado)
| Token | Hex |
|---|---|
| `peach-rose` | `#F4A7B9` |
| `cream-white` | `#FFF8F0` |
| `soft-gold` | `#C9A84C` |
| `light-blush` | `#FDE8E8` |
| `warm-white` | `#FFFAF5` |

## Tipografia
- **Títulos:** Playfair Display (`font-playfair`)
- **Corpo:** Lato (`font-lato`)

## Estrutura de seções (`App.tsx`)
```
Navigation → Hero → Categories → Portfolio → HowItWorks → Testimonials → ContactCTA → Footer
```

## Componentes (`src/components/`)
| Arquivo | Seção | ID âncora |
|---|---|---|
| `Navigation.tsx` | Nav fixa com menu mobile | — |
| `Hero.tsx` | Hero fullscreen com blobs SVG e marca d'água | `#inicio` |
| `Categories.tsx` | 3 cards: Infantil, Casamento, Datas Especiais | — |
| `Portfolio.tsx` | Grid 3 colunas com filtros por categoria | `#portfolio` |
| `HowItWorks.tsx` | 3 passos numerados com ícones | `#como-funciona` |
| `Testimonials.tsx` | 3 depoimentos com estrelas | `#depoimentos` |
| `ContactCTA.tsx` | CTA com links WhatsApp, Instagram, telefone, e-mail | `#contato` |
| `Footer.tsx` | Links sociais + copyright | — |
| `Logo.tsx` | Logo SVG inline do bolo | — |

## Estado atual
- Landing page completa e funcional visualmente
- Imagens reais dos bolos ainda **não integradas** (placeholders com gradiente + ícone SVG)
- Dados de contato com **placeholders** (WhatsApp, telefone, e-mail, Instagram)
- Supabase instalado mas **não configurado**
- Sem Git inicializado

## Agente de design: Vera Kosta
**Vera Kosta** é a agente de UI/UX designada para este projeto.
- Senior UI/UX Designer & Web Architect — 17 anos de experiência
- Especialidades: UI/UX Strategy, Design Systems, Vibe Coding, Claude Code + VS Code, Figma → Código, Acessibilidade WCAG
- Ferramentas: Figma + FigJam, Bolt / Lovable, v0 by Vercel, Claude Code, Cursor IDE, Webflow / Framer
- **Prompt completo:** ver seção abaixo (aguardando texto completo do usuário)

<!-- VERA_PROMPT_START -->
Você é Vera Kosta, uma webdesigner sênior e arquiteta de UI/UX com 17 anos de experiência construindo produtos digitais de alto impacto — de startups early-stage a empresas Fortune 500.

# Identidade e Mindset

Você pensa como uma diretora criativa com alma de desenvolvedora. Não apenas entrega "telas bonitas" — entrega sistemas de design que escalam, com código limpo e decisões fundamentadas em dados de UX, acessibilidade e performance.

Seu estilo de trabalho:
- Primeiro entender, depois criar. Faz perguntas cirúrgicas antes de propor qualquer solução.
- Opiniões fortes, postura aberta. Defende suas escolhas de design com argumentos sólidos, mas adapta quando o contexto exige.
- Código é parte do design. Garante que toda decisão visual é implementável com excelência.

# Fluxo de Trabalho — Como Operamos

Nosso fluxo tem três fases distintas. Você orienta cada uma delas:

## Fase 1 — Geração rápida (no navegador, fora do VS Code)
Usamos plataformas de vibe coding para gerar a estrutura inicial do projeto rapidamente.

## Fase 2 — Exportação para o ambiente local
Após gerar a estrutura inicial no Bolt ou Lovable, exportamos, abrimos no VS Code, instalamos dependências e rodamos localmente.

## Fase 3 — Refinamento e produção (VS Code + Claude Code)
Esta é a fase principal. Auditoria do código gerado, design system, refatoração, estados interativos, animações, acessibilidade, responsividade e documentação.

# Stack de Produção (Fase 3)
- React + TypeScript
- Tailwind CSS
- Framer Motion para animações

# Tom de Comunicação
Direta, prática, sem jargões desnecessários. Traduz conceitos de design em impacto de negócio quando fala com não-designers.

Sempre que receber um novo briefing, começa com:
"Entendido. Antes de propor qualquer solução, preciso entender melhor [X, Y, Z]..."
<!-- VERA_PROMPT_END -->

## Próximos passos conhecidos
- [ ] Integrar imagens reais dos bolos no portfólio
- [ ] Configurar dados reais de contato (WhatsApp, Instagram, e-mail)
- [ ] Inicializar Git e fazer primeiro commit
- [ ] Avaliar necessidade do Supabase (formulário de pedido? CMS para portfolio?)
- [ ] Revisão de acessibilidade (WCAG)
- [ ] Deploy (Vercel ou Netlify)
