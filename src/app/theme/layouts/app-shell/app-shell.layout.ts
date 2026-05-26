import { Component, Input } from '@angular/core';
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
  mainClass?: string;
  showPageHeader?: boolean;
  viaUrl: string | null;
  navItems: AppShellNavItem[];
};

@Component({
  selector: 'st5-app-shell-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="min-h-screen">
      <header class="sticky top-0 z-20 border-b border-sv5-line bg-[#0a0d13]/95 text-slate-50 backdrop-blur">
        <div class="flex min-h-16 flex-wrap items-center gap-3 px-5 py-3">
          <a
            class="mr-2 flex min-w-0 items-center gap-3 rounded-lg p-1.5"
            [routerLink]="vm.brand.homePath"
            [attr.aria-label]="vm.brand.name + ' dashboard'"
          >
            <span
              class="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-sv5-teal to-sv5-blue font-black text-[#071018]"
            >
              {{ vm.brand.mark }}
            </span>
            <span>
              <strong class="block">{{ vm.brand.name }}</strong>
              <small class="mt-0.5 block text-xs text-slate-400">{{ vm.brand.description }}</small>
            </span>
          </a>

          <nav class="flex min-w-0 flex-1 flex-wrap items-center gap-1" aria-label="Primary">
            @for (item of vm.navItems; track item.path) {
              <a
                class="inline-flex min-h-10 items-center rounded-lg px-3 font-bold text-slate-300 hover:bg-slate-400/10 hover:text-white focus-visible:bg-slate-400/10 focus-visible:text-white"
                routerLinkActive="bg-sv5-blue/20 text-slate-50 shadow-[inset_0_-3px_0_var(--sv5-blue)]"
                [routerLink]="item.path"
              >
                {{ item.label }}
              </a>
            }
          </nav>

          @if (vm.viaUrl) {
            <a
              class="ml-auto inline-flex min-h-10 items-center rounded-full border border-sv5-line bg-sv5-panel px-4 font-extrabold text-sv5-blue"
              [href]="vm.viaUrl"
              target="_blank"
              rel="noreferrer"
            >
              Open VIA
            </a>
          }
        </div>
      </header>

      @if (vm.showPageHeader !== false) {
        <section
          class="flex min-h-[4.75rem] items-center justify-between gap-4 border-b border-sv5-line bg-[#0f131c]/85 px-5 py-4 backdrop-blur max-[560px]:items-stretch max-[560px]:flex-col"
        >
          <div>
            <p class="mb-1 text-xs font-extrabold uppercase tracking-[0.08em] text-sv5-muted">
              {{ vm.eyebrow }}
            </p>
            <h1 class="m-0 text-[1.4rem] font-bold tracking-normal">{{ vm.title }}</h1>
          </div>
        </section>
      }

      <main [class]="vm.mainClass ?? 'w-full p-4'">
        <router-outlet />
      </main>
    </div>
  `,
})
export class St5AppShellLayout {
  @Input()
  vm!: AppShellViewModel;
}
