'use client';

import { Box, Heading, Paragraph, Card, CardBody, Grid } from 'grommet';
import { Briefcase, Code, Book, Tools } from 'grommet-icons';

const servicios = [
  {
    titulo: 'Consultoría en IA',
    descripcion: 'Asesoramiento experto para implementar soluciones de IA en tu empresa.',
    icon: <Briefcase size="xlarge" color="#7C3AED" />,
  },
  {
    titulo: 'Desarrollo Personalizado',
    descripcion: 'Soluciones de IA diseñadas específicamente para tus necesidades.',
    icon: <Code size="xlarge" color="#7C3AED" />,
  },
  {
    titulo: 'Capacitación',
    descripcion: 'Programas de formación para tu equipo en el uso de IA.',
    icon: <Book size="xlarge" color="#7C3AED" />,
  },
  {
    titulo: 'Soporte Continuo',
    descripcion: 'Mantenimiento y soporte técnico 24/7 para tus sistemas de IA.',
    icon: <Tools size="xlarge" color="#7C3AED" />,
  },
];

export default function Servicios() {
  return (
    <Box pad="large" margin={{ top: 'large' }} background="#3a3a3a" style={{ minHeight: '100vh' }}>
      <Box width="xlarge" alignSelf="center">
        <Heading level={1} margin={{ bottom: 'small' }} color="white">
          Nuestra Oferta de Servicios
        </Heading>
        <Paragraph size="large" color="rgba(255, 255, 255, 0.8)" margin={{ bottom: 'large' }}>
          Ofrecemos una gama completa de servicios de Inteligencia Artificial para impulsar tu negocio.
        </Paragraph>
        <Grid columns={{ count: 2, size: 'auto' }} gap="medium">
          {servicios.map((servicio, index) => (
            <Card key={index} background="rgba(255, 255, 255, 0.05)" elevation="medium">
              <CardBody pad="large" gap="medium">
                <Box align="center">{servicio.icon}</Box>
                <Heading level={3} textAlign="center" color="white" margin="none">
                  {servicio.titulo}
                </Heading>
                <Paragraph textAlign="center" color="rgba(255, 255, 255, 0.8)">
                  {servicio.descripcion}
                </Paragraph>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
