import { EntityManager } from 'typeorm';
import { Micrositie } from '../../entities/cms/micrositie.entity.js';
import { PermissionSitie } from '../../entities/cms/permission-sitie.entity.js';

export async function MicrositieSeeder(
  dataSource: EntityManager,
): Promise<void> {
  const micrositieRepository = dataSource.getRepository(Micrositie);
  const microsities = [
    {
      id: 1,
      name: 'Default micrositie',
      description: 'Micrositio por defecto',
      path: 'default-micrositie',
      status: true,
      sitieId: 1,
      templateId: 1,
    },
  ] as unknown as Micrositie[];

  const result = await micrositieRepository.save(microsities);
  console.log(
    `✓ Micrositios procesados: ${microsities.length}. ` +
      `Insertados: ${result.length}`,
  );

  const permissionSitieRepository = dataSource.getRepository(PermissionSitie);
  const permissionSities = [
    {
      id: 1,
      userId: 1,
      sitieId: 1,
      micrositieId: null,
      status: true,
    },
    {
      id: 2,
      userId: 1,
      sitieId: null,
      micrositieId: 1,
      status: true,
    },
    {
      id: 3,
      userId: 3,
      sitieId: null,
      micrositieId: 1,
      status: true,
    },
    {
      id: 4,
      userId: 4,
      sitieId: null,
      micrositieId: 1,
      status: true,
    },
    {
      id: 5,
      userId: 2,
      sitieId: null,
      micrositieId: 1,
      status: true,
    },
    {
      id: 6,
      userId: 4,
      sitieId: 1,
      micrositieId: null,
      status: true,
    },
    {
      id: 7,
      userId: 3,
      sitieId: 1,
      micrositieId: null,
      status: true,
    },
    {
      id: 8,
      userId: 2,
      sitieId: 1,
      micrositieId: null,
      status: true,
    },
  ] as unknown as PermissionSitie[];

  const resultPermissions =
    await permissionSitieRepository.save(permissionSities);
  console.log(
    `✓ Permisos de sitios procesados: ${permissionSities.length}. ` +
      `Insertados: ${resultPermissions.length}`,
  );
}
