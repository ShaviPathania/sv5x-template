import { Component } from '@angular/core';

@Component({
  selector: 'st5-blank-layout',
  template: `
    <main class="min-h-screen bg-sv5-bg text-sv5-ink">
      <ng-content />
    </main>
  `,
})
export class St5BlankLayout {}
