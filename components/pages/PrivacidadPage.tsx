'use client';

import { Box, Heading, Paragraph } from 'grommet';

export default function PrivacidadPage() {
    return (
        <Box pad="large" margin={{ top: 'large' }} background="#3a3a3a" style={{ minHeight: '100vh' }}>
            <Box width="fill" alignSelf="center">
                <Heading level={1} margin={{ bottom: 'small', top: '60px' }} color="white" textAlign="center">
                    Políticas de Privacidad.
                </Heading>
                <Paragraph color="rgba(255, 255, 255, 0.8)" textAlign="center">
                    En Asesor IA, nos comprometemos a proteger tu privacidad y la seguridad de tus datos.
                </Paragraph>
                <Heading level={3} color="white" margin={{ top: 'medium' }} textAlign="center">
                    Recopilación de Datos
                </Heading>
                <Paragraph color="rgba(255, 255, 255, 0.8)" textAlign="center">
                    Recopilamos únicamente la información necesaria para proporcionar nuestros servicios.
                </Paragraph>
                <Heading level={3} color="white" margin={{ top: 'medium' }} textAlign="center">
                    Uso de la Información
                </Heading>
                <Paragraph color="rgba(255, 255, 255, 0.8)" textAlign="center">
                    Tu información se utiliza exclusivamente para mejorar nuestros servicios y comunicarnos contigo.
                </Paragraph>
                <Heading level={3} color="white" margin={{ top: 'medium' }} textAlign="center">
                    Seguridad
                </Heading>
                <Paragraph color="rgba(255, 255, 255, 0.8)" textAlign="center">
                    Implementamos medidas de seguridad robustas para proteger tu información personal.
                </Paragraph>
                <Heading level={3} color="white" margin={{ top: 'medium' }} textAlign="center">
                    Solicitud de Baja de Datos
                </Heading>
                <Paragraph color="rgba(255, 255, 255, 0.8)" textAlign="center">
                    Si deseas acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales (Derechos ARCO), o revocar tu consentimiento, puedes enviar una solicitud a nuestro correo electrónico: <strong style={{ color: '#7C3AED' }}>contacto@asesoria.com</strong>.
                </Paragraph>
            </Box>
        </Box>
    );
}
