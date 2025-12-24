'use client';

import { Box, Heading, Paragraph, Text } from 'grommet';
import ContactForm from '@/components/ContactForm';

const services = [
  {
    id: 1,
    title: 'Consultoría en Inteligencia Artificial',
    subtitle: 'Diseñe el Mapa de Ruta de la Transformación Digital.',
    description: (
      <>
        Identifique las áreas de su negocio con mayor potencial de optimización y crecimiento asistido por IA. Nuestro equipo de expertos traduce sus objetivos corporativos en modelos de IA rentables, asegurando que cada inversión tecnológica genere un <strong>retorno inmediato y sostenible</strong>. <strong>¿Listo para ver su futuro operacional con claridad?</strong>
      </>
    ),
    imageName: 'consultoria-service.png',
  },
  {
    id: 2,
    title: 'Programas de Capacitación en IA',
    subtitle: 'Eleve las capacidades de su equipo.',
    description: (
      <>
        La adopción exitosa de IA requiere un equipo con la mentalidad y las habilidades adecuadas. Ofrecemos módulos de capacitación personalizados (desde fundamentos para líderes hasta programación avanzada para desarrolladores) que garantizan una <strong>transición fluida</strong> y la <strong>propiedad interna de la tecnología</strong>. <strong>Empodere a su talento para liderar la innovación.</strong>
      </>
    ),
    imageName: 'capacitacion-service.png',
  },
  {
    id: 3,
    title: 'Implementación de IA On-Premise e Híbrida',
    subtitle: 'Máxima Seguridad y Rendimiento.',
    description: (
      <>
        Para negocios con requisitos estrictos de seguridad, cumplimiento normativo y baja latencia, instalamos, configuramos y optimizamos soluciones de IA directamente en sus servidores. Esto le proporciona un <strong>control de datos inigualable</strong> y un <strong>rendimiento garantizado</strong>, lejos de las nubes públicas. <strong>Asegure su ventaja competitiva con una infraestructura dedicada.</strong>
      </>
    ),
    imageName: 'implementacion-service.png',
  },
  {
    id: 4,
    title: 'Hardware Optimizado para IA/ML',
    subtitle: 'La base de su éxito. Servidores, GPUs y componentes diseñados para modelos de alto rendimiento.',
    description: (
      <>
        Los modelos de IA más avanzados exigen una potencia de procesamiento especializada. Le proveemos y configuramos el hardware de vanguardia (GPUs, clusters, soluciones de almacenamiento ultrarrápido) que sus modelos de Machine Learning y Deep Learning necesitan para <strong>entrenar más rápido y operar sin fricciones</strong>. <strong>No frene su innovación, poténciela.</strong>
      </>
    ),
    imageName: 'equipo-service.png',
  },
  {
    id: 5,
    title: 'Soporte y Optimización 24/7 de Soluciones de IA',
    subtitle: 'Asegure la disponibilidad y la evolución de sus sistemas críticos.',
    description: (
      <>
        La IA no es estática. Nuestro servicio de soporte avanzado monitoriza proactivamente sus modelos e infraestructura, detectando y resolviendo fallos antes de que afecten su operación. Nos aseguramos de que sus sistemas se mantengan <strong>actualizados, optimizados y alineados con sus metas empresariales en constante cambio</strong>. <strong>Su aliado a largo plazo en la era de la IA.</strong>
      </>
    ),
    imageName: 'soporte-service.png',
  },
];

export default function Servicios() {
  return (
    <Box background="#3a3a3a" style={{ minHeight: '100vh' }}>
      <Box className="p-4 md:p-12" style={{ paddingTop: '150px' }}>
        {services.map((service, index) => (
          <Box
            key={service.id}
            width={{ width: '100%', max: 'large' }}
            alignSelf="center"
            gap="medium"
            margin={{ bottom: 'xlarge' }}
          >
            {/* Image Header */}
            <Box
              height="medium"
              width="100%"
              style={{
                borderRadius: '25px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}
            >
              <Box
                fill
                background={{
                  image: `url(/${service.imageName})`,
                  size: 'cover',
                  position: 'center',
                }}
              />
            </Box>

            {/* Content */}
            <Box>
              <Heading
                level={1}
                color="white"
                margin={{ top: 'medium', bottom: 'small' }}
                className="text-3xl md:text-5xl leading-tight font-bold"
              >
                {service.title}
              </Heading>

              <Text
                size="xlarge"
                weight="bold"
                color="#7C3AED"
                margin={{ bottom: 'medium' }}
              >
                {service.subtitle}
              </Text>

              <Box margin={{ top: 'small' }}>
                <Paragraph size="large" color="light-2" fill>
                  {service.description}
                </Paragraph>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <ContactForm />
    </Box>
  );
}
