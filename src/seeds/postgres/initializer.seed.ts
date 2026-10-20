import { EntityManager } from 'typeorm';
import { randomCharacters } from '@shared/helpers/random.helper.js';
import { Initializer } from '../../entities/security/initializer.entity.js';

export async function InitializarteSeeder(
  dataSource: EntityManager,
): Promise<void> {
  const initializerRepository = dataSource.getRepository(Initializer);
  const initializer = [
    {
      id: 1,
      hash: randomCharacters('COMBINED', 16),
      status: true,
      userPwd: false,
    },
  ] as unknown as Initializer[];

  await initializerRepository.save(initializer);
  console.log('✓ Base de datos inicializada.');
}
