import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export type AppShellNavItem = {
  label: string;
  path: string;
};

export type AppShellViewModel = {
  brand: {
    mark: string;
    name: string;
    description: string;
    homePath: string;
  };
  eyebrow: string;
  title: string;
  viaUrl: string | null;
  navItems: AppShellNavItem[];
};

@Component({
  selector: 'st5-app-shell-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="grid min-h-screen grid-cols-[17rem_minmax(0,1fr)] max-[900px]:grid-cols-1">
      <aside
        class="sticky top-0 flex h-screen flex-col gap-6 border-r border-sv5-line bg-[#0a0d13] p-4 text-slate-50 max-[900px]:static max-[900px]:h-auto"
      >
        <a
          class="flex items-center gap-3 rounded-lg p-2"
          [routerLink]="vm().brand.homePath"
          [attr.aria-label]="vm().brand.name + ' dashboard'"
        >
          <span
            class="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-sv5-teal to-sv5-blue font-black text-[#071018]"
          >
            {{ vm().brand.mark }}
          </span>
          <span>
            <strong class="block">{{ vm().brand.name }}</strong>
            <small class="mt-0.5 block text-xs text-slate-400">{{ vm().brand.description }}</small>
          </span>
        </a>

        <nav class="grid gap-1 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1" aria-label="Primary">
          @for (item of vm().navItems; track item.path) {
            <a
              class="min-h-11 rounded-lg px-3 py-3 font-bold text-slate-300 hover:bg-slate-400/10 hover:text-white focus-visible:bg-slate-400/10 focus-visible:text-white"
              routerLinkActive="bg-sv5-blue/20 text-slate-50 shadow-[inset_3px_0_0_var(--sv5-blue)]"
              [routerLink]="item.path"
            >
              {{ item.label }}
            </a>
          }
        </nav>
      </aside>

      <div class="min-w-0">
        <header
          class="flex min-h-[5.5rem] items-center justify-between gap-4 border-b border-sv5-line bg-[#0f131c]/85 px-5 py-4 backdrop-blur max-[560px]:items-stretch max-[560px]:flex-col"
        >
          <div>
            <p class="mb-1 text-xs font-extrabold uppercase tracking-[0.08em] text-sv5-muted">
              {{ vm().eyebrow }}
            </p>
            <h1 class="m-0 text-[1.4rem] font-bold tracking-normal">{{ vm().title }}</h1>
          </div>

          @if (vm().viaUrl) {
            <a
              class="inline-flex min-h-10 items-center rounded-full border border-sv5-line bg-sv5-panel px-4 font-extrabold text-sv5-blue"
              [href]="vm().viaUrl"
              target="_blank"
              rel="noreferrer"
            >
              Open VIA
            </a>
          }
        </header>

        <main class="p-5">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
})
export class St5AppShellLayout {
  readonly vm = input.required<AppShellViewModel>();
}
