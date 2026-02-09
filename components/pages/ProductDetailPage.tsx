'use client';

import React from 'react';
import Image from 'next/image';
import { products } from '@/lib/products';
import { FormNextLink } from 'grommet-icons';
import Link from 'next/link';

interface ProductDetailPageProps {
    slug: string;
}

export default function ProductDetailPage({ slug }: ProductDetailPageProps) {
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Producto no encontrado
            </div>
        );
    }

    return (
        <main className="min-h-screen text-white bg-[#1a1a1a] overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b ${product.color} opacity-10 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3`}></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-[120px] pb-12 lg:pb-20">

                {/* Back Link */}


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Image */}
                    <div className="space-y-8 animate-fade-in">
                        <div className="relative aspect-square w-full rounded-2xl bg-[#2a2a2a] border border-gray-700 overflow-hidden shadow-2xl group">
                            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20`}></div>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover p-8 drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>

                        <div className="bg-[#252525] rounded-xl p-6 border border-gray-700/50">
                            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2 font-semibold">Precio inicial desde</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-white">{product.approxPrice}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                                IVA incluido. Los precios pueden variar. Son precios base y la configuración es personalizada.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="space-y-8 animate-slide-up">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 mt-[50px]">{product.name}</h1>
                            <h2 className={`text-2xl ${product.textColor} font-medium`}>{product.tagline}</h2>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {product.description}
                            </p>
                            <p className="text-gray-400">
                                {product.details}
                            </p>
                        </div>

                        <div className="bg-[#252525]/50 rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                                Configuración y Características
                            </h3>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="bg-gray-800 p-2 rounded-lg text-gray-300">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </span>
                                    <div>
                                        <strong className="block text-white text-sm">Capacidad de Usuarios</strong>
                                        <span className="text-gray-400 text-sm">{product.users}</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="bg-gray-800 p-2 rounded-lg text-gray-300">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                        </svg>
                                    </span>
                                    <div>
                                        <strong className="block text-white text-sm">Motor de Procesamiento</strong>
                                        <span className="text-gray-400 text-sm">{product.processor}</span>
                                    </div>
                                </li>
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 pt-2 border-t border-gray-700/30">
                                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`}></div>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4">
                            <Link href="/solicitar-cotizacion" className={`inline-flex items-center justify-center w-full md:w-auto px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r ${product.color} rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1`}>
                                Solicitar Cotización Personalizada
                                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
