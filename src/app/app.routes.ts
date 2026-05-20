import { Routes } from '@angular/router';
import { St5AuthLayout } from './theme/layouts/auth/auth.layout';

export const p = {
  login: 'login',
  dashboard: 'dashboard',
  metaAdsAnalysis: 'meta-ads-analysis',
  facebookPagesAnalysis: 'facebook-pages-analysis',
} as const;

export const routes: Routes = [
  { path: '', redirectTo: '/' + p.dashboard, pathMatch: 'full' },
  {
    path: '',
    component: St5AuthLayout,
    children: [
      {
        path: p.login,
        title: 'sv5x-template | Login Template',
        loadComponent: () =>
          import('./theme/preview/login.preview').then((component) => component.LoginPreviewPage),
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./theme/preview/template-shell.preview').then((component) => component.TemplateShellPreview),
    children: [
      {
        path: p.dashboard,
        title: 'sv5x-template | Dashboard Template',
        loadComponent: () =>
          import('./theme/preview/dashboard.preview').then((component) => component.DashboardPreviewPage),
      },
      {
        path: p.metaAdsAnalysis,
        title: 'sv5x-template | Meta Ads Template',
        loadComponent: () =>
          import('./theme/preview/meta-ads-analysis.preview').then((component) => component.MetaAdsAnalysisPreviewPage),
      },
      {
        path: p.facebookPagesAnalysis,
        title: 'sv5x-template | Facebook Pages Template',
        loadComponent: () =>
          import('./theme/preview/facebook-pages-analysis.preview').then((component) => component.FacebookPagesAnalysisPreviewPage),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/' + p.dashboard,
  },
];
