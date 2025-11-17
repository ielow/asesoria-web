'use client';

import { Box, Heading, Paragraph, Grid, Card, CardBody, CardHeader, Text, Button } from 'grommet';
import { Package, Cart } from 'grommet-icons';

const productos = [
  {
    nombre: 'Producto Premium',
    descripcion: 'Solución completa para empresas grandes',
    precio: '$999/mes'
  },
  {
    nombre: 'Producto Estándar',
    descripcion: 'Ideal para medianas empresas',
    precio: '$499/mes'
  },
  {
    nombre: 'Producto Básico',
    descripcion: 'Perfecto para emprendedores',
    precio: '$199/mes'
  }
];

export default function Productos() {
  return (
    <Box pad="large" margin={{ top: 'large' }} background="#3a3a3a" style={{ minHeight: '100vh' }}>
      <Box width="xlarge" alignSelf="center">
        <Heading level={1} margin={{ bottom: 'small' }} color="white">Productos</Heading>
        <Paragraph size="large" color="rgba(255, 255, 255, 0.8)" margin={{ bottom: 'large' }}>
          Descubre nuestras soluciones diseñadas para cada necesidad
        </Paragraph>
        <Grid columns={{ count: 3, size: 'auto' }} gap="medium">
          {productos.map((producto, index) => (
            <Card key={index} background="light-1" elevation="medium">
              <CardHeader pad="medium" background="brand">
                <Box align="center" gap="small">
                  <Package size="large" color="white" />
                  <Text color="white" weight="bold" size="large">{producto.nombre}</Text>
                </Box>
              </CardHeader>
              <CardBody pad="medium" gap="medium">
                <Text textAlign="center">{producto.descripcion}</Text>
                <Heading level={3} textAlign="center" color="brand" margin="none">
                  {producto.precio}
                </Heading>
                <Button
                  primary
                  label="Adquirir"
                  icon={<Cart />}
                  reverse
                  className="product-button"
                  style={{ transition: 'all 0.3s ease' }}
                />
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
