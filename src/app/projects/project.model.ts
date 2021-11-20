import { User } from "../users/user.model";

export interface Project{
  id: string,
  name: string,
  status: string,
  totalTurnover: number,
  ownTurnover: number,
  collaborators: string[],
}
