import mongoose from 'mongoose';
import { config } from '@shared/environments/load-env.js';

const { mongoUri, dbLogging } = config.server;

export class Mongo {
  private static isConnected = false;

  public static async connect(): Promise<void> {
    try {
      if (mongoose.connection.readyState === 1) {
        this.isConnected = true;
        return;
      }

      const uri = mongoUri;
      await mongoose.connect(uri!, {
        autoIndex: dbLogging === 'true',
      });

      this.isConnected = true;

      console.info('Conexión a MongoDB establecida');
    } catch (error) {
      this.isConnected = false;
      console.error('Error al conectar a MongoDB:', error);
      throw error;
    }
  }

  public static getConnection(): typeof mongoose {
    if (!this.isConnected || mongoose.connection.readyState !== 1) {
      throw new Error('La conexión a MongoDB no está establecida');
    }
    return mongoose;
  }

  public static async disconnect(): Promise<void> {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
      console.info('Conexión a MongoDB cerrada');
    }
    this.isConnected = false;
  }
}
