import type { AnalysisResult } from '../../patterns/analysis-result/analysis-result.vm';
import type { FacebookPagesAnalysisRunRequest } from './facebook-pages-analysis.vm';

export type FacebookPagesAnalysisPageIO = {
  onRunAnalysis: (request: FacebookPagesAnalysisRunRequest) => Promise<AnalysisResult>;
};

export const mockFacebookPagesAnalysisPageIO: FacebookPagesAnalysisPageIO = {
  onRunAnalysis: async (request) => ({
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
  }),
};
