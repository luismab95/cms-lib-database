import { EntityManager } from 'typeorm';
import { Role } from '../../entities/index.js';

export async function RoleSeeder(dataSource: EntityManager): Promise<void> {
  const roleRepository = dataSource.getRepository(Role);
  const roles = [
    {
      id: 1,
      name: 'Administrador',
      description:
        'El Administrador tiene control total sobre la plataforma, el sistema o el proyecto.',
      status: true,
      permissionId: 1,
      code: 'admin',
    },
    {
      id: 2,
      name: 'Editor',
      description:
        'El Editor tiene permisos para crear, editar y gestionar contenidos, pero no tiene acceso a la administración general del sistema',
      status: true,
      permissionId: 3,
      code: 'editor',
    },
    {
      id: 3,
      name: 'Revisor',
      description:
        'El Revisor tiene un enfoque en la calidad y la exactitud del contenido, pero no tiene permisos para crear o editar directamente el contenido. ',
      status: true,
      permissionId: 4,
      code: 'review',
    },
    {
      id: 4,
      name: 'Diseñador',
      description:
        'El Diseñador es responsable de crear y mantener la identidad visual y estética de un proyecto, plataforma o contenido.',
      status: true,
      permissionId: 2,
      code: 'design',
    },
  ] as unknown as Role[];

  const result = await roleRepository.save(roles);
  console.log(
    `✓ Roles procesados: ${roles.length}. ` +
      `Insertados: ${result.length}`,
  );
}
