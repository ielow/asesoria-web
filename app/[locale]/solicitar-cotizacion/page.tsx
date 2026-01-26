import { Metadata } from 'next';
import QuotePage from '@/components/pages/QuotePage';

export const metadata: Metadata = {
    title: "Solicitar Cotización | AI Station",
    description: "Solicite una cotización personalizada para su infraestructura de IA On-Premise. Configure su AI Station Starter, Pro o Ultra.",
};

export default function Page() {
    return <QuotePage />;
}
