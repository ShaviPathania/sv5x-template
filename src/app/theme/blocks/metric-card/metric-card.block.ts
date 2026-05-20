import { Component, Input } from '@angular/core';

export type MetricCardViewModel = {
  label: string;
  value: string;
  detail: string;
};

@Component({
  selector: 'st5-metric-card-block',
  template: `
    <article class="grid gap-1 rounded-lg border border-sv5-line bg-sv5-panel p-4 shadow-sv5">
      <span class="text-sm text-sv5-muted">{{ metric.label }}</span>
      <strong class="text-3xl leading-none">{{ metric.value }}</strong>
      <small class="text-sm text-sv5-muted">{{ metric.detail }}</small>
    </article>
  `,
})
export class St5MetricCardBlock {
  @Input()
  metric!: MetricCardViewModel;
}
