import { Metadata } from 'next';
import QuotePage from '@/components/pages/QuotePage';

export const metadata: Metadata = {
    title: "Cotizador de Servidores de IA | AI Station",
    description: "Configure y cotice su estación de trabajo de Inteligencia Artificial. Seleccione el modelo AI Station que mejor se adapte a sus necesidades y solicite un presupuesto sin compromiso.",
};

export default function Page() {
    return <QuotePage />;
}
