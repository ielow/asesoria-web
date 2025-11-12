'use client';

import { Box, Heading, Card, CardBody, CardHeader, Text, Grid, Paragraph } from 'grommet';
import { Briefcase, Code, Book, Tools } from 'grommet-icons';

const services = [
  {
    title: 'Consultoría',
    description: 'Asesoramiento experto para optimizar tus procesos de negocio.',
    icon: <Briefcase size="xlarge" color="brand" />
  },
  {
    title: 'Desarrollo',
    description: 'Soluciones de software personalizadas para tus necesidades.',
    icon: <Code size="xlarge" color="brand" />
  },
  {
    title: 'Capacitación',
    description: 'Programas de formación para tu equipo de trabajo.',
    icon: <Book size="xlarge" color="brand" />
  },
  {
    title: 'Mantenimiento',
    description: 'Soporte continuo para garantizar el funcionamiento óptimo.',
    icon: <Tools size="xlarge" color="brand" />
  }
];

export default function FourCards() {
  return (
    <Box pad="large" background="#3a3a3a">
      <Box width="xlarge" alignSelf="center">
        <Heading level={2} textAlign="center" margin={{ bottom: 'small' }} color="white">
          Nuestros Servicios
        </Heading>
        <Paragraph textAlign="center" color="rgba(255, 255, 255, 0.8)" margin={{ bottom: 'large' }}>
          Soluciones integrales para tu empresa
        </Paragraph>
        <Grid columns={{ count: 4, size: 'auto' }} gap="medium">
          {services.map((service, index) => (
            <Card key={index} background="light-1" elevation="medium" hoverIndicator>
              <CardHeader pad="medium" align="center">
                {service.icon}
              </CardHeader>
              <CardBody pad="medium" align="center">
                <Heading level={4} margin={{ bottom: 'small' }}>{service.title}</Heading>
                <Text textAlign="center" color="dark-3">{service.description}</Text>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
