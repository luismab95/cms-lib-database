import { EntityManager } from 'typeorm';
import { Template } from '../../entities/cms/template.entity.js';

export async function TemplateSeeder(dataSource: EntityManager): Promise<void> {
  const templateRepository = dataSource.getRepository(Template);
  const templates = [
    {
      id: 1,
      name: 'Plantilla por defecto',
      description:
        'Esta plantilla se utilizará como configuración predeterminada para las páginas que no tengan una plantilla personalizada asignada. Puedes modificar su contenido, estructura y estilos para definir la apariencia inicial de estas páginas.',
      mongoId: '6accf4a0e9c6afe976f920c2',
      status: true,
    },
  ] as unknown as Template[];

  const result = await templateRepository.save(templates);
  console.log(
    `✓ Plantillas procesadas: ${templates.length}. ` +
      `Insertadas: ${result.length}`,
  );
}
