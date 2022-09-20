export interface SigInType {
  email: string;
  password: string;
}

export interface CreateUserForm extends SigInType {
  name: string;
  confirmPassword: string;
}

export interface User {
  name: string;
  email: string;
  createdAt: string;
  id: string;
}

export interface DateUser {
  users: User[];
  total: number;
}
