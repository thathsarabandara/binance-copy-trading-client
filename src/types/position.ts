import type { OrderSide } from './enums';

export interface Position {
  id: string;
  accountId: string;
  symbol: string;
  side: OrderSide;
  size: number;
  entryPrice: number;
  markPrice?: number;
  unrealizedPnl?: number;
  unrealizedPnlPercent?: number;
  leverage?: number;
  marginType?: 'ISOLATED' | 'CROSS';
  openedAt: string;
  updatedAt?: string;
  liquidationPrice?: number;
}
