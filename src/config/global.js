export default {
  global: {
    Name: 'Interacción con clientes para el proceso de venta',
    Description:
      'El entorno digital ha propuesto nuevas maneras de desarrollar los procesos cotidianos y las ventas no son la excepción. Entender las dinámicas de interacción de los clientes para llevar a cabo el plan de acción más adecuado, desde la redacción de un texto de interés hasta la generación de una base de datos después de un proceso de fidelización, es todo un esquema que debe apreciarse para llevar a cabo una venta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Qué es una venta y tipos de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Proceso de venta ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Canales de venta ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: '<em>Social selling</em>',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación asertiva con clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Redacción para medios de comunicación digitales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Bases para un plan de medios digitales',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Introducción al CRM',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Fidelización y mantenimiento de servicio al cliente en las redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Implementación de bases de datos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Generación de una base de datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Trazabilidad del servicio',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/135329_CF05_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'AIDA',
      significado:
        'Técnica de ventas que comprende cuatro etapas: atención, interés, deseo y acción, orientadas a motivar al cliente para realizar una compra.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Conjunto organizado de información que permite almacenar, consultar y gestionar los datos de los clientes, de acuerdo con las disposiciones aplicables sobre protección de datos personales.',
    },
    {
      termino: 'CRM',
      significado:
        'Sigla de <em>Customer Relationship Management</em>, que corresponde a la gestión de las relaciones con los clientes mediante herramientas y estrategias que permiten organizar la información y realizar seguimiento a las interacciones comerciales.',
    },
    {
      termino: 'Canal de venta',
      significado:
        'Medio a través del cual el cliente tiene contacto con los productos o servicios que ofrece una empresa.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'Capacidad de transmitir información, ideas y mensajes de manera clara, respetuosa y oportuna, teniendo en cuenta las necesidades del interlocutor.',
    },
    {
      termino: '<em>E-commerce</em>',
      significado:
        'Método de compra y venta de productos o servicios a través de entornos digitales.',
    },
    {
      termino: 'Embudo de ventas',
      significado:
        'Representación de las etapas que atraviesa un cliente potencial durante el proceso de compra, desde el primer contacto hasta la adquisición de un producto o servicio.',
    },
    {
      termino: '<em>Email marketing</em>',
      significado:
        'Estrategia de comunicación comercial que utiliza el correo electrónico para informar, promocionar productos o servicios y mantener la relación con los clientes.',
    },
    {
      termino: '<em>Feedback</em>',
      significado:
        'Retroalimentación que permite conocer las opiniones, experiencias y sugerencias de los clientes frente a los productos, servicios o procesos de atención.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Proceso de generar lealtad y confianza en los clientes, mediante estrategias orientadas a mantener relaciones comerciales duraderas.',
    },
    {
      termino: '<em>Lead</em>',
      significado:
        'Cliente potencial que ha manifestado interés en los productos o servicios de una empresa y que puede avanzar en el proceso de venta.',
    },
    {
      termino: '<em>Marketplace</em>',
      significado:
        'Plataforma digital que funciona como un centro comercial virtual, en el que diferentes marcas o vendedores pueden ofrecer sus productos o servicios.',
    },
    {
      termino: 'Posventa',
      significado:
        'Etapa del proceso comercial que se desarrolla después de concretar una venta y comprende acciones de seguimiento, atención y acompañamiento al cliente.',
    },
    {
      termino: 'Prospección',
      significado:
        'Proceso de identificación e investigación de clientes potenciales, considerando sus características, necesidades e intereses.',
    },
    {
      termino: 'Social <em>selling</em>',
      significado:
        'Estrategia de ventas que utiliza las redes sociales para identificar, atraer e interactuar con clientes potenciales y establecer relaciones comerciales.',
    },
    {
      termino: '<em>Target</em>',
      significado:
        'Público objetivo al que se dirigen los productos, servicios o estrategias comerciales de una empresa.',
    },
    {
      termino: '<em>Telemarketing</em>',
      significado:
        'Estrategia comercial que utiliza las llamadas telefónicas como medio para promocionar productos o servicios, contactar clientes y concretar ventas.',
    },
    {
      termino: 'Trazabilidad del servicio',
      significado:
        'Seguimiento de las interacciones y acciones realizadas durante la prestación del servicio al cliente, que permite consultar la información y verificar la atención brindada.',
    },
    {
      termino: 'Venta <em>inbound</em>',
      significado:
        'Estrategia comercial orientada a atraer clientes potenciales mediante contenidos y acciones que responden a sus intereses y necesidades.',
    },
    {
      termino: 'Venta <em>inside sales</em>',
      significado:
        'Modalidad de venta que se desarrolla de manera remota, mediante herramientas de comunicación digital y otros canales que permiten interactuar con los clientes sin requerir encuentros presenciales.',
    },
    {
      termino: '<em>Buyer persona</em>',
      significado:
        'Representación semificticia del cliente ideal de una empresa, construida a partir de información sobre sus características, comportamientos, necesidades e intereses.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ariza, F., & Ariza, J. (2014). Comunicación empresarial y atención al cliente. McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Ariño, J. J. (2018). Ventas para emprendedores: Todo lo que necesitas saber. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2012, 17 de octubre). Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Congreso de Colombia. (2023, 10 de julio). Ley 2300 de 2023. Por medio de la cual se establecen medidas que protejan el derecho a la intimidad de los consumidores. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=213990',
    },
    {
      referencia:
        'Contreras, N. (2019, 12 de marzo). <em>Social selling</em>: La guía de ventas en redes sociales. Hootsuite.',
      link:
        'https://blog.hootsuite.com/es/social-selling-venta-en-redes-sociales/',
    },
    {
      referencia:
        'Creatiburón. (2016, 10 de octubre). Fidelización de clientes: Te doy la receta para conseguir clientes leales.',
      link: 'https://www.creatiburon.com/fidelizacion-de-clientes/',
    },
    {
      referencia:
        'García Gómez, B., & Gutiérrez Arranz, A. M. (2013). <em>Marketing</em> de fidelización. Ediciones Pirámide.',
      link: '',
    },
    {
      referencia:
        'Hotmart. (2021, 28 de abril). Canales de venta: ¿Cuáles son los más eficientes hoy en día?',
      link: 'https://hotmart.com/es/blog/canales-de-venta',
    },
    {
      referencia:
        'IMF Business School. (2017, 10 de enero). Redacción en medios digitales: El reto para los <em>marketers</em>. IMF Blog.',
      link:
        'https://blogs.imf-formacion.com/blog/marketing/redaccion-medios-digitales-marketers/',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2015, 26 de mayo). Decreto 1074 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76608',
    },
    {
      referencia:
        'Muente, G. (2018, 22 de mayo). Tipos de ventas: ¿Cuáles existen y en qué se distinguen? Rock Content - ES.',
      link: 'https://rockcontent.com/es/blog/tipos-de-ventas/',
    },
    {
      referencia:
        'Pastrana, C. (2014, 10 de febrero). Cómo escribir en Internet: Técnicas de redacción periodística. IEBS.',
      link:
        'https://www.iebschool.com/hub/redaccion-medios-online-comunicacion-digital/',
    },
    {
      referencia:
        'RD Station. (s. f.). Ventas: Estrategias, técnicas y todo lo que necesitas saber.',
      link: 'https://www.rdstation.com/es/ventas/',
    },
    {
      referencia:
        'Soria Ibáñez, M. del M. (2015). Plan de medios de comunicación e Internet: UF2398. Editorial CEP.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51054',
    },
    {
      referencia:
        'Tenebit. (2023, 22 de marzo). El CRM en la cultura organizacional. Tenebit Blog.',
      link: 'https://www.tenebit.com/co/blog/crm-para-clinicas-guia-completa/',
    },
    {
      referencia:
        'Zendesk. (2022, 13 de abril). Etapas del proceso de ventas: 7 pasos para cerrar más tratos.',
      link: 'https://www.zendesk.es/blog/sales/7-pasos-para-cerrar-mas-tratos/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Maria Camila Álvarez',
          cargo: 'Contratista diseño Curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Liliana Ceballos',
          cargo: 'Contratista diseño Curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Cristian Metaute Medina',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor metodológico y pedagógico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Uriel Darío González Montoya',
          cargo: 'Acompañamiento pedagógico',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Adriana Marcela Suárez Eljure',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ángela María Maldonado Jaime',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jessica Moreno Realpe',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.magnific.com/es" target="_blank">https://www.magnific.com/es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
