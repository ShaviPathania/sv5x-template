import { Component, computed, input } from '@angular/core';
import { St5LoadingStateBlock } from '../../blocks/loading-state/loading-state.block';
import { St5StatusPillBlock, type StatusPillTone } from '../../blocks/status-pill/status-pill.block';
import type { AnalysisResultViewModel } from './analysis-result.vm';

@Component({
  selector: 'st5-analysis-result-pattern',
  imports: [St5LoadingStateBlock, St5StatusPillBlock],
  template: `
    <article class="grid gap-4 rounded-lg border border-sv5-line bg-sv5-panel p-4 shadow-sv5">
      <div class="grid gap-2">
        <p class="text-xs font-extrabold uppercase tracking-[0.08em]" [class.text-sv5-teal]="vm().accent === 'teal'" [class.text-sv5-blue]="vm().accent === 'blue'">
          Result
        </p>
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div class="grid gap-2">
            <h2 class="m-0 text-2xl font-bold tracking-normal">{{ vm().title }}</h2>
            <p class="m-0 leading-6 text-sv5-muted">{{ vm().text }}</p>
          </div>
          <st5-status-pill-block [label]="vm().state" [tone]="statusTone()" />
        </div>
      </div>

      <st5-loading-state-block [visible]="vm().state === 'running'" label="Submitting request to the VIA-backed sample flow." />

      @if (vm().result; as analysis) {
        <div
          class="w-fit min-w-32 rounded-lg p-4"
          [class.bg-sv5-teal]="vm().accent === 'teal'"
          [class.bg-sv5-blue]="vm().accent === 'blue'"
          [class.text-slate-950]="true"
        >
          <span class="block text-sm font-bold opacity-75">Score</span>
          <strong class="block text-4xl leading-none">{{ analysis.score }}</strong>
        </div>

        <div class="grid grid-cols-3 gap-3 max-[980px]:grid-cols-1">
          @for (metric of analysis.metrics; track metric.label) {
            <div class="grid gap-1 rounded-lg border border-sv5-line bg-sv5-panel-muted p-3">
              <span class="text-sm text-sv5-muted">{{ metric.label }}</span>
              <strong class="text-lg">{{ metric.value }}</strong>
              <small class="text-sm text-sv5-muted">{{ metric.trend }}</small>
            </div>
          }
        </div>

        <ul class="m-0 grid list-none gap-3 p-0">
          @for (recommendation of analysis.recommendations; track recommendation.title) {
            <li
              class="grid gap-1 border-l-4 bg-sv5-panel-muted p-3"
              [class.border-sv5-teal]="vm().accent === 'teal'"
              [class.border-sv5-blue]="vm().accent === 'blue'"
            >
              <strong>{{ recommendation.title }}</strong>
              <span class="leading-6 text-sv5-muted">{{ recommendation.detail }}</span>
            </li>
          }
        </ul>
      }

      <pre class="max-h-96 overflow-auto whitespace-pre-wrap rounded-lg border border-sv5-line bg-[#070a0f] p-4 text-sm text-[#dce7f5]">{{ vm().rawOutput }}</pre>
    </article>
  `,
})
export class St5AnalysisResultPattern {
  readonly vm = input.required<AnalysisResultViewModel>();

  protected readonly statusTone = computed<StatusPillTone>(() => {
    if (this.vm().state === 'success') return 'success';
    if (this.vm().state === 'error') return 'danger';
    if (this.vm().state === 'running') return 'warning';
    return 'neutral';
  });
}
