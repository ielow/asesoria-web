'use client';

import { Box, Heading, Paragraph, Card, CardBody, Text, Anchor } from 'grommet';
import { Chat, Phone, Mail, DocumentText } from 'grommet-icons';

const opciones = [
  {
    titulo: 'Chat en Vivo',
    icon: <Chat size="xlarge" color="brand" />,
    descripcion: 'Chatea con nuestro equipo en tiempo real',
    accion: 'Iniciar Chat'
  },
  {
    titulo: 'Soporte Telefónico',
    icon: <Phone size="xlarge" color="brand" />,
    descripcion: 'Llámanos al +52 123 456 7890',
    accion: 'Llamar Ahora'
  },
  {
    titulo: 'Email',
    icon: <Mail size="xlarge" color="brand" />,
    descripcion: 'Envíanos un correo a soporte@ejemplo.com',
    accion: 'Enviar Email'
  },
  {
    titulo: 'Documentación',
    icon: <DocumentText size="xlarge" color="brand" />,
    descripcion: 'Consulta nuestra base de conocimientos',
    accion: 'Ver Docs'
  }
];

export default function Soporte() {
  return (
    <Box pad="large" margin={{ top: 'large' }} background="#3a3a3a" style={{ minHeight: '100vh' }}>
      <Box width="xlarge" alignSelf="center">
        <Heading level={1} margin={{ bottom: 'small' }} color="white">Soporte</Heading>
        <Paragraph size="large" color="rgba(255, 255, 255, 0.8)" margin={{ bottom: 'large' }}>
          Estamos aquí para ayudarte. Elige tu canal de soporte preferido
        </Paragraph>
        <Box direction="row" wrap gap="medium">
          {opciones.map((opcion, index) => (
            <Card key={index} background="light-1" elevation="medium" width="medium">
              <CardBody pad="large" align="center" gap="medium">
                {opcion.icon}
                <Heading level={3} margin="none">{opcion.titulo}</Heading>
                <Text textAlign="center" color="dark-3">{opcion.descripcion}</Text>
                <Anchor label={opcion.accion} color="brand" />
              </CardBody>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
