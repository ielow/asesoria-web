'use client';

import { Box, Heading, Paragraph, Form, TextInput, TextArea, Select, ResponsiveContext, CheckBox, Anchor } from 'grommet';
import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect, useContext } from 'react';

// Toast Notification Component
function ToastNotification({
    message,
    type,
    onClose
}: {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000); // Auto-close after 5 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 9999,
                minWidth: '300px',
                maxWidth: '400px',
                background: type === 'success' ? '#10b981' : '#ef4444',
                color: 'white',
                padding: '16px 20px',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                animation: 'slideIn 0.3s ease-out',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <span style={{ fontSize: '24px' }}>
                    {type === 'success' ? '✓' : '✕'}
                </span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.4' }}>
                    {message}
                </p>
            </div>
            <button
                onClick={onClose}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '20px',
                    cursor: 'pointer',
                    padding: '4px',
                    lineHeight: '1',
                    opacity: 0.8,
                    transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
            >
                ✕
            </button>
            <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
        </div>
    );
}

export default function ContactFormCapacitacion() {
    const size = useContext(ResponsiveContext);
    const locale = useLocale();
    const t = useTranslations('contact');
    const tTypes = useTranslations('contact.consultTypes');
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        tipoConsulta: 'Capacitación',
        privacyAccepted: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});



    const validateForm = () => {
        const fields: Record<string, string> = {};

        if (!formData.nombre.trim()) {
            fields.nombre = 'Nombre es requerido';
        }
        if (!formData.email.trim()) {
            fields.email = 'Email es requerido';
        } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
            fields.email = 'Email debe contener @ y .';
        }
        if (!formData.telefono.trim()) {
            fields.telefono = 'Teléfono es requerido';
        }
        if (!formData.empresa.trim()) {
            fields.empresa = 'Empresa es requerida';
        }
        if (!formData.tipoConsulta) {
            fields.tipoConsulta = 'Tipo de consulta es requerido';
        }
        if (!formData.privacyAccepted) {
            fields.privacyAccepted = 'Debes aceptar la política de privacidad';
        }
        // Mensaje es opcional, no se valida

        setFieldErrors(fields);
        return Object.keys(fields).length === 0;
    };

    const getBorderColor = (fieldName: string) => {
        if (fieldErrors[fieldName]) {
            return '#ef4444'; // rojo para error
        }
        if (formData[fieldName as keyof typeof formData] && !fieldErrors[fieldName]) {
            return '#10b981'; // verde para válido
        }
        return '#e5e7eb'; // gris por defecto
    };

    const handleSubmit = async (event: { value: typeof formData }) => {
        if (!validateForm()) {
            return;
        }

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
                setFieldErrors({});
                setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    empresa: '',
                    tipoConsulta: 'Capacitación',
                    privacyAccepted: false
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
        <>
            {/* Toast Notification */}
            {submitStatus && (
                <ToastNotification
                    message={submitStatus === 'success' ? t('form.successMessage') : t('form.errorMessage')}
                    type={submitStatus}
                    onClose={() => setSubmitStatus(null)}
                />
            )}

            <Box
                pad={size === 'small' ? 'small' : { horizontal: 'large', vertical: 'medium' }}
                margin={{ top: 'large' }}
                align="center"
            >
                <Heading
                    level={2}
                    color="white"
                    textAlign="center"
                    margin={{ bottom: 'medium' }}
                    style={{
                        fontSize: '2rem',
                        lineHeight: '1.2',
                        fontWeight: 'bold'
                    }}
                >
                    ¿Listo para transformar tu enseñanza?
                </Heading>

                {/* Formulario */}
                <Box
                    width="large"
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
                                    {t('form.nameLabel')}
                                </label>
                                <TextInput
                                    name="nombre"
                                    placeholder={t('form.namePlaceholder')}
                                    style={{
                                        fontSize: '12.8px',
                                        borderColor: getBorderColor('nombre'),
                                        borderWidth: '2px'
                                    }}
                                />
                                {fieldErrors.nombre && (
                                    <p style={{ fontSize: '10.24px', color: '#ef4444', marginTop: '4px', marginBottom: '0' }}>
                                        {fieldErrors.nombre}
                                    </p>
                                )}
                            </Box>

                            <Box>
                                <label style={{ fontSize: '10.24px', marginBottom: '4px', display: 'block', color: '#374151', fontWeight: '500' }}>
                                    {t('form.emailLabel')}
                                </label>
                                <TextInput
                                    name="email"
                                    type="email"
                                    placeholder={t('form.emailPlaceholder')}
                                    style={{
                                        fontSize: '12.8px',
                                        borderColor: getBorderColor('email'),
                                        borderWidth: '2px'
                                    }}
                                />
                                {fieldErrors.email && (
                                    <p style={{ fontSize: '10.24px', color: '#ef4444', marginTop: '4px', marginBottom: '0' }}>
                                        {fieldErrors.email}
                                    </p>
                                )}
                            </Box>

                            <Box>
                                <label style={{ fontSize: '10.24px', marginBottom: '4px', display: 'block', color: '#374151', fontWeight: '500' }}>
                                    {t('form.phoneLabel')}
                                </label>
                                <TextInput
                                    name="telefono"
                                    type="tel"
                                    placeholder={t('form.phonePlaceholder')}
                                    style={{
                                        fontSize: '12.8px',
                                        borderColor: getBorderColor('telefono'),
                                        borderWidth: '2px'
                                    }}
                                />
                                {fieldErrors.telefono && (
                                    <p style={{ fontSize: '10.24px', color: '#ef4444', marginTop: '4px', marginBottom: '0' }}>
                                        {fieldErrors.telefono}
                                    </p>
                                )}
                            </Box>

                            <Box>
                                <label style={{ fontSize: '10.24px', marginBottom: '4px', display: 'block', color: '#374151', fontWeight: '500' }}>
                                    {t('form.companyLabel')}
                                </label>
                                <TextInput
                                    name="empresa"
                                    placeholder={t('form.companyPlaceholder')}
                                    style={{
                                        fontSize: '12.8px',
                                        borderColor: getBorderColor('empresa'),
                                        borderWidth: '2px'
                                    }}
                                />
                                {fieldErrors.empresa && (
                                    <p style={{ fontSize: '10.24px', color: '#ef4444', marginTop: '4px', marginBottom: '0' }}>
                                        {fieldErrors.empresa}
                                    </p>
                                )}
                            </Box>
                        </Box>

                        <Box margin={{ top: 'small' }}>
                            <Box direction="row" align="center" gap="small">
                                <CheckBox
                                    name="privacyAccepted"
                                    checked={formData.privacyAccepted}
                                    onChange={(event) => setFormData({ ...formData, privacyAccepted: event.target.checked })}
                                    style={{ fontSize: '12.8px' }}
                                />
                                <span
                                    style={{
                                        fontSize: '12.8px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => setFormData({ ...formData, privacyAccepted: !formData.privacyAccepted })}
                                >
                                    {t.rich('form.privacyCheckbox', {
                                        link: (chunks) => (
                                            <Anchor
                                                href={`/${locale}/privacidad`}
                                                label="política de privacidad"
                                                target="_blank"
                                                color="#7C3AED"
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                        )
                                    })}
                                </span>
                            </Box>
                            {fieldErrors.privacyAccepted && (
                                <p style={{ fontSize: '10.24px', color: '#ef4444', marginTop: '4px', marginBottom: '0' }}>
                                    {fieldErrors.privacyAccepted}
                                </p>
                            )}
                        </Box>

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
                                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
                            </button>
                        </Box>

                        <p style={{
                            textAlign: 'center',
                            fontSize: '11.2px',
                            color: '#6b7280',
                            marginTop: '12px'
                        }}>
                            {t('form.privacyNote')}
                        </p>
                    </Form>
                </Box>
            </Box>
        </>
    );
}
