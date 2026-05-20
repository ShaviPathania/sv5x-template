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

export type LoginPageIO = {
  onLogin: (request: LoginRequest) => Promise<LoginResult>;
  contact: ContactFormIO;
};

export const mockLoginPageIO: LoginPageIO = {
  contact: mockContactFormIO,
  onLogin: async (request) => ({
    success: true,
    message: `Template preview session ready for ${request.email}.`,
  }),
};
