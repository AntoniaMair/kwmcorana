import { Role } from "./role";

export class User {
  constructor(
    public id: number,
    public email: string,
    public vaccinated_id: number,
    public roles: Role[],
    public password?: string,
    public email_verified_at?: Date
  ) {}
}
