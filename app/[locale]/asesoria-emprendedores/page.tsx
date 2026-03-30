import { Metadata } from 'next';
import AsesoriaEmprendedoresPage from '@/components/pages/AsesoriaEmprendedoresPage';

export const metadata: Metadata = {
  title: "Taller de IA para Emprendedores | Multiplica tus Resultados",
  description: "Descubre cómo automatizar tus ventas, crear contenido en minutos y optimizar tus procesos operativos de la forma más sencilla e intuitiva posible. Cero código, 100% práctico.",
};

export default function Page() {
  return <AsesoriaEmprendedoresPage />;
}
