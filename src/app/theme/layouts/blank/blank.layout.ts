import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'st5-blank-layout',
  imports: [RouterOutlet],
  template: `
    <main class="min-h-screen bg-sv5-bg text-sv5-ink">
      <router-outlet />
    </main>
  `,
})
export class St5BlankLayout {}
