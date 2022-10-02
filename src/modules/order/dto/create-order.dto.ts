// ENUMS

export class CreateOrderDto {
  position: 'LONG' | 'SHORT';
  ticker: string;
  entryPrice: number;
  status?: 'Open' | 'Active' | 'Finished' | 'Canceled';
  type?: 'Limit' | 'Market' = 'Limit';
  stopLossPrice?: number;
  safeTakeProfitPrice?: number;
  takeProfitPrice?: number;
  moveStopLossToEntryOnSTP?: boolean = true;
}
