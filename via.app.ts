import { defineApp } from "@vaizle/via/core";

export const viaApp = defineApp({
  serviceId: 'sv5x-template',
  moduleUrl: import.meta.url,
  frontend: {
    use: 'angular',
  },
});
