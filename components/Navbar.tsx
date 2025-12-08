'use client';

import { Link } from '@/i18n/routing';
import { Header, Box, Nav, Button, Image, Layer, ResponsiveContext } from 'grommet';
import { Menu as MenuIcon, Close } from 'grommet-icons';
import { useTranslations } from 'next-intl';
import { PopupModal } from 'react-calendly';
import { useState, useEffect, useContext } from 'react';

export default function Navbar() {
  const t = useTranslations('nav');
  const [showCalendly, setShowCalendly] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const size = useContext(ResponsiveContext);
  const isMobile = size === 'small';
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  return (
    <>
      <Header
        background="rgba(255, 255, 255, 0.9)"
        pad={{ horizontal: isMobile ? 'medium' : 'large', vertical: 'small' }}
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          height: '80px',
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

        {!isMobile ? (
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
        ) : (
          <Button
            icon={<MenuIcon color="#252525" />}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            plain
            style={{ marginRight: '21px' }}
          />
        )}
      </Header>

      {/* Mobile Menu Layer */}
      {isMobile && showMobileMenu && (
        <Layer
          position="top"
          full
          modal
          animation="slide"
          onClickOutside={() => setShowMobileMenu(false)}
          onEsc={() => setShowMobileMenu(false)}
          style={{
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(15px)',
            zIndex: 900,
          }}
        >

          <Box fill pad="large" justify="between">
            <Box /> {/* Spacer for top alignment if needed, or just to push content to center with flex */}

            <Box flex align="center" justify="center">
              <Nav gap="xlarge" align="center">
                <Link
                  href="/"
                  onClick={() => setShowMobileMenu(false)}
                  style={{
                    textDecoration: 'none',
                    color: '#252525',
                    fontSize: '2rem',
                    fontWeight: '600',
                    textAlign: 'center'
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/capacitacion"
                  onClick={() => setShowMobileMenu(false)}
                  style={{
                    textDecoration: 'none',
                    color: '#252525',
                    fontSize: '2rem',
                    fontWeight: '600',
                    textAlign: 'center'
                  }}
                >
                  {t('capacitacion')}
                </Link>
                <Link
                  href="/productos"
                  onClick={() => setShowMobileMenu(false)}
                  style={{
                    textDecoration: 'none',
                    color: '#252525',
                    fontSize: '2rem',
                    fontWeight: '600',
                    textAlign: 'center'
                  }}
                >
                  {t('productos')}
                </Link>
                <Button
                  label={t('agendaDemo')}
                  onClick={() => {
                    setShowMobileMenu(false);
                    setShowCalendly(true);
                  }}
                  style={{
                    color: '#252525',
                    border: '2px solid #7C3AED',
                    borderRadius: '30px',
                    padding: '16px 40px',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    marginTop: '20px'
                  }}
                />
              </Nav>
            </Box>

            <Box align="center" width="100%" pad={{ bottom: 'medium' }}>
              <Button
                label="Cerrar"
                onClick={() => setShowMobileMenu(false)}
                style={{
                  color: '#666',
                  fontSize: '1.2rem',
                  fontWeight: '500',
                  padding: '10px 30px',
                  border: 'none',
                  background: 'transparent',
                  textDecoration: 'underline'
                }}
              />
            </Box>
          </Box>
        </Layer>
      )}

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
