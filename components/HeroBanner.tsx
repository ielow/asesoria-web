'use client';

import { Box, Heading, Paragraph, Button, ResponsiveContext } from 'grommet';
import { Next } from 'grommet-icons';
import { useTranslations } from 'next-intl';
import { useContext } from 'react';

export default function HeroBanner() {
  const t = useTranslations('hero');
  const size = useContext(ResponsiveContext);
  const isMobile = size === 'small';
  console.log(isMobile);
  return (
    <Box
      align="center"
      justify="center"
      style={{
        minHeight: '100vh',
        background: '#3a3a3a',
        position: 'relative',
        overflow: 'hidden',
      }}
      pad={isMobile ? 'medium' : 'large'}
    >
      {/* Elementos animados de fondo con degradados */}
      <div
        className="animated-blob blob-1"
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: isMobile ? '300px' : '500px',
          height: isMobile ? '300px' : '500px',
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
          width: isMobile ? '350px' : '600px',
          height: isMobile ? '350px' : '600px',
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
          width: isMobile ? '300px' : '550px',
          height: isMobile ? '300px' : '550px',
          background: 'linear-gradient(135deg, #5817EF 0%, #F60B4A 100%)',
          borderRadius: '50%',
          filter: 'blur(110px)',
        }}
      />

      {/* Contenedor principal con glassmorphism */}
      <Box
        align="center"
        gap={isMobile ? 'medium' : 'large'}
        style={{
          width: '100%',
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
          className="hero-title"
          style={{
            lineHeight: '1',
            fontWeight: '500',
            letterSpacing: '-0.02em',
          }}
        >
          {t('titlePart1')}{' '}
          <span style={{ color: '#c4b5fd' }}>{t('titleHighlight')}</span>{' '}
          {t('titlePart2')}
        </Heading>
        <Paragraph
          size={isMobile ? 'medium' : 'large'}
          textAlign="center"
          color="rgba(255, 255, 255, 0.8)"
          className="hero-subtitle"
          style={{
            maxWidth: '700px',
            fontWeight: '500'
          }}
        >
          {t('subtitle')}
        </Paragraph>
        <Button
          label={t('cta')}
          icon={<Next color="white" />}
          reverse
          className="hero-button"
          style={{
            background: 'transparent',
            color: 'white',
            border: '2px solid #7C3AED',
            borderRadius: '30px',
            fontWeight: '500',
            marginTop: '20px',
            transition: 'all 0.3s ease',
          }}
        />
      </Box>
    </Box>
  );
}
