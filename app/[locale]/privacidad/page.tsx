'use client';

import { Box, Heading, Paragraph } from 'grommet';

export default function Privacidad() {
  return (
    <Box pad="large" margin={{ top: 'large' }} background="#3a3a3a" style={{ minHeight: '100vh' }}>
      <Box width="large" alignSelf="center">
        <Heading level={1} margin={{ bottom: 'small' }} color="white">
          Políticas de Privacidad
        </Heading>
        <Paragraph size="large" color="rgba(255, 255, 255, 0.8)">
          En Asesor IA, nos comprometemos a proteger tu privacidad y la seguridad de tus datos.
        </Paragraph>
        <Heading level={3} color="white" margin={{ top: 'medium' }}>
          Recopilación de Datos
        </Heading>
        <Paragraph color="rgba(255, 255, 255, 0.8)">
          Recopilamos únicamente la información necesaria para proporcionar nuestros servicios.
        </Paragraph>
        <Heading level={3} color="white" margin={{ top: 'medium' }}>
          Uso de la Información
        </Heading>
        <Paragraph color="rgba(255, 255, 255, 0.8)">
          Tu información se utiliza exclusivamente para mejorar nuestros servicios y comunicarnos contigo.
        </Paragraph>
        <Heading level={3} color="white" margin={{ top: 'medium' }}>
          Seguridad
        </Heading>
        <Paragraph color="rgba(255, 255, 255, 0.8)">
          Implementamos medidas de seguridad robustas para proteger tu información personal.
        </Paragraph>
      </Box>
    </Box>
  );
}
