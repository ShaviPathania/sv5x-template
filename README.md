# sv5x-template

Sample Angular presentation/template repo for `sv5`. This is a concrete frontend/template separation example around VIA apps, not VIA core. Standalone sample repo: [vaizle/sv5x-template](https://github.com/vaizle/sv5x-template).

Workspace role: extension repo under `projects/sv5x/`, consumed by top-level app repo `sv5`.

`sv5x-template` owns Angular-only layouts, pages, patterns, blocks, local form behavior, visual/loading/error states, typed view-model/event contracts, and mock preview IO. It does not own VIA flows, backend routes, API clients, deploy profiles, auth, frontend env, or product persistence.

## Structure

```text
src/app/theme/
  layouts/     route shells and shared chrome
  pages/       route-level template pages
  patterns/    reusable feature sections
  blocks/      small reusable UI pieces
  preview/     local template-preview route wrappers
```

`sv5` imports template pages and supplies real app state, VIA clients, and event handlers.

Template pages own presentation, loading/error states, typed UI events, and mock preview IO only. Consuming apps own VIA clients, flows, context/history selection, persistence, and agent harnesses. Do not put hidden VIA runtime behavior, backend env, or product DB contracts in this template repo.

## Tailwind

`tailwind.config.js` owns the sample SaaS app template theme. `sv5` imports it as a preset and adds app/common content globs. Keep existing `st5-*` Angular selectors and current `sv5` Tailwind token names stable unless the consuming app is updated in the same change.

## Local Preview

```bash
cd /emux/emu5
bun run via dev sv5x-template --profile local
```

You can also run `bunx ng serve sv5x-template`. The preview app uses local mock handlers only; run `sv5` to test real VIA-backed behavior.
