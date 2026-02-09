import { Metadata } from 'next';
import PrivacidadPage from '@/components/pages/PrivacidadPage';

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Asesoría IA",
  description: "Conozca nuestro compromiso con la protección de sus datos personales. Política de privacidad y manejo de información conforme a la ley.",
};

export default function Page() {
  return <PrivacidadPage />;
}
