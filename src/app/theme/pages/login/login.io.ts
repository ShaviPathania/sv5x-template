import type { ContactFormIO } from '@sv5x/common';
import { mockContactFormIO } from '@sv5x/common';

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResult = {
  success: true;
  message: string;
};

export type LoginHomeLink = {
  label: string;
  href: string;
};

export type LoginPageIO = {
  onLogin: (request: LoginRequest) => Promise<LoginResult>;
  websiteHome: LoginHomeLink;
  contact: ContactFormIO;
};

export const mockLoginPageIO: LoginPageIO = {
  websiteHome: {
    label: 'Go to website home',
    href: '/',
  },
  contact: {
    ...mockContactFormIO,
    formId: 'sv5-login-contact',
    eyebrow: 'Shared component',
    heading: 'Contact from login',
    description: 'This second form is the shared contact form used by the website and app. The consuming app still owns the VIA submitter.',
    submitLabel: 'Send to sw5',
  },
  onLogin: async (request) => ({
    success: true,
    message: `Template preview session ready for ${request.email}.`,
  }),
};
