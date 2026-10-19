import { createClient, type RedisClientType } from 'redis';
import { config } from '@shared/environments/load-env.js';

const { redisHost, redisPort, redisPassword, redisUsername } = config.server;

export class Redis {
  private static client: RedisClientType | null = null;
  private static connectionPromise: Promise<void> | null = null;

  public static async connect(): Promise<void> {
    if (this.client?.isReady) return;

    if (this.connectionPromise) {
      return this.connectionPromise;
    }

    const client = createClient({
      socket: {
        host: redisHost,
        port: Number(redisPort),
        reconnectStrategy: (retries) => Math.min(retries * 500, 5000),
      },
      ...(redisUsername ? { username: redisUsername } : {}),
      ...(redisPassword ? { password: redisPassword } : {}),
    });

    this.client = client;

    client.on('error', (error) => {
      console.error('Error en Redis:', error);
    });

    client.on('reconnecting', () => {
      console.warn('Reconectando con Redis...');
    });

    this.connectionPromise = (async () => {
      try {
        await client.connect();
        console.info('Conexión con Redis establecida');
      } catch (error) {
        if (this.client === client) {
          this.client = null;
        }

        throw error;
      } finally {
        this.connectionPromise = null;
      }
    })();

    return this.connectionPromise;
  }

  public static async disconnect(): Promise<void> {
    const client = this.client;

    if (!client) return;

    this.client = null;

    if (client.isOpen) {
      await client.quit();
      console.info('Conexión con Redis cerrada');
    }
  }

  public static getClient(): RedisClientType {
    if (!this.client?.isReady) {
      throw new Error('Redis no está conectado');
    }

    return this.client;
  }

  public static async set(key: string, value: string): Promise<void> {
    await this.getClient().set(key, value);
  }

  public static async get(key: string): Promise<string | null> {
    return this.getClient().get(key);
  }

  public static async del(key: string): Promise<number> {
    return this.getClient().del(key);
  }
}
