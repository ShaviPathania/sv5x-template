import { defineViaApp } from '@vaizle/via/core/app';

export const viaApp = defineViaApp({
  serviceId: 'sv5x-template',
  moduleUrl: import.meta.url,
  frontend: {
    use: 'angular',
  },
});
