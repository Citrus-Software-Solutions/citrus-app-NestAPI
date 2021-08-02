import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMQAdapter } from './rabbittmq.adapter';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RABBITMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://bwstpcim:ZLwKvA5AI64cEex6dfq7dP7-UAWU7Wp9@gull.rmq.cloudamqp.com/bwstpcim',
          ],
          queue: 'event_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  providers: [RabbitMQAdapter],
  exports: [RabbitMQAdapter],
})
export class RabbitMqModule {}
