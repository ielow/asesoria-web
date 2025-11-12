'use client';

import { useState } from 'react';
import { Box, Heading, Form, FormField, TextInput, TextArea, Button, Paragraph } from 'grommet';
import { Send } from 'grommet-icons';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    mensaje: ''
  });

  const handleSubmit = ({ value }: { value: typeof formData }) => {
    console.log('Formulario enviado:', value);
    alert('¡Gracias! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <Box pad="large" background="#3a3a3a">
      <Box width="large" alignSelf="center">
        <Heading level={2} textAlign="center" margin={{ bottom: 'small' }} color="white">
          Agenda tu Servicio
        </Heading>
        <Paragraph textAlign="center" color="rgba(255, 255, 255, 0.8)" margin={{ bottom: 'large' }}>
          Completa el formulario y nos contactaremos contigo
        </Paragraph>
        <Box background="white" pad="large" round="small" elevation="medium">
          <Form
            value={formData}
            onChange={nextValue => setFormData(nextValue)}
            onSubmit={handleSubmit}
          >
            <FormField name="nombre" label="Nombre" required>
              <TextInput name="nombre" placeholder="Tu nombre completo" />
            </FormField>
            <FormField name="email" label="Email" required>
              <TextInput name="email" type="email" placeholder="tu@email.com" />
            </FormField>
            <FormField name="telefono" label="Teléfono" required>
              <TextInput name="telefono" type="tel" placeholder="+52 123 456 7890" />
            </FormField>
            <FormField name="fecha" label="Fecha de Servicio" required>
              <TextInput name="fecha" type="date" />
            </FormField>
            <FormField name="mensaje" label="Mensaje">
              <TextArea name="mensaje" placeholder="Cuéntanos sobre tu proyecto..." rows={4} />
            </FormField>
            <Box direction="row" justify="end" margin={{ top: 'medium' }}>
              <Button
                type="submit"
                primary
                label="Enviar Solicitud"
                icon={<Send />}
                reverse
              />
            </Box>
          </Form>
        </Box>
      </Box>
    </Box>
  );
}
