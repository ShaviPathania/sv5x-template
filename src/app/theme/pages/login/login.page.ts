import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { St5ButtonBlock } from '../../blocks/button/button.block';
import { St5FieldBlock } from '../../blocks/field/field.block';
import { St5ContactPanelPattern } from '../../patterns/contact-panel/contact-panel.pattern';
import type { LoginPageIO, LoginRequest } from './login.io';
import { mockLoginPageIO } from './login.io';

type LoginField = keyof LoginRequest;
type LoginForm = FormGroup<{
  email: FormControl<string>;
  password: FormControl<string>;
}>;

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

          <st5-button-block
            buttonType="submit"
            tone="blue"
            [disabled]="isLoading"
            [text]="isLoading ? 'Signing in...' : 'Sign in locally'"
          />

          <a
            class="inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-sv5-soft px-4 font-extrabold text-white transition hover:bg-slate-600/70 focus-visible:bg-slate-600/70"
            [href]="io.websiteHome.href"
          >
            {{ io.websiteHome.label }}
          </a>

          <p class="rounded-lg bg-sv5-panel-muted p-3 leading-6 text-sv5-muted">
            {{ status }}
          </p>
        </form>
      </article>

      <st5-contact-panel-pattern [io]="io.contact" />
    </section>
  `,
})
export class St5LoginPage {
  @Input()
  io: LoginPageIO = mockLoginPageIO;

  protected isLoading = false;
  protected status = 'This template accepts any valid-looking email and password.';
  protected submitAttempted = false;
  protected readonly form: LoginForm;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.nonNullable.group({
      email: ['operator@example.com', [Validators.required, Validators.email]],
      password: ['sample-password', [Validators.required, Validators.minLength(8)]],
    });
  }

  protected errorFor(field: LoginField): string | null {
    const control = this.form.controls[field];
    if (!control.invalid || (!control.touched && !this.submitAttempted)) return null;
    if (control.hasError('required')) return `Enter your ${field}.`;
    if (field === 'email' && control.hasError('email')) return 'Enter a valid email address.';
    if (control.hasError('minlength')) return 'Password must be at least 8 characters.';
    return 'Review this field.';
  }

  protected async submitLogin(): Promise<void> {
    this.submitAttempted = true;
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.isLoading = true;
    this.status = 'Signing in...';

    try {
      const result = await this.io.onLogin(this.form.getRawValue());
      this.status = result.message;
    } catch (error) {
      this.status = this.readError(error);
    } finally {
      this.isLoading = false;
    }
  }

  private readError(error: unknown): string {
    return error instanceof Error ? error.message : 'Login failed. Please try again.';
  }
}
