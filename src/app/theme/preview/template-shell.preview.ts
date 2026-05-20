import { Component } from '@angular/core';
import { St5AppShellLayout, type AppShellViewModel } from '../layouts/app-shell/app-shell.layout';

@Component({
  selector: 'st5-template-shell-preview',
  imports: [St5AppShellLayout],
  template: `
    <st5-app-shell-layout [vm]="shellVm" />
  `,
})
export class TemplateShellPreview {
  protected readonly shellVm: AppShellViewModel = {
    brand: {
      mark: 'st',
      name: 'sv5x-template',
      description: 'Template app',
      homePath: '/dashboard',
    },
    eyebrow: 'Sample SaaS template',
    title: 'Template workspace',
    viaUrl: null,
    navItems: [
      { label: 'Dashboard', path: '/dashboard' },
      { label: 'Meta ads', path: '/meta-ads-analysis' },
      { label: 'Facebook pages', path: '/facebook-pages-analysis' },
      { label: 'Login', path: '/login' },
    ],
  };
}
