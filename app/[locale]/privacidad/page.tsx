import { Metadata } from 'next';
import PrivacidadPage from '@/components/pages/PrivacidadPage';

export const metadata: Metadata = {
  title: "Políticas de Privacidad | Asesoría IA",
  description: "Conozca cómo protegemos sus datos y su privacidad. Transparencia y seguridad en el manejo de su información.",
};

export default function Page() {
  return <PrivacidadPage />;
}
