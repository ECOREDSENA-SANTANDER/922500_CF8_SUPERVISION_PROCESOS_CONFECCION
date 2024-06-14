export default {
  global: {
    componenteFormativo: 'Ensamble de prendas de vestir',
    descripcionCurso:
      'La trazabilidad en la elaboración de prendas de vestir es fundamental, en lo concerniente a las herramientas, maquinarias e insumos utilizados. Asimismo, la comprensión de los procesos que, al combinarse, posibilitan la interpretación de patrones y permiten la materialización de productos en la confección industrial, junto con la supervisión de acabados y terminados basados en criterios técnicos y de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.svg'),
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
        icono: '',
        numero: '1',
        titulo: 'Normas técnicas para la confección de prendas de vestir',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: '',
        numero: '2',
        titulo: 'Normas generales para la confección de prendas de vestir',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: '',
            numero: '2.1',
            titulo:
              'Normas generales de seguridad para la labor en la confección de prendas',
            hash: 't_2_1',
          },
          {
            icono: '',
            numero: '2.2',
            titulo: 'Condiciones y espacios en el trabajo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: '',
        numero: '3',
        titulo: 'Confección de prendas de vestir',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: '',
            numero: '3.1',
            titulo: 'Orden operacional de confección de camisa',
            hash: 't_3_1',
          },
          {
            icono: '',
            numero: '3.2',
            titulo: '	Orden operacional de la confección de la falda clásica',
            hash: 't_3_2',
          },
          {
            icono: '',
            numero: '3.3',
            titulo: '	Orden operacional de confección de pantalón ',
            hash: 't_3_3',
          },
          {
            icono: '',
            numero: '3.4',
            titulo:
              ' Orden operacional de confección de prendas en tejido de punto',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: '',
        numero: '4',
        titulo: 'Terminados en las prendas de vestir',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: '',
        numero: '5',
        titulo: 'Control de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: '',
            numero: '5.1',
            titulo: 'Concepto control de calidad',
            hash: 't_5_1',
          },
          {
            icono: '',
            numero: '5.2',
            titulo: 'Gestión de calidad total',
            hash: 't_5_2',
          },
          {
            icono: '',
            numero: '5.3',
            titulo: 'Puntos y controles en el proceso de confección',
            hash: 't_5_3',
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
        download: 'downloads/material.pdf',
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
      tema: '',
      referencia:
        'La costura Diy.  (2020). Confección de camisa Slim Fit para hombre [video]. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?app=desktop&v=xD1u53N8sWQ&ab_channel=LaCosturadiy',
    },
    {
      tema: '',
      referencia:
        'Academia confección a la moda. (2019) Camisa de hombre/cómo hacer/paso a paso/confección (Video) Youtube ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DgTaEpPIH1E',
    },
    {
      tema: '',
      referencia:
        'Informativos.  (2012).  Ensamble de camisa. [video]. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=xD1u53N8sWQ&ab_channel=LaCosturadiy',
    },
    {
      tema: '',
      referencia:
        'Gutiérrez, B.  (2019).  Confección de pantalón para caballero. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?app=desktop&v=NHtzg2UrKHs',
    },
    {
      tema: '',
      referencia: 'ISO, Sistema de Gestión de Calidad 9001:2015',
      tipo: 'Norma',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:es',
    },
  ],
  glosario: [
    {
      termino: 'Alfileres',
      significado:
        'Elementos utilizados para sostener prendas en el proceso de elaboración de prendas.',
    },
    {
      termino: 'Atributos del producto',
      significado:
        'Son las cualidades o características del producto como color, tamaño.',
    },
    {
      termino: 'Crin',
      significado:
        'Insumo para la confección de prendas y accesorios, en algunos casos ayudan a dar soporte a las prendas, esto siempre dependerá de su uso.',
    },
    {
      termino: 'Defecto',
      significado:
        'Es una no conformidad en características requeridas por el cliente o una norma y que causa incumplimiento del requisito y por tanto insatisfacción del cliente.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'Disciplina que estudia las interacciones del ser humano con su entorno, reúne información que permitan medir desempeño y optimización, buscando el bienestar de las personas.',
    },
    {
      termino: 'Goma o caucho',
      significado:
        'Elemento elastico utilizado para la elaboracion de cinturillas o en partes que impliquen el recogido para que sea adaptable al cuerpo.',
    },
    {
      termino: 'Hilvanar',
      significado:
        'Cosido manual empleado en diversas técnicas de tejido de acuerdo al proceso empleado en confección de prendas.',
    },
    {
      termino: 'ISO',
      significado:
        'Organización Internacional de Estandarización, ubicada en Ginebra Suiza y tiene presencia en 193 países. Promueve y desarrolla normas para estandarizar productos y servicios.',
    },
    {
      termino: 'Lote',
      significado:
        'Número establecido de una producción, las cuales tienen características comunes y se agrupan dependiendo de un objetivo determinado.',
    },
    {
      termino: 'Mariposa',
      significado:
        'Pieza del panty ubicada entre el tiro y la entrepierna para proteger y dar comodidad en la parte íntima femenina.',
    },
    {
      termino: 'Pedal',
      significado:
        'Elemento que forma parte de las máquinas de coser prendas, su función es permitir el funcionamiento de la máquina con la ayuda del motor.',
    },
    {
      termino: 'Punto de control',
      significado:
        'Son determinados con la metodología del árbol de decisión. Son las operaciones, fases o procesos que requieren realizar inspecciones para controlar la ocurrencia de defectos, lo cual es una medida preventiva.',
    },
    {
      termino: 'Punto de control crítico',
      significado:
        'Operaciones, fases o procesos que requiere de riguroso control debido a que representa alto riesgo de presentar defectos y por tanto no cumplir con los requisitos.',
    },
    {
      termino: 'Sigma (σ)',
      significado:
        'Es una letra del alfabeto griego, utilizada en representar la desviación estándar (unidad estadística de medición), representa la dispersión o variabilidad de un conjunto de datos.',
    },
    {
      termino: 'Variables de calidad',
      significado:
        'Cuantificación de las cualidades del producto. Ejemplo: carta de colores de la prenda.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cal y mayor (2021). El ciclo de Deming o ciclo de mejora continua. ',
      link: 'http://www.calymayor.com.mx/induccionco/calidad_ciclo.html',
    },
    {
      referencia: 'Calidad Aplicada a la Gestión Empresarial. (2018).',
      link:
        'http://calidadaplicagestionempresarial.blogspot.com/2018/11/tema-4-sistemas-de-calidad.html',
    },
    {
      referencia:
        'CARVIMSA. (S.F). Embalajes para textiles de exportación.    ',
      link:
        'http://www.prompex.gob.pe/Miercoles/Portal/MME/descargar.aspx?archivo=E122E9DF-E4D9-4D8E-9591-E497DF3F007B.PDF',
    },
    {
      referencia: 'C.I. JEANS (2012).  Planta.',
      link:
        'http://www.cijeans.com.co/instalaciones-procesos.php/es/terminacion/12/1',
    },
    {
      referencia:
        'Huamán, W. (2003). Ingeniería en la capacitación de operarios para la industria de la confección textil. [Tesis de pregrado, Universidad Nacional Mayor de San Marcos]. ',
      link:
        'https://sisbib.unmsm.edu.pe/bibvirtualdata/Tesis/Ingenie/huaman_ow/Cap4.pdf',
    },
    {
      referencia: 'Lara, V. (2017). Fichas técnicas Freelance. ',
      link:
        'https://www.behance.net/gallery/50254313/Fichas-tcnicas-Freelance-Spec-Sheets',
    },
    {
      referencia: 'Omegaht (2013). Enfoque de calidad de Ishikawa. ',
      link:
        'https://enfoqdecalidad.wordpress.com/2013/05/28/enfoque-de-calidad-de-ishikawa/',
    },
    {
      referencia: 'Pellegrino, A. (2011). Diagrama de operaciones. ',
      link:
        'https://ayelenpellegrino.files.wordpress.com/2011/01/13-diagrama-de-operaciones.jpg',
    },
    {
      referencia: 'Pellegrino, A. (2011). Secuencia de operaciones',
      link:
        'https://ayelenpellegrino.files.wordpress.com/2011/01/20-secuencia-de-operaciones-1.jpg',
    },
    {
      referencia:
        'Sejzer, R. (2018). Industria y Lean 4.0: ¿Estamos realmente frente a una Cuarta Revolución Industrial?',
      link:
        'http://ctcalidad.blogspot.com/2018/09/industria-y-lean-40-estamos-realmente.html',
    },
    {
      referencia:
        'SENA.  (2020).  Programa Técnico en Patronaje Industrial de Prendas de Vestir. Centro de Manufactura en Textil y Cuero, Distrito Capital.',
    },
    {
      referencia:
        'SENA.  (2020).  Material de formación. Equipo de desarrollo curricular Técnico en Control Calidad en Confección Industrial.',
    },
    {
      referencia:
        'SENA.  (2021).  Programa Técnico en Elaboración de Prendas de Vestir sobre medidas.   Centro de Diseño y confección Regional Antioquia',
    },
    {
      referencia:
        'Knight, L.  (2012).  Secretos de una buena modista. Editorial Océano Ámbar.',
    },
    {
      referencia:
        'SINGER. (2014). Metodología y técnicas de confección del programa mujeres sustentables. Programa Mujeres sustentables.  ',
      link:
        'https://issuu.com/mujeresautosustentables/docs/manual_industriales',
    },
    {
      referencia:
        'Lean solutions. (2020, junio 2). ¿Qué es Six Sigma? [Web log post].  ',
      link: 'http://leansolutions.co/conceptos-lean/que-es-six-sigma/',
    },
    {
      referencia:
        'SENA. (1973). Programa de control de calidad. Unidad 1.7. Normalización. ',
      link: 'https://hdl.handle.net/11404/6667',
    },
    {
      referencia:
        'SENA. (1973). Programa de control de calidad. Unidad 1.9. Aspecto económico de la calidad. ',
      link: 'https://hdl.handle.net/11404/6669',
    },
    {
      referencia: 'SENA. (1990). Control de calidad en hilos y telas. ',
      link: 'https://hdl.handle.net/11404/4252',
    },
    {
      referencia: 'Rintex (2012). Packing. ',
      link: 'http://rintex-en.goplek.com/527/packing.html',
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
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ledy Johana Velásquez Hernández',
          cargo: 'Diseño y desarrollo curricular',
          centro: 'Regional Antioquía - Diseño, confección y moda. ',
        },
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Diseño y desarrollo curricular',
          centro: 'Regional Antioquía - Diseño, confección y moda.',
        },
        {
          nombre: 'Fernelis Mauricio Echeverri',
          cargo: 'Experto temático',
          centro: 'Regional Antioquía - Diseño, confección y moda.',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseño Instruccional',
          centro: 'Regional Cundinamarca – Diseño y metrología',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Distrito capital – Centro Gestión Industrial',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Regional Distrito Capital Centro para la Industria de la Comunicación Gráfica. ',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carla Liliana Sequera Vargas',
          cargo: 'Diseñadora de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
