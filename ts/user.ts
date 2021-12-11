import { IUser } from './interfaces/user.interface';

export class User implements IUser {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get userName(): string {
    return this.name;
  }

  get userAge(): number {
    return this.age;
  }

  incrementAge(): void {
    this.age++;
  }
}
