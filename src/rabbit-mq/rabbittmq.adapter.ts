import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IEventBus } from './eventBus.interface';

export class RabbitMQAdapter implements IEventBus {
  constructor(
    @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy,
  ) {}

  public async emitEvent(pattern: string, message: any) {
    this.client.emit<any>(pattern, message);
  }
}
