import { Component, EventEmitter, Input, Output } from '@angular/core';

export type AccountSelectorOption = {
  id: string;
  name: string;
  detail: string;
};

@Component({
  selector: 'st5-account-selector-pattern',
  template: `
    <div class="grid gap-3">
      @for (option of options; track option.id) {
        <button
          type="button"
          class="grid gap-1 rounded-lg border border-sv5-line bg-sv5-panel-muted p-3 text-left hover:border-sv5-blue"
          (click)="selected.emit(option)"
        >
          <strong>{{ option.name }}</strong>
          <span class="text-sm text-sv5-muted">{{ option.detail }}</span>
        </button>
      }
    </div>
  `,
})
export class St5AccountSelectorPattern {
  @Input()
  options: AccountSelectorOption[] = [];

  @Output()
  selected = new EventEmitter<AccountSelectorOption>();
}
