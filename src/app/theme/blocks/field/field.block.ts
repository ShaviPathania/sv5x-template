import { Component, input } from '@angular/core';

@Component({
  selector: 'st5-field-block',
  template: `
    <label class="grid gap-2">
      <span class="text-sm font-extrabold">{{ label() }}</span>
      <ng-content />
      @if (hint()) {
        <span class="text-sm text-sv5-muted">{{ hint() }}</span>
      }
      @if (error()) {
        <span class="text-sm font-bold text-sv5-red">{{ error() }}</span>
      }
    </label>
  `,
})
export class St5FieldBlock {
  readonly label = input.required<string>();
  readonly hint = input<string | null>(null);
  readonly error = input<string | null>(null);
}
