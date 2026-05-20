import { Component, signal } from '@angular/core';
import type { ContactSubmitter } from '@sv5x/common';
import { St5AuthLayout } from '../layouts/auth/auth.layout';
import { St5LoginPage } from '../pages/login/login.page';
import type { LoginRequest, LoginViewModel } from '../pages/login/login.vm';
import { sampleLoginViewModel } from '../pages/login/login.vm';

@Component({
  selector: 'st5-login-preview-page',
  imports: [St5AuthLayout, St5LoginPage],
  template: `
    <st5-auth-layout>
      <st5-login-page
        [vm]="vm()"
        [submitContact]="submitContact"
        (loginRequested)="login($event)"
      />
    </st5-auth-layout>
  `,
})
export class LoginPreviewPage {
  protected readonly vm = signal<LoginViewModel>(sampleLoginViewModel);

  protected readonly submitContact: ContactSubmitter = async (payload) => ({
    success: true,
    message: `Template preview received ${payload.name}.`,
    received: payload,
  });

  protected login(request: LoginRequest): void {
    this.vm.set({
      status: `Template preview session ready for ${request.email}.`,
    });
  }
}
