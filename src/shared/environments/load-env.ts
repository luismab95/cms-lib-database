import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  server: {
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbDatabase: process.env.DB_DATABASE,
    dbSynchronize: process.env.DB_SYNCHRONIZE,
    nodeEnv: process.env.NODE_ENV,
  },
};
