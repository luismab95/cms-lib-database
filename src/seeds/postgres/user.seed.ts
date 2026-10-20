import { EntityManager } from 'typeorm';
import { User } from '../../entities/security/user.entity.js';

export async function UserSeeder(dataSource: EntityManager): Promise<void> {
  const userRepository = dataSource.getRepository(User);
  const users = [
    {
      id: 1,
      email: 'admin@cms.com',
      password: '',
      firstname: 'Lour Peter',
      lastname: 'Dev Pevice',
      status: true,
      terms: true,
      two_factor_auth: false,
      bloqued: false,
      roleId: 1,
    },
    {
      id: 2,
      email: 'design@cms.com',
      password: '',
      firstname: 'Juan Carlos',
      lastname: 'García Perez',
      status: true,
      terms: true,
      two_factor_auth: false,
      bloqued: false,
      roleId: 4,
    },
    {
      id: 3,
      email: 'editor@cms.com',
      password: '',
      firstname: 'Diana Lisa',
      lastname: 'Olivo Lopez',
      status: true,
      terms: true,
      two_factor_auth: false,
      bloqued: false,
      roleId: 2,
    },
    {
      id: 4,
      email: 'review@cms.com',
      password: '',
      firstname: 'Pedro Carlos',
      lastname: 'Lara Gómez',
      status: true,
      terms: true,
      two_factor_auth: false,
      bloqued: false,
      roleId: 3,
    },
  ] as unknown as User[];

  const result = await userRepository.save(users);
  console.log(
    `✓ Usuarios procesadas: ${users.length}. ` + `Insertadas: ${result.length}`,
  );
}
