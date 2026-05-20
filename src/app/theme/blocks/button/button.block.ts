import { Component, Input } from '@angular/core';

export type St5ButtonTone = 'blue' | 'teal' | 'muted';
export type St5ButtonType = 'button' | 'submit';

@Component({
  selector: 'st5-button-block',
  template: `
    <button
      class="inline-flex min-h-11 w-fit items-center justify-center rounded-full border-0 px-4 font-extrabold transition disabled:cursor-wait disabled:opacity-70"
      [class.bg-sv5-blue]="tone === 'blue'"
      [class.bg-sv5-teal]="tone === 'teal'"
      [class.bg-sv5-soft]="tone === 'muted'"
      [class.text-white]="tone !== 'teal'"
      [class.text-slate-950]="tone === 'teal'"
      [type]="buttonType"
      [disabled]="disabled"
    >
      {{ label }}
      <ng-content />
    </button>
  `,
})
export class St5ButtonBlock {
  @Input()
  buttonType: St5ButtonType = 'button';

  @Input()
  disabled = false;

  @Input()
  tone: St5ButtonTone = 'blue';

  @Input()
  text = '';

  get label(): string {
    return this.text;
  }
}
