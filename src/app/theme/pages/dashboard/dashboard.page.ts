import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { St5MetricCardBlock } from '../../blocks/metric-card/metric-card.block';
import type { DashboardViewModel } from './dashboard.vm';

@Component({
  selector: 'st5-dashboard-page',
  imports: [RouterLink, St5MetricCardBlock],
  template: `
    <section class="grid gap-4">
      <div class="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
        @for (metric of vm().metrics; track metric.label) {
          <st5-metric-card-block [metric]="metric" />
        }
      </div>

      <div class="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
        @for (card of vm().cards; track card.href) {
          <article
            class="flex min-h-52 flex-col justify-between gap-5 rounded-lg border border-sv5-line bg-sv5-panel p-4 shadow-sv5 max-[900px]:col-auto"
            [class.col-span-2]="card.wide"
          >
            <div>
              <p class="mb-2 text-xs font-extrabold uppercase tracking-[0.08em] text-sv5-blue">{{ card.eyebrow }}</p>
              <h2 class="mb-3 text-2xl font-bold tracking-normal">{{ card.title }}</h2>
              <p class="leading-6 text-sv5-muted">{{ card.description }}</p>
            </div>

            <a
              class="inline-flex min-h-11 w-fit items-center rounded-full bg-sv5-blue px-4 font-extrabold text-white"
              [routerLink]="card.href"
            >
              {{ card.linkLabel }}
            </a>
          </article>
        }
      </div>
    </section>
  `,
})
export class St5DashboardPage {
  readonly vm = input.required<DashboardViewModel>();
}
