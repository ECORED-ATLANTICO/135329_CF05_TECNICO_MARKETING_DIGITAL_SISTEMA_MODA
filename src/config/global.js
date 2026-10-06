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
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        download: 'downloads/124108_CF05_DU.pdf',
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
      termino: '<em>E-commerce</em>',
      significado:
        'Método de compra y venta de productos a través de entornos digitales.',
    },
    {
      termino: 'Fidelización',
      significado: 'Proceso de generar lealtad y confianza.',
    },
    {
      termino: '<em>Lead</em>',
      significado: 'Cliente potencial.',
    },
    {
      termino: '<em>Social selling</em>',
      significado:
        'Uso de las redes sociales para atraer a los prospectos comerciales de una marca, con el fin de generar ventas con públicos objetivos.',
    },
    {
      termino: '<em>Target</em>',
      significado: 'Público objetivo determinado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ariza, F. y Ariza, J. (2014). <em>Comunicación empresarial y atención al cliente</em>. McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Ariño, J. J. (2018). <em>Ventas para emprendedores: Todo lo que necesitas saber</em>. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Contreras, N. (2019, 12 de marzo). <em>Social selling: La guía de ventas en redes sociales</em>. Hootsuite.',
      link:
        'https://blog.hootsuite.com/es/social-selling-venta-en-redes-sociales/',
    },
    {
      referencia:
        'Congreso de Colombia. (2012, 17 de octubre). Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. <em>Diario Oficial</em>.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1684507',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2015, 26 de mayo). Decreto 1074 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. <em>Diario Oficial</em>.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30019935',
    },
    {
      referencia:
        'Congreso de Colombia. (2023, 10 de julio). Ley 2300 de 2023. Por medio de la cual se establecen medidas que protejan el derecho a la intimidad de los consumidores. <em>Diario Oficial</em>.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30046853',
    },
    {
      referencia:
        'Creatiburón. (2016, 10 de octubre). <em>Fidelización de clientes: Te doy la receta para conseguir clientes leales</em>.',
      link: 'https://www.creatiburon.com/fidelizacion-de-clientes/',
    },
    {
      referencia:
        'García Gómez, B., y Gutiérrez Arranz, A. M. (2013). <em>Marketing de fidelización</em>. Ediciones Pirámide.',
      link: '',
    },
    {
      referencia:
        'Hotmart. (2021, 28 de abril). <em>Canales de venta: ¿Cuáles son los más eficientes hoy en día?</em>',
      link: 'https://hotmart.com/es/blog/canales-de-venta',
    },
    {
      referencia:
        'IMF Business School. (10 de enero de 2017). <em>Redacción en medios digitales: El reto para los Marketers</em>. IMF Blog.',
      link:
        'https://blogs.imf-formacion.com/blog/marketing/redaccion-medios-digitales-marketers/',
    },
    {
      referencia:
        'Muente, G. (Mayo 22 de 2018). <em>Tipos de ventas: ¿cuáles existen y en qué se distinguen?</em> Rock Content - ES.',
      link: 'https://rockcontent.com/es/blog/tipos-de-ventas/',
    },
    {
      referencia:
        'Pastrana, C. (2014, 10 de febrero). <em>Cómo escribir en Internet: Técnicas de redacción periodística</em>. IEBS.',
      link:
        'https://www.iebschool.com/hub/redaccion-medios-online-comunicacion-digital/',
    },
    {
      referencia:
        'RD Station. (s. f.). <em>Ventas: Estrategias, técnicas y todo lo que necesitas saber</em>.',
      link: 'https://www.rdstation.com/es/ventas/',
    },
    {
      referencia:
        'Soria Ibáñez, M. del M. (2015). <em>Plan de medios de comunicación e Internet: UF2398</em>. Editorial CEP.',
      link: '',
    },
    {
      referencia:
        'Tenebit. (22 de marzo de 2023). <em>El CRM en la cultura organizacional</em>. Tenebit Blog.',
      link: 'https://www.tenebit.com.co/crm-en-la-cultura-organizacional/',
    },
    {
      referencia:
        'Zendesk. (13 de abril de 2022). <em>Etapas del proceso de ventas: 7 pasos para cerrar más tratos</em>. Zendesk Blog.',
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
            'Responsable Nacional Ecosistema de Recursos Educativos Digitales (RED) - Profesional 06',
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
          centro: 'Centro de Diseño Y Metrología - Regional Distrito Capital',
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
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
