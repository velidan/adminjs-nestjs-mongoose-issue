import { Controller, Get, Post } from '@nestjs/common';

@Controller('trade')
export class TradeController {
  @Get()
  trade(): string {
    return 'return trade';
  }
}
