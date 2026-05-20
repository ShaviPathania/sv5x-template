import { Component, Input } from '@angular/core';

@Component({
  selector: 'st5-analysis-form-pattern',
  template: `
    <section class="grid gap-4 rounded-lg border border-sv5-line bg-sv5-panel p-4 shadow-sv5">
      <div class="grid gap-2">
        <p class="text-xs font-extrabold uppercase tracking-[0.08em] text-sv5-teal">{{ eyebrow }}</p>
        <h2 class="m-0 text-2xl font-bold tracking-normal">{{ heading }}</h2>
        <p class="m-0 leading-6 text-sv5-muted">{{ description }}</p>
      </div>
      <ng-content />
    </section>
  `,
})
export class St5AnalysisFormPattern {
  @Input()
  eyebrow = 'Mock VIA flow';

  @Input()
  heading!: string;

  @Input()
  description!: string;
}
