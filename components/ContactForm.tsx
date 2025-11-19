'use client';

import { Box, Heading, Paragraph, Form, FormField, TextInput, TextArea, Select } from 'grommet';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
    tipoConsulta: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const tiposConsulta = ['Asesoría', 'Capacitación', 'Cotización', 'Soporte Técnico', 'Otro'];

  const handleSubmit = async (event: { value: typeof formData }) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event.value)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          empresa: '',
          mensaje: '',
          tipoConsulta: ''
        });
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box 
      pad={{ horizontal: 'large', vertical: 'xlarge' }} 
      background="linear-gradient(135deg, rgba(42, 42, 42, 0.9) 0%, rgba(58, 42, 82, 0.8) 100%)"
    >
      <Box 
        width="xlarge" 
        alignSelf="center"
        direction="row-responsive"
        gap="large"
        align="start"
      >
        {/* Columna Izquierda - Contenido Comercial */}
        <Box 
          width="medium" 
          gap="medium"
          pad={{ vertical: 'large' }}
        >
          <Heading 
            level={2} 
            color="white"
            margin={{ bottom: 'small' }}
            style={{ 
              fontSize: '3rem',
              lineHeight: '1.2',
              fontWeight: 'bold'
            }}
          >
            Impulsa tu Negocio con IA
          </Heading>
          
          <Paragraph 
            color="rgba(255, 255, 255, 0.9)" 
            size="large"
            margin={{ bottom: 'medium' }}
            style={{ lineHeight: '1.6' }}
          >
            {t('subtitle')}
          </Paragraph>

          <Box margin={{ top: 'large' }}>
            <Paragraph 
              color="rgba(255, 255, 255, 0.8)" 
              size="small"
              style={{ fontStyle: 'italic' }}
            >
              "Transformamos tu negocio con inteligencia artificial de forma práctica y efectiva"
            </Paragraph>
          </Box>
        </Box>

        {/* Columna Derecha - Formulario */}
        <Box 
          flex="grow"
          background="white" 
          round="large" 
          elevation="xlarge"
          pad="large"
          style={{
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            fontSize: '12.8px'
          }}
        >
          <Form
            value={formData}
            onChange={nextValue => setFormData(nextValue)}
            onSubmit={handleSubmit}
          >
            <Box gap="small" style={{ fontSize: '12.8px' }}>
              <Box>
                <label style={{ fontSize: '10.24px', marginBottom: '4px', display: 'block', color: '#374151', fontWeight: '500' }}>
                  Nombre Completo
                </label>
                <TextInput name="nombre" placeholder="Ej: Juan Pérez" style={{ fontSize: '12.8px' }} />
              </Box>

              <Box>
                <label style={{ fontSize: '10.24px', marginBottom: '4px', display: 'block', color: '#374151', fontWeight: '500' }}>
                  Correo Electrónico
                </label>
                <TextInput name="email" type="email" placeholder="tu@empresa.com" style={{ fontSize: '12.8px' }} />
              </Box>

              <Box>
                <label style={{ fontSize: '10.24px', marginBottom: '4px', display: 'block', color: '#374151', fontWeight: '500' }}>
                  Teléfono
                </label>
                <TextInput name="telefono" type="tel" placeholder="+52 123 456 7890" style={{ fontSize: '12.8px' }} />
              </Box>

              <Box>
                <label style={{ fontSize: '10.24px', marginBottom: '4px', display: 'block', color: '#374151', fontWeight: '500' }}>
                  Empresa
                </label>
                <TextInput name="empresa" placeholder="Nombre de tu empresa" style={{ fontSize: '12.8px' }} />
              </Box>

              <Box>
                <label style={{ fontSize: '10.24px', marginBottom: '4px', display: 'block', color: '#374151', fontWeight: '500' }}>
                  ¿En qué podemos ayudarte?
                </label>
                <Select
                  name="tipoConsulta"
                  options={tiposConsulta}
                  placeholder="Selecciona una opción"
                  style={{ fontSize: '12.8px' }}
                />
              </Box>

              <Box>
                <label style={{ fontSize: '10.24px', marginBottom: '4px', display: 'block', color: '#374151', fontWeight: '500' }}>
                  Cuéntanos más sobre tu proyecto
                </label>
                <TextArea 
                  name="mensaje" 
                  placeholder="Describe brevemente tu necesidad o proyecto..."
                  resize="vertical"
                  style={{ fontSize: '12.8px' }}
                />
              </Box>
            </Box>

            {submitStatus === 'success' && (
              <Box 
                background="#10b981" 
                pad="medium" 
                round="medium" 
                margin={{ vertical: 'medium' }}
                animation="fadeIn"
              >
                <Paragraph margin="none" color="white" textAlign="center" style={{ fontWeight: 'bold', fontSize: '12.8px' }}>
                  ✓ ¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.
                </Paragraph>
              </Box>
            )}

            {submitStatus === 'error' && (
              <Box 
                background="#ef4444" 
                pad="medium" 
                round="medium" 
                margin={{ vertical: 'medium' }}
                animation="fadeIn"
              >
                <Paragraph margin="none" color="white" textAlign="center" style={{ fontSize: '12.8px' }}>
                  ✗ Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                </Paragraph>
              </Box>
            )}

            <Box margin={{ top: 'medium' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12.8px 25.6px',
                  fontWeight: 'bold',
                  fontSize: '12.8px',
                  width: '100%',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                  color: 'white'
                }}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </Box>

            <p style={{ 
              textAlign: 'center', 
              fontSize: '11.2px', 
              color: '#6b7280',
              marginTop: '12px'
            }}>
              Al enviar este formulario, aceptas nuestra política de privacidad
            </p>
          </Form>
        </Box>
      </Box>
    </Box>
  );
}
