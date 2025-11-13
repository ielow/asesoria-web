'use client';

import Link from 'next/link';
import { Header, Box, Nav, Anchor, Button, Image } from 'grommet';

export default function Navbar() {
  return (
    <Header
      background="rgba(255, 255, 255, 0.9)"
      pad={{ horizontal: 'large', vertical: 'small' }}
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        height:'80px',
        maxWidth: '1200px',
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '50px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box direction="row" align="center" gap="small">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Box pad={{ horizontal: 'small', vertical: 'small' }}>
            <Image
              src="/asesoria-logo.svg"
              alt="Asesor IA Logo"
              height={42}
            />
          </Box>
        </Link>
      </Box>
      <Nav direction="row" gap="small" align="center">
        <Anchor
          as={Link}
          href="/capacitacion"
          label="Capacitación"
          style={{ color: '#252525' }}
        />
        <Anchor
          as={Link}
          href="/productos"
          label="Productos"
          style={{ color: '#252525'}}
        />
        <Anchor
          as={Link}
          href="/soporte"
          label="Soporte"
          style={{ color: '#252525'}}
        />
        <Link href="/blog" style={{ textDecoration: 'none' }}>
          <Button
            label="Agenda una Demo"
            className="nav-button"
            style={{
              color: '#252525',
              border: '2px solid #7C3AED',
              borderRadius: '30px',
              padding: '8px 24px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
            }}
          />
        </Link>
      </Nav>
    </Header>
  );
}
