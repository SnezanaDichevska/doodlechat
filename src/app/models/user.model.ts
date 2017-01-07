export class User {

  email: string;
  password: string;

  constructor(email?: string, password?: string) {
    if (email) this.email = email;
    if (password) this.password = password;
  }
}
