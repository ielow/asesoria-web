import { Metadata } from 'next';
import ProductsPage from '@/components/pages/ProductosPage';

export const metadata: Metadata = {
  title: "AI Station - Hardware de IA On-Premise",
  description: "Estaciones de trabajo de alto rendimiento para IA. AI Station Starter, Pro y Premium con procesadores especializados para machine learning y deep learning, 100% privados y seguros.",
};

export default function Page() {
  return <ProductsPage />;
}
