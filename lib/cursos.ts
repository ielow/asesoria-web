export interface Curso {
    slug: string;
    title: string;
    description: string;
    image: string;
    detailBanner: string;
    imagePosition?: 'left' | 'right';
    content?: string;
    duration?: string;
}

const cursos: Curso[] = [
    {
        slug: 'taller-ia-profesores',
        title: 'Taller de IA para Profesores: Automatiza lo Aburrido, Potencia lo Humano',
        description: 'Sabemos lo valiosos que son los profesores para un colegio. Ayúdalos a recuperar el equilibrio entre vida y trabajo integrando la Inteligencia Artificial en su día a día. En este taller, transformamos la incertidumbre en confianza, dotando a tu equipo de una verdadera fluidez en Inteligencia Artificial. Pasarán de ser espectadores tecnológicos a arquitectos de su propio tiempo, integrando la IA como una extensión natural de su talento pedagógico para innovar sin miedo.',
        image: 'taller-ia-profesores.png',
        detailBanner: 'taller-ia-profesores-banner.png',
        imagePosition: 'right',
        duration: '120 Min',
        content: `
En este taller, transformamos la incertidumbre en confianza, dotando a tu equipo de una verdadera fluidez en Inteligencia Artificial. No queremos que los profesores memoricen botones, queremos que **hablen el idioma del futuro**. Pasarán de ser espectadores tecnológicos a arquitectos de su propio tiempo, integrando la IA como una extensión natural de su talento pedagógico. Les damos la estructura para innovar sin miedo.

Una capacitación de solo 2 horas que se traduce en un equipo de más feliz, con menos cargas administrativas enfocados en los alumnos y comprometido con la visión de tu colegio.

- **Dominio y Fluidez IA:** Dejamos atrás los tecnicismos. Los docentes desarrollarán una intuición digital para "conversar" con la IA y obtener resultados sorprendentes, entendiendo no solo el "cómo", sino el "por qué".
    
- **Innovación con Valores (Ética y Seguridad):** La tecnología avanza rápido, pero los principios permanecen. Enseñamos a usar la IA blindando la integridad académica y protegiendo siempre lo más importante: al alumno.
    
- **El Copiloto Perfecto (Apps Prácticas):** Presentamos asistentes de IA seleccionados específicamente para la realidad escolar, listos para resolver problemas del día a día y simplificar la vida del docente.

- **Estrategia de Integración Real:** Obtendrán un mapa claro. Un marco de trabajo probado para incorporar estas novedades en sus clases mañana mismo, de forma ordenada y efectiva.
        `
    },
    {
        slug: 'taller-ia-recursos-humanos',
        title: 'Taller de Inteligencia Artificial para Recursos Humanos',
        description: 'Potencia la gestión del talento con IA. Optimiza el reclutamiento, personaliza el desarrollo y toma decisiones basadas en datos para transformar tu departamento de RH.',
        image: 'taller-ia-rrhh.png',
        detailBanner: 'taller-ia-rrhh-banner.png',
        imagePosition: 'left',
        duration: '120 Min',
        content: `
Descubre cómo la IA está redefiniendo la gestión del capital humano. Este taller está diseñado para profesionales de RRHH que buscan modernizar sus procesos y aportar valor estratégico a su organización.

Exploraremos cómo las herramientas de Inteligencia Artificial pueden liberarte de tareas administrativas repetitivas, permitiéndote enfocarte en lo que realmente importa: las personas.

- **Reclutamiento Inteligente:** Aprende a utilizar herramientas de IA para filtrar CVs, identificar candidatos ideales y reducir el tiempo de contratación sin perder calidad humana.
    
- **Onboarding y Desarrollo Personalizado:** Crea planes de capacitación a medida y experiencias de bienvenida únicas utilizando asistentes virtuales y plataformas adaptativas.
    
- **Analítica de Personas (People Analytics):** Descubre cómo interpretar datos para predecir la retención, mejorar el clima laboral y tomar decisiones estratégicas fundamentadas.
    
- **Ética en la Gestión de Talento:** Abordaremos los desafíos éticos de la IA en RRHH, asegurando prácticas justas, transparentes y libres de sesgos algorítmicos.
        `
    }
];

export function getAllCursos(): Curso[] {
    return cursos;
}

export function getCursoBySlug(slug: string): Curso | undefined {
    return cursos.find((curso) => curso.slug === slug);
}
