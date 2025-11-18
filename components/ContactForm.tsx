'use client';

import { Box, Heading, Paragraph } from 'grommet';
import { InlineWidget } from 'react-calendly';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');

  return (
    <Box pad="large" background="#3a3a3a">
      <Box width="xlarge" alignSelf="center">
        <Heading 
          level={2} 
          textAlign="center" 
          margin={{ bottom: 'small' }} 
          color="white"
          style={{ fontSize: '2.5rem' }}
        >
          {t('title')}
        </Heading>
        <Paragraph 
          textAlign="center" 
          color="rgba(255, 255, 255, 0.8)" 
          margin={{ bottom: 'large' }}
          size="large"
        >
          {t('subtitle')}
        </Paragraph>
        <Box 
          background="white" 
          round="medium" 
          elevation="medium"
          style={{ minHeight: '700px' }}
        >
          <InlineWidget 
            url="https://calendly.com/centralia-trc/30min"
            styles={{
              height: '700px',
              width: '100%'
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
