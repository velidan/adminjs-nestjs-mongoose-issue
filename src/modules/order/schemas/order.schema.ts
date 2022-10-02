import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

// ENUMS

@Schema()
export class Order {
  @Prop({ required: true })
  positionType: 'LONG' | 'SHORT';

  @Prop({ required: true })
  ticker: string;

  @Prop()
  status: 'Open' | 'Active' | 'Finished' | 'Canceled';

  @Prop({ default: 'Limit' })
  type: 'Limit' | 'Market';

  @Prop({ required: true })
  entryPrice: number;

  @Prop()
  stopLossPrice: number;

  @Prop()
  safeTakeProfitPrice: number;

  @Prop()
  takeProfitPrice: number;

  @Prop({ default: true })
  moveStopLossToEntryOnSTP: boolean;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
