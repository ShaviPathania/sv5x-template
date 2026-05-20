import { Component, Input } from '@angular/core';

@Component({
  selector: 'st5-field-block',
  template: `
    <label class="grid gap-2">
      <span class="text-sm font-extrabold">{{ label }}</span>
      <ng-content />
      @if (hint) {
        <span class="text-sm text-sv5-muted">{{ hint }}</span>
      }
      @if (error) {
        <span class="text-sm font-bold text-sv5-red">{{ error }}</span>
      }
    </label>
  `,
})
export class St5FieldBlock {
  @Input()
  label!: string;

  @Input()
  hint: string | null = null;

  @Input()
  error: string | null = null;
}
