'use client';

import React, { useState, FormEvent } from 'react';

import { useRouter } from 'next/navigation';
import { Send } from 'grommet-icons';
import { Button } from 'grommet';

export default function QuotePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        model: 'AI Station Starter',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Form Data:", formData);
        setIsSuccess(true);
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#1a1a1a] text-white">
                <div className="bg-[#2a2a2a] p-8 rounded-2xl border border-green-500/30 max-w-md w-full text-center shadow-2xl">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">¡Solicitud Recibida!</h2>
                    <p className="text-gray-300 mb-8">
                        Hemos recibido tu solicitud de cotización. Un especialista se pondrá en contacto contigo a la brevedad.
                    </p>
                    <button
                        onClick={() => router.push('/productos')}
                        className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Volver a Productos
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#1a1a1a] text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 w-full px-6 py-20">
                <div className="h-6 mb-8" aria-hidden="true" />

                <div className="flex flex-col gap-12 w-full">

                    {/* Header Info */}
                    <div className="w-full space-y-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                            Solicitar Cotización
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                            Configure su infraestructura de IA privada. Complete el formulario y recibirá una propuesta detallada adaptada a sus necesidades operativas.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="w-full">
                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-2xl space-y-6 max-w-5xl mx-auto">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                                        placeholder="Juan Pérez"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Empresa / Organización</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                                        placeholder="Tech Solutions Inc."
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Corporativo</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                                        placeholder="juan@empresa.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono (Opcional)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                                        placeholder="+52 55 1234 5678"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="model" className="block text-sm font-medium text-gray-700">Modelo de Interés</label>
                                <div className="relative">
                                    <select
                                        id="model"
                                        name="model"
                                        value={formData.model}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none transition-all"
                                    >
                                        <option value="AI Station Starter">AI Station Starter (5-20 Usuarios)</option>
                                        <option value="AI Station Pro">AI Station Pro (20-50 Usuarios)</option>
                                        <option value="AI Station Ultra">AI Station Ultra (50-120+ Usuarios)</option>
                                        <option value="Personalizado">Configuración Personalizada</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Detalles Adicionales o Dudas</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                                    placeholder="Describa brevemente sus necesidades o preguntas específicas..."
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                label={isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                                icon={!isSubmitting && <Send size="small" />}
                                primary
                                className="w-full py-3 mt-4 bg-gradient-to-r from-purple-600 to-blue-600 border-none hover:shadow-lg hover:shadow-purple-500/30 transition-all rounded-lg text-white font-bold"
                            />

                            <p className="text-xs text-gray-500 text-center mt-4">
                                Sus datos están seguros. Al enviar este formulario acepta nuestra Política de Privacidad.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
