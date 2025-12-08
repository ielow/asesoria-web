'use client';

import { Box, Heading, Text, ResponsiveContext } from 'grommet';
import { Money, Lock, Plan } from 'grommet-icons';
import { useTranslations } from 'next-intl';
import { ReactNode, useContext } from 'react';

interface CardData {
  key: 'costs' | 'security' | 'strategy';
  icon: ReactNode;
}

const cardConfigs: CardData[] = [
  {
    key: 'costs',
    icon: <Money size="large" color="brand" />
  },
  {
    key: 'security',
    icon: <Lock size="large" color="brand" />
  },
  {
    key: 'strategy',
    icon: <Plan size="large" color="brand" />
  }
];

interface FlipCardProps {
  cardKey: 'costs' | 'security' | 'strategy';
  icon: ReactNode;
}

function FlipCard({ cardKey, icon }: FlipCardProps) {
  const t = useTranslations('values');

  return (
    <div className="flip-card" style={{ height: '450px' }}>
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <Box
            pad="large"
            align="center"
            justify="center"
            gap="medium"
            style={{ width: '100%', height: '100%' }}
          >
            <Box>
              {icon}
            </Box>
            <Heading
              level={3}
              margin="none"
              textAlign="center"
              style={{ color: 'white' }}
            >
              {t(`${cardKey}.title`)}
            </Heading>
            <Text textAlign="center" color="rgba(255, 255, 255, 0.8)" size="medium">
              {t(`${cardKey}.front`)}
            </Text>
          </Box>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <Box
            pad="large"
            align="center"
            justify="center"
            style={{ width: '100%', height: '100%' }}
          >
            <Text textAlign="center" color="white" size="medium" style={{ lineHeight: '1.6' }}>
              {t(`${cardKey}.back`)}
            </Text>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default function FlipCards() {
  const t = useTranslations('values');
  const size = useContext(ResponsiveContext);
  const isMobile = size === 'small';

  return (
    <Box pad={isMobile ? 'medium' : 'large'} background="#3a3a3a" align="center">
      <Box
        width="xlarge"
        pad={isMobile ? 'medium' : 'xlarge'}
        background="linear-gradient(135deg, rgba(42, 42, 42, 0.9) 0%, rgba(58, 42, 82, 0.8) 100%)"
        round="medium"
        align="center"
      >
        <Heading
          level={2}
          textAlign="center"
          margin={{ bottom: 'large' }}
          color="white"
          style={{ fontSize: isMobile ? '2rem' : '2.5rem' }}
        >
          {t('title')}
        </Heading>
        <Box
          direction={isMobile ? 'column' : 'row'}
          gap="medium"
          justify="center"
          style={{ width: '100%' }}
        >
          {cardConfigs.map((config) => (
            <Box key={config.key} style={{ flex: '1', maxWidth: isMobile ? '100%' : '350px', width: isMobile ? '100%' : 'auto' }}>
              <FlipCard cardKey={config.key} icon={config.icon} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
