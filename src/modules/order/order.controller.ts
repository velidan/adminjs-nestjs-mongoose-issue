import { Controller, Get, Post, Req, Query, Body } from '@nestjs/common';
import { Request } from 'express';

import { OrderService } from './order.service';
import { Order } from './schemas';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  allOrders(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Get('order')
  order(@Query() request: Request): string {
    console.log('req', request);
    return 'return order';
  }

  @Post('create')
  create(@Body() body: CreateOrderDto): Promise<Order> {
    console.log('req body', body);
    return this.orderService.create(body);
  }
}
