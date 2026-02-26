'use client';
import { useContext } from 'react';
import { Box, Heading, Paragraph, Button, ResponsiveContext, Grid, Text } from 'grommet';
import { Checkmark, PlayFill, BarChart, Robot, ShieldSecurity, Compass, Contact, Diamond } from 'grommet-icons';
import { Link } from '@/i18n/routing';

export default function AsesoriaEmprendedoresPage() {
    const size = useContext(ResponsiveContext);
    const isMobile = size === 'small';

    const checkItems = [
        { text: "No necesitas saber de código.", icon: <Text color="status-critical">❌</Text>, isUnderline: true },
        { text: "No necesitas procesos difíciles de configuración.", icon: <Text color="status-critical">❌</Text>, isUnderline: true },
        { text: "Solo necesitas saber qué pedirle, y con nosotros aprendes cómo.", icon: <Checkmark color="status-ok" />, isUnderline: false }
    ];

    const modules = [
        {
            title: "Módulo 1: Fluidez Digital (Tus primeros pasos seguros)",
            icon: <Compass size="large" color="#FF31D9" />,
            points: [
                "Entiende cómo 'hablarle' a la IA para obtener lo que necesitas.",
                "Genera imágenes comerciales, audios, videos y presentaciones profesionales al instante con herramientas gratuitas y fáciles de usar."
            ]
        },
        {
            title: "Módulo 2: Tu Agencia de Marketing Personal",
            icon: <Diamond size="large" color="#5817EF" />,
            points: [
                "Aprende las fórmulas exactas (prompts) para crear campañas publicitarias, calendarios para redes sociales y analizar a tu competencia en minutos.",
                "Diseño sin ser diseñador: Crea fotos de producto (product shots) y contenido en video solo usando texto."
            ]
        },
        {
            title: "Módulo 3: Tu Negocio en Piloto Automático",
            icon: <Robot size="large" color="#FF31D9" />,
            points: [
                "Deja que la IA trabaje mientras duermes. Aprende a conectar aplicaciones de forma visual (como armar un rompecabezas) usando herramientas como Zapier o Make.",
                "Construye tu propio asistente virtual para automatizar seguimientos de clientes y respuestas de WhatsApp o Instagram."
            ]
        },
        {
            title: "Módulo 4: Privacidad Total (Tu Cerebro Corporativo)",
            icon: <ShieldSecurity size="large" color="#5817EF" />,
            points: [
                "Tu información es confidencial. Descubre cómo instalar IA directamente en tu computadora para garantizar 100% de privacidad (IA On Premise).",
                "Haz que la IA analice tus propios PDFs, contratos y manuales de forma local sin subirlos a internet."
            ]
        }
    ];

    const deliverables = [
        { title: "Las Fórmulas Precisas", desc: "Prompts probados y listos para copiar/pegar y crear asistentes al instante.", icon: "📋" },
        { title: "Directorio de Apps", desc: "La lista definitiva de las herramientas de IA más prácticas para negocios.", icon: "🛠️" },
        { title: "Comunidad Privada", desc: "Acceso a nuestro grupo para resolver dudas y hacer networking.", icon: "🤝" },
        { title: "Certificado Oficial", desc: "Documento que avala tu participación.", icon: "🎓" }
    ];

    return (
        <Box background="#1a1a1a" style={{ minHeight: '100vh', fontFamily: 'var(--font-league-spartan), sans-serif' }}>
            {/* HERO SECTION */}
            <Box
                width="100%"
                align="center"
                pad={{ top: 'xlarge', bottom: 'xlarge', horizontal: 'medium' }}
                style={{
                    background: 'linear-gradient(135deg, rgba(88, 23, 239, 0.8) 0%, rgba(0, 0, 0, 0.7) 100%), url(/taller-ia-emprendedores-banner.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    position: 'relative',
                    overflow: 'hidden',
                    paddingTop: '180px'
                }}
            >
                {/* Background decorative elements */}
                <Box style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(100px)' }} />
                <Box style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', height: '50%', background: 'rgba(0,0,0,0.2)', borderRadius: '50%', filter: 'blur(100px)' }} />

                <Box width="xlarge" align="center" style={{ zIndex: 1 }}>
                    <Text
                        color="white"
                        weight="bold"
                        size="small"
                        style={{
                            letterSpacing: '2px',
                            background: 'rgba(255,255,255,0.2)',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            marginBottom: '20px'
                        }}
                    >
                        ASESOR(IA) PARA EMPRENDEDORES
                    </Text>

                    <Heading
                        level={1}
                        color="white"
                        textAlign="center"
                        margin={{ bottom: 'medium', top: 'none' }}
                        style={{
                            fontSize: isMobile ? '2.8rem' : '4.5rem',
                            lineHeight: '1.1',
                            fontWeight: '900',
                            maxWidth: '900px',
                            textShadow: '0px 10px 30px rgba(0,0,0,0.3)'
                        }}
                    >
                        Multiplica los resultados de tu negocio con IA
                        <span style={{ display: 'block', fontSize: isMobile ? '1.5rem' : '2.5rem', fontWeight: '500', opacity: 0.9, marginTop: '10px' }}>
                        </span>
                    </Heading>

                    <Paragraph
                        textAlign="center"
                        color="white"
                        size={isMobile ? 'large' : 'xlarge'}
                        margin={{ bottom: 'xlarge' }}
                        style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.5', fontWeight: '300' }}
                    >
                        Descubre cómo automatizar tus ventas, crear contenido en minutos y optimizar tus procesos operativos de forma sencilla e intuitiva. <br /><strong>0 código; 100% práctico.</strong>
                    </Paragraph>

                    <Link href="/solicitar-cotizacion" style={{ textDecoration: 'none' }}>
                        <Button
                            primary
                            size="large"
                            style={{
                                background: '#ffffff',
                                color: '#5817EF',
                                borderRadius: '30px',
                                padding: '15px 40px',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                boxShadow: '0px 15px 30px rgba(0,0,0,0.2)',
                                transition: 'all 0.3s ease'
                            }}
                            label="Quiero simplificar mi negocio con IA"
                            hoverIndicator="#f0f0f0"
                        />
                    </Link>
                </Box>
            </Box>

            {/* PROBLEM SECTION */}
            <Box background="#222222" pad={{ vertical: 'xlarge', horizontal: 'medium' }} align="center">
                <Box width="xlarge" align="center">
                    <Heading level={2} color="white" textAlign="center" margin={{ bottom: 'large' }} style={{ fontWeight: '800', fontSize: isMobile ? '2rem' : '2.8rem' }}>
                        ¿Sientes que la IA avanza muy rápido y es complicado seguirle el paso?
                    </Heading>

                    <Paragraph color="rgba(255,255,255,0.8)" size="large" textAlign="center" margin={{ bottom: 'large' }} style={{ lineHeight: '1.6' }}>
                        Todos los días salen herramientas nuevas. Como emprendedor, necesitas soluciones que te ahorren tiempo, no plataformas que requieran meses de aprendizaje. La buena noticia es que <strong>no necesitas ser programador</strong> para aprovechar el poder de la Inteligencia Artificial.
                    </Paragraph>

                    <Box
                        background="#2a2a2a"
                        pad="large"
                        round="medium"
                        gap="medium"
                        style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)', width: '50%' }}
                    >
                        {checkItems.map((item, index) => (
                            <Box key={index} direction="row" gap="medium" align="center">
                                <Box flex={false}>{item.icon}</Box>
                                {item.isUnderline ? <Text style={{ textDecoration: 'line-through' }} color="white" size="large">{item.text}</Text> : <Text color="white" size="large">{item.text}</Text>}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* SOLUTION SECTION */}
            <Box pad={{ vertical: 'xlarge', horizontal: 'medium' }} align="center" background="linear-gradient(180deg, #222222 0%, #1a1a1a 100%)">
                <Box width="large" align="center">
                    <Heading level={2} color="#FF31D9" textAlign="center" margin={{ top: 'none', bottom: 'medium' }} style={{ fontWeight: '800', fontSize: isMobile ? '2.2rem' : '3rem' }}>
                        Bienvenido a la Inteligencia Artificial sin complicaciones.
                    </Heading>
                    <Paragraph color="rgba(255,255,255,0.8)" size="large" textAlign="center" style={{ lineHeight: '1.6' }}>
                        <strong>ASESOR(IA) para Emprendedores</strong> no es un curso teórico aburrido. Es un laboratorio de implementación donde te asesoramos como comenzar a integrar IA en tu negocio desde el primer día.
                    </Paragraph>
                </Box>
            </Box>

            {/* ROADMAP / SYLLABUS SECTION */}
            <Box background="#1a1a1a" pad={{ vertical: 'xlarge', horizontal: 'medium' }} align="center">
                <Box width="xlarge">
                    <Heading level={2} color="white" textAlign="center" margin={{ bottom: 'xlarge' }} style={{ fontWeight: '800', fontSize: isMobile ? '2.2rem' : '3rem' }}>
                        Lo que vas a lograr paso a paso <span>🤩</span>
                    </Heading>

                    <Grid columns={isMobile ? '100%' : '48%'} gap="large">
                        {modules.map((mod, index) => (
                            <Box
                                key={index}
                                background="#222222"
                                pad="large"
                                round="medium"
                                style={{
                                    borderTop: `4px solid ${index % 2 === 0 ? '#FF31D9' : '#5817EF'}`,
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                                    transition: 'transform 0.3s ease'
                                }}
                                hoverIndicator={{ background: '#252525' }}
                            >
                                <Box direction="row" gap="medium" align="center" margin={{ bottom: 'medium' }}>
                                    <Box pad="small" background="rgba(255,255,255,0.05)" round="full">
                                        {mod.icon}
                                    </Box>
                                    <Heading level={3} color="white" margin="none" style={{ fontWeight: '700' }}>
                                        {mod.title}
                                    </Heading>
                                </Box>
                                <Box gap="small">
                                    {mod.points.map((pt, i) => (
                                        <Box key={i} direction="row" gap="small" align="start">
                                            <Box pad={{ top: 'small' }}><Box width="8px" height="8px" background="#FF31D9" round="full" /></Box>
                                            <Paragraph color="rgba(255,255,255,0.7)" margin="none" fill style={{ lineHeight: '1.5' }}>
                                                {pt}
                                            </Paragraph>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Box>

            {/* DELIVERABLES SECTION */}
            <Box background="#222222" pad={{ vertical: 'xlarge', horizontal: 'medium' }} align="center">
                <Box width="xlarge" direction={isMobile ? 'column' : 'row'} gap="xlarge" align="center">
                    <Box width={isMobile ? '100%' : '40%'}>
                        <Heading level={2} color="white" margin={{ bottom: 'medium' }} style={{ fontWeight: '800', fontSize: isMobile ? '2.2rem' : '3rem' }}>
                            Tu Kit de Implementación
                        </Heading>
                        <Paragraph color="rgba(255,255,255,0.8)" size="large" margin={{ bottom: 'large' }}>
                            No solo vienes a escuchar, te llevas tu negocio actualizado con herramientas y metodologías listas para usar.
                        </Paragraph>
                        <Box style={{ display: isMobile ? 'none' : 'flex' }}>
                            <Box
                                width="100%"
                                height="250px"
                                round="medium"
                                background="linear-gradient(135deg, rgba(255,49,217,0.2) 0%, rgba(88,23,239,0.2) 100%)"
                                align="center"
                                justify="center"
                                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                            >
                                <Text size="4xl">🚀</Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box width={isMobile ? '100%' : '60%'} gap="medium">
                        {deliverables.map((item, index) => (
                            <Box
                                key={index}
                                direction="row"
                                gap="medium"
                                background="#1a1a1a"
                                pad="medium"
                                round="small"
                                style={{ borderLeft: '4px solid #5817EF' }}
                            >
                                <Text size="xxlarge">{item.icon}</Text>
                                <Box>
                                    <Text color="white" weight="bold" size="large">{item.title}</Text>
                                    <Text color="rgba(255,255,255,0.6)" size="medium">{item.desc}</Text>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* FILTER SECTION */}
            <Box background="#1a1a1a" pad={{ vertical: 'xlarge', horizontal: 'medium' }} align="center">
                <Box width="large" align="center">
                    <Heading level={2} color="white" textAlign="center" margin={{ bottom: 'xlarge' }} style={{ fontWeight: '800' }}>
                        ¿Este taller es para ti?
                    </Heading>

                    <Grid columns={isMobile ? '100%' : '50%'} gap="large" width="100%">
                        <Box
                            background="#222222"
                            pad="large"
                            round="medium"
                            style={{
                                borderTop: '6px solid #4CAF50',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <Box style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: 'rgba(76, 175, 80, 0.15)', borderRadius: '50%', filter: 'blur(30px)' }} />
                            <Box direction="row" gap="medium" align="center" margin={{ bottom: 'large' }}>
                                <Box background="rgba(76, 175, 80, 0.2)" pad="small" round="full">
                                    <Checkmark color="#4CAF50" size="large" />
                                </Box>
                                <Heading level={3} color="white" margin="none" style={{ fontWeight: '800' }}>SÍ es para ti si:</Heading>
                            </Box>
                            <Paragraph color="rgba(255,255,255,0.85)" margin="none" style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>
                                Eres dueño de negocio, emprendedor, marketer o consultor que busca recuperar su tiempo y delegar tareas operativas en la IA de forma inmediata.
                            </Paragraph>
                        </Box>

                        <Box
                            background="#222222"
                            pad="large"
                            round="medium"
                            style={{
                                borderTop: '6px solid #F44336',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <Box style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: 'rgba(244, 67, 54, 0.15)', borderRadius: '50%', filter: 'blur(30px)' }} />
                            <Box direction="row" gap="medium" align="center" margin={{ bottom: 'large' }}>
                                <Box background="rgba(244, 67, 54, 0.2)" pad="small" round="full" align="center" justify="center" width="48px" height="48px">
                                    <Text color="#F44336" size="xlarge" weight="bold" style={{ lineHeight: '1' }}>✕</Text>
                                </Box>
                                <Heading level={3} color="white" margin="none" style={{ fontWeight: '800' }}>NO es para ti si:</Heading>
                            </Box>
                            <Paragraph color="rgba(255,255,255,0.85)" margin="none" style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>
                                Buscas un curso avanzado de código, desarrollo de software o creación de modelos técnicos complejos.
                            </Paragraph>
                        </Box>
                    </Grid>
                </Box>
            </Box>

            {/* FINAL CTA SECTION */}
            <Box
                align="center"
                pad={{ vertical: 'xlarge', horizontal: 'medium' }}
                style={{
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #2a104f 100%)',
                    borderTop: '1px solid rgba(255,255,255,0.1)'
                }}
            >
                <Box width="large" align="center" pad="large" background="linear-gradient(135deg, rgba(255,49,217,0.1) 0%, rgba(88,23,239,0.1) 100%)" round="large" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
                    <Heading level={2} color="white" textAlign="center" margin={{ bottom: 'medium', top: 'none' }} style={{ fontWeight: '900', fontSize: isMobile ? '2.5rem' : '3.5rem' }}>
                        Es hora de que la tecnología trabaje para ti.
                    </Heading>
                    <Paragraph color="rgba(255,255,255,0.9)" size="xlarge" textAlign="center" margin={{ bottom: 'large' }} style={{ maxWidth: '600px' }}>
                        Da el paso hacia una gestión más inteligente y libera tu agenda de tareas repetitivas hoy mismo.
                    </Paragraph>
                    <Link href="/solicitar-cotizacion" style={{ textDecoration: 'none' }}>
                        <Button
                            primary
                            size="large"
                            style={{
                                background: 'linear-gradient(90deg, #FF31D9 0%, #5817EF 100%)',
                                color: 'white',
                                borderRadius: '30px',
                                padding: '15px 50px',
                                fontSize: '1.3rem',
                                fontWeight: 'bold',
                                boxShadow: '0px 10px 20px rgba(0,0,0,0.3)',
                                border: 'none'
                            }}
                            label="Quiero simplificar mi negocio con IA"
                            hoverIndicator="#4611cc"
                        />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
