import { EntityManager } from 'typeorm';
import { Language } from '../../entities/cms/language.entity.js';

export async function LanguageSeeder(dataSource: EntityManager): Promise<void> {
  const languageRepository = dataSource.getRepository(Language);
  const languages = [
    {
      id: 1,
      lang: 'es',
      name: 'Español',
      icon: 'uploads\\2026\\octubre\\d60bebe1a8be03e5528aa47c261c8532.png',
      status: true,
      sitieId: 1,
    },
    {
      id: 2,
      lang: 'en',
      name: 'Ingles',
      icon: 'uploads\\2026\\octubre\\ac0cc456f94fd6c104de98a92e103a748e.png',
      status: true,
      sitieId: 1,
    },
    {
      id: 3,
      lang: 'fr',
      name: 'Francés',
      icon: 'uploads\\2026\\octubre\\1df283d67b53105d6bbe5894bb9a3bc75.png',
      status: true,
      sitieId: 1,
    },
    {
      id: 4,
      lang: 'ru',
      name: 'Ruso',
      icon: 'uploads\\2026\\octubre\\1f1ccd8ccfb8d5f9b487f2105556f29a2.png',
      status: true,
      sitieId: 1,
    },
    {
      id: 5,
      lang: 'de',
      name: 'Alemán ',
      icon: 'uploads\\2026\\octubre\\82f76276c718710808706cee570e5e3b.png',
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
