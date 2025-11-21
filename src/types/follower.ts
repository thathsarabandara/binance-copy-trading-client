import type { SubscriptionState } from './enums';

export interface Follower {
  id: string;
  userId: string;
  userName?: string;
  userEmail: string;
  copyCapital: number;
  profit: number;
  profitPercent: number;
  joinDate: string;
  status: SubscriptionState;
  lastActivityAt?: string;
}

export interface FollowerStats {
  totalFollowers: number;
  activeFollowers: number;
  totalCapitalCopying: number;
  pendingApprovals: number;
}
