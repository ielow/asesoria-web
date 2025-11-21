'use client';

import { Link } from '@/i18n/routing';
import { Header, Box, Nav, Button, Image, Layer } from 'grommet';
import { useTranslations } from 'next-intl';
import { PopupModal } from 'react-calendly';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const t = useTranslations('nav');
  const [showCalendly, setShowCalendly] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);
  
  return (
    <>
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
              style={{ height: '42px', width: 'auto' }}
            />
          </Box>
        </Link>
      </Box>
      <Nav direction="row" gap="medium" align="center">
        <Link 
          href="/capacitacion" 
          style={{ 
            textDecoration: 'none',
            color: '#252525',
            fontSize: '16px',
            fontWeight: '500'
          }}
        >
          {t('capacitacion')}
        </Link>
        <Link 
          href="/productos" 
          style={{ 
            textDecoration: 'none',
            color: '#252525',
            fontSize: '16px',
            fontWeight: '500'
          }}
        >
          {t('productos')}
        </Link>
        <Link 
          href="/soporte" 
          style={{ 
            textDecoration: 'none',
            color: '#252525',
            fontSize: '16px',
            fontWeight: '500'
          }}
        >
          {t('soporte')}
        </Link>
        <Button
          label={t('agendaDemo')}
          onClick={() => setShowCalendly(true)}
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
      </Nav>
    </Header>

    {/* Calendly Modal */}
    {rootElement && (
      <PopupModal
        url="https://calendly.com/centralia-trc/30min"
        onModalClose={() => setShowCalendly(false)}
        open={showCalendly}
        rootElement={rootElement}
      />
    )}
    </>
  );
}
