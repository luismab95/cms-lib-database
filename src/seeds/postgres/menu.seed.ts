import { EntityManager } from 'typeorm';
import { Module } from '../../entities/security/module.entity.js';
import { Menu } from '../../entities/security/menu.entity.js';
import { MenuRole } from '../../entities/security/menu-rol.entity.js';

export async function MenuSeeder(dataSource: EntityManager): Promise<void> {
  const moduleRepository = dataSource.getRepository(Module);
  const modules = [
    {
      id: 1,
      name: 'Panel',
      description: 'Gestiona y monitorea tus páginas.',
      status: true,
      icon: 'mat_outline:dashboard',
    },
    {
      id: 2,
      name: 'Contenido',
      description: 'Gestiona sitios, páginas, plantillas y archivos.',
      status: true,
      icon: 'mat_outline:apps',
    },
    {
      id: 3,
      name: 'Seguridad',
      description:
        'Gestiona usuarios, parámetros y ajustes para proteger la aplicación',
      status: true,
      icon: 'mat_outline:security',
    },
  ] as Module[];

  const resultModules = await moduleRepository.save(modules);
  console.log(
    `✓ Módulos procesados: ${modules.length}. ` +
      `Insertados: ${resultModules.length}`,
  );

  const menuRepository = dataSource.getRepository(Menu);
  const menus = [
    {
      id: 1,
      name: 'Inicio',
      path: 'dashboards\/home',
      icon: 'fa-solid fa-chart-line',
      description: 'Gráficos de visitas.',
      status: true,
      moduleId: 1,
    },
    {
      id: 2,
      name: 'Sitio',
      path: 'content\/sitie',
      icon: 'fa-solid fa-display',
      description:
        'Configura y administra la información, plantilla e idiomas activos del sitio.',
      status: true,
      moduleId: 2,
    },
    {
      id: 3,
      name: 'Micrositios',
      path: 'content\/microsities',
      icon: 'fa-solid fa-sitemap',
      description:
        'Gestiona y controla la información de micrositios del sitio.',
      status: true,
      moduleId: 2,
    },
    {
      id: 4,
      name: 'Páginas',
      path: 'content\/pages',
      icon: 'fa-solid fa-file-fragment',
      description:
        'Gestiona y administra las páginas y contenidos del sitio web.',
      status: true,
      moduleId: 2,
    },
    {
      id: 5,
      name: 'Plantillas',
      path: 'content\/templates',
      icon: 'fa-solid fa-window-restore',
      description:
        'Gestiona y administra las plantillas de tu sitio y micrositios.',
      status: true,
      moduleId: 2,
    },
    {
      id: 6,
      name: 'Multimedia',
      path: 'content\/file-manager',
      icon: 'fa-solid fa-photo-film',
      description:
        'Gestiona y organiza los archivos multimedia utilizados en las diferentes páginas del sitio.',
      status: true,
      moduleId: 2,
    },
    {
      id: 7,
      name: 'Usuarios',
      path: 'security\/users',
      icon: 'fa-solid fa-users',
      description:
        'Gestiona y controla la información de los usuarios del sitio.',
      status: true,
      moduleId: 3,
    },
    {
      id: 8,
      name: 'Parámetros',
      path: 'security\/parameters',
      icon: 'fa-solid fa-sliders',
      description:
        'Configura la información, identidad visual, correos y seguridad de tu empresa.',
      status: true,
      moduleId: 3,
    },
    {
      id: 9,
      name: 'Ajustes',
      path: 'security\/settings',
      icon: 'fa-solid fa-gears',
      description:
        'Configura y administra los datos de tu cuenta, perfil y contraseña.',
      status: true,
      moduleId: 3,
    },
    {
      id: 10,
      name: 'Revisión',
      path: 'content\/review-pages',
      icon: 'fa-solid fa-comments',
      description: 'Gestiona y revisa los cambios realizados en las páginas y plantillas del sitio o micrositio.',
      status: true,
      moduleId: 2,
    },
  ] as unknown as Menu[];

  const resultMenus = await menuRepository.save(menus);
  console.log(
    `✓ Menus procesados: ${menus.length}. ` +
      `Insertados: ${resultMenus.length}`,
  );

  const menuRolRepository = dataSource.getRepository(MenuRole);
  const menuRoles = [
    {
      id: 1,
      menuId: 1,
      roleId: 1,
      order: 1,
      status: true,
    },
    {
      id: 2,
      menuId: 2,
      roleId: 1,
      order: 2,
      status: true,
    },
    {
      id: 3,
      menuId: 3,
      roleId: 1,
      order: 3,
      status: true,
    },
    {
      id: 4,
      menuId: 4,
      roleId: 1,
      order: 4,
      status: true,
    },
    {
      id: 5,
      menuId: 5,
      roleId: 1,
      order: 5,
      status: true,
    },
    {
      id: 6,
      menuId: 6,
      roleId: 1,
      order: 6,
      status: true,
    },
    {
      id: 7,
      menuId: 7,
      roleId: 1,
      order: 7,
      status: true,
    },
    {
      id: 8,
      menuId: 8,
      roleId: 1,
      order: 8,
      status: true,
    },
    {
      id: 9,
      menuId: 9,
      roleId: 1,
      order: 9,
      status: true,
    },
    {
      id: 10,
      menuId: 3,
      roleId: 4,
      order: 2,
      status: true,
    },
    {
      id: 11,
      menuId: 4,
      roleId: 4,
      order: 3,
      status: true,
    },
    {
      id: 12,
      menuId: 5,
      roleId: 4,
      order: 4,
      status: true,
    },
    {
      id: 13,
      menuId: 6,
      roleId: 4,
      order: 5,
      status: true,
    },
    {
      id: 14,
      menuId: 9,
      roleId: 4,
      order: 6,
      status: true,
    },
    {
      id: 15,
      menuId: 3,
      roleId: 2,
      order: 2,
      status: true,
    },
    {
      id: 16,
      menuId: 4,
      roleId: 2,
      order: 3,
      status: true,
    },
    {
      id: 17,
      menuId: 5,
      roleId: 2,
      order: 4,
      status: true,
    },
    {
      id: 18,
      menuId: 9,
      roleId: 2,
      order: 5,
      status: true,
    },
    {
      id: 19,
      menuId: 10,
      roleId: 3,
      order: 2,
      status: true,
    },
    {
      id: 20,
      menuId: 9,
      roleId: 3,
      order: 3,
      status: true,
    },
    {
      id: 21,
      menuId: 1,
      roleId: 4,
      order: 1,
      status: true,
    },
    {
      id: 22,
      menuId: 1,
      roleId: 3,
      order: 1,
      status: true,
    },
    {
      id: 23,
      menuId: 1,
      roleId: 2,
      order: 1,
      status: true,
    },
    {
      id: 24,
      menuId: 6,
      roleId: 2,
      order: 6,
      status: true,
    },
    {
      id: 25,
      menuId: 10,
      roleId: 1,
      order: 10,
      status: true,
    },
  ] as unknown as MenuRole[];

  const result = await menuRolRepository.save(menuRoles);
  console.log(
    `✓ Menu Rol procesados: ${menuRoles.length}. ` +
      `Insertados: ${result.length}`,
  );
}
