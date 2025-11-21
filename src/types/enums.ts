export type OrderSide = 'BUY' | 'SELL';
export type OrderType = 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT';
export type OrderStatus = 'NEW' | 'PARTIALLY_FILLED' | 'FILLED' | 'CANCELED' | 'REJECTED' | 'EXPIRED';
export type SubscriptionState = 'ACTIVE' | 'PAUSED' | 'CANCELLED' | 'EXPIRED';
export type ExecutionType = 'MAKER' | 'TAKER';
export type NotificationLevel = 'info' | 'warning' | 'error' | 'success';
export type UserRole = 'MASTER' | 'FOLLOWER' | 'ADMIN';
