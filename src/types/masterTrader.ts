export interface MasterTrader {
  id: string;
  username: string;
  displayName: string;
  avatarUrl?: string;
  profitPercentage: number;
  winRate: number;
  riskScore: number;
  monthlyReturn: number;
  followersCount: number;
  minimumInvestment: number;
  totalCapitalFollowing: number;
  verified: boolean;
  joinedDate: string;
  strategyDescription: string;
  totalTrades: number;
  averageHoldTime: string;
  maxDrawdown: number;
  sharpeRatio?: number;
  subscriptionFee?: number;
  performanceHistory: PerformanceData[];
  reviews?: TraderReview[];
}

export interface PerformanceData {
  date: string;
  profitPercentage: number;
  volume: number;
}

export interface TraderReview {
  id: string;
  userId: string;
  username: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface MarketplaceFilter {
  minProfit?: number;
  maxProfit?: number;
  minRisk?: number;
  maxRisk?: number;
  minWinRate?: number;
  sortBy: 'profit' | 'winRate' | 'risk' | 'followers' | 'monthlyReturn';
  sortOrder: 'asc' | 'desc';
  period?: '7d' | '30d' | '90d' | 'all';
}

export interface FollowerCopySettings {
  id?: string;
  masterTraderId: string;
  copyMethod: 'fixed' | 'percentage' | 'proportional';
  fixedAmount?: number;
  percentageOfBalance?: number;
  proportionalMultiplier?: number;
  maxDailyLoss: number;
  maxTotalAllocation: number;
  tradeSizeMultiplier: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface FollowerDashboardStats {
  totalInvestedCapital: number;
  totalProfitLoss: number;
  todayPnL: number;
  activeMasterTraders: number;
  openTrades: number;
  totalDrawdown: number;
  riskStatus: 'safe' | 'warning' | 'danger';
  performanceData: PerformanceData[];
}

export interface CopiedTrade {
  id: string;
  masterTraderId: string;
  masterTraderName: string;
  symbol: string;
  side: 'BUY' | 'SELL';
  entryPrice: number;
  currentPrice: number;
  quantity: number;
  leverage: number;
  pnl: number;
  pnlPercentage: number;
  openTime: string;
  status: 'open' | 'closed';
  closePrice?: number;
  closeTime?: string;
}

export interface FollowerBalance {
  spotBalance: number;
  futuresBalance: number;
  availableMargin: number;
  usedMargin: number;
  unrealizedPnL: number;
  marginRatio: number;
  totalEquity: number;
}

export interface FollowerNotification {
  id: string;
  type: 'trade_copied' | 'trade_closed' | 'copy_failed' | 'api_disconnected' | 'high_drawdown' | 'subscription_expiring' | 'margin_warning';
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  createdAt: string;
  metadata?: {
    tradeId?: string;
    masterTraderId?: string;
    amount?: number;
  };
}

export interface FollowedMasterTrader {
  masterTrader: MasterTrader;
  copySettings: FollowerCopySettings;
  allocation: number;
  profitGenerated: number;
  status: 'active' | 'paused';
  startedAt: string;
  lastSyncAt: string;
}
