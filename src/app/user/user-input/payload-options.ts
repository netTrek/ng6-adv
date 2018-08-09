export interface PayloadOptions {
  value?: string;
  validators?: { required?: boolean, minLength?: number, maxLength?: number, email?: boolean, isFutur?: boolean };
  type?: string;
}
