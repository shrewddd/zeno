# Backend

Bun + Express + TypeScript. The entry point is `index.ts`; application code has not been added yet.

Install workspace dependencies with `bun install` from the repository root.

Run these commands from this directory:

```sh
bun run dev        # Watch the entry point
bun run start      # Run the entry point
bun run typecheck  # Check types
bun run lint       # Run Biome lint rules
bun run format     # Apply Biome formatting
bun run check      # Check formatting, lint rules, and imports
bun run check:fix  # Apply formatting and safe fixes
```
