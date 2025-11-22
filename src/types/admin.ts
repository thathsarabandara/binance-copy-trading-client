// Admin Dashboard Types

export interface PlatformStats {
  totalMasterTraders: number;
  totalFollowers: number;
  totalCapitalCopying: number;
  totalPlatformEarnings: number;
  activeCopySessions: number;
  subscriptionRevenue: number;
}

export interface DailyProfit {
  date: string;
  profit: number;
}

export interface APIHealthStatus {
  status: 'healthy' | 'degraded' | 'down';
  lastCheck: string;
  responseTime: number;
  uptime: number;
}

export interface ErrorLog {
  id: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  source: string;
  resolved: boolean;
}

// Master Trader Management Types
export interface AdminMasterTrader {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  apiStatus: 'connected' | 'disconnected' | 'error';
  verificationStatus: 'pending' | 'verified' | 'rejected';
  followersCount: number;
  totalCapitalCopying: number;
  performanceStats: {
    totalPnL: number;
    winRate: number;
    totalTrades: number;
    roi: number;
  };
  earnings: number;
  accountStatus: 'active' | 'blocked' | 'suspended';
  joinedDate: string;
  tradingLimits: {
    maxFollowers: number;
    maxCapitalPerFollower: number;
  };
}

// Follower Management Types
export interface AdminFollower {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  balance: number;
  totalInvestedCapital: number;
  monthlyReturns: number;
  riskScore: number;
  masterTraders: Array<{
    id: string;
    name: string;
    capitalAllocated: number;
  }>;
  accountStatus: 'active' | 'suspended' | 'blocked';
  joinedDate: string;
}

// Copy Trading Monitoring Types
export interface CopyTradeLog {
  id: string;
  timestamp: string;
  masterTraderId: string;
  masterTraderName: string;
  followerId: string;
  followerName: string;
  symbol: string;
  action: 'BUY' | 'SELL';
  quantity: number;
  price: number;
  status: 'success' | 'failed' | 'pending';
  latency: number;
  errorMessage?: string;
}

export interface CopyEngineStats {
  totalCopiesExecuted: number;
  successfulCopies: number;
  failedCopies: number;
  averageLatency: number;
  engineStatus: 'running' | 'stopped' | 'maintenance';
}

export interface FailedCopyReason {
  reason: string;
  count: number;
  percentage: number;
}

// Trade History Types
export interface GlobalTrade {
  id: string;
  timestamp: string;
  masterTrader: {
    id: string;
    name: string;
  };
  follower: {
    id: string;
    name: string;
  };
  symbol: string;
  side: 'BUY' | 'SELL';
  entryPrice: number;
  exitPrice?: number;
  quantity: number;
  pnl: number;
  fees: number;
  copyDelay: number;
  status: 'open' | 'closed';
}

// Payout & Earnings Types
export interface WithdrawalRequest {
  id: string;
  masterTraderId: string;
  masterTraderName: string;
  amount: number;
  requestDate: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  paymentMethod: string;
  accountDetails: string;
}

export interface PlatformRevenue {
  subscriptionIncome: number;
  performanceFeeIncome: number;
  totalRevenue: number;
  monthlyBreakdown: Array<{
    month: string;
    subscription: number;
    performanceFee: number;
  }>;
}

// API Management Types
export interface APIKeyInfo {
  id: string;
  userId: string;
  userName: string;
  userType: 'master_trader' | 'follower';
  apiKey: string;
  permissions: string[];
  status: 'active' | 'expired' | 'invalid' | 'disabled';
  lastUsed: string;
  createdAt: string;
  expiresAt?: string;
  failedAuthAttempts: number;
}

// KYC Verification Types
export interface KYCDocument {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  documentType: 'passport' | 'id_card' | 'drivers_license';
  documentNumber: string;
  documentImages: string[];
  selfieImage?: string;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  reviewedBy?: string;
  reviewedAt?: string;
  notes?: string;
}

// Subscription Management Types
export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  billingCycle: 'monthly' | 'quarterly' | 'yearly';
  features: string[];
  performanceFeePercentage: number;
  maxFollowers: number;
  maxMasterTraders: number;
  freeTrialDays: number;
  status: 'active' | 'inactive';
  subscribersCount: number;
}

// Support Tickets Types
export interface SupportTicket {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  subject: string;
  description: string;
  issueType: 'technical' | 'billing' | 'account' | 'trading' | 'other';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  assignedTo?: string;
  attachments: string[];
  createdAt: string;
  updatedAt: string;
  responses: Array<{
    id: string;
    author: string;
    message: string;
    timestamp: string;
  }>;
}

// System Settings Types
export interface SystemSettings {
  maintenance: {
    enabled: boolean;
    message: string;
    estimatedEndTime?: string;
  };
  apiRateLimit: {
    requestsPerMinute: number;
    requestsPerHour: number;
  };
  trading: {
    minBalanceToFollow: number;
    defaultCopyRatio: number;
    maxFollowersPerTrader: number;
  };
  risk: {
    defaultRiskLimit: number;
    maxLeverageAllowed: number;
  };
  notifications: {
    emailEnabled: boolean;
    smsEnabled: boolean;
    pushEnabled: boolean;
  };
}

// Admin Accounts & Roles Types
export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'finance_admin' | 'support_admin' | 'viewer_admin';
  permissions: AdminPermission[];
  status: 'active' | 'inactive';
  lastLogin: string;
  createdAt: string;
}

export type AdminPermission =
  | 'view_dashboard'
  | 'manage_traders'
  | 'manage_followers'
  | 'view_trades'
  | 'manage_payouts'
  | 'manage_api'
  | 'manage_kyc'
  | 'manage_subscriptions'
  | 'manage_support'
  | 'manage_settings'
  | 'manage_admins';

export interface AdminRole {
  role: 'super_admin' | 'finance_admin' | 'support_admin' | 'viewer_admin';
  displayName: string;
  permissions: AdminPermission[];
}
