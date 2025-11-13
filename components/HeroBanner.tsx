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
      {/* Elementos animados de fondo con degradados */}
      <div
        className="animated-blob blob-1"
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'linear-gradient(135deg, #F60B4A 0%, #FF31D9 100%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="animated-blob blob-2"
        style={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          width: '600px',
          height: '600px',
          background: 'linear-gradient(135deg, #FF31D9 0%, #5817EF 100%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
        }}
      />
      <div
        className="animated-blob blob-3"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '30%',
          width: '550px',
          height: '550px',
          background: 'linear-gradient(135deg, #5817EF 0%, #F60B4A 100%)',
          borderRadius: '50%',
          filter: 'blur(110px)',
        }}
      />

      {/* Contenedor principal con glassmorphism */}
      <Box
        align="center"
        gap="large"
        width="xlarge"
        style={{
          maxWidth: '900px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Heading
          level={1}
          textAlign="center"
          color="white"
          margin="none"
          style={{
            marginTop: '6rem',
            fontSize: '5.5rem',
            lineHeight: '1',
            fontWeight: '500',
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
            fontSize: '1.5rem',
            fontWeight: '500'
          }}
        >
          Estaciones de IA on-premise diseñadas a la medida de tu empresa. Instalación completa,
          soporte continuo y capacitación incluida.
        </Paragraph>
        <Button
          label="Comienza aquí"
          icon={<Next />}
          reverse
          className="hero-button"
          style={{
            background: 'transparent',
            color: 'white',
            border: '2px solid #7C3AED',
            borderRadius: '30px',
            padding: '12px 32px',
            fontSize: '1rem',
            fontWeight: '500',
            marginTop: '20px',
            transition: 'all 0.3s ease',
          }}
        />
      </Box>
    </Box>
  );
}
