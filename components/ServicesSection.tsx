'use client';

import { Box, Heading, Text, Paragraph, ResponsiveContext } from 'grommet';
import { useTranslations } from 'next-intl';
import { Analytics, ServerCluster, Workshop, Configure } from 'grommet-icons';
import { ReactNode, useContext } from 'react';

interface ServiceBlock {
  key: 'consulting' | 'implementation' | 'training' | 'support';
  icon: ReactNode;
  imagePosition: 'left' | 'right';
}

const serviceBlocks: ServiceBlock[] = [
  {
    key: 'consulting',
    icon: <Analytics size="xlarge" color="#7C3AED" />,
    imagePosition: 'right'
  },
  {
    key: 'implementation',
    icon: <ServerCluster size="xlarge" color="#7C3AED" />,
    imagePosition: 'left'
  },
  {
    key: 'training',
    icon: <Workshop size="xlarge" color="#7C3AED" />,
    imagePosition: 'right'
  },
  {
    key: 'support',
    icon: <Configure size="xlarge" color="#7C3AED" />,
    imagePosition: 'left'
  }
];

export default function ServicesSection() {
  const t = useTranslations('services');
  const size = useContext(ResponsiveContext);
  const isMobile = size === 'small';

  return (
    <Box pad={isMobile ? 'medium' : 'large'} background="#3a3a3a">
      <Box width="xlarge" alignSelf="center">
        {/* Main Title */}
        <Heading
          level={1}
          margin={{ bottom: 'xlarge' }}
          color="white"
          style={{ fontSize: isMobile ? '2.5rem' : '3.5rem' }}
        >
          {t('mainTitle')}
        </Heading>

        {/* Service Blocks */}
        {serviceBlocks.map((service, index) => (
          <Box
            key={service.key}
            direction={isMobile ? 'column' : 'row'}
            gap={isMobile ? 'medium' : 'large'}
            margin={{ bottom: index < serviceBlocks.length - 1 ? 'xlarge' : 'none' }}
            style={{
              flexDirection: isMobile
                ? 'column-reverse'
                : (service.imagePosition === 'left' ? 'row-reverse' : 'row')
            }}
          >
            {/* Image/Icon Side */}
            <Box
              width={isMobile ? '100%' : '50%'}
              style={{
                backgroundImage: `url(/${service.key}.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '25px',
                minHeight: isMobile ? '250px' : '400px',
                overflow: 'hidden'
              }}
            />

            {/* Content Side */}
            <Box width={isMobile ? '100%' : '50%'} justify="center" gap="small">
              <Box
                width="50px"
                height="50px"
                round="full"
                border={{ color: '#7C3AED', size: '2px' }}
                align="center"
                justify="center"
                style={{ marginBottom: '1rem' }}
              >
                <Text
                  color="white"
                  style={{ fontSize: '16px', fontWeight: 'normal' }}
                >
                  {index + 1}
                </Text>
              </Box>
              <Heading
                level={3}
                margin="none"
                color="white"
                style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', marginBottom: '0.5rem' }}
              >
                {t(`${service.key}.title`)}
              </Heading>
              <Heading
                level={4}
                margin="none"
                color="#c4b5fd"
                style={{
                  fontSize: isMobile ? '1rem' : '1.2rem',
                  fontWeight: '500',
                  marginBottom: '1rem'
                }}
              >
                {t(`${service.key}.subtitle`)}
              </Heading>
              <Paragraph
                color="rgba(255, 255, 255, 0.8)"
                size={isMobile ? 'small' : 'medium'}
                style={{ lineHeight: '1.8' }}
              >
                {t(`${service.key}.description`)}
              </Paragraph>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
