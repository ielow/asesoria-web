'use client';

import { Box, Text, Image, Select } from 'grommet';
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
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
              height={32}
              style={{ filter: 'brightness(0) invert(1)', height: '32px', width: 'auto' }}
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
