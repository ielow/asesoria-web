'use client';

import { Box, Heading, Text, Grid } from 'grommet';
import { Money, Lock, Plan } from 'grommet-icons';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

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
    <div className="flip-card" style={{ height: '320px' }}>
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
            {icon}
            <Heading 
              level={3} 
              margin="none" 
              textAlign="center"
              style={{ color: '#2e2e2e' }}
            >
              {t(`${cardKey}.title`)}
            </Heading>
            <Text textAlign="center" color="dark-3" size="medium">
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
  
  return (
    <Box pad="large" background="#3a3a3a">
      <Box width="xlarge" alignSelf="center">
        <Heading level={2} textAlign="center" margin={{ bottom: 'large' }} color="white">
          {t('title')}
        </Heading>
        <Grid columns={{ count: 3, size: 'auto' }} gap="medium">
          {cardConfigs.map((config) => (
            <FlipCard key={config.key} cardKey={config.key} icon={config.icon} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
