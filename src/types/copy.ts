import type { SubscriptionState } from './enums';

export interface CopySettings {
  id?: string;
  masterId: string;
  copyRatioMode: 'FIXED_AMOUNT' | 'PERCENTAGE' | 'PROPORTIONAL';
  copyRatioValue: number;
  maxDrawdownPercent?: number;
  lotSizeMultiplier?: number;
  dailyLossLimit?: number;
  enabled: boolean;
  autoAcceptFollowers: boolean;
  minFollowerBalance?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface SubscriptionRecord {
  id: string;
  followerId: string;
  masterId: string;
  settings: CopySettings;
  state: SubscriptionState;
  startedAt: string;
  pausedAt?: string;
  cancelledAt?: string;
}
