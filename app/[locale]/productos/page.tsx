'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Heading, Paragraph, Button, Text } from 'grommet';
import { FormNextLink } from 'grommet-icons';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <main className="min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 mx-auto text-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/future-bg.png"
            alt="Background"
            fill
            className="object-cover opacity-30 blur-sm"

            priority
          />
        </div>

        <div className="relative z-10">
          <Heading level={2} size="large" className="mt-[150px] mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center mx-auto">
            AI Station Su Motor de Innovación <br className="hidden md:block" /> Control Total, Cero Riesgos
          </Heading>

          <Heading level={3} size="small" className="mx-auto font-light text-gray-300 leading-relaxed">
            Infraestructura escalable <span className="italic text-purple-400">On-Premise</span> de alto rendimiento diseñado para mantener sus datos privados y sus costos fijos.
          </Heading>

          {/* Quick View Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 mb-12 px-4">
            {[
              {
                name: "AI Station Starter",
                users: "5 - 20 Usuarios",
                processor: "Ryzen 9 + Wormhole n150d",
                image: "/ai-station-starter-v3.png",
                color: "from-purple-500 to-blue-500",
                textColor: "text-purple-400"
              },
              {
                name: "AI Station Pro",
                users: "20 - 50 Usuarios",
                processor: "Ryzen 9 + Wormhole n300d",
                image: "/ai-station-pro-v3.png",
                color: "from-blue-500 to-cyan-500",
                textColor: "text-blue-400"
              },
              {
                name: "AI Station Premium",
                users: "50 - 120+ Usuarios",
                processor: "AMD EPYC + 4x Wormhole n300",
                image: "/ai-station-premium-v3.png",
                color: "from-indigo-500 to-purple-500",
                textColor: "text-indigo-400"
              }
            ].map((product, idx) => (
              <div key={idx} className="group relative bg-[#2a2a2a]/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-5 hover:border-gray-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

                <div className="relative aspect-[1/1] mb-4 overflow-hidden rounded-lg bg-gray-800 border border-gray-700/50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">{product.name}</h3>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/50 p-2 rounded-lg">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    {product.users}
                  </div>
                  <div className={`flex items-center gap-2 text-sm ${product.textColor} font-medium bg-gray-800/50 p-2 rounded-lg border border-gray-700/50`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                    {product.processor}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-6 text-lg text-gray-300 max-w-4xl mx-auto text-left">
            <Paragraph fill className="text-lg">
              Hemos simplificado la adopción de Inteligencia Artificial para las PyMEs. Olvide las configuraciones complejas y los costos volátiles; nuestra gama de estaciones de trabajo está optimizada para entregar rendimiento inmediato.
            </Paragraph>
            <Paragraph fill className="text-lg">
              La verdadera inteligencia artificial no vive en una nube compartida; vive donde usted tiene el mando. La gama <strong className="text-white">AI Station</strong> transforma su oficina en un centro de datos seguro, estaciones que integran procesadores con tecnología especializada en Inteligencia Artificial para ofrecer una experiencia fluida, <span className="italic text-purple-400">infranqueable</span> y sin facturas sorpresa.
            </Paragraph>
            <Paragraph fill className="text-lg">
              Elija la potencia que su empresa necesita para dejar de alquilar capacidad y comenzar a construir su propio activo tecnológico.
            </Paragraph>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-24">

        {/* Starter */}
        <div className="flex flex-col md:flex-row items-center gap-12 group">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-[#2a2a2a] border border-gray-700 rounded-2xl p-4 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
              {/* Placeholder for image until generated */}
              <div className="aspect-[4/3] relative flex items-center justify-center bg-gray-800 rounded-xl">
                <Image
                  src="/ai-station-starter-v3.png"
                  alt="AI Station Starter"
                  width={600}
                  height={450}
                  className="object-cover rounded-xl"
                  onError={(e) => {
                    // Fallback if image not found yet
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="absolute text-gray-500 text-sm">Imagen Generada por IA</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-white">AI Station Starter</h3>
            <div className="space-y-2">
              <h4 className="text-xl text-purple-400 font-semibold">La Fortaleza Ágil</h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <span className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">Capacidad: Ideal para 5 - 20 Usuarios</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">Motor: Ryzen 9 + Wormhole n150d</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Elimine el riesgo de fuga de datos en sus operaciones diarias. Diseñada para equipos que inician su adopción de IA, garantizando privacidad <span className="italic">on-premise</span> y un ROI inmediato frente a suscripciones de nube.
            </p>
            <Link href="/productos/ai-station-starter">
              <Button
                label="Ver Especificaciones Starter"
                icon={<FormNextLink />}
                reverse
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                plain
              />
            </Link>
          </div>
        </div>

        {/* Pro */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-[#2a2a2a] border border-gray-700 rounded-2xl p-4 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
              <div className="aspect-[4/3] relative flex items-center justify-center bg-gray-800 rounded-xl">
                <Image
                  src="/ai-station-pro-v3.png"
                  alt="AI Station Pro"
                  width={600}
                  height={450}
                  className="object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="absolute text-gray-500 text-sm">Imagen Generada por IA</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-white">AI Station Pro</h3>
            <div className="space-y-2">
              <h4 className="text-xl text-blue-400 font-semibold">El Motor de Transformación</h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <span className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">Capacidad: Ideal para 20 - 50 Usuarios</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">Motor: Ryzen 9 + Wormhole n300d</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Escale su capacidad operativa sin escalar sus costos. Esta estación permite el entrenamiento de modelos a la medida y uso multidepartamental, ofreciendo el equilibrio perfecto entre rendimiento dedicado y flexibilidad financiera.
            </p>
            <Link href="/productos/ai-station-pro">
              <Button
                label="Ver Especificaciones Pro"
                icon={<FormNextLink />}
                reverse
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                plain
              />
            </Link>
          </div>
        </div>

        {/* Premium */}
        <div className="flex flex-col md:flex-row items-center gap-12 group">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-[#2a2a2a] border border-gray-700 rounded-2xl p-4 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
              <div className="aspect-[4/3] relative flex items-center justify-center bg-gray-800 rounded-xl">
                <Image
                  src="/ai-station-premium-v3.png"
                  alt="AI Station Premium"
                  width={600}
                  height={450}
                  className="object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="absolute text-gray-500 text-sm">Imagen Generada por IA</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-white">AI Station Premium</h3>
            <div className="space-y-2">
              <h4 className="text-xl text-indigo-400 font-semibold">Poder de Datacenter Corporativo</h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <span className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">Capacidad: Ideal para 50 - 120+ Usuarios</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">Motor: AMD EPYC + 4x Wormhole n300</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Máximo rendimiento para innovación crítica. Centralice el control total de su infraestructura de IA con potencia de servidor, eliminando la latencia de la nube y asegurando la soberanía absoluta de sus datos más sensibles.
            </p>
            <Link href="/productos/ai-station-premium">
              <Button
                label="Ver Especificaciones Premium"
                icon={<FormNextLink />}
                reverse
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
                plain
              />
            </Link>
          </div>
        </div>

      </section>

      {/* Details and CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#2a2a2a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[80px]"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Heading style={{ maxWidth: '100%' }} level={3} className="text-white mb-4">Asegure el retorno de inversión desde el encendido</Heading>
            <Paragraph className="text-gray-300 max-w-3xl mx-auto">
              Todas las configuraciones <strong className="text-white">AI Station</strong> vienen respaldadas por nuestro compromiso de servicio y calidad:
            </Paragraph>
          </div>

          <div className="bg-[#3a3a3a] rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
            <h4 className="text-xl font-bold text-white mb-8 border-b border-gray-700 pb-4">Paquete de Servicio Estándar incluye:</h4>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                { title: "Soporte de Despliegue en Red", desc: "Asistencia técnica para la instalación en su entorno local." },
                { title: "Capacitación de Control", desc: "Entrenamiento enfocado en la administración y seguridad de usuarios." },
                { title: "Acceso al Hub de Soporte", desc: "Portal digital para gestión de requerimientos y recursos." },
                { title: "30 Días de Soporte Técnico Sin Costo", desc: "Asistencia prioritaria durante su mes de lanzamiento." },
                { title: "12 Meses de Garantía en Hardware", desc: "Protección completa contra defectos de fabricación." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-white block mb-1">{item.title}</strong>
                    <span className="text-gray-400 text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
