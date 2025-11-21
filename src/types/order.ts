import type { OrderSide, OrderType, OrderStatus, ExecutionType } from './enums';

export interface Order {
  id: string;
  clientOrderId?: string;
  accountId: string;
  symbol: string;
  side: OrderSide;
  type: OrderType;
  price?: number;
  quantity: number;
  executedQty?: number;
  status: OrderStatus;
  filledAvgPrice?: number;
  createdAt: string;
  updatedAt?: string;
  executionType?: ExecutionType;
  rejectsReason?: string;
}
