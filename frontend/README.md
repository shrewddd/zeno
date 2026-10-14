# Frontend

React + TypeScript + Vite, with React Compiler, Tailwind CSS v4, and shadcn/ui enabled.

Install all workspace dependencies from the repository root:

```sh
bun install
```

Run these commands from this directory:

```sh
bun run dev        # Start Vite
bun run build      # Check types and build for production
bun run preview    # Preview the production build
bun run typecheck  # Check types without bundling
bun run lint       # Run Biome lint rules
bun run format     # Apply Biome formatting
bun run check      # Check formatting, lint rules, and imports
bun run check:fix  # Apply formatting and safe fixes
```

Biome configuration is based on `apx/frontend`: tabs, double quotes, recommended lint rules, and import organization. It respects Git ignore files and excludes generated TanStack route files and `src/styles.css`.

From the repository root, `bun run dev:frontend` starts this app, and `bun run dev` starts both workspace development commands.

## UI components

shadcn/ui uses the Nova preset with Base UI primitives, neutral colors, and the Geist font. Component source lives in `src/components/ui`, and `@/` resolves to `src/` in both Vite and TypeScript.

Add components from this directory:

```sh
bunx --bun shadcn@latest add card input
```

Import components into your app:

```tsx
import { Button } from "@/components/ui/button";
```

Global styles and theme tokens live in `src/index.css`. Biome is configured to parse Tailwind directives.
