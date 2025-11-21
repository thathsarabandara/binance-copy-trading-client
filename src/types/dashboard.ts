export interface DashboardStats {
  balance: number;
  equity: number;
  totalFollowers: number;
  totalCapitalCopying: number;
  todayPnl: number;
  todayPnlPercent: number;
  weeklyPnl: number[];
  weeklyLabels: string[];
  openPositions: number;
  closedTradesToday: number;
}

export interface Alert {
  id: string;
  type: 'API_ERROR' | 'COPY_FAILED' | 'HIGH_DRAWDOWN' | 'FOLLOWER_LEFT' | 'SYSTEM';
  message: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
  resolved?: boolean;
}
