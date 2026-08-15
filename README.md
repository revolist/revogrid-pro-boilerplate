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

- **Node.js** 22.22.3+, 24.15+, or 26.x, matching the Angular 22 compatibility range. Release verification uses Node.js 24.
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

Every starter imports package CSS through its public export, for example
`@revolist/revogrid-pro/styles.css` or `@revolist/pivot/styles.css`. Do not copy
an internal `dist/*.css` filename into an application; those filenames differ
between full and trial packages.

## Available scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start the Vite dev server with HMR |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview the production build locally |

From the repository root, maintainers can reproduce the clean compatibility
gate for every framework and both examples:

```bash
pnpm verify:starters
```

The command performs a frozen install and production build in each starter. It
is intentionally suitable for the separate release verification flow; it does
not use monorepo workspace packages or an existing root `node_modules` tree.

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
