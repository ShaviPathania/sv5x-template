export type LoginViewModel = {
  status: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export const sampleLoginViewModel: LoginViewModel = {
  status: 'This template accepts any valid-looking email and password.',
};
