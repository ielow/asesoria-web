'use client';

import { Box, Heading, Paragraph, Form, FormField, TextInput, TextArea, Select, Button } from 'grommet';
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
    <Box pad="large" background="#3a3a3a">
      <Box width="large" alignSelf="center">
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
          pad="large"
        >
          <Form
            value={formData}
            onChange={nextValue => setFormData(nextValue)}
            onSubmit={handleSubmit}
          >
            <FormField name="nombre" label="Nombre" required>
              <TextInput name="nombre" />
            </FormField>

            <FormField name="email" label="Email" required>
              <TextInput name="email" type="email" />
            </FormField>

            <FormField name="telefono" label="Teléfono" required>
              <TextInput name="telefono" type="tel" />
            </FormField>

            <FormField name="empresa" label="Empresa" required>
              <TextInput name="empresa" />
            </FormField>

            <FormField name="tipoConsulta" label="Tipo de Consulta" required>
              <Select
                name="tipoConsulta"
                options={tiposConsulta}
                placeholder="Selecciona una opción"
              />
            </FormField>

            <FormField name="mensaje" label="Mensaje" required>
              <TextArea name="mensaje" rows={5} />
            </FormField>

            {submitStatus === 'success' && (
              <Box 
                background="status-ok" 
                pad="small" 
                round="small" 
                margin={{ bottom: 'medium' }}
              >
                <Paragraph margin="none" color="white">
                  ¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.
                </Paragraph>
              </Box>
            )}

            {submitStatus === 'error' && (
              <Box 
                background="status-error" 
                pad="small" 
                round="small" 
                margin={{ bottom: 'medium' }}
              >
                <Paragraph margin="none" color="white">
                  Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                </Paragraph>
              </Box>
            )}

            <Box direction="row" gap="medium" justify="center" margin={{ top: 'medium' }}>
              <Button 
                type="submit" 
                primary 
                label={isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                disabled={isSubmitting}
                style={{
                  border: 'solid 2px #7C3AED',
                  borderRadius: '30px',
                  padding: '12px 32px',
                  fontWeight: 'bold'
                }}
              />
            </Box>
          </Form>
        </Box>
      </Box>
    </Box>
  );
}
