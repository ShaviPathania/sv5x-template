import type { AnalysisResultViewModel } from '../../patterns/analysis-result/analysis-result.vm';

export type MetaAdsAnalysisDateRange = 'last_7_days' | 'last_30_days' | 'this_quarter';
export type MetaAdsAnalysisObjective = 'leads' | 'sales' | 'awareness';

export type MetaAdsAnalysisFormValue = {
  accountId: string;
  dateRange: MetaAdsAnalysisDateRange;
  objective: MetaAdsAnalysisObjective;
};

export type MetaAdsAnalysisRunRequest = MetaAdsAnalysisFormValue;
export type MetaAdsAnalysisViewModel = Omit<AnalysisResultViewModel, 'accent'>;

export const sampleMetaAdsAnalysisViewModel: MetaAdsAnalysisViewModel = {
  state: 'idle',
  title: 'Ready',
  text: 'The response panel will show metrics, recommendations, and raw JSON.',
  result: null,
  rawOutput: 'Run the form to call /api/meta-ads-analysis.',
};

export const sampleMetaAdsAnalysisFormValue: MetaAdsAnalysisFormValue = {
  accountId: 'act_247357556342146',
  dateRange: 'last_30_days',
  objective: 'leads',
};
