import HeroBanner from '@/components/HeroBanner';
import FlipCards from '@/components/FlipCards';
import ServicesSection from '@/components/ServicesSection';
import ContactForm from '@/components/ContactForm';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Asesoría en Inteligencia Artificial | Transformación Digital y Soluciones IA",
  description: "Impulse su negocio con soluciones de Inteligencia Artificial a medida. Consultoría estratégica, capacitación corporativa e implementación de infraestructura IA segura y privada.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <ServicesSection />
      <FlipCards />
      <ContactForm />
    </main>
  );
}
