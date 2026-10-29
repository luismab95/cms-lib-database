import { EntityManager } from 'typeorm';
import { Element } from '../../entities/cms/element.entity.js';

export async function ElementSeeder(dataSource: EntityManager): Promise<void> {
  const elementRepository = dataSource.getRepository(Element);
  const elements = [
    {
      id: 1,
      code: 'button',
      name: 'Boton',
      description: 'Componente Botón',
      icon: 'fa-solid fa-square',
      css: 'button-plugin',
      style:
        '{ display: flex; width: auto; height: 42px; min-height: 42px; flex-direction: row; justify-content: center; align-items: center; align-content: center; align-self: center; gap: 8px; padding-top: 12px; padding-right: 24px; padding-bottom: 12px; padding-left: 24px; font-family: Inter,sans-serif; background-color: #6200ea; border-top-left-radius: 50px; border-top-right-radius: 50px; border-bottom-right-radius: 50px; border-bottom-left-radius: 50px; transform: scale; transition: all 0.3s ease; cursor: pointer; }',
      config: { goTo: '', target: '_blank' },
      text: {},
      type: [
        {
          key: 'goTo',
          type: 'input',
          label: 'Enlace de redirección',
          required: true,
          validationMessages: {
            required: 'Enlace de redirección es obligatorio.',
          },
          props: {
            placeholder: 'Ingresa el enlace de redirección',
            required: true,
            type: 'text',
          },
        },
        {
          key: 'target',
          type: 'select',
          label: 'Modo de redirección',
          required: true,
          props: {
            required: true,
            placeholder: 'Selecciona el modo de redirección',
          },
          validationMessages: {
            required: 'Modo de redirección es obligatorio.',
          },
          options: [
            { value: '_blank', label: 'En otra ventana' },
            { value: '_self', label: 'En la misma ventana' },
          ],
        },
      ],
      kind: 'composite',
      childrenSchema: [
        {
          slot: 'image',
          elementId: 4,
          style:
            '{ display: block; width: 20px; height: 20px; min-height: 20px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: Inter,sans-serif; }',
        },
        {
          slot: 'title',
          elementId: 2,
          style:
            '{ display: flex; width: 100%; height: 20px; min-height: 20px; flex-direction: row; justify-content: center; align-items: center; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; font-family: Arial,sans-serif; font-size: 16px; font-weight: 600; color: #ffffff; text-align: left; text-transform: uppercase; font-style: normal; cursor: pointer; }',
        },
      ],
      status: true,
    },
    {
      id: 2,
      code: 'label',
      name: 'Etiqueta',
      description: 'Componente Etiqueta',
      icon: 'fa-solid fa-tag',
      css: 'label-plugin',
      style:
        '{ display: block; width: 100%; height: auto; min-height: 40px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: Arial,sans-serif; font-size: 2.5rem; font-weight: 600; line-height: 1.2; text-align: center; }',
      config: {},
      text: { etiqueta: 'Texto' },
      type: [],
      kind: 'simple',
      childrenSchema: [],
      status: true,
    },
    {
      id: 3,
      code: 'paragraph',
      name: 'Parrafo',
      description: 'Componente Párrafo',
      icon: 'fa-solid fa-paragraph',
      css: 'paragraph-plugin',
      style:
        '{ display: block; width: 100%; height: auto; min-height: 40px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: Arial,sans-serif; font-size: 16px; line-height: 1.5; color: #000000; text-align: justify; }',
      config: {},
      text: {
        parrafo:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiores possimus culpa laudantium? Quibusdam exercitationem nam commodi? Dolorum rem quidem mollitia soluta optio? Nemo quidem, fugit nesciunt ex distinctio dolor!',
      },
      type: [],
      kind: 'simple',
      childrenSchema: [],
      status: true,
    },
    {
      id: 4,
      code: 'image',
      name: 'Imagen',
      description: 'Componente Imágen',
      icon: 'fa-solid fa-image',
      css: 'image-plugin',
      style:
        '{ display: block;  width: auto; height: 80px; min-height: 40px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: Inter,sans-serif; }',
      config: { image: '' },
      text: { alt: 'Texto alternativo' },
      type: [
        {
          key: 'image',
          type: 'file',
          label: 'Imagen',
          required: true,
          validationMessages: { required: 'Imagen es obligatorio.' },
          props: {
            required: true,
            accept: 'image/png,image/jpeg,image/webp,image/svg+xml',
            placeholder: 'Seleccionar imagen',
            remove: 'Remover imagen',
            hint: 'Formatos permitidos: PNG, JPG, WEBP o SVG',
            type: 'image',
          },
        },
      ],
      kind: 'simple',
      childrenSchema: [],
      status: true,
    },
    {
      id: 5,
      code: 'language',
      name: 'Idiomas',
      description: 'Componente Idiomas',
      icon: 'fa-solid fa-language',
      css: 'language-plugin',
      style:
        '{ display: block; width: 100%; height: auto; min-height: 40px; padding: 10px; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; }',
      config: { service: '/ms-cms/public/languages' },
      text: {},
      type: [
        {
          key: 'service',
          type: 'input',
          label: 'Servicio listado de idiomas',
          required: true,
          props: {
            required: true,
            placeholder: 'Ingresa el enlace del api de servicios',
            type: 'text',
          },
        },
      ],
      kind: 'simple',
      childrenSchema: [],
      status: true,
    },
    {
      id: 6,
      code: 'card',
      name: 'Tarjeta',
      description: 'Componente Tarjeta',
      icon: 'fa-solid fa-address-card',
      css: 'card-plugin',
      style:
        '{ display: flex;width: 300px;height: auto;max-width: 300px;box-sizing: border-box;flex-direction: column;flex-wrap: nowrap;justify-content: center;align-items: center;align-content: center;flex: 1;align-self: auto;gap: 8px;padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px;font-family: Inter,sans-serif;border-top: 1px solid #efefef;border-right: 1px solid #efefef;border-bottom: 1px solid #efefef;border-left: 1px solid #efefef;border-top-left-radius: 20px;border-top-right-radius: 20px;border-bottom-right-radius: 20px;border-bottom-left-radius: 20px;box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12); }',
      config: {},
      text: {},
      type: [],
      kind: 'composite',
      children_schema: [
        {
          slot: 'image',
          elementId: 4,
          style:
            '{display:block;width:100%;height:100px;min-height:100px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;font-family:Inter,sans-serif;}',
        },
        {
          slot: 'title',
          elementId: 2,
          style:
            '{display:flex;width:100%;height:20px;min-height:20px;flex-direction:row;justify-content:center;align-items:center;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;font-family:Arial,sans-serif;font-size:16px;font-weight:600;color:#000000;text-align:left;text-transform:uppercase;font-style:normal;}',
        },
        {
          slot: 'description',
          elementId: 3,
          style:
            '{display:flex;width:100%;height:auto;min-height:20px;flex-direction:row;justify-content:center;align-items:center;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;font-family:Arial,sans-serif;font-size:12px;font-weight:300;color:#000000;text-align:justify;}',
        },
        {
          slot: 'button',
          elementId: 1,
          style:
            '{ display: flex; width: auto; height: 42px; min-height: 42px; flex-direction: row; justify-content: center; align-items: center; align-content: center; align-self: center; gap: 8px; padding-top: 12px; padding-right: 24px; padding-bottom: 12px; padding-left: 24px; font-family: Inter,sans-serif; background-color: #6200ea; border-top-left-radius: 50px; border-top-right-radius: 50px; border-bottom-right-radius: 50px; border-bottom-left-radius: 50px; transform: scale; transition: all 0.3s ease; cursor: pointer;}',
        },
      ],
      status: true,
    },
  ] as Element[];

  const result = await elementRepository.save(elements);

  console.log(
    `✓ Elementos procesados: ${elements.length}. ` +
      `Insertados: ${result.length}`,
  );
}
