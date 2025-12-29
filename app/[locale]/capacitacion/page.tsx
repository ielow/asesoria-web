import { Metadata } from 'next';
import CapacitacionPage from '@/components/pages/CapacitacionPage';

export const metadata: Metadata = {
  title: "Capacitación en Inteligencia Artificial para Empresas",
  description: "Formación especializada en IA para su equipo. Desde fundamentos para directivos hasta desarrollo técnico avanzado. Eleve el talento de su organización.",
};

export default function Page() {
  return <CapacitacionPage />;
}
