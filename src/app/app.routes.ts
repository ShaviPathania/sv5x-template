import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    title: 'sv5x-template | Login Template',
    loadComponent: () =>
      import('./theme/preview/login.preview').then((component) => component.LoginPreviewPage),
  },
  {
    path: '',
    loadComponent: () =>
      import('./theme/preview/template-shell.preview').then((component) => component.TemplateShellPreview),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        title: 'sv5x-template | Dashboard Template',
        loadComponent: () =>
          import('./theme/preview/dashboard.preview').then((component) => component.DashboardPreviewPage),
      },
      {
        path: 'meta-ads-analysis',
        title: 'sv5x-template | Meta Ads Template',
        loadComponent: () =>
          import('./theme/preview/meta-ads-analysis.preview').then((component) => component.MetaAdsAnalysisPreviewPage),
      },
      {
        path: 'facebook-pages-analysis',
        title: 'sv5x-template | Facebook Pages Template',
        loadComponent: () =>
          import('./theme/preview/facebook-pages-analysis.preview').then((component) => component.FacebookPagesAnalysisPreviewPage),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
