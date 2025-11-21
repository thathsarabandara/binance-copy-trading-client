export interface Earning {
  id: string;
  masterId: string;
  followerId?: string;
  amount: number;
  type: 'SUBSCRIPTION_FEE' | 'PERFORMANCE_FEE';
  status: 'PENDING' | 'APPROVED' | 'PAID' | 'REJECTED';
  createdAt: string;
  paidAt?: string;
}

export interface Payout {
  id: string;
  masterId: string;
  amount: number;
  status: 'PENDING' | 'APPROVED' | 'COMPLETED' | 'REJECTED';
  requestedAt: string;
  completedAt?: string;
  method?: string;
  details?: string;
}

export interface EarningsStats {
  totalEarnings: number;
  pendingWithdrawals: number;
  completedPayouts: number;
  availableBalance: number;
}
