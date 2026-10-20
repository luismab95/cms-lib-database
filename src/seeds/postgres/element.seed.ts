import { EntityManager } from 'typeorm';
import { Element } from '../../entities/cms/element.entity.js';

export async function ElementSeeder(dataSource: EntityManager): Promise<void> {
  const elementRepository = dataSource.getRepository(Element);
  const elements = [
    {
      id: 1,
      name: 'Boton',
      description: 'Componente Botón',
      icon: 'fa-solid fa-square',
      css: 'button-plugin',
      config: JSON.parse(
        '{"goTo": "", "target": "_blank", "image": ""\n       }',
      ),
      text: JSON.parse('{"etiqueta":"Boton"}'),
      type: JSON.parse(
        '[\r\n    {\r\n        "key": "image",\r\n        "type": "file",\r\n        "label": "Icono",\r\n        "required": false,\r\n        "validationMessages": {\r\n            "required": "Icono es obligatorio."\r\n        },\r\n        "props": {\r\n            "required": false,\r\n            "accept": "image\/png,image\/jpeg,image\/webp,image\/svg+xml",\r\n            "placeholder": "Seleccionar imagen",\r\n            "remove": "Remover icono",\r\n            "hint": "Formatos permitidos: PNG, JPG, WEBP o SVG",\r\n            "type": "image"\r\n        }\r\n    },\r\n    {\r\n        "key": "goTo",\r\n        "type": "input",\r\n        "label": "Enlace de redirección",\r\n        "required": true,\r\n        "validationMessages": {\r\n            "required": "Enlace de redirección es obligatorio."\r\n        },\r\n        "props": {\r\n            "placeholder": "Ingresa el enlace de redirección",\r\n            "required": true,\r\n            "type": "text"\r\n        }\r\n    },\r\n    {\r\n        "key": "target",\r\n        "type": "select",\r\n        "label": "Modo de redirección",\r\n        "required": true,\r\n        "props": {\r\n            "required": true,\r\n            "placeholder": "Selecciona el modo de redirección"\r\n        },\r\n        "validationMessages": {\r\n            "required": "Modo de redirección es obligatorio."\r\n        },\r\n        "options": [\r\n            {\r\n                "value": "_blank",\r\n                "label": "En otra ventana"\r\n            },\r\n            {\r\n                "value": "_self",\r\n                "label": "En la misma ventana"\r\n            }\r\n        ]\r\n    }\r\n]',
      ),
      status: true,
    },
    {
      id: 2,
      name: 'Etiqueta',
      description: 'Componente Etiqueta',
      icon: 'fa-solid fa-tag',
      css: 'label-plugin',
      config: JSON.parse('{}'),
      text: JSON.parse('{"etiqueta":"Texto"}'),
      type: JSON.parse('[]'),
      status: true,
    },
    {
      id: 3,
      name: 'Parrafo',
      description: 'Componente Párrafo',
      icon: 'fa-solid fa-paragraph',
      css: 'paragraph-plugin',
      config: '{}',
      text: '{"parrafo":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiores possimus culpa laudantium? Quibusdam exercitationem nam commodi? Dolorum rem quidem mollitia soluta optio? Nemo quidem, fugit nesciunt ex distinctio dolor!"}',
      type: '[]',
      status: true,
    },
    {
      id: 4,
      name: 'Imagen',
      description: 'Componente Imágen',
      icon: 'fa-solid fa-image',
      css: 'image-plugin',
      config: JSON.parse('{"image":""}'),
      text: JSON.parse('{"alt":"Texto alternativo"}'),
      type: JSON.parse(
        '[\r\n    {\r\n        "key": "image",\r\n        "type": "file",\r\n        "label": "Imagen",\r\n        "required": true,\r\n        "validationMessages": {\r\n            "required": "Imagen es obligatorio."\r\n        },\r\n        "props": {\r\n            "required": true,\r\n            "accept": "image\/png,image\/jpeg,image\/webp,image\/svg+xml",\r\n            "placeholder": "Seleccionar imagen",\r\n            "remove":"Remover imagen",\r\n            "hint": "Formatos permitidos: PNG, JPG, WEBP o SVG",\r\n            "type": "image"\r\n        }\r\n    }\r\n]',
      ),
      status: true,
    },
    {
      id: 5,
      name: 'Idiomas',
      description: 'Componente Idiomas',
      icon: 'fa-solid fa-language',
      css: 'language-plugin',
      config: JSON.parse('{"service":"\/ms-cms\/public\/languages"}'),
      text: JSON.parse('{}'),
      type: JSON.parse(
        '[\r\n    {\r\n        "key": "service",\r\n        "type": "input",\r\n        "label": "Servicio listado de idiomas",\r\n        "required": true,\r\n        "props": {\r\n            "required": true,\r\n            "placeholder": "Ingresa el enlace del api de servicios",\r\n            "type": "text"\r\n        }\r\n    }\r\n]',
      ),
      status: true,
    },
  ] as unknown as Element[];

  const result = await elementRepository.save(elements);

  console.log(
    `✓ Elementos procesados: ${elements.length}. ` +
      `Insertados: ${result.length}`,
  );
}
