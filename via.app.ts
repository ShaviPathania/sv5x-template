import { defineApp } from "@vaizle/via/core";

export const viaApp = defineApp({
  id: 'sv5x-template',
  manifestUrl: import.meta.url,
  frontend: {
    use: 'angular',
  },
});
