export default {
  global: {
    componenteFormativo:
      'Conceptos, tecnologías y arquitectura para el desarrollo <i>web</i>',
    descripcionCurso:
      'En este componente formativo se abordarán los conceptos relacionados con el funcionamiento de un sistema web soportado bajo la arquitectura de la internet. Seguidamente se revisarán las tecnologías más importantes para el desarrollo web, tanto del lado del cliente como del servidor y por último se abordan los conceptos básicos de una arquitectura orientada a servicios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'La internet y la web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Funcionamiento de la internet',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Arquitectura web',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Introducción a las tecnologías para el desarrollo web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tecnologías del front-end',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tecnologías del back-end',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Introducción a la arquitectura orientada a servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'SOAP',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'REST',
            hash: 't_3_2',
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228128_CF05_DU.pdf',
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
  complementario: [
    {
      tema: 'Cómo funciona la internet',
      referencia:
        'ThePRBridge. (2011). <i>Cómo funciona el internet (video)</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=31LE0bPLrhM',
    },
    {
      tema: 'La internet en 5 minutos',
      referencia:
        'Aaron. (2009). <i>How the internet Works in 5 Minutes (video)</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7_LPdttKXPc',
    },
    {
      tema: 'Topología de redes',
      referencia: 'saklar. (2017). <i>Topologías de Red (video)</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=awLJkNHBoms',
    },
    {
      tema: 'Front-end y backend, en qué consisten, sus tecnologías, API.',
      referencia:
        'Code War. (2020). 2. <i>Front-end y backend, en qué consisten, sus tecnologías, APIs - Aprende a programar sistemas web (video)</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rQX8D4dy1PM',
    },
  ],
  glosario: [
    {
      termino: 'Arquitectura <i>software</i>',
      significado:
        'es una metodología que se refiere a la estructuración de un sistema <i>software</i> que, idealmente, se crea en etapas tempranas de la construcción del sistema.',
    },
    {
      termino: 'Página <i>web</i>',
      significado:
        'es un documento que se puede mostrar en un navegador <i>web</i> como Firefox, Google Chrome, Microsoft internet Explorer o Edge, o Safary de Apple.',
    },
    {
      termino: 'Servidor <i>web</i>',
      significado:
        'una computadora de grandes especificaciones <i>hardware</i> que aloja un sitio web o plataformas con todos sus recursos en la internet.',
    },
    {
      termino: 'Sitio <i>web</i>',
      significado:
        'es una colección o conjunto de páginas <i>web</i> que se agrupan y normalmente se conectan de varias maneras. Por lo regular se le conoce como "sitio <i>web</i>" o simplemente "sitio".',
    },
    {
      termino: 'W3C',
      significado:
        'por sus siglas <i>World Wide Web Consortium</i>. Es una comunidad internacional que genera recomendaciones y estándares que aseguran el crecimiento de la WWW a largo plazo.',
    },
    {
      termino: '<i>Web Push</i>',
      significado:
        'son notificaciones que el usuario recibe en su navegador (móvil o de escritorio) sin necesidad de tener una aplicación descargada en su equipo.',
    },
  ],
  referencias: [
    {
      referencia: 'Angular. (2021). Angular. ',
      link: 'https://angular.io/',
    },
    {
      referencia:
        'Fisher, S. (2021, 19 mayo). ¿Qué es TCP/IP y cómo funciona? Avast Academy. ',
      link: 'https://www.avast.com/es-es/c-what-is-tcp-ip',
    },
    {
      referencia:
        'I. (2018a, febrero 11). Conceptos básicos sobre tecnologías de desarrollo web. ingeniovirtual.com. ',
      link:
        'https://www.ingeniovirtual.com/conceptos-basicos-sobre-tecnologias-de-desarrollo-web/',
    },
    {
      referencia:
        'Juncosa, M. (2020, 6 agosto). El modelo TCP/IP capa a capa. aprendederedes.com. ',
      link: 'https://aprenderedes.com/2019/06/el-modelo-tcpip/',
    },
    {
      referencia:
        'Mistry, J. (2021, 29 mayo). 8 Best Backend Frameworks to Use for web Development 2021. Monocubed. ',
      link: 'https://www.monocubed.com/best-backend-frameworks/',
    },
    {
      referencia:
        'Moz://a. (2021, 13 mayo). How does the internet work? - Learn web development | MDN. MDN web Docs. ',
      link:
        'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_internet_work',
    },
    {
      referencia:
        'P. (2021, 15 marzo). Front End Development Trends That Will Be with Us in 2021. Medium. ',
      link:
        'https://productcoalition.com/front-end-development-trends-that-will-be-with-us-in-2021-a0ad023922ea',
    },
    {
      referencia:
        'Ramos, R. (2020, 18 noviembre). ¿Qué es JavaScript y para qué sirve? Agencia de Marketing Digital | Rafa Ramos. ',
      link: 'https://soyrafaramos.com/que-es-javascript-para-que-sirve/',
    },
    {
      referencia: 'RedHat. (2021). REST vs. SOAP. ',
      link:
        'https://www.redhat.com/en/topics/integration/whats-the-difference-between-soap-rest',
    },
    {
      referencia:
        'SOA (arquitectura orientada a servicios). (2021, 7 mayo). IBM. ',
      link: 'https://www.ibm.com/co-es/cloud/learn/soa ',
    },
    {
      referencia:
        'Tanenbaum, A. S., Wetherall, D. J., & Elizondo, A. V. R. (2012). Redes de computadoras. Pearson Educación. ',
      link: '',
    },
    {
      referencia:
        'Third Rock Techkno. (2021, 24 marzo). Top 5 picks for backend development in 2021. ',
      link:
        'https://www.thirdrocktechkno.com/blog/top-5-picks-for-backend-development-in-2021/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Santiago Muñoz de la Rosa',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Vilma Lucia Perilla Méndez',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhana Johanna Bustillo Ardial',
          cargo: 'Revisión de estilo',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y Producción audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Actividad didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
