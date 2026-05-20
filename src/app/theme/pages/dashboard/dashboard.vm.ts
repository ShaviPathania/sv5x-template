import type { MetricCardViewModel } from '../../blocks/metric-card/metric-card.block';

export type DashboardActionCard = {
  eyebrow: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  wide?: boolean;
};

export type DashboardViewModel = {
  metrics: MetricCardViewModel[];
  cards: DashboardActionCard[];
};

export const sampleDashboardViewModel: DashboardViewModel = {
  metrics: [
    { label: 'Active accounts', value: '12', detail: '4 ready for analysis' },
    { label: 'Saved reports', value: '38', detail: '8 created this week' },
    { label: 'Flow runs', value: '146', detail: 'Mock VIA executions' },
  ],
  cards: [
    {
      eyebrow: 'Analysis',
      title: 'Meta ads analysis',
      description: 'Submit a mock ad account and objective into the Meta ads VIA sample flow.',
      linkLabel: 'Open Meta ads',
      href: '/meta-ads-analysis',
    },
    {
      eyebrow: 'Analysis',
      title: 'Facebook pages analysis',
      description: 'Submit a mock page and topic into the Facebook pages VIA sample flow.',
      linkLabel: 'Open Facebook pages',
      href: '/facebook-pages-analysis',
    },
    {
      eyebrow: 'Shared UI',
      title: 'Website and app reuse',
      description: 'The login page embeds shared UI from sv5x-common, while sv5 owns the product workflows and VIA calls.',
      linkLabel: 'Open login',
      href: '/login',
      wide: true,
    },
  ],
};
