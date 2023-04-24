import { UserData } from "./user.model";

export interface AuthUser {
  token: string;
  error?: string;
  user: UserData;
}
