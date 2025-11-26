import { Box, Heading, Paragraph, Button } from 'grommet';
import { getAllCursos } from '@/lib/cursos';
import { Link } from '@/i18n/routing';

export default function Capacitacion() {
  const cursos = getAllCursos();

  return (
    <Box background="#3a3a3a" style={{ minHeight: '100vh' }}>
      <Box
        height="35vh"
        width="100%"
        align="center"
        justify="end"
        style={{
          background: 'linear-gradient(135deg, #FF31D9 0%, #5817EF 100%)',
        }}
      >
        <Heading style={{ fontSize: '4.5rem', maxWidth: '50%', lineHeight: '1' }} margin={{ bottom: 'medium' }} level={1} color="white" >Capacitación en Inteligencia Artificial.</Heading>
      </Box>

      <Box width="large" alignSelf="center" pad={{ vertical: 'large', horizontal: 'small' }}>
        <Heading level={2} size="large" color="white" margin={{ bottom: 'large' }}>
          Libera el talento de tu equipo. Potencia el futuro de tu empresa.
        </Heading>
        <Paragraph fill size="medium" color="rgba(255, 255, 255, 0.8)" margin={{ bottom: 'medium' }}>
          Deja que la Inteligencia Artificial se encargue de la rutina para que tus colaboradores se enfoquen en lo que ninguna máquina puede hacer: innovar y liderar.
        </Paragraph>
        <Paragraph fill size="medium" color="rgba(255, 255, 255, 0.8)" margin={{ bottom: 'large' }}>
          Fortalece la competitividad de tu organización mediante la adopción de capacidades avanzadas en Inteligencia Artificial. Desarrolla profesionales preparados para mejorar la eficiencia operativa, respaldar la toma de decisiones y contribuir a la transformación digital del negocio.
        </Paragraph>
      </Box>
      <Box width="large" alignSelf="center" pad={{ vertical: 'large', horizontal: 'small' }}>
        {cursos.map((curso) => (
          <Box
            key={curso.slug}
            direction="row"
            gap="large"
            margin={{ bottom: 'large' }}
            style={{
              // If imagePosition is 'right', we want the image (first child) to be on the right.
              // row-reverse puts the first child (image) on the right.
              flexDirection: curso.imagePosition === 'right' ? 'row-reverse' : 'row'
            }}
          >
            {/* Image/Icon Side */}
            <Box
              width="50%"
              style={{
                backgroundImage: `url(/${curso.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '25px',
                minHeight: '400px',
                overflow: 'hidden'
              }}
            />

            {/* Content Side */}
            <Box width="50%" justify="center" gap="small">

              <Heading
                level={3}
                margin="none"
                color="white"
                style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}
              >
                {curso.title}
              </Heading>

              <Paragraph
                color="rgba(255, 255, 255, 0.8)"
                size="medium"
                style={{ lineHeight: '1.3' }}
              >
                {curso.description}
              </Paragraph>

              <Box alignSelf="start" margin={{ bottom: 'small' }}>
                <Link href={`/capacitacion/${curso.slug}`} style={{ textDecoration: 'none' }}>
                  <Button
                    label="Ver Detalle"
                    primary
                    color="#7C3AED"
                    style={{ borderRadius: '20px', padding: '8px 20px' }}
                  />
                </Link>
              </Box>

            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

