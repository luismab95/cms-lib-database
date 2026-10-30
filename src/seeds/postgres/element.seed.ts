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
      style: {
        base: '{display:flex;width:auto;height:42px;flex-direction:row;justify-content:center;align-items:center;gap:8px;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-family:Inter,sans-serif;background-color:#6200ea;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-right-radius:50px;border-bottom-left-radius:50px;transition:all 0.3s ease;cursor:pointer;}',
        ':hover': '{transform:scale(0.98);background-color:#5000C8;}',
      },
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
          style: {
            base: '{width:20px;height:20px;object-fit:cover;}',
          },
          childrens: [],
        },
        {
          slot: 'title',
          elementId: 2,
          style: {
            base: '{width:100%;height:100%;font-family:Arial,sans-serif;font-size:12px;font-weight:600;color:#ffffff;text-align:left;cursor:pointer;}',
          },
          childrens: [],
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
      style: {
        base: '{font-family:Arial,sans-serif;font-size:12px;text-align:center;color:#000000;}',
      },
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
      style: {
        base: '{font-family:Arial,sans-serif;font-size:12px;line-height:1.5;color:#000000;text-align:justify;}',
      },
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
      style: {
        base: '{width:100%;height:100%;object-fit:cover;}',
      },
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
            hint: 'Formatos permitidos:PNG, JPG, WEBP o SVG',
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
      style: {
        base: '{display:block;width:100%;height:auto;min-height:40px;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;}',
      },
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
      style: {
        base: '{width:320px;height:auto;overflow:hidden;background-color:#ffffff;border-top:1px solid #e5e7eb;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-right-radius:16px;border-bottom-left-radius:16px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.04);transition:all 0.3s ease;}',
        ':hover':
          '{transform:translateY(-5px);box-shadow:0 12px 28px rgba(0, 0, 0, 0.10);}',
      },
      config: {},
      text: {},
      type: [],
      kind: 'composite',
      childrenSchema: [
        {
          slot: 'image',
          elementId: 4,
          style: { base: '{width:100%;height:100%;object-fit:cover;}' },
          childrens: [],
        },
        {
          slot: 'badge',
          elementId: 2,
          style: {
            base: '{padding-top:4px;padding-right:10px;padding-bottom:4px;padding-left:10px;position:absolute;top:12px;right:12px;margin-top:5px;margin-right:10px;margin-bottom:0px;margin-left:0px;color:#166534;background-color:#dcfce7;border-top-left-radius:20px;border-top-right-radius:20px;border-bottom-right-radius:20px;border-bottom-left-radius:20px;font-size:12px;font-weight:600;}',
          },
          childrens: [],
        },
        {
          slot: 'title',
          elementId: 2,
          style: {
            base: '{margin-top:0px;margin-right:10px;margin-bottom:0px;margin-left:0px;font-family:Arial,sans-serif;font-size:18px;color:#111827;}',
          },
          childrens: [],
        },
        {
          slot: 'description',
          elementId: 3,
          style: {
            base: '{margin-top:5px;margin-right:20px;margin-bottom:0px;margin-left:0px;font-family:Arial,sans-serif;font-size:14px;color:#6b7280;line-height:1.6;}',
          },
          childrens: [],
        },
        {
          slot: 'button',
          elementId: 1,
          style: {
            base: '{width:100%;height:40px;display:flex;flex-direction:row-reverse;justify-content:flex-end;align-items:center;gap:8px;margin-top:12px;cursor:pointer;}',
            ':hover': '{transform:translateX(4px);}',
          },
          childrens: [
            {
              slot: 'title',
              elementId: 2,
              style: {
                base: '{font-size:20px;transition:transform 0.2s ease;color:#2563eb;font-size:14px;font-weight:600;text-decoration:none;cursor:pointer;}',
              },
              childrens: [],
            },
            {
              slot: 'image',
              elementId: 4,
              style: { base: '{width:100%;height:16px;object-fit:cover;}' },
              childrens: [],
            },
          ],
        },
      ],
      status: true,
    },
  ] as Element[];

  const result = await elementRepository.save(elements);

  console.log(
    `✓ Elementos procesados:${elements.length}. ` +
      `Insertados:${result.length}`,
  );
}
