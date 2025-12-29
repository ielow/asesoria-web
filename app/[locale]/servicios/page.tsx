import { Metadata } from 'next';
import ServiciosPage from '@/components/pages/ServiciosPage';

export const metadata: Metadata = {
  title: "Servicios de IA | Consultoría, Capacitación e Implementación",
  description: "Descubra nuestros servicios especializados en Inteligencia Artificial: Consultoría estratégica, capacitación corporativa, implementación on-premise y venta de hardware optimizado.",
};

export default function Page() {
  return <ServiciosPage />;
}
