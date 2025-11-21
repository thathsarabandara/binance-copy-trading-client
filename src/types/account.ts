export interface ExchangeCredentials {
  exchange: string;
  apiKeyId: string;
  readOnly?: boolean;
  createdAt?: string;
  isConnected: boolean;
  permissions?: string[];
}

export interface AccountBalance {
  asset: string;
  free: number;
  locked: number;
  total: number;
}

export interface Account {
  id: string;
  userId: string;
  name?: string;
  exchangeCredentials: ExchangeCredentials;
  balances?: AccountBalance[];
  equity?: number;
  createdAt?: string;
}
