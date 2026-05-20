import type { AnalysisResultViewModel } from '../../patterns/analysis-result/analysis-result.vm';

export type FacebookPagesAnalysisTopic = 'engagement' | 'growth' | 'content_quality';

export type FacebookPagesAnalysisFormValue = {
  pageId: string;
  topic: FacebookPagesAnalysisTopic;
  lookbackDays: number;
};

export type FacebookPagesAnalysisRunRequest = FacebookPagesAnalysisFormValue;
export type FacebookPagesAnalysisViewModel = Omit<AnalysisResultViewModel, 'accent'>;

export const sampleFacebookPagesAnalysisViewModel: FacebookPagesAnalysisViewModel = {
  state: 'idle',
  title: 'Ready',
  text: 'The response panel will show metrics, recommendations, and raw JSON.',
  result: null,
  rawOutput: 'Run the form to call /api/facebook-pages-analysis.',
};

export const sampleFacebookPagesAnalysisFormValue: FacebookPagesAnalysisFormValue = {
  pageId: '102988293558',
  topic: 'engagement',
  lookbackDays: 30,
};
