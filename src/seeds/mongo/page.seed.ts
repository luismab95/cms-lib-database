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
          css: '.body {  display: flex;  width: 100%; height: auto;  min-height: 80vh;  max-height: 80vh;  flex-direction: column;  justify-content: center;  padding-top: 10px;  padding-right: 10px;  padding-bottom: 10px;  padding-left: 10px; background-color: #ffffff;  }',
          config: {
            backgroundImage: '',
          },
          data: [
            {
              uuid: 'YGw7wWfX',
              css: '.grid-section-YGw7wWfX {  display: flex;  width: 100%;  height: auto;  min-height: 200px;  flex-direction: column;  gap: 4px;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px; }',
              config: {
                backgroundImage: '',
              },
              rows: [
                {
                  uuid: 'doQVZ182',
                  css: '.grid-row-doQVZ182 {  display: flex;  width: 100%;  height: auto;  min-height: 100px;  flex-direction: column;  justify-content: space-between;  align-items: center;  gap: 4px;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px;  position: relative; }  @container (min-width: 834px) {  .grid-row-doQVZ182 {    flex-direction: row;  } }',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'Odbi6wun',
                      css: '.grid-column-Odbi6wun {  display: block;  width: 100%;  height: auto;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px; }',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                    {
                      uuid: 'dMHLnvZj',
                      css: '.grid-column-dMHLnvZj {  display: flex;  width: 100%;  height: auto;  min-height: 40px;  flex-direction: row;  justify-content: center;  align-items: center;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px;  font-family: Inter,sans-serif; }',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'LwgODtkI',
                        code: 'image',
                        css: '.image-plugin-LwgODtkI {  display: block;  width: auto;  height: 80px;  min-height: 40px;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px;  font-family: Inter,sans-serif; }',
                        name: 'Imagen',
                        config: {
                          image:
                            'uploads\\2026\\octubre\\cecc89f6ae297bdcf7cf8b5d05adbcbe.png',
                        },
                        text: {
                          alt: 'ewVpf0ImycZ5GAyO',
                        },
                        childrens: [],
                      },
                    },
                    {
                      uuid: '1ug7lLMT',
                      css: '.grid-column-1ug7lLMT {  display: block;  width: 100%;  height: auto; padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px; }',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                  ],
                },
                {
                  uuid: 'ChkM3EEL',
                  css: '.grid-row-ChkM3EEL {  display: flex;  width: 100%;  height: auto;  min-height: 100px;  flex-direction: column;  justify-content: space-between;  align-items: center;  gap: 4px;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px;  position: relative; }  @container (min-width: 834px) {  .grid-row-ChkM3EEL {    flex-direction: row;  } }',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: '1J3GRN0B',
                      css: '.grid-column-1J3GRN0B {  display: block;  width: 100%;  height: auto; padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px; }',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                    {
                      uuid: 'ksWwTJK7',
                      css: '.grid-column-ksWwTJK7 {  display: block;  width: 100%;  height: auto;  min-height: 40px;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px; }',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'seWobl4V',
                        code: 'label',
                        css: '.label-plugin-seWobl4V {  display: block;  width: 100%;  height: auto;  min-height: 40px;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px;  font-family: Arial,sans-serif;  font-size: 2.5rem;  font-weight: 600;  line-height: 1.2;  text-align: center; }',
                        name: 'Etiqueta',
                        config: {},
                        text: {
                          etiqueta: 'cGOn5HZQPxvAJcbz',
                        },
                        childrens: [],
                      },
                    },
                    {
                      uuid: 'uzZeeDGx',
                      css: '.grid-column-uzZeeDGx {  display: block;  width: 100%;  height: auto; padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px; }',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                  ],
                },
                {
                  uuid: '1PoMZadg',
                  css: '.grid-row-1PoMZadg {  display: flex;  width: 100%;  height: auto;  min-height: 100px;  flex-direction: column;  justify-content: space-between;  align-items: center;  gap: 4px;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px;  position: relative; }  @container (min-width: 834px) {  .grid-row-1PoMZadg {    flex-direction: row;  } }',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'H6VsCrpX',
                      css: '.grid-column-H6VsCrpX {  display: block;  width: 100%;  height: auto; padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px; }  @container (min-width: 834px) {  .grid-column-H6VsCrpX { width: 30%;   } }',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                    {
                      uuid: 'r16taFVz',
                      css: '.grid-column-r16taFVz {  display: block;  width: 100%;  height: auto; min-height: 40px;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px; }  @container (min-width: 834px) {  .grid-column-r16taFVz { width: 40%;   } }',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'BhpRrAIz',
                        code: 'paragraph',
                        css: '.paragraph-plugin-BhpRrAIz {  display: block;  width: 100%;  height: auto;  min-height: 40px;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px;  font-family: Arial,sans-serif;  font-size: 16px;  line-height: 1.5;  color: #000000;  text-align: justify; }',
                        name: 'Parrafo',
                        config: {},
                        text: {
                          parrafo: 'lq4duR8VvLjYUCbk',
                        },
                        childrens: [],
                      },
                    },
                    {
                      uuid: 'Nz0inpZn',
                      css: '.grid-column-Nz0inpZn {  display: block;  width: 100%;  height: auto;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px; }  @container (min-width: 834px) {  .grid-column-Nz0inpZn { width: 30%;   } }',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                  ],
                },
                {
                  uuid: 'oZn7094f',
                  css: '.grid-row-oZn7094f {  display: flex;  width: 100%;  height: auto;  min-height: 100px;  flex-direction: column;  justify-content: space-between;  align-items: center;  gap: 4px;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px;  position: relative; }  @container (min-width: 834px) {  .grid-row-oZn7094f {    flex-direction: row;  } }',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'KbJkObrx',
                      css: '.grid-column-KbJkObrx {  display: block;  width: 100%;  height: auto;   padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px; }',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                    {
                      uuid: 'HTHlfQ3x',
                      css: '.grid-column-HTHlfQ3x {  display: block;  width: 100%;  height: auto;  min-height: 40px;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px;  font-family: Inter,sans-serif; }',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'gU5HfD6u',
                        code: 'button',
                        css: '.button-plugin-gU5HfD6u {  display: flex;  width: auto;  height: 42px;  min-height: 42px;  flex-direction: row;  justify-content: center;  align-items: center;  align-content: center;  align-self: center;  gap: 8px;  padding-top: 12px;  padding-right: 24px;  padding-bottom: 12px;  padding-left: 24px;  font-family: Inter,sans-serif;  background-color: #6200ea;  border-top-left-radius: 50px;  border-top-right-radius: 50px;  border-bottom-right-radius: 50px;  border-bottom-left-radius: 50px;  transform: scale;  transition: all 0.3s ease;  cursor: pointer; }  .button-plugin-gU5HfD6u:hover {  display: flex;  width: auto;  height: 42px;  min-height: 42px;  flex-direction: row;  justify-content: center;  align-items: center;  align-content: center;  align-self: center;  gap: 8px;  padding-top: 12px;  padding-right: 24px;  padding-bottom: 12px;  padding-left: 24px;  font-family: Inter,sans-serif;  background-color: #6200ea;  border-top-left-radius: 50px;  border-top-right-radius: 50px;  border-bottom-right-radius: 50px;  border-bottom-left-radius: 50px;  transform: scale(0.98);  transition: all 0.3s ease;  cursor: pointer; }',
                        config: {
                          goTo: 'http://localhost:4200/admin',
                          target: '_blank',
                        },
                        name: 'Boton',
                        text: {},
                        childrens: [
                          {
                            uuid: 'SLRbFSbT',
                            code: 'image',
                            css: '.image-plugin-SLRbFSbT {  display: block;  width: 20px;  height: 20px;  min-height: 20px;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px;  font-family: Inter,sans-serif; }',
                            config: {
                              image:
                                'uploads/2026/octubre/562910ea74f9fb2eca8ff8807a768edc1.svg',
                            },
                            name: 'Imagen',
                            text: {
                              alt: 'ERHda8rXe6aCxiOP',
                            },
                            childrens: [],
                            childrenSchema: [],
                            kind: 'simple',
                          },
                          {
                            uuid: '1FNUUDUJ',
                            code: 'label',
                            css: '.label-plugin-1FNUUDUJ {  display: flex;  width: 100%;  height: 20px;  min-height: 20px;  flex-direction: row;  justify-content: center;  align-items: center;  padding-top: 10px;  padding-right: 10px;  padding-bottom: 10px;  padding-left: 10px;  font-family: Arial,sans-serif;  font-size: 16px;  font-weight: 600;  color: #ffffff;  text-align: left;  text-transform: uppercase;  font-style: normal;  cursor: pointer; }',
                            config: {},
                            name: 'Etiqueta',
                            text: {
                              etiqueta: 'jvHda8rXe6aCxiML',
                            },
                            childrens: [],
                            childrenSchema: [],
                            kind: 'simple',
                          },
                        ],
                        childrenSchema: [
                          {
                            uuid: 'SLRbFSbT',
                            slot: 'image',
                          },
                          {
                            uuid: '1FNUUDUJ',
                            slot: 'title',
                          },
                        ],
                        kind: 'composite',
                      },
                    },
                    {
                      uuid: 'Pjy7Zk4p',
                      css: '.grid-column-Pjy7Zk4p {  display: block;  width: 100%;  height: auto; padding-top: 12px;  padding-right: 12px;  padding-bottom: 12px;  padding-left: 12px; }',
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
          css: '.body {  display: flex;  width: 100%; height: auto;  min-height: 80vh;  max-height: 80vh;  flex-direction: column;  justify-content: center;  padding-top: 10px;  padding-right: 10px;  padding-bottom: 10px;  padding-left: 10px; background-color: #ffffff;  }',
          config: {
            backgroundImage: '',
          },
          data: [
            {
              uuid: 'bse8ot4O',
              css: '.grid-section-bse8ot4O {  display: block;  width: 100%;  height: 100%;  min-height: 40px;  padding-top: 10px;  padding-right: 10px;  padding-bottom: 10px;  padding-left: 10px;  font-family: Inter,sans-serif; }',
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
                      css: '.grid-column-ACaQyqQd{    padding: 12px 12px 12px 12px;    width: 100%;    display: flex;    justify-content: center;    align-items: center; }',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'iYiG2pIy',
                        code: 'image',
                        css: '.image-plugin-iYiG2pIy{    width: 150px;    height: 80px; }',
                        name: 'Imagen',
                        config: {
                          image:
                            'uploads\\2026\\octubre\\cecc89f6ae297bdcf7cf8b5d05adbcbe.png',
                        },
                        text: {
                          alt: '6ZDbcdTtVcFG7CB7',
                        },
                        childrens: [],
                      },
                    },
                  ],
                },
                {
                  uuid: 'nFoZu070',
                  css: '.grid-row-nFoZu070{    padding: 12px 12px 12px 12px; }',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'E4JGRozL',
                      css: '.grid-column-E4JGRozL{    width: 100%;    display: flex;     justify-content: center;     align-items: center; }',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'bOlubfIM',
                        code: 'label',
                        css: '.label-plugin-bOlubfIM{    font-size: 24px;    font-weight: 700;    text-align: center;    text-transform: uppercase; }',
                        name: 'Etiqueta',
                        config: {},
                        text: {
                          etiqueta: 'dcfBJS8SClkNw2hb',
                        },
                        childrens: [],
                      },
                    },
                  ],
                },
                {
                  uuid: 'JqA2OpPu',
                  css: '.grid-row-JqA2OpPu {  display: flex;  width: 100%;  height: 100%;  min-height: 40px;  flex-direction: column;  justify-content: center;  align-items: center;  margin-bottom: 10px;  padding-top: 10px;  padding-right: 10px;  padding-bottom: 10px;  padding-left: 10px;  font-family: Inter,sans-serif; }  @container (min-width: 834px) {  .grid-row-JqA2OpPu {    flex-direction: row;    justify-content: space-between;  } }',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'qtSFUOwK',
                      css: '.grid-column-qtSFUOwK {  display: block;  width: 100%;  height: 100%;  min-height: 40px;  padding-top: 10px;  padding-right: 10px;  padding-bottom: 10px;  padding-left: 10px;  font-family: Inter,sans-serif; }  @container (min-width: 834px) {  .grid-column-qtSFUOwK {    width: 16.66%;  } }',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                    {
                      uuid: 'ABMs2zKV',
                      css: '.grid-column-ABMs2zKV {  display: block;  width: 100%;  height: 100%;  min-height: 40px;  padding-top: 10px;  padding-right: 10px;  padding-bottom: 10px;  padding-left: 10px;  font-family: Inter,sans-serif; }  @container (min-width: 834px) {  .grid-column-ABMs2zKV {    width: 66.68%;  } }',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'oeKR3Q4s',
                        code: 'paragraph',
                        css: '.paragraph-plugin-oeKR3Q4s {  display: block;  width: 100%;  height: 100%;  min-height: 40px;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px;  font-family: Inter,sans-serif;  text-align: justify; }  @container (min-width: 834px) {  .paragraph-plugin-oeKR3Q4s {    padding-top: 10px;    padding-right: 10px;    padding-bottom: 10px;    padding-left: 10px;  } }',
                        name: 'Parrafo',
                        config: {},
                        text: {
                          parrafo: 'TyhB6MstRNOtsOQq',
                        },
                        childrens: [],
                      },
                    },
                    {
                      uuid: 'Utttz2Dq',
                      css: '.grid-column-Utttz2Dq {  display: block;  width: 100%;  height: 100%;  min-height: 40px;  padding-top: 10px;  padding-right: 10px;  padding-bottom: 10px;  padding-left: 10px;  font-family: Inter,sans-serif; }  @container (min-width: 834px) {  .grid-column-Utttz2Dq {    width: 16.66%;  } }',
                      config: {
                        backgroundImage: '',
                      },
                      element: null,
                    },
                  ],
                },
                {
                  uuid: 'mWjXlzUY',
                  css: '.grid-row-mWjXlzUY{    margin-bottom: 10px; }',
                  config: {
                    backgroundImage: '',
                  },
                  columns: [
                    {
                      uuid: 'JLkz0350',
                      css: '.grid-column-JLkz0350{    width: 100%;    display: flex;    justify-content: center;    align-items: center; }',
                      config: {
                        backgroundImage: '',
                      },
                      element: {
                        uuid: 'KdxICG8T',
                        code: 'button',
                        css: '.button-plugin-KdxICG8T {  display: flex;  width: auto;  height: 42px;  min-height: 42px;  flex-direction: row;  justify-content: center;  align-items: center;  align-content: center;  align-self: center;  gap: 8px;  padding-top: 12px;  padding-right: 24px;  padding-bottom: 12px;  padding-left: 24px;  font-family: Inter,sans-serif;  background-color: #6200ea;  border-top-left-radius: 50px;  border-top-right-radius: 50px;  border-bottom-right-radius: 50px;  border-bottom-left-radius: 50px;  transform: scale;  transition: all 0.3s ease;  cursor: pointer; }  .button-plugin-KdxICG8T:hover {  display: flex;  width: auto;  height: 42px;  min-height: 42px;  flex-direction: row;  justify-content: center;  align-items: center;  align-content: center;  align-self: center;  gap: 8px;  padding-top: 12px;  padding-right: 24px;  padding-bottom: 12px;  padding-left: 24px;  font-family: Inter,sans-serif;  background-color: #6200ea;  border-top-left-radius: 50px;  border-top-right-radius: 50px;  border-bottom-right-radius: 50px;  border-bottom-left-radius: 50px;  transform: scale(0.98);  transition: all 0.3s ease;  cursor: pointer; }',
                        config: {
                          goTo: 'http://localhost:4200/es/home',
                          target: '_blank',
                        },
                        name: 'Boton',
                        text: {},
                        childrens: [
                          {
                            uuid: 'SLRbFSbT',
                            code: 'image',
                            css: '.image-plugin-SLRbFSbT {  display: block;  width: 20px;  height: 20px;  min-height: 20px;  padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px;  font-family: Inter,sans-serif; }',
                            config: {
                              image:
                                'uploads/2026/octubre/562910ea74f9fb2eca8ff8807a768edc1.svg',
                            },
                            name: 'Imagen',
                            text: {
                              alt: 'TYHda8rXe6aCxi3T',
                            },
                            childrens: [],
                            childrenSchema: [],
                            kind: 'simple',
                          },
                          {
                            uuid: '1FNUUDUJ',
                            code: 'label',
                            css: '.label-plugin-1FNUUDUJ {  display: flex;  width: 100%;  height: 20px;  min-height: 20px;  flex-direction: row;  justify-content: center;  align-items: center;  padding-top: 10px;  padding-right: 10px;  padding-bottom: 10px;  padding-left: 10px;  font-family: Arial,sans-serif;  font-size: 16px;  font-weight: 600;  color: #ffffff;  text-align: left;  text-transform: uppercase;  font-style: normal;  cursor: pointer; }',
                            config: {},
                            name: 'Etiqueta',
                            text: {
                              etiqueta: 'DDRVpRWQlaMGh0Wp',
                            },
                            childrens: [],
                            childrenSchema: [],
                            kind: 'simple',
                          },
                        ],
                        childrenSchema: [
                          {
                            uuid: 'SLRbFSbT',
                            slot: 'image',
                          },
                          {
                            uuid: '1FNUUDUJ',
                            slot: 'title',
                          },
                        ],
                        kind: 'composite',
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
