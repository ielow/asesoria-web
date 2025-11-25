import { Box, Heading, Paragraph, Image, Button, Text } from 'grommet';
import { getCursoBySlug, getAllCursos } from '@/lib/cursos';
import { Link } from '@/i18n/routing';
import { FormPrevious, Clock } from 'grommet-icons';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
    const cursos = getAllCursos();
    return cursos.map((curso) => ({
        slug: curso.slug,
    }));
}

export default async function CursoDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const curso = getCursoBySlug(slug);

    if (!curso) {
        notFound();
    }

    return (
        <Box background="#3a3a3a" style={{ minHeight: '100vh' }} pad="large">
            <Box width="large" alignSelf="center" gap="medium">
                {/* Back Button */}
                <Box alignSelf="start" margin={{ bottom: 'small' }}>
                    <Link href="/capacitacion">
                        <Button
                            icon={<FormPrevious color="white" />}
                            label={<span style={{ color: 'white' }}>Volver</span>}
                            plain
                            hoverIndicator={{ color: 'rgba(255,255,255,0.1)' }}
                            style={{ padding: '8px 16px', borderRadius: '20px' }}
                        />
                    </Link>
                </Box>

                {/* Image Header */}
                <Box
                    height="medium"
                    width="100%"
                    style={{
                        borderRadius: '25px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
                    }}
                >
                    <Image
                        src={`/${curso.image}`}
                        fit="cover"
                        alt={curso.title}
                    />
                </Box>

                {/* Heading */}
                <Heading
                    level={1}
                    color="white"
                    margin={{ top: 'medium', bottom: 'small' }}
                    style={{ fontSize: '2.5rem', lineHeight: '1.2' }}
                >
                    {curso.title}
                </Heading>

                {/* Duration */}
                {curso.duration && (
                    <Box direction="row" gap="small" align="center">
                        <Clock color="#FF31D9" />
                        <Text color="#FF31D9" weight="bold" size="large">
                            {curso.duration}
                        </Text>
                    </Box>
                )}

                {/* Content */}
                <Box margin={{ top: 'medium' }}>
                    <div style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.125rem', lineHeight: '1.8' }}>
                        <ReactMarkdown
                            components={{
                                p: ({ node, ...props }) => <p style={{ marginBottom: '1.5rem' }} {...props} />,
                                ul: ({ node, ...props }) => <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }} {...props} />,
                                li: ({ node, ...props }) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
                                strong: ({ node, ...props }) => <strong style={{ color: 'white', fontWeight: 600 }} {...props} />
                            }}
                        >
                            {curso.content || curso.description}
                        </ReactMarkdown>
                    </div>
                </Box>
            </Box>
        </Box>
    );
}
