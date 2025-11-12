'use client';

import { Box, Heading, Card, CardBody, Text, Grid } from 'grommet';
import { Technology, StatusGood, Support } from 'grommet-icons';
import { useState } from 'react';

//TODO: Cambiar los textos 
const cards = [
  {
    title: 'Costos',
    icon: <Technology size="large" color="brand" />,
    front: 'Tecnología Altos costos de soluciones empresariales',
    back: 'Implementamos las últimas tecnologías para mantener tu negocio a la vanguardia del mercado.'
  },
  {
    title: 'Seguridad',
    icon: <StatusGood size="large" color="brand" />,
    front: 'Riesgos de seguridad en la nube',
    back: 'Nuestro compromiso con la calidad asegura resultados excepcionales en cada proyecto.'
  },
  {
    title: 'Estrategias',
    icon: <Support size="large" color="brand" />,
    front: 'Falta de una estrategia para implementarla',
    back: 'Equipo dedicado disponible en todo momento para resolver tus necesidades.'
  }
];

function FlipCard({ card }: { card: typeof cards[0] }) {
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
            {card.icon}
            <Heading level={3} margin="none">{card.title}</Heading>
            <Text textAlign="center" color="dark-3">{card.front}</Text>
          </Box>
        ) : (
          <Text textAlign="center" color="white" size="large">
            {card.back}
          </Text>
        )}
      </CardBody>
    </Card>
  );
}

export default function FlipCards() {
  return (
    <Box pad="large" background="#3a3a3a">
      <Box width="xlarge" alignSelf="center">
        <Heading level={2} textAlign="center" margin={{ bottom: 'large' }} color="white">
          La IA que necesita tu empresa, sin complicaciones.
        </Heading>
        <Grid columns={{ count: 3, size: 'auto' }} gap="medium">
          {cards.map((card, index) => (
            <FlipCard key={index} card={card} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
