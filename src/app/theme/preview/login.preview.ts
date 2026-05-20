import { Component } from '@angular/core';
import type { LoginPageIO } from '../pages/login/login.io';
import { mockLoginPageIO } from '../pages/login/login.io';
import { St5LoginPage } from '../pages/login/login.page';

@Component({
  selector: 'st5-login-preview-page',
  imports: [St5LoginPage],
  template: `
    <st5-login-page [io]="io" />
  `,
})
export class LoginPreviewPage {
  protected readonly io: LoginPageIO = mockLoginPageIO;
}
