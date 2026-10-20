import mongoose, { Types } from 'mongoose';
import { PageSchema } from '../../schemas/page.schema.js';

type PageDocument = {
  _id: Types.ObjectId;
  data: {
    body: {
      css: string;
      config: Record<string, unknown>;
      data: unknown[];
    };
  };
};

export async function PageSeeder(): Promise<void> {
  const pageModel = mongoose.model('Page', PageSchema, 'pages');
  await pageModel.createIndexes();
  const pages: PageDocument[] = [
    {
      _id: new Types.ObjectId('6abc3e3612f90625347017ff'),
      data: {
        body: {
          css: '.body {\n  display: flex;\n  width: 100%;\n height: auto;\n  min-height: 80vh;\n  max-height: 80vh;\n  flex-direction: column;\n  justify-content: center;\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n background-color: #ffffff; \n}',
          config: {
            backgroundImage: '',
          },
          data: [
            {
              uuid: 'YGw7wWfX',
              css: '.grid-section-YGw7wWfX {\n  display: flex;\n  width: 100%;\n  height: auto;\n  min-height: 200px;\n  flex-direction: column;\n  gap: 4px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}',
              config: {
                backgroundImage: '',
              },
              rows: [
                {
                  uuid: 'doQVZ182',
                  css: '.grid-row-doQVZ182 {\n  display: flex;\n  width: 100%;\n  height: auto;\n  min-height: 100px;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 4px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  position: relative;\n}\n\n@container (min-width: 834px) {\n  .grid-row-doQVZ182 {\n    flex-direction: row;\n  }\n}',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'Odbi6wun',
                      css: '.grid-column-Odbi6wun {\n  display: block;\n  width: 100%;\n  height: auto;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                    {
                      uuid: 'dMHLnvZj',
                      css: '.grid-column-dMHLnvZj {\n  display: block;\n  width: 100%;\n  height: auto;\n min-height: 40px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'LwgODtkI',
                        css: '.image-plugin-LwgODtkI {\n  display: block;\n  width: 150px;\n  height: 80px;\n  min-height: 40px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}',
                        name: 'Imagen',
                        config: {
                          image:
                            'uploads\\2025\\junio\\57dc70c781386ffad5eb13c15289b401.png',
                        },
                        text: {
                          alt: 'ewVpf0ImycZ5GAyO',
                        },
                      },
                    },
                    {
                      uuid: '1ug7lLMT',
                      css: '.grid-column-1ug7lLMT {\n  display: block;\n  width: 100%;\n  height: auto;\n padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                  ],
                },
                {
                  uuid: 'ChkM3EEL',
                  css: '.grid-row-ChkM3EEL {\n  display: flex;\n  width: 100%;\n  height: auto;\n  min-height: 100px;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 4px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  position: relative;\n}\n\n@container (min-width: 834px) {\n  .grid-row-ChkM3EEL {\n    flex-direction: row;\n  }\n}',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: '1J3GRN0B',
                      css: '.grid-column-1J3GRN0B {\n  display: block;\n  width: 100%;\n  height: auto;\n padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                    {
                      uuid: 'ksWwTJK7',
                      css: '.grid-column-ksWwTJK7 {\n  display: block;\n  width: 100%;\n  height: auto;\n  min-height: 40px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'seWobl4V',
                        css: '.label-plugin-seWobl4V {\n  display: block;\n  width: 100%;\n  height: auto;\n  min-height: 40px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  font-family: Arial,sans-serif;\n  font-size: 2.5rem;\n  font-weight: 600;\n  line-height: 1.2;\n  text-align: center;\n}',
                        name: 'Etiqueta',
                        config: {},
                        text: {
                          etiqueta: 'cGOn5HZQPxvAJcbz',
                        },
                      },
                    },
                    {
                      uuid: 'uzZeeDGx',
                      css: '.grid-column-uzZeeDGx {\n  display: block;\n  width: 100%;\n  height: auto;\n padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                  ],
                },
                {
                  uuid: '1PoMZadg',
                  css: '.grid-row-1PoMZadg {\n  display: flex;\n  width: 100%;\n  height: auto;\n  min-height: 100px;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 4px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  position: relative;\n}\n\n@container (min-width: 834px) {\n  .grid-row-1PoMZadg {\n    flex-direction: row;\n  }\n}',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'H6VsCrpX',
                      css: '.grid-column-H6VsCrpX {\n  display: block;\n  width: 100%;\n  height: auto;\n padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}\n\n@container (min-width: 834px) {\n  .grid-column-H6VsCrpX {\n width: 30%; \n  }\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                    {
                      uuid: 'r16taFVz',
                      css: '.grid-column-r16taFVz {\n  display: block;\n  width: 100%;\n  height: auto;\n min-height: 40px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}\n\n@container (min-width: 834px) {\n  .grid-column-r16taFVz {\n width: 40%; \n  }\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'BhpRrAIz',
                        css: '.paragraph-plugin-BhpRrAIz {\n  display: block;\n  width: 100%;\n  height: auto;\n  min-height: 40px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  font-family: Arial,sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #000000;\n  text-align: justify;\n}',
                        name: 'Parrafo',
                        config: {},
                        text: {
                          parrafo: 'lq4duR8VvLjYUCbk',
                        },
                      },
                    },
                    {
                      uuid: 'Nz0inpZn',
                      css: '.grid-column-Nz0inpZn {\n  display: block;\n  width: 100%;\n  height: auto;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}\n\n@container (min-width: 834px) {\n  .grid-column-Nz0inpZn {\n width: 30%; \n  }\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                  ],
                },
                {
                  uuid: 'oZn7094f',
                  css: '.grid-row-oZn7094f {\n  display: flex;\n  width: 100%;\n  height: auto;\n  min-height: 100px;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 4px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  position: relative;\n}\n\n@container (min-width: 834px) {\n  .grid-row-oZn7094f {\n    flex-direction: row;\n  }\n}',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'KbJkObrx',
                      css: '.grid-column-KbJkObrx {\n  display: block;\n  width: 100%;\n  height: auto;\n   padding-top: 12px;\n  padding-right: 12px;\n  padding-bottom: 12px;\n  padding-left: 12px;\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                    {
                      uuid: 'HTHlfQ3x',
                      css: '.grid-column-HTHlfQ3x {\n  display: block;\n  width: 100%;\n  height: auto;\n  min-height: 40px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'PirycQFW',
                        css: '.button-plugin-PirycQFW {\n  display: flex;\n  width: auto;\n  height: auto;\n  min-height: 40px;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding-top: 12px;\n  padding-right: 24px;\n  padding-bottom: 12px;\n  padding-left: 24px;\n  font-family: Arial,sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  color: #ffffff;\n  text-transform: uppercase;\n  background-color: #6200ea;\n  border-radius: 50px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  border-bottom-left-radius: 50px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n.button-plugin-PirycQFW:focus {\n  display: flex;\n  width: auto;\n  height: auto;\n  min-height: 40px;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding-top: 12px;\n  padding-right: 24px;\n  padding-bottom: 12px;\n  padding-left: 24px;\n  font-family: Arial,sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  color: #ffffff;\n  text-transform: uppercase;\n  background-color: #6200ea;\n  border-radius: 50px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  border-bottom-left-radius: 50px;\n  box-shadow: medium;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n.button-plugin-PirycQFW:active {\n  display: flex;\n  width: auto;\n  height: auto;\n  min-height: 40px;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding-top: 12px;\n  padding-right: 24px;\n  padding-bottom: 12px;\n  padding-left: 24px;\n  font-family: Arial,sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  color: #ffffff;\n  text-transform: uppercase;\n  background-color: #6200ea;\n  border-radius: 50px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  border-bottom-left-radius: 50px;\n  transform: scale(0.98);\n  transition: all 0.3s ease;\n  cursor: pointer;\n}',
                        name: 'Boton',
                        config: {
                          image:
                            'uploads/2025/marzo/876adc1d939ebef4dcee7ea41153631a.svg',
                          goTo: 'http://localhost:4200/admin',
                          target: '_blank',
                        },
                        text: {
                          etiqueta: 'jvHda8rXe6aCxiML',
                        },
                      },
                    },
                    {
                      uuid: 'Pjy7Zk4p',
                      css: '.grid-column-Pjy7Zk4p {\n  display: block;\n  width: 100%;\n  height: auto;\n padding-top: 12px;\n  padding-right: 12px;\n  padding-bottom: 12px;\n  padding-left: 12px;\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      _id: new Types.ObjectId('6acd1eda8391ac9c8d921a29'),
      data: {
        body: {
          css: '.body {\n  display: flex;\n  width: 100%;\n height: auto;\n  min-height: 80vh;\n  max-height: 80vh;\n  flex-direction: column;\n  justify-content: center;\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n background-color: #ffffff; \n}',
          config: {
            backgroundImage: '',
          },
          data: [
            {
              uuid: 'bse8ot4O',
              css: '.grid-section-bse8ot4O {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: 40px;\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  font-family: Inter,sans-serif;\n}',
              config: {
                backgroundImage: '',
              },
              rows: [
                {
                  uuid: 'ANXoYE0J',
                  css: '.grid-row-ANXoYE0J{}',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'ACaQyqQd',
                      css: '.grid-column-ACaQyqQd{\n    padding: 12px 12px 12px 12px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'iYiG2pIy',
                        css: '.image-plugin-iYiG2pIy{\n    width: 150px;\n    height: 80px;\n}',
                        name: 'Imagen',
                        config: {
                          image:
                            'uploads\\2025\\junio\\57dc70c781386ffad5eb13c15289b401.png',
                        },
                        text: {
                          alt: '6ZDbcdTtVcFG7CB7',
                        },
                      },
                    },
                  ],
                },
                {
                  uuid: 'nFoZu070',
                  css: '.grid-row-nFoZu070{\n    padding: 12px 12px 12px 12px;\n}',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'E4JGRozL',
                      css: '.grid-column-E4JGRozL{\n    width: 100%;\n    display: flex; \n    justify-content: center; \n    align-items: center;\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'bOlubfIM',
                        css: '.label-plugin-bOlubfIM{\n    font-size: 24px;\n    font-weight: 700;\n    text-align: center;\n    text-transform: uppercase;\n}',
                        name: 'Etiqueta',
                        config: {},
                        text: {
                          etiqueta: 'dcfBJS8SClkNw2hb',
                        },
                      },
                    },
                  ],
                },
                {
                  uuid: 'JqA2OpPu',
                  css: '.grid-row-JqA2OpPu {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  min-height: 40px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  font-family: Inter,sans-serif;\n}\n\n@container (min-width: 834px) {\n  .grid-row-JqA2OpPu {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n}',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'qtSFUOwK',
                      css: '.grid-column-qtSFUOwK {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: 40px;\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  font-family: Inter,sans-serif;\n}\n\n@container (min-width: 834px) {\n  .grid-column-qtSFUOwK {\n    width: 16.66%;\n  }\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                    {
                      uuid: 'ABMs2zKV',
                      css: '.grid-column-ABMs2zKV {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: 40px;\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  font-family: Inter,sans-serif;\n}\n\n@container (min-width: 834px) {\n  .grid-column-ABMs2zKV {\n    width: 66.68%;\n  }\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'oeKR3Q4s',
                        css: '.paragraph-plugin-oeKR3Q4s {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: 40px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  font-family: Inter,sans-serif;\n  text-align: justify;\n}\n\n@container (min-width: 834px) {\n  .paragraph-plugin-oeKR3Q4s {\n    padding-top: 10px;\n    padding-right: 10px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n  }\n}',
                        name: 'Parrafo',
                        config: {},
                        text: {
                          parrafo: 'TyhB6MstRNOtsOQq',
                        },
                      },
                    },
                    {
                      uuid: 'Utttz2Dq',
                      css: '.grid-column-Utttz2Dq {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: 40px;\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  font-family: Inter,sans-serif;\n}\n\n@container (min-width: 834px) {\n  .grid-column-Utttz2Dq {\n    width: 16.66%;\n  }\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                  ],
                },
                {
                  uuid: 'mWjXlzUY',
                  css: '.grid-row-mWjXlzUY{\n    margin-bottom: 10px;\n}',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'JLkz0350',
                      css: '.grid-column-JLkz0350{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'KdxICG8T',
                        css: '.button-plugin-KdxICG8T{   \n    width: auto;\n    display: flex; \n    align-items: center;\n    justify-content: center;\n    padding: 12px 30px;\n    font-size: 16px;\n    font-weight: 600;    \n    text-transform: uppercase;\n    background-color: #3498db;\n    color: white;\n    border: none;\n    border-radius: 50px;\n    text-align: center;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    }\n    \n.button-plugin-KdxICG8T:hover { \n    background-color: #2980b9; \n    transform: translateY(-3px);\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\n}\n\n.button-plugin-KdxICG8T:active {\n    transform: translateY(1px);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}',
                        name: 'Boton',
                        config: {
                          goTo: 'http://localhost:4200/es/home',
                          target: '_self',
                          image:
                            'uploads/2025/marzo/876adc1d939ebef4dcee7ea41153631a.svg',
                        },
                        text: {
                          etiqueta: 'DDRVpRWQlaMGh0Wp',
                        },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  ];

  const operations = pages.map((page) => ({
    updateOne: {
      filter: { _id: page._id },
      update: {
        $setOnInsert: page,
      },
      upsert: true,
    },
  }));

  const result = await pageModel.bulkWrite(operations, {
    ordered: true,
  });

  console.log(
    `✓ Estructura de páginas procesadas: ${pages.length}. ` +
      `Insertadas: ${result.upsertedCount}`,
  );
}
