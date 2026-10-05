#  Smart To-Do List App

A responsive and minimalist task management web application designed to help users organize their daily schedules, track goals, and boost overall productivity.

---

##  Live Demo

Check out the live application here: **((https://to-do-list-six-rho-83.vercel.app/ ))** 

---

##  Features

*   **Task Creation:** Quickly append tasks with responsive input boxes.
*   **Status Management:** Toggle tasks between **Pending** and **Completed** state milestones with clean checking elements.
*   **Dynamic Sorting/Filter:** Categorize and toggle views between *All*, *Active*, and *Completed* priorities.
*   **Persistent Memory:** Keeps your checklists intact safely across browser sessions.

---

##  Tech Stack

*   **Framework:** [Next.js](https://nextjs.org) (App Router layout framework)
*   **Bundler:** [Turbopack](https://nextjs.orgdocs/app/api-reference/turbopack) (For instant hot-reloading responsiveness)
*   **Languages:** CSS, JavaScript, TypeScript
*   **Styling:** Component-level responsive layouts

---

##  Suggested Project Structure

```text
todo-list-app/
├── app/
│   ├── components/
│   │   ├── todoForm.js       # Handles input capturing, validation, and task creation submission
│   │   ├── todoItem.js       # Visualizes a single task row with edit, check, and deletion logic
│   │   └── todoFilters.js    # Toggles active layouts between pending and completed tasks
│   ├── globals.css           # Global layout typography rules and styling variables
│   ├── layout.tsx            # Main layout wrapper shell
│   └── page.tsx              # Primary interface rendering and local state hub
├── public/                   # Custom application checkmarks or vector icon sets
└── config files              # next.config.ts, tsconfig.json, postcss.config.mjs
```

---

##  Getting Started

Follow these simple instructions to initialize the application codebase on your local engine.

###  Prerequisites

Ensure you have **Node.js** (v18.x or higher) and **npm** installed.

###  Local Installation

1. Clone your workspace repository:
   ```bash
   git clone https://github.com
   ```

2. Direct your terminal shell into the root folder:
   ```bash
   cd todo-list-app
   ```

3. Download required dependency modules:
   ```bash
   npm install
   ```

###  Booting the Dev Environment

Execute your runtime environment locally using Turbopack:

```bash
npm run dev
```

Point your browser window to [http://localhost:3000](http://localhost:3000) to begin creating your task matrices.

---

##  Distribution Packages & Production Build

To structure an optimized deployment packet run:

```bash
npm run build
```

To run the built distribution package locally:

```bash
npm run start
```
