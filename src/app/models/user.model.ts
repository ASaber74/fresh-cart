export interface User {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
