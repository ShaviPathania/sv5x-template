import { Component, Input } from '@angular/core';

@Component({
  selector: 'st5-loading-state-block',
  template: `
    @if (visible) {
      <div class="rounded-lg border border-sv5-line bg-sv5-panel-muted p-4 text-sm font-bold text-sv5-muted">
        {{ label }}
      </div>
    }
  `,
})
export class St5LoadingStateBlock {
  @Input()
  visible = false;

  @Input()
  label = 'Loading...';
}
