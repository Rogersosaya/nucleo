import { SubArea } from "@prisma/client";
interface SeedSubArea {
  name: string;
  description: string;
}
interface SeedObjective {
  description: string;
}
interface SeedTask {
  description: string;
}
interface SeedArea {
  name: string;
  url: string;
  summary: string;
  objectives: SeedObjective[];
  tasks: SeedTask[];
  subareas?: SeedSubArea[];
}

interface SeedProject {
  name: string;
  summary: string;
  description: string;
  url: string;
}
interface SeedMember {
  name: string;
  career: string;
  url: string;
}

interface SeedData {
  members: SeedMember[];
  areas: SeedArea[];
  projects: SeedProject[];
}
export const initialData: SeedData = {
  members: [
    {
      name: "Elias Ortiz",
      career: "Ingeniria de Sistemas",
      url: "/images/members/elias.png",
    },
    {
      name: "Anthony Calderón",
      career: "Ingeniria de Sistemas",
      url: "/images/members/anthony.png",
    },
    {
      name: "Alfredo Quispe",
      career: "Ingeniria de Sistemas",
      url: "/images/members/alfredo.jpg",
    },
    {
      name: "Gavino Geldres",
      career: "Ingeniria de Sistemas",
      url: "/images/members/gavino.jpg",
    },
    {
      name: "Jairo Kazuo",
      career: "Ingeniria de Sistemas",
      url: "/images/members/jairo.jpg",
    },
    {
      name: "Jordan Laureano",
      career: "Ingeniria de Sistemas",
      url: "/images/members/jordan.jpg",
    },
    {
      name: "Leonardo Ramirez",
      career: "Ingeniria de Sistemas",
      url: "/images/members/leonardo.jpg",
    },
    {
      name: "Jean Yucra",
      career: "Ingeniria de Sistemas",
      url: "/images/members/yucra.png",
    },
  ],
  areas: [
    {
      name: "Investigación",
      url: "/images/area.jpg",
      summary:
        "¡En la UNI, la investigación comienza desde el primer día! Te preparamos para brillar en la Feria de Proyectos con asesoramiento personalizado.",
      
      objectives: [
        {
          description:
            "Fomentar la noción de investigación en los primeros ciclos",
        },
        {
          description:
            "Constituir un grupo que represente al centro en la feria de proyectos",
        },
        {
          description:
            "Afianzar los conocimientos de metodología de investigación",
        },
        {
          description: "Apoyar a los estudiantes en el desarrollo de sus tesis",
        },
      ],
      tasks: [
        {
          description:
            "Realizar eventos que tengan como propósito incentivar la investigación desde los primeros ciclos, con el fin de formar profesionales que puedan realizar sus proyectos de investigación en diferentes rubros de una manera óptima.",
        },
        {
          description:
            "Además de brindar el apoyo necesario para que más estudiantes aprendan a realizar tales proyectos de investigación, formando un espacio de colaboración. ",
        },
        {
          description:
            "Contribuir en el trabajo para la Feria de Proyectos a cargo de la OAC, no solo en la organización sino también en la participación tanto interna como externamente.",
        },
      ],
      subareas: [
        {
          name: "Investigación Formativa",
          description:
            "Se busca la incentivación, hacia los chicos de primeros ciclos, para que estos puedan ser partícipes en la feria de proyectos, esto a través de la realización de diversas tertulias, en el cual se invita a ponentes a que puedan compartir su experiencia al momento de desarrollar su proyecto y también acerca de la metodología que emplearon para la realización de este.",
        },
        {
          name: "Proyectos de Investigación",
          description:
            "Se busca brindar la confianza a los chicos para que puedan ser partícipes en la feria de proyectos, esto a través de asesoramientos personalizados para la realización de su proyecto, entrega de feedbacks de los anteriores ganadores de la Feria de Proyectos, esto para que tengan una buena experiencia en su participación.",
        },
      ],
    },
    {
      name: "Project Management Office",
      url: "/images/area.jpg",
      summary:
        "¡Haz que tus proyectos destaquen! Nos encargamos de gestionar, alinear y cultivar futuros éxitos. Únete a nuestro emocionante viaje de gestión de proyectos.",
      objectives: [
        {
          description:
            "Gestionar las metodologías, métricas e interdependencias entre proyectos.",
        },
        {
          description:
            "Alinear los proyectos nucleares a los objetivos generales del centro",
        },
        { description: "Generar un semillero de futuros proyectos nucleares" },
      ],
      tasks: [
        {
          description:
            "Realizar seguimiento y reuniones con los encargados de los proyectos realizados dentro/fuera del Centro Cultural Núcleo.",
        },
        {
          description:
            "Documentar y solicitar documentación correspondiente para cada proyecto, esto incluye acta de constitución, Manual de Organización y Funciones, Cronograma de de hitos, cronograma mensual, registro de lecciones aprendidas y carpetas en general del proyecto asignado",
        },
        {
          description:
            "Solicitar reportes mensuales de los proyectos que tomen más de un mes o que sean de alto impacto.",
        },
        {
          description:
            "Coordinar reuniones mensuales con cada director de proyecto para entender el estado de este y sus miras al siguiente periodo en caso continúe.",
        },
        {
          description:
            "Realizar la búsqueda (en caso sea necesario) de directores de proyecto.",
        },
      ],
      
    },
    {
      name: "Marketing",
      url: "/images/area.jpg",
      summary:
        "¡Conéctate con nosotros! Fortalecemos nuestras redes sociales para aumentar seguidores y generar alianzas. Además, brindamos apoyo en diseño para eventos y proyectos.",
      
      objectives: [
        {
          description:
            "Crear una relación valiosa con los estudiantes para aumentar los interesados por Núcleo Fortalecer nuestras redes sociales para aumentar seguidores y contribuir con la generación de alianzas ",
        },
        { description: "Capacitar a los miembros del área" },
        {
          description:
            "Dar soporte a las áreas en la elaboración de contenidos de diseño",
        },
      ],
      tasks: [
        {
          description:
            "Fortalecer las redes sociales del Centro Cultural Núcleo para aumentar seguidores, lo cual contribuirá a la generación de alianzas y consolidará nuestra presencia en el ámbito universitario.",
        },
        {
          description:
            "Dar soporte a las áreas en la elaboración de contenidos de diseño.",
        },
      ],
      subareas: [
        {
          name: "Diseño",
          description:
            "Encargados de la elaboración de diseños, ya sean flyers, videos u otros, que sean solicitados por las demás áreas del Centro Cultural Núcleo con fines publicitarios de eventos, proyectos, etc.",
        },
        {
          name: "Facebook",
          description:
            "Encargados de la generación de contenido periódico en el fanpage de Fb del Centro Cultural Núcleo, de modo que estén orientados principalmente al crecimiento de esta red social.",
        },
        {
          name: "Youtube",
          description:
            "Encargados de la generación de contenido audiovisual en el canal NúcleoTube de la plataforma Youtube, de modo que puedan consolidar este medio informativo, divulgativo y de desenvolvimiento de los miembros del Centro Cultural Núcleo.",
        },
      ],
    },
    {
      name: "Relaciones públicas",
      url: "/images/area.jpg",
      summary:
        "¡Conectamos oportunidades y cuidamos nuestra imagen! Gestionamos alianzas estratégicas y la Bolsa de Trabajo, asegurando beneficios para nuestros miembros.",
      
      objectives: [
        {
          description:
            "Reforzamiento y búsqueda de nuevas alianzas estratégicas con distintas organizaciones",
        },
        {
          description:
            "Brindar una imagen del centro que represente íntegramente al miembro nuclear",
        },
        { description: "Administración de la Bolsa de Trabajo de Núcleo" },
        {
          description:
            "Dar seguimiento a los miembros que reciban algún beneficio producto de las alianzas",
        },
      ],
      tasks: [
        { description: "Manejo de LinkedIn, Bolsa de Trabajo e Instagram" },
        { description: "Formación de alianzas estratégicas" },
        { description: "Comunicación con organizaciones aliadas" },
      ],
      subareas: [
        { name: "Alianzas estratégicas", description: "Encargados de identificar potenciales empresas colaboradoras a través de sus fundaciones empresariales, sus líneas de responsabilidad social corporativa, voluntariado corporativo u otras áreas esenciales de negocio ligadas a soluciones para el desarrollo sostenible. Además, identificar oportunidades de colaboración y presentación de propuestas de alianzas y de proyectos concretos de desarrollo." },
        { name: "LinkedIn", description: "Encargados de gestionar de manera eficiente el LinkedIn de C.C. Núcleo y la Bolsa de Trabajo, publicar activamente eventos realizados por Núcleo en LinkedIn. Aportar ideas sobre creación de contenido visual o audiovisual para mantener la presencia activa de la marca en redes sociales." },
        { name: "Instagram", description: "Encargados de gestionar de manera eficiente el Instagram de C.C. Núcleo, crear contenido relevante para los canales que gestiona. Además, publicar proyectos realizados por C.C. Núcleo como EC y Yachaywasi, y promocionar las alianzas estratégicas de C.C. Núcleo." },
        { name: "Becas", description: "Encargados de Gestionar las becas conseguidas en C.C. Núcleo y realizar el seguimiento correspondiente." },
      ],
    },
    {
      name: "Industrial",
      url: "/images/area.jpg",
      summary:
        "Desarrollamos habilidades y abrimos puertas en ingeniería industrial. Eventos, programas y conexiones profesionales te esperan aquí.",
      
      objectives: [
        { description: "description objectives" },
        { description: "description objectives2" },
      ],
      tasks: [
        { description: "description objectives" },
        { description: "description objectives3" },
      ],
      subareas: [
        { name: "Académica", description: "Encargados de coordinar cursos y/o eventos que contribuyan a fortalecer el manejo de herramientas útiles para el ingeniero industrial. Además de potenciar habilidades blandas de la comunidad FIIS mediante talleres y/o programas enfocados en ellos." },
        { name: "Proyección Profesional", description: "Encargados de ejecutar programas y realizar eventos que ayuden a Introducir a los estudiantes de ingeniería industrial a sus futuras labores. Además de brindar orientación al estudiante mediante mentorías, proyectos o charlas que les permitan conocer diversas empresas reconocidas a nivel nacional e internacional para realizar prácticas pre-profesionales y buscar empleo." },
      ],
    },
    {
      name: "Sistemas",
      url: "/images/area.jpg",
      summary:
        "Desarrollamos habilidades y abrimos puertas en ingeniería de sistemas. Eventos, programas y conexiones profesionales te esperan aquí.",
      
      objectives: [
        { description: "description objectives" },
        { description: "description objectives2" },
      ],
      tasks: [
        { description: "description objectives" },
        { description: "description objectives3" },
      ],
      subareas: [
        { name: "Académica", description: "Encargados de organizar proyectos y/o programas para el desarrollo de los estudiantes de sistemas y verificar la correcta ejecución de los proyectos a cargo." },
        { name: "Proyección Profesional", description: "Encargados de organizar proyectos y/o programas de potencien el perfil profesional de los estudiantes de sistemas. Además de brindar orientación al estudiante mediante mentorías, proyectos o charlas que les permitan conocer diversas empresas reconocidas a nivel nacional e internacional para realizar prácticas pre-profesionales y buscar empleo.description subareas" },
      ],
    },
    {
      name: "Gestión de Talento Humano",
      url: "/images/area.jpg",
      summary:
        "Impulsamos la identificación y participación en nuestro centro, reclutando talentos y promoviendo un ambiente respetuoso y armonioso.",
      
      objectives: [
        { description: "description objectives" },
        { description: "description objectives2" },
      ],
      tasks: [
        { description: "description objectives" },
        { description: "description objectives3" },
      ],
      subareas: [
        { name: "Logística", description: "Encargados de manejar la base de datos de los mentores, tanto como ser el medio de contacto de ellos y velar por el cumplimiento de sus funciones y beneficios respectivos. Además, llevar a cabo las encuestas de clima (ya sea por formulario o contactando a las personas) cada cuatro meses para tener conocimiento que como se sienten los miembros de las áreas y los directores. Por último, realizar eventos en beneficio de todos los integrantes de Núcleo y sus proyectos que les permitan mejorar personal como profesional." },
        { name: "Bienestar social", description: "Encargados de realizar integraciones y mantener la comunicación fluido entre los miembros, integrantes y proyectos por nuestro grupo de Facebook y Telegram." },
        { name: "Administración", description: "Encargados de desarrollar el flujo de ingreso y renuncia de nuestros miembros. Además, definir las categorías de quienes conforman y han conformado nuestro centro y manejar el protocolo de eventos." },
      ],
    },
  ],
  projects: [
    {
      name: "Núcleo Power",
      summary:
        "Aprendizaje autodidacta y competencia sana para potenciar a nuestros miembros como futuros profesionales.!",
      description:
        "Proyecto que busca que los miembros de las áreas de Núcleo aprendan de manera autodidacta distintas herramientas necesarias para su desempeño como futuros profesionales a través de la competencia sana",
      url: "/images/area.jpg",
    },
    {
      name: "NúcleoTube",
      summary:
        "Contenido variado en YouTube para estudiantes y público interesado. Sumérgete en el aprendizaje y entretenimiento.",
      description:
        "Tiene como objetivo producir y difundir contenido académico, cultural,informativo y entretenido para estudiantes universitarios y público interesado a través de la plataforma digital YOUTUBE.",
      url: "/images/area.jpg",
    },
    {
      name: "Yachaywasi",
      summary:
        "¡Sé profesor de matemáticas y ciencias para estudiantes de secundaria! Comparte tu conocimiento y ayuda a otros a aprender de manera interactiva",
      description:
        "Dirigido a estudiantes de educación secundaria, próximos a culminar su etapa escolar que buscan seguir aprendiendo de manera interactiva acerca diversos temas relacionados matemáticas y ciencias, los profesores son estudiantes de la FIIS que dominan los temas presentados en las clases y que previamente han sido capacitados para cumplir de manera óptima su labor.",
      url: "/images/area.jpg",
    },
    {
      name: "English Club",
      summary:
        "Participa y mejora tu nivel de inglés junto a compañeros de distintas carreras y universidades",
      description:
        "Proyecto que busca la práctica continua del idioma inglés en estudiantes de distintas carreras y universidades mediante clases teóricas y dinámicas brindadas por estudiantes de la FIIS, realizando un debido seguimiento separando a los asistentes de acuerdo al nivel de inglés que presentan mediante evaluaciones y su participación en las sesiones llevadas a cabo durante el ciclo académico",
      url: "/images/area.jpg",
    },
    {
      name: "Debate tu Pensamiento",
      summary:
        "Promueve el desarrollo de habilidades comunicativas y pensamiento crítico. ¡Participa para expresar y defender tu punto de vista y fomentar la tolerancia",
      description:
        "Proyecto que busca mejorar el desarrollo de habilidades comunicativas y pensamiento crítico en la comunidad FIIS, de manera que se invite a cada participante a que exprese y defienda su punto de vista frente a otro, con el fin de persuadirlo, y a la vez plantee preguntas a este último. Además, colabora en la personalidad (expresarse de forma correcta), fomenta la tolerancia (respetar otras posturas) y ayuda a estar constantemente informado.",
      url: "/images/area.jpg",
    },
    {
      name: "EcoFIIS",
      summary:
        "Proyecto que busca concientizar a la comunidad FIIS sobre la crisis climática global; a través del reciclaje, la reducción de desechos, de uso de energía eléctrica y de recursos hídricos",
      description: "dfsfs",
      url: "/images/area.jpg",
    },
  ],
};
