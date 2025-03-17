import { DataSource } from "typeorm";
import { Client } from "pg";
import { config } from "../environments/load-env";
import {
  Action,
  LoginAttempt,
  Menu,
  MenuRole,
  Module,
  OtpUser,
  Parameter,
  Permission,
  Role,
  Session,
  User,
  File,
  Reference,
  Language,
  Template,
  Sitie,
  Micrositie,
  Page,
  PageDetail,
  Element as ElementCMS,
} from "../../entities/public-api";

const {
  dbHost,
  dbPort,
  dbUsername,
  dbPassword,
  dbDatabase,
  dbSynchronize,
  dbLogging,
} = config.server;

const entities = [
  Module,
  Permission,
  User,
  Role,
  LoginAttempt,
  MenuRole,
  Menu,
  OtpUser,
  Parameter,
  Session,
  Action,
  File,
  Reference,
  Language,
  Template,
  Sitie,
  Micrositie,
  Page,
  PageDetail,
  ElementCMS,
];

export class Database {
  private static postgresDataSource: DataSource;

  public static async ensureSchemaExists() {
    const client = new Client({
      host: dbHost,
      port: Number(dbPort),
      user: dbUsername,
      password: dbPassword,
      database: dbDatabase,
    });

    await client.connect();
    await client.query(`CREATE SCHEMA IF NOT EXISTS security`);
    await client.end();
    console.log(`Esquema security creado`);
  }

  public static async connect(): Promise<void> {
    try {
      
      await this.ensureSchemaExists();

      this.postgresDataSource = new DataSource({
        type: "postgres",
        host: dbHost,
        port: Number(dbPort),
        username: dbUsername,
        password: dbPassword,
        database: dbDatabase,
        entities,
        synchronize: dbSynchronize === "true",
        logging: dbLogging === "true",
      });

      if (!this.postgresDataSource.isInitialized) {
        await this.postgresDataSource.initialize();
        console.info("Conexión a la base de datos establecida");

        await this.postgresDataSource.query(
          `CREATE SCHEMA IF NOT EXISTS "security"`
        );
        console.info("Esquema creado");
      }
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
      throw error;
    }
  }

  public static getConnection(): DataSource {
    if (!this.postgresDataSource) {
      throw new Error("La conexión a la base de datos no está establecida");
    }
    return this.postgresDataSource;
  }

  public static async disconnect(): Promise<void> {
    if (this.postgresDataSource) {
      await this.postgresDataSource.destroy();
      console.info("Conexión a la base de datos cerrada");
    }
  }
}
