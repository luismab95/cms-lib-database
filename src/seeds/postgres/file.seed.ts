import { EntityManager } from 'typeorm';
import { File } from '../../entities/cms/file.entity.js';

export async function FileSeeder(dataSource: EntityManager): Promise<void> {
  const fileRepository = dataSource.getRepository(File);
  const files = [
    {
      id: 1,
      name: 'Logo',
      description: 'Logo principal para páginas',
      mimeType: 'image\/png',
      path: 'uploads\/2026\/octubre\/cecc89f6ae297bdcf7cf8b5d05adbcbe.png',
      filename: 'cecc89f6ae297bdcf7cf8b5d05adbcbe.png',
      size: 131743,
      status: true,
    },
    {
      id: 2,
      name: 'Icono flecha derecha',
      description: 'Icono para boton ',
      mimeType: 'image\/svg+xml',
      path: 'uploads\/2026\/octubre\/562910ea74f9fb2eca8ff8807a768edc1.svg',
      filename: '562910ea74f9fb2eca8ff8807a768edc1.svg',
      size: 467,
      status: true,
    },
  ] as unknown as File[];

  const result = await fileRepository.save(files);
  console.log(
    `✓ Archivos procesados: ${files.length}. ` + `Insertados: ${result.length}`,
  );
}
