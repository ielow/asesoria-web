'use client';

import { Box, Anchor, Text, Image, Select } from 'grommet';
import { Youtube, Twitter, Facebook, Linkedin, Instagram } from 'grommet-icons';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [language, setLanguage] = useState('Español');

  return (
    <Box
      background="#2d2d2d"
      pad={{ horizontal: 'large', vertical: 'medium' }}
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Sección de redes sociales - alineada a la izquierda */}
      <Box
        direction="row"
        align="center"
        pad={{ vertical: 'small' }}
        gap="medium"
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: '20px',
        }}
      >
        <Text color="rgba(255, 255, 255, 0.7)" size="small">
          Síguenos
        </Text>
        <Box direction="row" gap="medium">
          <Anchor
            href="https://youtube.com"
            target="_blank"
            icon={<Youtube color="rgba(255, 255, 255, 0.7)" />}
            style={{ transition: 'all 0.3s ease' }}
            className="social-icon"
          />
          <Anchor
            href="https://facebook.com"
            target="_blank"
            icon={<Facebook color="rgba(255, 255, 255, 0.7)" />}
            style={{ transition: 'all 0.3s ease' }}
            className="social-icon"
          />
          <Anchor
            href="https://linkedin.com"
            target="_blank"
            icon={<Linkedin color="rgba(255, 255, 255, 0.7)" />}
            style={{ transition: 'all 0.3s ease' }}
            className="social-icon"
          />
          <Anchor
            href="https://instagram.com"
            target="_blank"
            icon={<Instagram color="rgba(255, 255, 255, 0.7)" />}
            style={{ transition: 'all 0.3s ease' }}
            className="social-icon"
          />
        </Box>
      </Box>

      {/* Sección principal del footer */}
      <Box
        direction="row"
        justify="between"
        align="center"
        pad={{ vertical: 'medium' }}
      >
        {/* Logo y Links de navegación - lado izquierdo */}
        <Box direction="row" gap="small" align="center">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Image
              src="/asesoria-logo.svg"
              alt="Asesor IA Logo"
              height={32}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>

          {/* Links de navegación */}
          <Anchor
            as={Link}
            href="/privacidad"
            label="Políticas de Privacidad"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '14px',
            }}
          />
          <Anchor
            as={Link}
            href="/nosotros"
            label="Quiénes Somos"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '14px',
            }}
          />
          <Anchor
            as={Link}
            href="/servicios"
            label="Servicios"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '14px',
            }}
          />
        </Box>

        {/* Selector de idioma - lado derecho */}
        <Box direction="row" gap="small" align="center">
          <Select
            options={['Español', 'English']}
            value={language}
            onChange={({ option }) => setLanguage(option)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '4px',
              color: 'white',
              fontSize: '14px',
              padding: '4px 8px',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
