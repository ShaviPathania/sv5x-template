import { Component, signal } from '@angular/core';
import { St5FacebookPagesAnalysisPage } from '../pages/facebook-pages-analysis/facebook-pages-analysis.page';
import type {
  FacebookPagesAnalysisRunRequest,
  FacebookPagesAnalysisViewModel,
} from '../pages/facebook-pages-analysis/facebook-pages-analysis.vm';
import { sampleFacebookPagesAnalysisViewModel } from '../pages/facebook-pages-analysis/facebook-pages-analysis.vm';

@Component({
  selector: 'st5-facebook-pages-analysis-preview-page',
  imports: [St5FacebookPagesAnalysisPage],
  template: `
    <st5-facebook-pages-analysis-page
      [vm]="vm()"
      (runRequested)="run($event)"
    />
  `,
})
export class FacebookPagesAnalysisPreviewPage {
  protected readonly vm = signal<FacebookPagesAnalysisViewModel>(sampleFacebookPagesAnalysisViewModel);

  protected run(request: FacebookPagesAnalysisRunRequest): void {
    this.vm.set({
      state: 'success',
      title: 'Analysis complete',
      text: `Template preview rendered Facebook page output for ${request.pageId}.`,
      result: {
        summary: `Mock ${request.topic} analysis for the last ${request.lookbackDays} days.`,
        score: 79,
        metrics: [
          { label: 'Engagement lift', value: '+11%', trend: 'up' },
          { label: 'Posting cadence', value: 'Stable', trend: 'flat' },
          { label: 'Audience growth', value: '+4.2%', trend: 'up' },
        ],
        recommendations: [
          {
            title: 'Turn best posts into weekly themes',
            detail: 'The template result area stays reusable across analysis workflows.',
          },
        ],
      },
      rawOutput: JSON.stringify(request, null, 2),
    });
  }
}
