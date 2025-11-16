'use client';

import { Box, Heading, Card, CardBody, Text, Grid } from 'grommet';
import { Money, Lock, Plan } from 'grommet-icons';
import { useTranslations } from 'next-intl';
import { useState, ReactNode } from 'react';

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
  const [flipped, setFlipped] = useState(false);

  return (
    <Card
      height="medium"
      background={flipped ? 'brand' : 'white'}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      elevation="medium"
      hoverIndicator
    >
      <CardBody pad="large" align="center" justify="center">
        {!flipped ? (
          <Box align="center" gap="medium">
            {icon}
            <Heading level={3} margin="none">
              {t(`${cardKey}.title`)}
            </Heading>
            <Text textAlign="center" color="dark-3">
              {t(`${cardKey}.front`)}
            </Text>
          </Box>
        ) : (
          <Text textAlign="center" color="white" size="medium">
            {t(`${cardKey}.back`)}
          </Text>
        )}
      </CardBody>
    </Card>
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
