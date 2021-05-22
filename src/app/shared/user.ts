import { Role } from "./role";

export class User {
  constructor(
    public id: number,
    public email: String,
    public vaccinated_id: number,
    public roles: Role[],
    public password?: String,
    public email_verified_at?: Date
  ) {}
}
