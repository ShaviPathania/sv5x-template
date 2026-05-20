import type { AnalysisResult } from '../../patterns/analysis-result/analysis-result.vm';
import type { MetaAdsAnalysisRunRequest } from './meta-ads-analysis.vm';

export type MetaAdsAnalysisPageIO = {
  onRunAnalysis: (request: MetaAdsAnalysisRunRequest) => Promise<AnalysisResult>;
};

export const mockMetaAdsAnalysisPageIO: MetaAdsAnalysisPageIO = {
  onRunAnalysis: async (request) => ({
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
  }),
};
