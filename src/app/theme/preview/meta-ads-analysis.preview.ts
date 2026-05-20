import { Component } from '@angular/core';
import type { MetaAdsAnalysisPageIO } from '../pages/meta-ads-analysis/meta-ads-analysis.io';
import { mockMetaAdsAnalysisPageIO } from '../pages/meta-ads-analysis/meta-ads-analysis.io';
import { St5MetaAdsAnalysisPage } from '../pages/meta-ads-analysis/meta-ads-analysis.page';

@Component({
  selector: 'st5-meta-ads-analysis-preview-page',
  imports: [St5MetaAdsAnalysisPage],
  template: `
    <st5-meta-ads-analysis-page [io]="io" />
  `,
})
export class MetaAdsAnalysisPreviewPage {
  protected readonly io: MetaAdsAnalysisPageIO = mockMetaAdsAnalysisPageIO;
}
