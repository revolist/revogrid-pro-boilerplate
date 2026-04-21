# RevoGrid Pro — Boilerplate Examples

Starter templates for [RevoGrid Pro](https://pro.rv-grid.com) plugins across all major frameworks.  
Each example is a self-contained project you can clone, install, and run in minutes.

## Examples

| Folder | Plugin | Package |
|--------|--------|---------|
| `enterprise-pivot/` | Pivot table with drag-and-drop configurator | `@revolist/revogrid-enterprise` |
| `pro-tree/` | Hierarchical tree data with expand/collapse | `@revolist/revogrid-pro` |

Each example is available for four frameworks:

```
<framework>/
  enterprise-pivot/   # Pivot table with drag-and-drop configurator
  pro-tree/           # Hierarchical tree data with expand/collapse
```

## Prerequisites

- **Node.js** 18 or later
- **npm** 9+ (or pnpm / yarn)
- A valid **RevoGrid Pro / Enterprise licence** — packages are hosted on the private Revolist registry.  
  Set your token before installing:

  ```bash
  # ~/.npmrc  (or project .npmrc)
  @revolist:registry=https://npm.rv-grid.com
  //npm.rv-grid.com/:_authToken=YOUR_TOKEN_HERE
  ```

  See the [installation guide](https://pro.rv-grid.com/guides/installation/) for full setup instructions and token management.

## Quick start

Pick a framework and example:

```bash
cd vanilla-ts/enterprise-pivot   # or vue/pro-tree, svelte/enterprise-pivot, etc.
npm install
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

## Available scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |

## Packages used

| Package | Description |
|---------|-------------|
| [`@revolist/revogrid`](https://rv-grid.com) | Core grid (Web Component) |
| `@revolist/revogrid-pro` | Pro plugins: Tree, and more |
| `@revolist/revogrid-enterprise` | Enterprise plugins: Pivot, and more |

## Project structure

```
revogrid-pro-boilerplate/
├── angular/
│   ├── enterprise-pivot/
│   └── pro-tree/
├── svelte/
│   ├── enterprise-pivot/
│   └── pro-tree/
├── vanilla-ts/
│   ├── enterprise-pivot/
│   └── pro-tree/
└── vue/
    ├── enterprise-pivot/
    └── pro-tree/
```

## Licence

These boilerplate files are MIT-licensed.  
The RevoGrid Pro and Enterprise packages require a separate commercial licence — see [pro.rv-grid.com](https://pro.rv-grid.com).
