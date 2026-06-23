# Dashboard Design Specification (dashboard.md)

This page-specific design spec details the interface structure and components for the main E-commerce Visual Design Dashboard.

---

## 📐 Layout & View Modes

The page contains three main areas: the Top Analytics Header (Dashboard), the Toolbar (Views, Filters, and Actions), and the Main Area (Kanban Board or List Table).

### 0. Login & Registration Screen (NEW)
*   **Visual Style**: Standard Bento box centered glass panel (`w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-2xl`).
*   **Gradient Glimmer**: Interactive glowing background circles behind the card (`bg-violet-500/10` and `bg-cyan-500/10` blur nodes).
*   **Controls**: Smooth tabs switching between "登录 (Sign In)" and "注册 (Register)". Form inputs must include clear border highlights on focus (`focus:ring-2 focus:ring-violet-500`).

### 1. Top Analytics Header (Bento Cards)
*   **Bento Grid Layout**: Layout must be structured as a 3-column bento-style analytics section:
    *   **Card 1 (Global Progress)**: Total active items, total completed items, global progress bar (cyan to emerald gradient).
    *   **Card 2 (Team Workloads)**: List of team members (dynamically populated from registered accounts) with:
        *   Their active task count.
        *   Their remaining work units ("还剩 XX 套").
        *   Horizontal workload bar indicating load level.
    *   **Card 3 (Urgent Items Alert)**: List of items with DDLs <= 3 days. Cards must have a subtle red pulsing halo shadow (`shadow-red-500/20 shadow-md animate-pulse`).

### 2. Toolbar & Filtering
*   **View Toggle Button**: Segmented control with smooth transition background to toggle between Kanban View and List View.
*   **Search Input**: Left-aligned search input with a magnifying glass SVG icon.
*   **Filters**: Dropdowns for selecting "Responsible Person" and "Status".
*   **Action Buttons**:
    *   "添加项目" (Add Project): Purple gradient button.
    *   "数据备份" (Backup): Muted outline button that displays import/export options.
    *   "退出登录" (Logout): Red-toned outline button for signing out.

### 3. Main Workspace Layout (Bento Grid split)
When logged in, the screen splits into a 4/5 main panel and a 1/5 right side-panel:
*   **Main Workspace (4/5 width)**: Contains Kanban Board or List View.
*   **Activity Timeline Sidebar (1/5 width)**:
    *   Presents a vertical running list of design follow-up operations ("项目跟进时间轴").
    *   Scrollable (`max-h-[700px] overflow-y-auto`).
    *   Timeline nodes showing a tiny circular colored status dot, the timestamp (e.g. `16:42`), the actor (`俊宇`), and the action description (`修改已完成数 20 -> 30` or `状态: 搭配中 -> Demo调整` with details).
    *   Allows quick filters or viewing log entries.

---

## ⚡ Component Elements & Interactions

### 1. Project Card
*   **Glassmorphic Border**: Glow effect matching the status of the item.
*   **DDL Indicator**: If deadline is < 3 days, show a red alert badge with a clock icon.
*   **Last Updated Meta**: Tiny label displaying `最后更新: 10分钟前 (阿旺)` to give team members a quick look at project touch points.
*   **Quick Progress Adjuster**:
    *   Shows a visual progress bar.
    *   Quick adjustment buttons (`-1`, `+1`, `+10`) or direct input field to edit completed sets without opening the detail edit modal.
    *   Remaining sets are automatically calculated (`Total - Completed`).
*   **One-Click Copy Link/Password**:
    *   Display direct buttons with Lucide icons (`Link` and `Key`).
    *   Clicking copies the value to clipboard and flashes a green border or displays a temporary "已复制" tooltip.

### 2. Add/Edit Modals
*   **Overlay**: Backed by a dark backdrop filter blur (`backdrop-blur-sm bg-slate-950/70`).
*   **Focus**: Automatically focus the first input when the modal opens.
*   **Inputs**: Uniform sizing and styling.
*   **Manual Follow-up Note (NEW)**: In the Edit modal, add a textbox "追加跟进备注" (Add Follow-up Remark) that will append a custom entry directly into the project's timeline log when saved.

