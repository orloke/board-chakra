export interface SigInType {
  email: string;
  password: string;
}

export interface CreateUserForm extends SigInType {
  name: string;
  confirmPassword: string;
}
