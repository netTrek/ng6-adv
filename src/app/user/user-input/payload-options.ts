export interface PayloadOptions {
  value?: string;
  validators?: { required?: boolean, minLength?: number, maxLength?: number, email?: boolean };
  type?: string;
}
