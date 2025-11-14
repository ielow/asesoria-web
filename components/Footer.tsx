'use client';

import { Box, Text, Image, Select } from 'grommet';
import { Youtube, Facebook, Linkedin, Instagram } from 'grommet-icons';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const languageOptions = [
    { label: 'Español', value: 'es' },
    { label: 'English', value: 'en' }
  ];
  
  const currentLanguage = languageOptions.find(opt => opt.value === locale)?.label || 'Español';

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
          {t('followUs')}
        </Text>
        <Box direction="row" gap="medium">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center'
            }}
            className="social-icon"
          >
            <Youtube color="rgba(255, 255, 255, 0.7)" size="medium" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center'
            }}
            className="social-icon"
          >
            <Facebook color="rgba(255, 255, 255, 0.7)" size="medium" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center'
            }}
            className="social-icon"
          >
            <Linkedin color="rgba(255, 255, 255, 0.7)" size="medium" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center'
            }}
            className="social-icon"
          >
            <Instagram color="rgba(255, 255, 255, 0.7)" size="medium" />
          </a>
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
        <Box direction="row" gap="large" align="center">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Image
              src="/asesoria-logo.svg"
              alt="Asesor IA Logo"
              height={40}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>

          {/* Links de navegación */}
          <Link href="/privacidad" style={{ textDecoration: 'none' }}>
            <Text
              color="rgba(255, 255, 255, 0.7)"
              size="small"
              style={{ cursor: 'pointer' }}
            >
              {t('privacyPolicy')}
            </Text>
          </Link>
          <Link href="/nosotros" style={{ textDecoration: 'none' }}>
            <Text
              color="rgba(255, 255, 255, 0.7)"
              size="small"
              style={{ cursor: 'pointer' }}
            >
              {t('aboutUs')}
            </Text>
          </Link>
          <Link href="/servicios" style={{ textDecoration: 'none' }}>
            <Text
              color="rgba(255, 255, 255, 0.7)"
              size="small"
              style={{ cursor: 'pointer' }}
            >
              {t('services')}
            </Text>
          </Link>
        </Box>

        {/* Selector de idioma - lado derecho */}
        <Box direction="row" gap="small" align="center">
          <Select
            options={languageOptions.map(opt => opt.label)}
            value={currentLanguage}
            onChange={({ option }) => {
              const selectedLang = languageOptions.find(opt => opt.label === option);
              if (selectedLang) {
                router.replace(pathname, { locale: selectedLang.value as any });
              }
            }}
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
