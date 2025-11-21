import type { UserRole } from './enums';

export interface User {
  id: string;
  email: string;
  name?: string;
  role: UserRole;
  createdAt: string;
  updatedAt?: string;
  avatar?: string;
}
