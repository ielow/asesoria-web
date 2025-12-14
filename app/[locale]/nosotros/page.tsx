'use client';

import { Box, Heading, Paragraph } from 'grommet';

export default function Nosotros() {
  return (
    <Box pad="large" background="#3a3a3a" style={{ minHeight: '100vh', paddingTop: '150px' }}>
      <Box width="large" alignSelf="center">
        <Heading level={1} margin={{ bottom: 'small' }} color="white">
          Quiénes Somos
        </Heading>
        <Paragraph size="large" color="rgba(255, 255, 255, 0.8)">
          Somos una empresa dedicada a proporcionar soluciones de Inteligencia Artificial
          on-premise diseñadas específicamente para las necesidades de tu empresa.
        </Paragraph>
        <Paragraph size="large" color="rgba(255, 255, 255, 0.8)">
          Nuestro equipo de expertos trabaja para garantizar que tu empresa tenga acceso a
          tecnología de vanguardia de manera segura y eficiente.
        </Paragraph>
      </Box>
    </Box>
  );
}
