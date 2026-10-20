import { EntityManager } from 'typeorm';
import { Sitie } from '../../entities/cms/sitie.entity.js';

export async function SitieSeeder(dataSource: EntityManager): Promise<void> {
  const sitieRepository = dataSource.getRepository(Sitie);
  const sities = [
    {
      id: 1,
      name: 'CMS',
      description: 'Sitio por defecto',
      domain: 'http:\/\/localhost:4200\/es',
      status: true,
      maintenance: false,
      templateId: 1,
    },
  ] as unknown as Sitie[];

  const result = await sitieRepository.save(sities);
  console.log(
    `✓ Sitios procesados: ${sities.length}. ` + `Insertados: ${result.length}`,
  );
}
