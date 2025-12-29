
export interface Product {
    id: string;
    slug: string;
    name: string;
    tagline: string;
    users: string;
    processor: string;
    description: string;
    features: string[];
    details: string;
    image: string;
    color: string;
    textColor: string;
    gradient: string;
    approxPrice: string;
}

export const products: Product[] = [
    {
        id: 'starter',
        slug: 'ai-station-starter',
        name: "AI Station Starter",
        tagline: "La Fortaleza Ágil",
        users: "5 - 20 Usuarios",
        processor: "Ryzen 9 + Wormhole n150d",
        description: "Elimine el riesgo de fuga de datos en sus operaciones diarias. Diseñada para equipos que inician su adopción de IA, garantizando privacidad on-premise y un ROI inmediato frente a suscripciones de nube.",
        details: "Ideal para pequeñas empresas y startups que buscan integrar IA sin comprometer la seguridad de sus datos. Ofrece un equilibrio perfecto entre costo y rendimiento inicial.",
        features: [
            "Procesador Ryzen 9 de última generación",
            "Acelerador Wormhole n150d para inferencia eficiente",
            "Soporte para hasta 20 usuarios concurrentes",
            "Arquitectura silenciosa y compacta",
            "Pre-configurada con stack de ML popular"
        ],
        image: "/ai-station-starter-v3.png",
        color: "from-purple-500 to-blue-500",
        textColor: "text-purple-400",
        gradient: "from-purple-500/20 to-blue-500/20",
        approxPrice: "Desde $5,000 USD"
    },
    {
        id: 'pro',
        slug: 'ai-station-pro',
        name: "AI Station Pro",
        tagline: "El Motor de Transformación",
        users: "20 - 50 Usuarios",
        processor: "Ryzen 9 + Wormhole n300d",
        description: "Escale su capacidad operativa sin escalar sus costos. Esta estación permite el entrenamiento de modelos a la medida y uso multidepartamental, ofreciendo el equilibrio perfecto entre rendimiento dedicado y flexibilidad financiera.",
        details: "Perfecta para departamentos de innovación y empresas en crecimiento que requieren capacidades de entrenamiento (fine-tuning) y mayor concurrencia.",
        features: [
            "Procesador Ryzen 9 de alto rendimiento",
            "Acelerador Wormhole n300d para entrenamiento y fine-tuning",
            "Soporte para hasta 50 usuarios",
            "Almacenamiento NVMe de alta velocidad expandido",
            "Capacidad de gestión de cargas de trabajo mixtas"
        ],
        image: "/ai-station-pro-v3.png",
        color: "from-blue-500 to-cyan-500",
        textColor: "text-blue-400",
        gradient: "from-blue-500/20 to-cyan-500/20",
        approxPrice: "Desde $9,500 USD"
    },
    {
        id: 'premium',
        slug: 'ai-station-premium',
        name: "AI Station Premium",
        tagline: "Poder de Datacenter Corporativo",
        users: "50 - 120+ Usuarios",
        processor: "AMD EPYC + 4x Wormhole n300",
        description: "Máximo rendimiento para innovación crítica. Centralice el control total de su infraestructura de IA con potencia de servidor, eliminando la latencia de la nube y asegurando la soberanía absoluta de sus datos más sensibles.",
        details: "La solución definitiva para corporativos. Un centro de datos en una caja, capaz de manejar reentrenamiento de modelos grandes y alta demanda de inferencia simultánea.",
        features: [
            "Procesador AMD EPYC de clase servidor",
            "4x Aceleradores Wormhole n300 interconectados",
            "Soporte masivo para más de 120 usuarios",
            "Memoria ECC y redundancia de nivel empresarial",
            "Máximo ancho de banda de memoria para LLMs grandes"
        ],
        image: "/ai-station-premium-v3.png",
        color: "from-indigo-500 to-purple-500",
        textColor: "text-indigo-400",
        gradient: "from-indigo-500/20 to-purple-500/20",
        approxPrice: "Desde $18,000 USD"
    }
];
