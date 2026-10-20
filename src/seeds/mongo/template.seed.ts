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
          css: '.header {\n  display: block;\n  width: 100%;\n  height: auto;\n  min-height: 40px;\n  max-height: 10vh;\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  background-color: #ffffff;\n}',
          data: [
            {
              uuid: '8L9PGn1h',
              css: '.grid-section-8L9PGn1h {\n  display: flex;\n  width: 100%;\n  height: auto;\n  flex-direction: column;\n  gap: 4px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}',
              config: {
                backgroundImage: '',
              },
              rows: [
                {
                  uuid: '74Q7X9OO',
                  css: '.grid-row-74Q7X9OO {\n  display: flex;\n  width: 100%;\n  height: auto;\n  min-height: 100px;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 4px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  position: relative;\n}\n\n@container (min-width: 834px) {\n  .grid-row-74Q7X9OO {\n    flex-direction: row;\n  }\n}',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'sffBv4wx',
                      css: '.grid-column-sffBv4wx {\n  display: flex;\n  width: 100%;\n  height: auto;\n  min-height: 40px;\n  justify-content: center;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'YnXVjhnp',
                        css: '.language-plugin-YnXVjhnp{\n display: block;\n  width: 100%;\n  height: auto;\n  min-height: 40px;\n  padding: 10px;\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n}',
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
          css: '.footer {\n  display: block;\n  width: 100%;\n  height: auto;\n  min-height: 40px;\n  max-height: 10vh;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  align-content: stretch;\n  flex-grow: 0;\n  flex-shrink: 1;\n  flex-basis: auto;\n  flex: 0 1 auto;\n  align-self: auto;\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  background-color: #ffffff;\n}',
          data: [
            {
              uuid: 'wjmk1p9i',
              css: '.grid-section-wjmk1p9i {\n  display: flex;\n  width: 100%;\n  height: auto;\n  min-height: 40px;\n  flex-direction: column;\n  justify-content: center;\n  gap: 4px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}',
              config: {
                backgroundImage: '',
              },
              rows: [
                {
                  uuid: '91qWTzaJ',
                  css: '.grid-row-91qWTzaJ {\n  display: flex;\n  width: 100%;\n  height: auto;\n  min-height: 40px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  position: relative;\n}\n\n@container (min-width: 834px) {\n  .grid-row-91qWTzaJ {\n    flex-direction: row;\n  }\n}',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'lfdSrjlq',
                      css: '.grid-column-lfdSrjlq {\n  display: flex;\n  width: 100%;\n  height: auto;\n  min-height: 40px;\n  justify-content: center;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'UiptVbzD',
                        css: '.image-plugin-UiptVbzD {\n  display: flex;\n  width: 90px;\n  height: 40px;\n  min-height: 40px;\n  justify-content: center;\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n}',
                        name: 'Imagen',
                        config: {
                          image:
                            'uploads\\2025\\junio\\57dc70c781386ffad5eb13c15289b401.png',
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
