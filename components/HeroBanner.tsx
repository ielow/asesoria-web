'use client';

import { Box, Heading, Paragraph, Button } from 'grommet';
import { Next } from 'grommet-icons';

export default function HeroBanner() {
  return (
    <Box
      height="100vh"
      align="center"
      justify="center"
      style={{
        background: '#3a3a3a',
        position: 'relative',
        overflow: 'hidden',
      }}
      pad="large"
    >
      {/* Elementos decorativos de fondo */}
      <Box
        style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: '400px',
          height: '400px',
          background: 'rgba(124, 58, 237, 0.15)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'rgba(124, 58, 237, 0.1)',
          borderRadius: '50%',
          filter: 'blur(100px)',
        }}
      />

      {/* Contenedor principal */}
      <Box align="center" gap="large" width="xlarge" style={{ maxWidth: '900px' }}>
        <Heading
          level={1}
          textAlign="center"
          color="white"
          margin="none"
          style={{
            fontSize: '3.5rem',
            lineHeight: '1.2',
            fontWeight: '300',
            letterSpacing: '-0.02em',
          }}
        >
          Potencia tu empresa con{' '}
          <span style={{ color: '#c4b5fd' }}>Inteligencia Artificial</span> propia y segura.
        </Heading>
        <Paragraph
          size="large"
          textAlign="center"
          color="rgba(255, 255, 255, 0.8)"
          style={{
            maxWidth: '700px',
            fontSize: '1.1rem',
            lineHeight: '1.6',
          }}
        >
          Estaciones de IA on-premise diseñadas a la medida de tu empresa. Instalación completa,
          soporte continuo y capacitación incluida.
        </Paragraph>
        <Button
          label="Comienza aquí"
          icon={<Next />}
          reverse
          style={{
            background: 'transparent',
            color: 'white',
            border: '2px solid #7C3AED',
            borderRadius: '30px',
            padding: '12px 32px',
            fontSize: '1rem',
            fontWeight: '500',
            marginTop: '20px',
          }}
        />
      </Box>
    </Box>
  );
}
