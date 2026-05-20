import { Component, signal } from '@angular/core';
import { St5MetaAdsAnalysisPage } from '../pages/meta-ads-analysis/meta-ads-analysis.page';
import type {
  MetaAdsAnalysisRunRequest,
  MetaAdsAnalysisViewModel,
} from '../pages/meta-ads-analysis/meta-ads-analysis.vm';
import { sampleMetaAdsAnalysisViewModel } from '../pages/meta-ads-analysis/meta-ads-analysis.vm';

@Component({
  selector: 'st5-meta-ads-analysis-preview-page',
  imports: [St5MetaAdsAnalysisPage],
  template: `
    <st5-meta-ads-analysis-page
      [vm]="vm()"
      (runRequested)="run($event)"
    />
  `,
})
export class MetaAdsAnalysisPreviewPage {
  protected readonly vm = signal<MetaAdsAnalysisViewModel>(sampleMetaAdsAnalysisViewModel);

  protected run(request: MetaAdsAnalysisRunRequest): void {
    this.vm.set({
      state: 'success',
      title: 'Analysis complete',
      text: `Template preview rendered Meta ads output for ${request.accountId}.`,
      result: {
        summary: `Mock analysis for ${request.objective} over ${request.dateRange}.`,
        score: 84,
        metrics: [
          { label: 'Spend efficiency', value: '+18%', trend: 'up' },
          { label: 'Lead quality', value: 'A-', trend: 'flat' },
          { label: 'Fatigue risk', value: 'Low', trend: 'down' },
        ],
        recommendations: [
          {
            title: 'Shift budget to high-intent segments',
            detail: 'The template result area supports metrics and prioritized recommendations.',
          },
        ],
      },
      rawOutput: JSON.stringify(request, null, 2),
    });
  }
}
