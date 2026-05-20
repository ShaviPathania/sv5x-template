import { Component, Input } from '@angular/core';

export type StatusPillTone = 'success' | 'warning' | 'danger' | 'neutral';

@Component({
  selector: 'st5-status-pill-block',
  template: `
    <span
      class="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em]"
      [class.bg-sv5-green]="tone === 'success'"
      [class.bg-sv5-amber]="tone === 'warning'"
      [class.bg-sv5-red]="tone === 'danger'"
      [class.bg-sv5-soft]="tone === 'neutral'"
      [class.text-slate-950]="tone === 'success' || tone === 'warning'"
      [class.text-white]="tone === 'danger' || tone === 'neutral'"
    >
      {{ label }}
    </span>
  `,
})
export class St5StatusPillBlock {
  @Input()
  label!: string;

  @Input()
  tone: StatusPillTone = 'neutral';
}
