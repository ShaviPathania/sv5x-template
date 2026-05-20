export type AnalysisState = 'idle' | 'running' | 'success' | 'error';
export type AnalysisAccent = 'blue' | 'teal';

export type AnalysisMetric = {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'flat';
};

export type AnalysisRecommendation = {
  title: string;
  detail: string;
};

export type AnalysisResult = {
  summary: string;
  score: number;
  metrics: AnalysisMetric[];
  recommendations: AnalysisRecommendation[];
};

export type AnalysisResultViewModel = {
  state: AnalysisState;
  title: string;
  text: string;
  result: AnalysisResult | null;
  rawOutput: string;
  accent: AnalysisAccent;
};
