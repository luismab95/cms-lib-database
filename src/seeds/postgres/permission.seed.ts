import { EntityManager } from 'typeorm';
import { Action } from '../../entities/security/action.entity.js';
import { Permission } from '../../entities/security/permission.entity.js';

export async function PermissionSeeder(
  dataSource: EntityManager,
): Promise<void> {
  const actionsRepository = dataSource.getRepository(Action);
  const actions = [
    {
      id: 1,
      code: '1Y92kqNW',
      description:
        'Aquí podrás ver de manera clara y visual los gráficos y datos clave que te ayudarán a tomar decisiones ',
      name: 'Panel de Inicio',
      status: true,
    },
    {
      id: 2,
      code: 'ykXK0H0U',
      description:
        'Aquí podrás monitorear en tiempo real el rendimiento de tu sitio, visualizando gráficos detallados sobre el número de visitas.',
      name: 'Panel de Visitas',
      status: true,
    },
    {
      id: 3,
      code: '5fwbZLLU',
      description: 'Aquí podras ver la información del sitio.',
      name: 'Ver sitio',
      status: true,
    },
    {
      id: 4,
      code: '36UZ0RQg',
      description: 'Aquí podras editar la información del sitio.',
      name: 'Editar sitio',
      status: true,
    },
    {
      id: 5,
      code: 'nrkF3VVI',
      description: 'Aquí podras ver la información de los idiomas del sitio.',
      name: 'Listar idiomas del sitio',
      status: true,
    },
    {
      id: 6,
      code: '61cGjjBh',
      description:
        'Aquí podras ver la información detallada de un idioma del sitio.',
      name: 'Ver idioma del sitio',
      status: true,
    },
    {
      id: 7,
      code: 'tGZIuIJy',
      description:
        'Aquí podras editar la información de los idiomas del sitio.',
      name: 'Editar idioma del sitio',
      status: true,
    },
    {
      id: 8,
      code: 'KjGSelQN',
      description: 'Aquí podras gestionar el estado de los idiomas del  sitio.',
      name: 'Gestionar estado del idioma del sitio',
      status: true,
    },
    {
      id: 9,
      code: 'ti3sLWHa',
      description: 'Aquí podras listar todos los micrositios.',
      name: 'Listar micrositios',
      status: true,
    },
    {
      id: 10,
      code: 'dVPwVfsd',
      description: 'Aquí podras ver la información detallada de un micrositio',
      name: 'Ver micrositio',
      status: true,
    },
    {
      id: 11,
      code: 'M2tvgxnG',
      description: 'Aquí podras crear micrositios.',
      name: 'Crear micrositio',
      status: true,
    },
    {
      id: 12,
      code: 'M3PDTVb9',
      description: 'Aquí podras editar micrositios.',
      name: 'Editar micrositio',
      status: true,
    },
    {
      id: 13,
      code: 'YbvsOt1D',
      description: 'Aquí podras ver la información de tus archivos.',
      name: 'Listar archvios',
      status: true,
    },
    {
      id: 14,
      code: 'bl91z6ln',
      description: 'Aquí podras ver la información detallada de un archivo.',
      name: 'Ver archivo',
      status: true,
    },
    {
      id: 15,
      code: 'vPMaZlhD',
      description: 'Aquí podras editar la información de un archivo.',
      name: 'Editar archivo',
      status: true,
    },
    {
      id: 16,
      code: 'g8OPBd52',
      description: 'Aquí podras subir nuevos archivos.',
      name: 'Crear archivo',
      status: true,
    },
    {
      id: 17,
      code: '8JvU2adQ',
      description: 'Aquí podras gestionar el estado de un archivo.',
      name: 'Gestionar estado de archivos',
      status: true,
    },
    {
      id: 18,
      code: 'TBpcCd38',
      description: 'Aquí podras ver la información de tus usuarios.',
      name: 'Listar usuarios',
      status: true,
    },
    {
      id: 19,
      code: 'ZHlQ9KrH',
      description: 'Aquí podras ver la información detallada de un usuario.',
      name: 'Ver usuario',
      status: true,
    },
    {
      id: 20,
      code: '04KyWbNE',
      description: 'Aquí podras editar la información de un usuario.',
      name: 'Editar usuario',
      status: true,
    },
    {
      id: 21,
      code: 'mRmgLeE5',
      description: 'Aquí podras agregar nuevos usuarios.',
      name: 'Crear usuario',
      status: true,
    },
    {
      id: 22,
      code: 'ohnPymiK',
      description: 'Aquí podras gestionar el estado de un usuario.',
      name: 'Gestionar estado de usuarios',
      status: true,
    },
    {
      id: 23,
      code: '6feAKEbQ',
      description: 'Aquí podras ver la información de tus parámetros.',
      name: 'Ver parámetros',
      status: true,
    },
    {
      id: 24,
      code: 'EPhy1acm',
      description: 'Aquí podras editar la información de los parámetros.',
      name: 'Editar parámetros',
      status: true,
    },
    {
      id: 25,
      code: 'Av9GKwXr',
      description: 'Aquí podras ver la información de tu perfil.',
      name: 'Ver perfil',
      status: true,
    },
    {
      id: 26,
      code: 'UUyOxarc',
      description: 'Aquí podras editar la información de tu perfil.',
      name: 'Editar perfil',
      status: true,
    },
    {
      id: 27,
      code: 'IBULAcv6',
      description: 'Aquí podras ver la información de tus páginas.',
      name: 'Listar páginas',
      status: true,
    },
    {
      id: 28,
      code: 'mNrjFV4D',
      description: 'Aquí podras ver la información detallada de tus páginas.',
      name: 'Ver página',
      status: true,
    },
    {
      id: 29,
      code: 'gQvc2kR3',
      description: 'Aquí podras editar la información de las páginas.',
      name: 'Editar página',
      status: true,
    },
    {
      id: 30,
      code: 'D909LuAx',
      description: 'Aquí podras agregar nuevas páginas.',
      name: 'Crear página',
      status: true,
    },
    {
      id: 31,
      code: 'v9bcjxCr',
      description: 'Aquí podras editar el contenido de las páginas.',
      name: 'Editar contenido página',
      status: true,
    },
    {
      id: 32,
      code: 'eMxnylbB',
      description: 'Aquí podras editar el diseño de las páginas.',
      name: 'Editar diseño página',
      status: true,
    },
    {
      id: 33,
      code: 'WW3mZKOi',
      description: 'Aquí podras ver la información de tus plantillas.',
      name: 'Listar plantillas',
      status: true,
    },
    {
      id: 34,
      code: 'qVy9ZdWg',
      description: 'Aquí podras ver la información detallada de tus plantilla.',
      name: 'Ver plantilla',
      status: true,
    },
    {
      id: 35,
      code: 'g7pqWe97',
      description: 'Aquí podras editar la información de las plantillas.',
      name: 'Editar plantilla',
      status: true,
    },
    {
      id: 36,
      code: 'V8isIxyj',
      description: 'Aquí podras agregar nuevas plantillas.',
      name: 'Crear plantilla',
      status: true,
    },
    {
      id: 37,
      code: 'pBCHggtI',
      description: 'Aquí podras editar el contenido de las páginas.',
      name: 'Editar contenido plantilla',
      status: true,
    },
    {
      id: 38,
      code: 'P8zRlKsM',
      description: 'Aquí podras editar el diseño de las plantillas.',
      name: 'Editar diseño plantilla',
      status: true,
    },
    {
      id: 39,
      code: 'k98skpeq',
      description: 'Aquí podras agregar nuevos idiomas a tu sitio.',
      name: 'Crear idioma',
      status: true,
    },
    {
      id: 40,
      code: 'g6U5KJ1n',
      description: 'Aquí podras ver la información de las páginas por revisar.',
      name: 'Listar páginas por revisar',
      status: true,
    },
    {
      id: 41,
      code: 'pHsaJvoS',
      description:
        'Aquí podras ver la información detallada de los cambios en las páginas.',
      name: 'Ver página por revisar',
      status: true,
    },
    {
      id: 42,
      code: 'SlzdPrIk',
      description: 'Aquí podras aprobar o rechazar los cambios en las páginas.',
      name: 'Revisar página',
      status: true,
    },
    {
      id: 43,
      code: 'AS23qw7F',
      description: 'Aquí podras gestionar los usuarios asignados al sitio.',
      name: 'Asignar usuarios sitio',
      status: true,
    },
    {
      id: 44,
      code: 'lok98AS2',
      description:
        'Aquí podras gestionar los usuarios asignados al micrositio.',
      name: 'Asignar usuarios micrositio',
      status: true,
    },
  ] as unknown as Action[];

  const resultActions = await actionsRepository.save(actions);
  console.log(
    `✓ Acciones procesadas: ${actions.length}. ` +
      `Insertadas: ${resultActions.length}`,
  );

  const permissionsRepository = dataSource.getRepository(Permission);
  const permissions = [
    {
      id: 1,
      description: 'Admin',
      scope: JSON.parse(
        '[{"effect": "Allow","action": ["1Y92kqNW","ykXK0H0U","1Y92kqNW","k98skpeq","ykXK0H0U","5fwbZLLU","36UZ0RQg","nrkF3VVI","61cGjjBh","tGZIuIJy","KjGSelQN","dVPwVfsd","YbvsOt1D","bl91z6ln","vPMaZlhD","g8OPBd52","ti3sLWHa","M2tvgxnG","M3PDTVb9","TBpcCd38","ZHlQ9KrH","04KyWbNE","mRmgLeE5","ohnPymiK","8JvU2adQ","6feAKEbQ","EPhy1acm","Av9GKwXr","UUyOxarc","IBULAcv6","mNrjFV4D","gQvc2kR3","v9bcjxCr","eMxnylbB","WW3mZKOi","qVy9ZdWg","g7pqWe97","V8isIxyj","pBCHggtI","P8zRlKsM","D909LuAx","g6U5KJ1n","pHsaJvoS","SlzdPrIk","AS23qw7F","lok98AS2"]}]',
      ),
      status: true,
    },
    {
      id: 2,
      description: 'Design',
      scope: JSON.parse(
        '[{"effect": "Allow","action": ["1Y92kqNW","ykXK0H0U","IBULAcv6","mNrjFV4D","D909LuAx","v9bcjxCr","eMxnylbB","ti3sLWHa","dVPwVfsd","YbvsOt1D","bl91z6ln","vPMaZlhD","g8OPBd52","WW3mZKOi","qVy9ZdWg","g7pqWe97","V8isIxyj","pBCHggtI","P8zRlKsM","Av9GKwXr","UUyOxarc"]}]',
      ),
      status: true,
    },
    {
      id: 3,
      description: 'Editor',
      scope: JSON.parse(
        '[{"effect": "Allow","action": ["1Y92kqNW","ykXK0H0U","IBULAcv6","mNrjFV4D","v9bcjxCr","ti3sLWHa","dVPwVfsd","YbvsOt1D","bl91z6ln","vPMaZlhD","g8OPBd52","WW3mZKOi","qVy9ZdWg","pBCHggtI","Av9GKwXr","UUyOxarc"]}]',
      ),
      status: true,
    },
    {
      id: 4,
      description: 'Review',
      scope: JSON.parse(
        '[{"effect": "Allow","action": ["1Y92kqNW","ykXK0H0U","Av9GKwXr","UUyOxarc","g6U5KJ1n","pHsaJvoS","SlzdPrIk"]}]',
      ),
      status: true,
    },
  ] as unknown as Permission[];

  const result = await permissionsRepository.save(permissions);
  console.log(
    `✓ Permisos procesados: ${permissions.length}. ` +
      `Insertados: ${result.length}`,
  );
}
