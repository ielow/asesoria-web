'use client';

import Link from 'next/link';
import { Header, Box, Nav, Anchor, Text, Button } from 'grommet';

export default function Navbar() {
  return (
    <Header
      background="rgba(255, 255, 255, 0.1)"
      pad={{ horizontal: 'large', vertical: 'medium' }}
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '50px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box direction="row" align="center" gap="small">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Box
            pad={{ horizontal: 'medium', vertical: 'small' }}
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '30px',
              border: '2px solid #7C3AED',
            }}
          >
            <Text size="large" weight="bold" color="#7C3AED">
              Asesor IA
            </Text>
          </Box>
        </Link>
      </Box>
      <Nav direction="row" gap="large" align="center">
        <Anchor
          as={Link}
          href="/capacitacion"
          label="Capacitación"
          style={{ color: 'white', textDecoration: 'none' }}
        />
        <Anchor
          as={Link}
          href="/productos"
          label="Productos"
          style={{ color: 'white', textDecoration: 'none' }}
        />
        <Anchor
          as={Link}
          href="/soporte"
          label="Soporte"
          style={{ color: 'white', textDecoration: 'none' }}
        />
        <Link href="/blog" style={{ textDecoration: 'none' }}>
          <Button
            label="Agenda una Demo"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#7C3AED',
              border: '2px solid #7C3AED',
              borderRadius: '30px',
              padding: '8px 24px',
              fontWeight: 'bold',
            }}
          />
        </Link>
      </Nav>
    </Header>
  );
}
