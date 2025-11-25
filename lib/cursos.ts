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
        description: 'En este taller, transformamos la incertidumbre en confianza, dotando a tu equipo de una verdadera fluidez en Inteligencia Artificial. No queremos que los profesores memoricen botones, queremos que hablen el idioma del futuro. Pasarán de ser espectadores tecnológicos a arquitectos de su propio tiempo, integrando la IA como una extensión natural de su talento pedagógico. Les damos la estructura para innovar sin miedo.',
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
    }
];

export function getAllCursos(): Curso[] {
    return cursos;
}

export function getCursoBySlug(slug: string): Curso | undefined {
    return cursos.find((curso) => curso.slug === slug);
}
