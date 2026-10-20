import { EntityManager } from 'typeorm';
import { Language } from '../../entities/cms/language.entity.js';

export async function LanguageSeeder(dataSource: EntityManager): Promise<void> {
  const languageRepository = dataSource.getRepository(Language);
  const languages = [
    {
      id: 1,
      lang: 'es',
      name: 'Español',
      icon: '',
      status: true,
      sitieId: 1,
    },
    {
      id: 2,
      lang: 'en',
      name: 'Ingles',
      icon: '',
      status: true,
      sitieId: 1,
    },
    {
      id: 3,
      lang: 'fr',
      name: 'Francés',
      icon: '',
      status: true,
      sitieId: 1,
    },
    {
      id: 4,
      lang: 'ru',
      name: 'Ruso',
      icon: '',
      status: true,
      sitieId: 1,
    },
    {
      id: 5,
      lang: 'de',
      name: 'Alemán ',
      icon: '',
      status: true,
      sitieId: 1,
    },
  ] as unknown as Language[];

  const result = await languageRepository.save(languages);
  console.log(
    `✓ Idiomas procesados: ${languages.length}. ` +
      `Insertados: ${result.length}`,
  );
}
