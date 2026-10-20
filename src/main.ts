import { Database } from '@shared/config/database.js';
import { config } from '@shared/environments/load-env.js';
import {
  ElementSeeder,
  LanguageSeeder,
  MenuSeeder,
  MicrositieSeeder,
  ParameterSeeder,
  PermissionSeeder,
  RoleSeeder,
  SitieSeeder,
  UserSeeder,
  InitializarteSeeder,
  TemplateSeeder as TemplateSeederSql,
  PageSeeder as PageSeederSql,
} from './seeds/postgres/index.js';
import { Mongo } from '@shared/config/mongo.js';
import { TemplateSeeder, PageSeeder } from './seeds/mongo/index.js';
import { Initializer } from './entities/index.js';

const startServer = async () => {
  const { nodeEnv, dbSeeder } = config.server;
  if (nodeEnv === 'development') await Database.connect();

  const datasource = Database.getConnection();
  const initialized = await datasource
    .getRepository(Initializer)
    .findOneBy({ id: 1 });
  if (dbSeeder && datasource && !initialized) {
    await Mongo.connect();
    await PageSeeder();
    await TemplateSeeder();

    await datasource.transaction(async (cnx) => {
      await PermissionSeeder(cnx);
      await RoleSeeder(cnx);
      await MenuSeeder(cnx);
      await ParameterSeeder(cnx);
      await UserSeeder(cnx);
      await ElementSeeder(cnx);
      await TemplateSeederSql(cnx);
      await SitieSeeder(cnx);
      await MicrositieSeeder(cnx);
      await LanguageSeeder(cnx);
      await PageSeederSql(cnx);
      await InitializarteSeeder(cnx);
    });
  }
};

startServer();

process.on('SIGINT', async () => {
  await Database.disconnect();
  await Mongo.disconnect();
  process.exit(0);
});
