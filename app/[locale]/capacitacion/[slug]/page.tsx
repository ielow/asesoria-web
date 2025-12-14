import { Box, Heading, Paragraph, Image, Button, Text } from 'grommet';
import ContactFormCapacitacion from '@/components/ContactFormCapacitacion';
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
        <Box background="#3a3a3a" style={{ minHeight: '100vh', paddingTop: '150px' }} className="p-4 md:p-12">
            <Box width={{ width: '100%', max: 'large' }} alignSelf="center" gap="medium">
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
                        src={`/${curso.detailBanner}`}
                        fit="cover"
                        alt={curso.title}
                    />
                </Box>

                {/* Heading */}
                <Heading
                    level={1}
                    color="white"
                    margin={{ top: 'medium', bottom: 'small' }}
                    className="text-3xl md:text-5xl leading-tight font-bold"
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
                    <div className="text-base md:text-lg leading-relaxed text-white/90">
                        <ReactMarkdown
                            components={{
                                p: ({ node, ...props }) => <p className="mb-6" {...props} />,
                                ul: ({ node, ...props }) => <ul className="pl-0 md:pl-4 mb-6 list-none md:list-disc" {...props} />,
                                li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                                strong: ({ node, ...props }) => <strong className="text-white font-semibold" {...props} />
                            }}
                        >
                            {curso.content || curso.description}
                        </ReactMarkdown>
                    </div>
                </Box>

                {/* Contact Form */}
                <Box margin={{ top: 'large' }}>
                    <ContactFormCapacitacion />
                </Box>
            </Box>
        </Box >
    );
}
