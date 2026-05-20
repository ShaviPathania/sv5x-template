import { Component } from '@angular/core';
import { St5DashboardPage } from '../pages/dashboard/dashboard.page';
import { sampleDashboardViewModel } from '../pages/dashboard/dashboard.vm';

@Component({
  selector: 'st5-dashboard-preview-page',
  imports: [St5DashboardPage],
  template: `
    <st5-dashboard-page [vm]="vm" />
  `,
})
export class DashboardPreviewPage {
  protected readonly vm = sampleDashboardViewModel;
}
