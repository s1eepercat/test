export interface IUser {
  get userName(): string;
  get userAge(): number;
  incrementAge(): void;
}