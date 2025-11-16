'use client';

import { Box, Heading, Text, Paragraph } from 'grommet';
import { useTranslations } from 'next-intl';
import { Analytics, ServerCluster, Workshop, Configure } from 'grommet-icons';
import { ReactNode } from 'react';

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

  return (
    <Box pad="large" background="#3a3a3a">
      <Box width="xlarge" alignSelf="center">
        {/* Main Title */}
        <Heading 
          level={2} 
          textAlign="center" 
          margin={{ bottom: 'xlarge' }} 
          color="white"
          style={{ fontSize: '2.5rem' }}
        >
          {t('mainTitle')}
        </Heading>

        {/* Service Blocks */}
        {serviceBlocks.map((service, index) => (
          <Box
            key={service.key}
            direction="row"
            gap="large"
            margin={{ bottom: index < serviceBlocks.length - 1 ? 'xlarge' : 'none' }}
            style={{
              flexDirection: service.imagePosition === 'left' ? 'row-reverse' : 'row'
            }}
          >
            {/* Image/Icon Side */}
            <Box
              width="50%"
              align="center"
              justify="center"
              background="rgba(124, 58, 237, 0.1)"
              round="medium"
              pad="xlarge"
              style={{ minHeight: '300px' }}
            >
              {service.icon}
            </Box>

            {/* Content Side */}
            <Box width="50%" justify="center" gap="small">
              <Text 
                size="small" 
                color="#7C3AED" 
                weight="bold"
                style={{ textTransform: 'uppercase', letterSpacing: '1px' }}
              >
                {`0${index + 1}`}
              </Text>
              <Heading 
                level={3} 
                margin="none" 
                color="white"
                style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}
              >
                {t(`${service.key}.title`)}
              </Heading>
              <Heading 
                level={4} 
                margin="none" 
                color="#c4b5fd"
                style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: '500',
                  marginBottom: '1rem'
                }}
              >
                {t(`${service.key}.subtitle`)}
              </Heading>
              <Paragraph 
                color="rgba(255, 255, 255, 0.8)" 
                size="medium"
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
