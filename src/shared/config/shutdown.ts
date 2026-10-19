import { Inject, Injectable, OnApplicationShutdown } from '@nestjs/common';
import { Redis } from './redis.js';
import { Database } from './database.js';

export const MS_NAME = 'MS_NAME';

@Injectable()
export class Shutdown implements OnApplicationShutdown {
  constructor(@Inject(MS_NAME) private readonly msName: string) {}
  async onApplicationShutdown(signal?: string): Promise<void> {
    console.info(
      `Cerrando ${this.msName}${signal ? ` por señal ${signal}` : ''}...`,
    );
    await Promise.allSettled([Redis.disconnect(), Database.disconnect()]);
    console.info('Conexiones cerradas.');
  }
}
