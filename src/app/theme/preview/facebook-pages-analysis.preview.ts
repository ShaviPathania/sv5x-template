import { Component } from '@angular/core';
import type { FacebookPagesAnalysisPageIO } from '../pages/facebook-pages-analysis/facebook-pages-analysis.io';
import { mockFacebookPagesAnalysisPageIO } from '../pages/facebook-pages-analysis/facebook-pages-analysis.io';
import { St5FacebookPagesAnalysisPage } from '../pages/facebook-pages-analysis/facebook-pages-analysis.page';

@Component({
  selector: 'st5-facebook-pages-analysis-preview-page',
  imports: [St5FacebookPagesAnalysisPage],
  template: `
    <st5-facebook-pages-analysis-page [io]="io" />
  `,
})
export class FacebookPagesAnalysisPreviewPage {
  protected readonly io: FacebookPagesAnalysisPageIO = mockFacebookPagesAnalysisPageIO;
}
