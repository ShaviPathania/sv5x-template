import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'st5-auth-layout',
  imports: [RouterOutlet],
  template: `
    <main class="grid min-h-screen place-items-center bg-sv5-bg px-4 py-8 text-sv5-ink">
      <section class="w-full max-w-5xl">
        <router-outlet />
      </section>
    </main>
  `,
})
export class St5AuthLayout {}
