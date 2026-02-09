import { Metadata } from 'next';
import CapacitacionPage from '@/components/pages/CapacitacionPage';

export const metadata: Metadata = {
  title: "Cursos y Talleres de IA | Capacitación Empresarial",
  description: "Formación práctica en Inteligencia Artificial. Talleres especializados para Emprendedores y Profesores. Aprenda a integrar la IA en su flujo de trabajo diario.",
};

export default function Page() {
  return <CapacitacionPage />;
}
