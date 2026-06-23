# Global Design System Specification (MASTER.md)

This document is the "Source of Truth" for the 春序视觉设计项目管理平台, implementing the rules of **UI/UX Pro Max**.

---

## 🎨 Design Style: Creative E-commerce Studio + Dual Theme (Light & Dark)

The platform is designed to look like a premium creative visual agency dashboard, supporting both light and dark mode operations.

### 1. Colors & Palette (Dual Mode Tokens)

| Token / Role | 白天模式 (Light Mode) | 夜晚模式 (Dark Mode) | Tailwind Class |
| :--- | :--- | :--- | :--- |
| **Main Background** | Ceramic Warm White (`#F8FAFC` to `#F1F5F9`) | Deep Space Navy (`#070A13` or `slate-950`) | `bg-slate-50 dark:bg-slate-950` |
| **Panel / Card BG** | Pure White (`#FFFFFF` / opacity 90%) | Frosted Glass slate (`rgba(30, 41, 59, 0.45)`) | `bg-white/90 dark:bg-slate-900/45` |
| **Card Borders** | Crisp Light Gray (`rgba(226, 232, 240, 0.8)`) | Translucent Slate (`rgba(255, 255, 255, 0.06)`) | `border-slate-200 dark:border-slate-800/60` |
| **Primary Accent** | Vibrant Fuchsia / Violet (`#7C3AED`) | Neon Violet / Indigo (`#8B5CF6`) | `from-violet-600 to-fuchsia-600` |
| **Primary Text** | Deep Charcoal (`#0F172A`) | Muted White (`#E2E8F0`) | `text-slate-900 dark:text-slate-100` |
| **Muted Text** | Slate Muted Gray (`#64748B`) | Slate Warm Gray (`#94A3B8`) | `text-slate-500 dark:text-slate-400` |

### 2. Spacing & Borders
*   **Borders**: `rounded-2xl` (16px) for cards, `rounded-3xl` (24px) for dashboard blocks and login modal, `rounded-xl` (12px) for buttons and inputs.
*   **Layout Grid (Bento Box)**: Multi-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2` or similar) with consistent gap (`gap-6`).
*   **Floating Elements**: Floating headers or panels must have a `4px` or `8px` offset from borders and a backdrop blur effect.

---

## ⚡ Interaction & Motion Rules

*   **Micro-interactions**: Hover states must be smooth. Use `transition-all duration-200 ease-in-out` on buttons, inputs, and cards.
*   **Card Hover Effect**:
    *   **Light Mode**: Lift cards slightly and add a soft purple shadow (`-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 hover:border-violet-500/20`).
    *   **Dark Mode**: Lift cards slightly and add a neon glow shadow (`-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10 hover:border-violet-500/30`).
*   **Cursor Pointer**: All interactive cards, checkboxes, dropdowns, and buttons MUST use `cursor-pointer`.
*   **Copied Feedback**: Copying documentation links or passwords must display a toast or floating tooltip with a `fade-in` and `fade-out` transition (duration 200ms, staying visible for 2 seconds).

---

## ♿ Accessibility & Quality Standards (MUST USE)

*   **No Emojis as Icons**: Use high-quality SVG icons from the Lucide collection. Emojis like 📁, 🔑, ⏱️ are strictly prohibited.
*   **Contrast Compliance**: Dark mode background and text contrast must be at least `4.5:1` (WCAG AA). Muted text must use at least `slate-400` color.
*   **Focus Ring**: For accessibility, interactive elements must display an outline focus ring when selected via keyboard (`focus:ring-2 focus:ring-violet-500 focus:outline-none`).
*   **Responsive Breakpoints**: Check layout responsiveness on mobile (375px), tablet (768px), laptop (1024px), and desktop (1440px). Ensure no horizontal scroll on mobile.
