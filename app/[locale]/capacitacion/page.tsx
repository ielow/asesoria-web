'use client';

import { Box, Heading, Paragraph, Accordion, AccordionPanel, Text } from 'grommet';
import { Book, Certificate, Workshop } from 'grommet-icons';

const cursos = [
  {
    titulo: 'Desarrollo Web Moderno',
    icon: <Book color="brand" />,
    descripcion: 'Aprende las últimas tecnologías web',
    contenido: 'React, Next.js, TypeScript, y más. Duración: 8 semanas.'
  },
  {
    titulo: 'Certificación Profesional',
    icon: <Certificate color="brand" />,
    descripcion: 'Obtén certificaciones reconocidas',
    contenido: 'Programas de certificación en diversas tecnologías. Duración: 12 semanas.'
  },
  {
    titulo: 'Talleres Prácticos',
    icon: <Workshop color="brand" />,
    descripcion: 'Experiencia práctica en proyectos reales',
    contenido: 'Talleres intensivos de 2-3 días con proyectos hands-on.'
  }
];

export default function Capacitacion() {
  return (
    <Box pad="large" margin={{ top: 'large' }} background="#3a3a3a" style={{ minHeight: '100vh' }}>
      <Box width="large" alignSelf="center">
        <Heading level={1} margin={{ bottom: 'small' }} color="white">Capacitación</Heading>
        <Paragraph size="large" color="rgba(255, 255, 255, 0.8)" margin={{ bottom: 'large' }}>
          Programas de formación diseñados para impulsar tu carrera
        </Paragraph>
        <Accordion>
          {cursos.map((curso, index) => (
            <AccordionPanel
              key={index}
              label={
                <Box direction="row" gap="medium" align="center">
                  {curso.icon}
                  <Box>
                    <Text weight="bold">{curso.titulo}</Text>
                    <Text size="small" color="dark-3">{curso.descripcion}</Text>
                  </Box>
                </Box>
              }
            >
              <Box pad="medium" background="light-2">
                <Text>{curso.contenido}</Text>
              </Box>
            </AccordionPanel>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
}
