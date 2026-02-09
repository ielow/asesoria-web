import { Metadata } from 'next';
import ServiciosPage from '@/components/pages/ServiciosPage';

export const metadata: Metadata = {
  title: "Servicios de Consultoría e Implementación de IA",
  description: "Servicios integrales de Inteligencia Artificial: Consultoría estratégica, desarrollo de modelos a medida, capacitación de personal y soporte técnico especializado.",
};

export default function Page() {
  return <ServiciosPage />;
}
