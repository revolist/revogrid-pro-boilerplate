# RevoGrid Pro — Boilerplate Examples

Starter templates for RevoGrid Pro packages across all major frameworks.
Each example is a self-contained project you can clone, install, and run in minutes.

## Examples

| Folder | Plugin | Package |
|--------|--------|---------|
| `pivot/` | Pivot table with drag-and-drop configurator | `@revolist/pivot`, plus shared APIs from Pro |
| `tree/` | Hierarchical tree data with expand/collapse | `@revolist/revogrid-pro` |

Each example is available for five frameworks:

```
<framework>/
  pivot/   # Pivot table with drag-and-drop configurator
  tree/    # Hierarchical tree data with expand/collapse
```

## Prerequisites

- **Node.js** 22.22.3 or later (required by the Angular 22 starters)
- **pnpm** 10+
- The included `.npmrc` points `@revolist` packages to the RevoGrid package registry:

  ```bash
  @revolist:registry=https://npm.rv-grid.com/
  ```

  Use the package access supplied with your RevoGrid Pro licence.

## Quick start

Pick a framework and example:

```bash
cd vanilla-ts/pivot   # or vue/tree, svelte/pivot, etc.
pnpm install
pnpm dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

## Available scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start the Vite dev server with HMR |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview the production build locally |

## Packages used

| Package | Description |
|---------|-------------|
| [`@revolist/revogrid`](https://rv-grid.com) | Core grid (Web Component) |
| `@revolist/pivot` | Direct Pivot API at version 2.6.3 |
| `@revolist/revogrid-pro` | Shared Pro APIs and Tree API at version 2.6.3 |

## Project structure

```
revogrid-pro-boilerplate/
├── angular/
│   ├── pivot/
│   └── tree/
├── react/
│   ├── pivot/
│   └── tree/
├── svelte/
│   ├── pivot/
│   └── tree/
├── vanilla-ts/
│   ├── pivot/
│   └── tree/
└── vue/
    ├── pivot/
    └── tree/
```

## Licence

These boilerplate files are MIT-licensed.  
The examples install the commercial RevoGrid Pro packages from `https://npm.rv-grid.com/`.
