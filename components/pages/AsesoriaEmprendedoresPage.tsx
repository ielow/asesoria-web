'use client';
import { useContext } from 'react';
import { Box, Heading, Paragraph, ResponsiveContext, Grid, Text, Accordion, AccordionPanel } from 'grommet';
import { Checkmark, Robot, ShieldSecurity, Compass, Diamond } from 'grommet-icons';

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
            icon: <Compass size="large" color="var(--brand-secondary)" />,
            points: [
                "Entiende cómo 'hablarle' a la IA para obtener lo que necesitas.",
                "Genera imágenes comerciales, audios, videos y presentaciones profesionales al instante con herramientas gratuitas y fáciles de usar."
            ]
        },
        {
            title: "Módulo 2: Tu Agencia de Marketing Personal",
            icon: <Diamond size="large" color="var(--brand-primary)" />,
            points: [
                "Aprende las fórmulas exactas (prompts) para crear campañas publicitarias, calendarios para redes sociales y analizar a tu competencia en minutos.",
                "Diseño sin ser diseñador: Crea fotos de producto (product shots) y contenido en video solo usando texto."
            ]
        },
        {
            title: "Módulo 3: Tu Negocio en Piloto Automático",
            icon: <Robot size="large" color="var(--brand-secondary)" />,
            points: [
                "Deja que la IA trabaje mientras duermes. Aprende a conectar aplicaciones de forma visual (como armar un rompecabezas) usando herramientas como Zapier o Make.",
                "Construye tu propio asistente virtual para automatizar seguimientos de clientes y respuestas de WhatsApp o Instagram."
            ]
        },
        {
            title: "Módulo 4: Privacidad Total (Tu Cerebro Corporativo)",
            icon: <ShieldSecurity size="large" color="var(--brand-primary)" />,
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

    const faqs = [
        {
            question: "¿Necesito saber de programación?",
            answer: "No, en absoluto. Este taller está diseñado al 100% para principiantes sin conocimientos técnicos. Aprenderás a usar la IA a través de interfaces amigables e intuitivas."
        },
        {
            question: "¿Tengo que pagar por herramientas extra?",
            answer: "No es estrictamente necesario. Te enseñaremos a usar las versiones gratuitas de las mejores herramientas de Inteligencia Artificial para que puedas implementar soluciones desde el día uno."
        },
        {
            question: "¿Para quién es este taller?",
            answer: "Es ideal para dueños de negocio, emprendedores, creadores de contenido o marketers que necesitan automatizar tareas operativas, crear mejores campañas publicitarias y recuperar su tiempo."
        },
        {
            question: "¿Cuándo y cómo accedo al material?",
            answer: "Obtendrás acceso inmediato a la comunidad privada y recibirás todos los recursos descargables (como el Framework 4D y el directorio de apps) al registrarte."
        }
    ];

    return (
        <Box style={{ minHeight: '100vh', background: 'transparent' }}>
            {/* HERO SECTION */}
            <Box
                width="100%"
                align="center"
                pad={{ top: 'large', bottom: 'large', horizontal: 'medium' }}
                style={{
                    background: 'url(/taller-ia-emprendedores-banner.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    position: 'relative',
                    overflow: 'hidden',
                    paddingTop: '120px'
                }}
            >
                {/* Full-width Glass Overlay */}
                <Box
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(255, 255, 255, 0.75)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        zIndex: 0
                    }}
                />

                <Box
                    width="xlarge"
                    align="center"
                    style={{ zIndex: 1 }}
                >
                    <Text
                        color="var(--brand-primary)"
                        weight="bold"
                        size="small"
                        style={{
                            letterSpacing: '2px',
                            background: 'rgba(124, 58, 237, 0.1)',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            marginBottom: '4px'
                        }}
                    >
                        ASESOR(IA) PARA EMPRENDEDORES
                    </Text>

                    <Heading
                        level={1}
                        color="var(--brand-primary)"
                        textAlign="center"
                        margin={{ bottom: 'small', top: 'none' }}
                        className="hero-title"
                        style={{
                            lineHeight: '0.9',
                            fontWeight: '700',
                            maxWidth: '900px'
                        }}
                    >
                        <span style={{ color: 'var(--brand-secondary)' }}>Multiplica</span> los resultados de tu negocio <span style={{ color: 'var(--brand-secondary)' }}>con IA</span>
                        <span style={{ display: 'block', fontSize: isMobile ? '1.5rem' : '2.5rem', fontWeight: '500', opacity: 0.9, marginTop: '10px' }}>
                        </span>
                    </Heading>

                    <Paragraph
                        textAlign="center"
                        color="#333333"
                        size={isMobile ? 'large' : 'xlarge'}
                        margin={{ bottom: 'large' }}
                        className="hero-subtitle"
                        style={{ maxWidth: '800px', lineHeight: '1.5', fontWeight: '500' }}
                    >
                        Descubre cómo automatizar tus ventas, crear contenido en minutos y optimizar tus procesos operativos de forma sencilla e intuitiva. <br /><strong>0 código; 100% práctico.</strong>
                    </Paragraph>

                    <a href="https://book.stripe.com/test_3cI4gzcQp7dS9928dlfIs00" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button className="hero-button bg-[#7C3AED] text-white px-10 py-4 rounded-full font-bold text-xl flex items-center justify-center transition-all shadow-lg">
                            Quiero simplificar mi negocio con IA
                        </button>
                    </a>
                </Box>
            </Box>

            {/* PROBLEM SECTION */}
            <Box pad={{ vertical: 'xlarge', horizontal: 'medium' }} align="center" background="rgba(0,0,0,0.2)">
                <Box width="xlarge" align="center">
                    <Heading level={2} color="white" textAlign="center" margin={{ bottom: 'large' }} style={{ fontWeight: '600', fontSize: isMobile ? '2rem' : '2.8rem' }}>
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
            <Box pad={{ vertical: 'xlarge', horizontal: 'medium' }} align="center" background="transparent">
                <Box width="large" align="center">
                    <Heading level={2} color="var(--brand-secondary)" textAlign="center" margin={{ top: 'none', bottom: 'medium' }} style={{ fontWeight: '600', fontSize: isMobile ? '2.2rem' : '3rem' }}>
                        Bienvenido a la Inteligencia Artificial sin complicaciones.
                    </Heading>
                    <Paragraph color="rgba(255,255,255,0.8)" size="large" textAlign="center" style={{ lineHeight: '1.6' }}>
                        <strong>ASESOR(IA) para Emprendedores</strong> no es un curso teórico aburrido. Es un laboratorio de implementación donde te asesoramos como comenzar a integrar IA en tu negocio desde el primer día.
                    </Paragraph>
                </Box>
            </Box>

            {/* ROADMAP / SYLLABUS SECTION */}
            <Box pad={{ vertical: 'xlarge', horizontal: 'medium' }} align="center" background="transparent">
                <Box width="xlarge">
                    <Heading level={2} color="white" textAlign="center" margin={{ bottom: 'xlarge' }} style={{ fontWeight: '600', fontSize: isMobile ? '2.2rem' : '3rem' }}>
                        Lo que vas a lograr paso a paso <span>🤩</span>
                    </Heading>

                    <Grid columns={isMobile ? '100%' : '48%'} gap="large">
                        {modules.map((mod, index) => (
                            <Box
                                key={index}
                                pad="large"
                                round="medium"
                                background="rgba(0,0,0,0.2)"
                                style={{
                                    borderTop: `4px solid ${index % 2 === 0 ? 'var(--brand-secondary)' : 'var(--brand-primary)'}`,
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                                    transition: 'transform 0.3s ease'
                                }}
                                hoverIndicator={{ background: '#252525' }}
                            >
                                <Box direction="row" gap="medium" align="center" margin={{ bottom: 'medium' }}>
                                    <Box pad="small" background="rgba(255,255,255,0.05)" round="full">
                                        {mod.icon}
                                    </Box>
                                    <Heading level={3} color="white" margin="none" style={{ fontWeight: '600' }}>
                                        {mod.title}
                                    </Heading>
                                </Box>
                                <Box gap="small">
                                    {mod.points.map((pt, i) => (
                                        <Box key={i} direction="row" gap="small" align="start">
                                            <Box pad={{ top: 'small' }}><Box width="8px" height="8px" background="var(--brand-secondary)" round="full" /></Box>
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
            <Box pad={{ vertical: 'xlarge', horizontal: 'medium' }} align="center" background="rgba(0,0,0,0.2)">
                <Box width="xlarge" direction={isMobile ? 'column' : 'row'} gap="xlarge" align="center">
                    <Box width={isMobile ? '100%' : '40%'}>
                        <Heading level={2} color="white" margin={{ bottom: 'medium' }} style={{ fontWeight: '600', fontSize: isMobile ? '2.2rem' : '3rem' }}>
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
                                background="linear-gradient(135deg, rgba(196,181,253,0.2) 0%, rgba(124,58,237,0.2) 100%)"
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
                                pad="medium"
                                round="small"
                                background="transparent"
                                style={{ borderLeft: '4px solid var(--brand-primary)' }}
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

            {/* FAQ SECTION */}
            <Box pad={{ vertical: 'xlarge', horizontal: 'medium' }} align="center" background="transparent">
                <Box width="large" align="center">
                    <Heading level={2} color="white" textAlign="center" margin={{ bottom: 'xlarge' }} style={{ fontWeight: '600' }}>
                        Preguntas Frecuentes
                    </Heading>

                    <Box width="100%" background="rgba(0,0,0,0.2)" round="medium" pad="medium" style={{ border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                        <Accordion animate={true} multiple={false}>
                            {faqs.map((faq, index) => (
                                <AccordionPanel
                                    key={index}
                                    label={
                                        <Box pad="medium">
                                            <Text color="white" weight="bold" size="large">{faq.question}</Text>
                                        </Box>
                                    }
                                >
                                    <Box pad="medium" background="rgba(255,255,255,0.02)">
                                        <Paragraph color="rgba(255,255,255,0.8)" margin="none" style={{ lineHeight: '1.6' }}>
                                            {faq.answer}
                                        </Paragraph>
                                    </Box>
                                </AccordionPanel>
                            ))}
                        </Accordion>
                    </Box>
                </Box>
            </Box>

            {/* FINAL CTA SECTION */}
            <Box
                align="center"
                pad={{ vertical: 'xlarge', horizontal: 'medium' }}
                style={{
                    background: 'transparent',
                    borderTop: '1px solid rgba(255,255,255,0.1)'
                }}
            >
                <Box width="large" align="center" pad="large" background="linear-gradient(135deg, rgba(196,181,253,0.1) 0%, rgba(124,58,237,0.1) 100%)" round="large" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
                    <Heading level={2} color="white" textAlign="center" margin={{ bottom: 'medium', top: 'none' }} style={{ fontWeight: '600', fontSize: isMobile ? '2.5rem' : '3.5rem' }}>
                        Es hora de que la IA trabaje para ti.
                    </Heading>
                    <Paragraph color="rgba(255,255,255,0.9)" size="xlarge" textAlign="center" margin={{ bottom: 'large' }} style={{ maxWidth: '600px' }}>
                        Domina la Inteligencia Artificial y libera tu agenda de tareas repetitivas.
                    </Paragraph>
                    <a href="https://book.stripe.com/test_3cI4gzcQp7dS9928dlfIs00" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button className="hero-button bg-[#7C3AED] text-white px-10 py-4 rounded-full font-bold text-xl flex items-center justify-center transition-all shadow-lg">
                            ¡Inscríbete!
                        </button>
                    </a>
                </Box>
            </Box>
        </Box>
    );
}
