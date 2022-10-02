// ENUMS

export interface Cat {
  position: 'LONG' | 'SHORT';
  ticker: string;
  entryPrice: number;
  status?: 'Open' | 'Active' | 'Finished' | 'Canceled';
  type?: 'Limit' | 'Market';
  stopLossPrice?: number;
  safeTakeProfitPrice?: number;
  takeProfitPrice?: number;
  moveStopLossToEntryOnSTP?: boolean;
}
