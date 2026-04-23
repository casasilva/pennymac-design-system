# Pennymac Design System

A design system for Pennymac — one of the largest U.S. residential mortgage lenders and servicers. This system supports consumer-facing experiences across **web, iOS, and Android**: rate shopping, application, document upload, servicing, payments, and account management.

---

## 1. Company Context

**Who we are.** Pennymac is a mortgage lender and servicer. Customers come to us for the largest financial decision of their lives — buying or refinancing a home — and stay with us for decades while we service the loan. The brand promise is **"lifetime homeownership partner."**

**Who we serve.**
- **Consumers** — first-time buyers, refinancers, existing borrowers making payments
- **Brokers & correspondents** — partners who originate through us (out of scope for v1 of this system)

**What customers feel.** Mortgage is high-stakes, paperwork-heavy, and intimidating. The product's job is to make a complex, regulated process feel **clear, calm, and in-hand.** The system leans into legibility, generous spacing, and plain language over flashy motion or dense dashboards.

---

## 2. Brand Voice & Tone

| Trait | We are | We are not |
|---|---|---|
| **Plainspoken** | "Your payment is due May 1." | "Kindly remit your remittance by the aforementioned date." |
| **Steady** | "Here's what happens next." | "🎉 Woohoo, you got approved!!" |
| **Specific** | "You'll see the funds in 2–3 business days." | "Shortly." |
| **Partner, not salesperson** | "A 15-year term saves you $48k in interest, but raises your payment $420/mo." | "Lock in today! Rates won't last!" |

Avoid: jargon ("LTV", "DTI") without a plain-English gloss, urgency language, emoji in product UI, exclamation points outside of truly celebratory moments (loan closing).

---

## 3. Visual Foundations

### 3.1 Color

Pennymac's brand colors are a **vibrant Pennymac blue** (confident, modern, trustworthy) and a **warm yellow-gold** (the roofline triangle in the logo — home, optimism). The system extends these with a neutral slate scale for UI surface and text, plus semantic colors for state.

**Primary**
- `--pm-blue-900` `#0B3FA8` — deep surfaces, dark headers
- `--pm-blue-700` `#155BE0` — **primary CTA, brand surfaces** (role: `--pm-primary`)
- `--pm-blue-500` `#3B82F6` — accent, focus rings
- `--pm-blue-100` `#DBE8FD` — tinted surface, selected row

**Secondary**
- `--pm-gold-600` `#D4A017` — accent, highlights, logo mark
- `--pm-gold-400` `#F0C14B` — hover state on gold
- `--pm-gold-100` `#FBF3DA` — callout background

**Neutrals (slate)**
- `--pm-slate-950` `#0F1720` — body text
- `--pm-slate-700` `#3A4656` — secondary text
- `--pm-slate-500` `#6B7785` — tertiary / captions
- `--pm-slate-300` `#CBD2DB` — borders
- `--pm-slate-100` `#EEF1F5` — surface alt
- `--pm-slate-50`  `#F7F9FC` — app background
- `--pm-white`    `#FFFFFF`

**Semantic**
- `--pm-success-600` `#1F7A3C` / `--pm-success-100` `#E1F3E7`
- `--pm-warning-600` `#B8791E` / `--pm-warning-100` `#FBF0DB`
- `--pm-error-600`   `#B3261E` / `--pm-error-100`   `#FBE3E1`
- `--pm-info-600`    `#12447E` / `--pm-info-100`    `#E3EDF8`

**Usage rules**
- Gold is accent-only. Never use it for body text or as a primary button background (contrast + insistent, cheapens the brand).
- Every text color must hit WCAG AA against its background. This is a regulated product; accessibility is non-negotiable.
- Semantic colors always pair with an icon or label — never color-alone.

### 3.2 Typography

**Two brand families, working together:**
- **Montserrat** — display, headlines, card titles, short brand affirmations. Geometric, confident, unmistakably Pennymac.
- **Roboto** — body copy, forms, tables, data, navigation. Neutral and highly legible at small sizes.
- **Roboto Condensed** — available for dense table columns or tight labels where horizontal space is at a premium.

**Numerics use Roboto with `font-variant-numeric: tabular-nums`** for all money, rates, and dates. A misaligned decimal in a payment amount is a support ticket.

**Scale (8-step, ratio ~1.2)**

| Token | Family | Size / line-height | Weight | Use |
|---|---|---|---|---|
| `display` | Montserrat | 56 / 60 | 800 | Marketing hero |
| `h1` | Montserrat | 36 / 42 | 700 | Page title |
| `h2` | Montserrat | 26 / 32 | 700 | Section |
| `h3` | Montserrat | 20 / 28 | 600 | Card title |
| `h4` | Roboto | 17 / 24 | 700 | Subsection / list header |
| `body-lg` | Roboto | 17 / 26 | 400 | Long-form reading |
| `body` | Roboto | 15 / 22 | 400 | Default |
| `body-sm` | Roboto | 13 / 18 | 400 | Secondary meta |
| `caption` | Roboto | 12 / 16 | 500 | Labels, legal, captions |

Minimum body on mobile: **15px**. Never smaller than **12px** anywhere, and 12px is reserved for legal/captions with high contrast.

### 3.3 Spacing

8-point grid. Tokens: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80`.

- Component internal padding typically `16` or `20`
- Between related elements: `12`
- Between sections: `32` or `40`
- Page gutters: mobile `16`, tablet `24`, desktop `32`

### 3.4 Radii

- `--pm-radius-sm` `4px` — inputs, small chips
- `--pm-radius-md` `8px` — buttons, cards
- `--pm-radius-lg` `12px` — modals, sheets
- Pill (`9999px`) — status badges only

### 3.5 Elevation

Conservative. Three levels; avoid gratuitous shadow.

- `--pm-shadow-1` `0 1px 2px rgba(15,23,32,0.06)` — card at rest
- `--pm-shadow-2` `0 4px 12px rgba(15,23,32,0.08)` — menu, popover
- `--pm-shadow-3` `0 12px 32px rgba(15,23,32,0.14)` — modal

### 3.6 Motion

Mortgage UX is not entertainment. Keep it calm.
- Transitions: `150ms` (micro) / `220ms` (standard) / `320ms` (page)
- Easing: `cubic-bezier(0.2, 0, 0, 1)` standard; ease-out for entrances, ease-in for exits
- Never animate money. Amounts appear, they don't count up.

---

## 4. Component Principles

- **Default to calm.** Strong hierarchy via size + weight, not color.
- **Name the thing.** Every field has a visible label. Placeholder text is not a label.
- **Show your work.** Rates, fees, and calculations always show their inputs. Users can tap any dollar figure for a breakdown.
- **Forgiving.** Inline validation on blur, not on keystroke. Destructive actions are always two-step.
- **Touch-first.** Min hit target 44px on mobile, 32px on desktop with dense rows.

---

## 5. Surfaces Covered

- **Web app** — `components/web.html`
- **iOS app** — `components/ios.html`
- **Android app** — `components/android.html`

Each surface adapts the same tokens to its platform conventions (SF Symbols on iOS, Material icons on Android, custom on web).
