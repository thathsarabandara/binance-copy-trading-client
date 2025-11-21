import type { NotificationLevel } from './enums';

export interface Notification {
  id: string;
  userId?: string;
  title: string;
  message: string;
  level: NotificationLevel;
  read?: boolean;
  createdAt: string;
  related?: {
    type: 'ORDER' | 'TRADE' | 'SUBSCRIPTION' | 'SYSTEM' | 'API' | 'FOLLOWER';
    id?: string;
  };
}
