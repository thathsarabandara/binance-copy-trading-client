export interface Trade {
  id: string;
  orderId: string;
  accountId: string;
  symbol: string;
  side: 'BUY' | 'SELL';
  entryPrice: number;
  exitPrice?: number;
  quantity: number;
  pnl?: number;
  pnlPercent?: number;
  fee?: number;
  feeAsset?: string;
  leverage?: number;
  duration?: number;
  openedAt: string;
  closedAt?: string;
  status: 'OPEN' | 'CLOSED';
}
