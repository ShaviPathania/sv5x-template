# sv5x-template

Sample SaaS app template for `sv5`.

`sv5x-template` owns Angular-only template work: layouts, pages, patterns, blocks, local form behavior, visual states, and typed view-model/event contracts. It does not own VIA flows, backend routes, API clients, deploy wrappers, or product persistence contracts.

## Structure

```text
src/app/theme/
  layouts/    route shells and shared chrome
  pages/      full route-level template pages
  patterns/   reusable feature sections
  blocks/     small reusable UI pieces
  preview/    route wrappers for local template preview
```

`sv5` imports template pages from `sv5x-template` and wires them to VIA HTTP clients and app state.

## Tailwind

`tailwind.config.js` is the source of truth for the sample SaaS app template theme. Keep route layouts, pages, patterns, and blocks on these template tokens so frontend-only work can be developed and reviewed in this repo.

The consuming `sv5` app imports this config as a Tailwind preset and adds its own app/common content globs. Keep existing `st5-*` Angular selectors and current `sv5` Tailwind token names stable unless the consuming app is updated in the same change.

## Local Preview

```bash
cd /emux/emu5
bun run via sv5x-template
```

The VIA local runner serves this frontend-only target on the port configured in `/emux/emu5/via.config.ts`.
You can also run it directly with `bunx ng serve sv5x-template`.

The preview app uses local mock handlers only. Run `sv5` when testing real VIA-backed behavior.
