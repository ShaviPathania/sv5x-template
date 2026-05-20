import { Component, inject, input, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import type { ContactSubmitter } from '@sv5x/common';
import { St5ButtonBlock } from '../../blocks/button/button.block';
import { St5FieldBlock } from '../../blocks/field/field.block';
import { St5ContactPanelPattern } from '../../patterns/contact-panel/contact-panel.pattern';
import type { LoginRequest, LoginViewModel } from './login.vm';

type LoginField = keyof LoginRequest;

@Component({
  selector: 'st5-login-page',
  imports: [ReactiveFormsModule, St5ButtonBlock, St5FieldBlock, St5ContactPanelPattern],
  template: `
    <section class="grid grid-cols-[minmax(0,0.9fr)_minmax(22rem,1.1fr)] items-start gap-4 max-[980px]:grid-cols-1">
      <article class="rounded-lg border border-sv5-line bg-sv5-panel p-4 shadow-sv5">
        <div class="mb-4 grid gap-2">
          <p class="text-xs font-extrabold uppercase tracking-[0.08em] text-sv5-blue">Local auth sample</p>
          <h2 class="m-0 text-2xl font-bold tracking-normal">Login form</h2>
          <p class="m-0 leading-6 text-sv5-muted">
            Use a local-only form to model authenticated app entry without adding a real auth provider.
          </p>
        </div>

        <form class="grid gap-4" [formGroup]="form" (ngSubmit)="submitLogin()">
          <st5-field-block label="Email" [error]="errorFor('email')">
            <input
              class="min-h-11 w-full rounded-lg border border-sv5-line bg-sv5-panel-muted px-3 text-sv5-ink outline-none focus:border-sv5-blue"
              type="email"
              formControlName="email"
              autocomplete="email"
              placeholder="operator@example.com"
            >
          </st5-field-block>

          <st5-field-block label="Password" [error]="errorFor('password')">
            <input
              class="min-h-11 w-full rounded-lg border border-sv5-line bg-sv5-panel-muted px-3 text-sv5-ink outline-none focus:border-sv5-blue"
              type="password"
              formControlName="password"
              autocomplete="current-password"
              placeholder="sample-password"
            >
          </st5-field-block>

          <st5-button-block buttonType="submit" tone="blue" text="Sign in locally" />

          <p class="rounded-lg bg-sv5-panel-muted p-3 leading-6 text-sv5-muted">
            {{ vm().status }}
          </p>
        </form>
      </article>

      <st5-contact-panel-pattern [submitContact]="submitContact()" />
    </section>
  `,
})
export class St5LoginPage {
  private readonly formBuilder = inject(FormBuilder);

  readonly vm = input.required<LoginViewModel>();
  readonly submitContact = input.required<ContactSubmitter>();
  readonly loginRequested = output<LoginRequest>();

  protected readonly submitAttempted = signal(false);
  protected readonly form = this.formBuilder.nonNullable.group({
    email: ['operator@example.com', [Validators.required, Validators.email]],
    password: ['sample-password', [Validators.required, Validators.minLength(8)]],
  });

  protected errorFor(field: LoginField): string | null {
    const control = this.form.controls[field];
    if (!control.invalid || (!control.touched && !this.submitAttempted())) return null;
    if (control.hasError('required')) return `Enter your ${field}.`;
    if (field === 'email' && control.hasError('email')) return 'Enter a valid email address.';
    if (control.hasError('minlength')) return 'Password must be at least 8 characters.';
    return 'Review this field.';
  }

  protected submitLogin(): void {
    this.submitAttempted.set(true);
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.loginRequested.emit(this.form.getRawValue());
  }
}
