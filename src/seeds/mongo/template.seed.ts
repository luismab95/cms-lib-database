import mongoose, { Types } from 'mongoose';
import { TemplateSchema } from '../../schemas/template.schema.js';

type TemplateDocument = {
  _id: Types.ObjectId;
  data: {
    header: {
      css: string;
      config: Record<string, unknown>;
      data: unknown[];
    };
    footer: {
      css: string;
      config: Record<string, unknown>;
      data: unknown[];
    };
  };
};

export async function TemplateSeeder(): Promise<void> {
  const templateModel = mongoose.model('Template', TemplateSchema, 'templates');
  await templateModel.createIndexes();
  const templates: TemplateDocument[] = [
    {
      _id: new Types.ObjectId('6accf4a0e9c6afe976f920c2'),
      data: {
        header: {
          css: '.header { display: block; width: 100%; height: auto; min-height: 40px; max-height: 10vh; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; background-color: #ffffff; }',
          data: [
            {
              uuid: '8L9PGn1h',
              css: '.grid-section-8L9PGn1h { display: flex; width: 100%; height: auto; flex-direction: column; gap: 4px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }',
              config: {
                backgroundImage: '',
              },
              rows: [
                {
                  uuid: '74Q7X9OO',
                  css: '.grid-row-74Q7X9OO { display: flex; width: 100%; height: auto; min-height: 100px; flex-direction: column; justify-content: space-between; align-items: center; gap: 4px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; position: relative; }  @container (min-width: 834px) { .grid-row-74Q7X9OO {   flex-direction: row; } }',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'sffBv4wx',
                      css: '.grid-column-sffBv4wx { display: flex; width: 100%; height: auto; min-height: 40px; justify-content: center; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'YnXVjhnp',
                        code: 'language',
                        css: '.language-plugin-YnXVjhnp{display: block; width: 100%; height: auto; min-height: 40px; padding: 10px; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; }',
                        name: 'Idiomas',
                        config: {
                          service: '/ms-cms/public/languages',
                        },
                        text: {},
                      },
                    },
                  ],
                },
              ],
            },
          ],
          config: {
            backgroundImage: '',
          },
        },
        footer: {
          css: '.footer { display: block; width: 100%; height: auto; min-height: 40px; max-height: 10vh; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; align-items: stretch; align-content: stretch; flex-grow: 0; flex-shrink: 1; flex-basis: auto; flex: 0 1 auto; align-self: auto; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; background-color: #ffffff; }',
          data: [
            {
              uuid: 'wjmk1p9i',
              css: '.grid-section-wjmk1p9i { display: flex; width: 100%; height: auto; min-height: 40px; flex-direction: column; justify-content: center; gap: 4px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }',
              config: {
                backgroundImage: '',
              },
              rows: [
                {
                  uuid: '91qWTzaJ',
                  css: '.grid-row-91qWTzaJ { display: flex; width: 100%; height: auto; min-height: 40px; flex-direction: column; justify-content: center; align-items: center; gap: 4px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; position: relative; }  @container (min-width: 834px) { .grid-row-91qWTzaJ {   flex-direction: row; } }',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'lfdSrjlq',
                      css: '.grid-column-lfdSrjlq { display: flex; width: 100%; height: auto; min-height: 40px; justify-content: center; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'UiptVbzD',
                        code: 'image',
                        css: '.image-plugin-UiptVbzD { display: flex; width: auto; height: 50px; justify-content: center; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; }',
                        name: 'Imagen',
                        config: {
                          image:
                            'uploads\\2026\\octubre\\cecc89f6ae297bdcf7cf8b5d05adbcbe.png',
                        },
                        text: {
                          alt: 'Texto alternativo',
                        },
                      },
                    },
                  ],
                },
              ],
            },
          ],
          config: {
            backgroundImage: '',
          },
        },
      },
    },
  ];

  const operations = templates.map((template) => ({
    updateOne: {
      filter: { _id: template._id },
      update: {
        $setOnInsert: template,
      },
      upsert: true,
    },
  }));

  const result = await templateModel.bulkWrite(operations, {
    ordered: true,
  });

  console.log(
    `✓ Estructura de plantillas procesadas: ${templates.length}. ` +
      `Insertadas: ${result.upsertedCount}`,
  );
}
