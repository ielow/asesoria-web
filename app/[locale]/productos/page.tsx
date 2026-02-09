import { Metadata } from 'next';
import ProductsPage from '@/components/pages/ProductosPage';

export const metadata: Metadata = {
  title: "AI Station | Hardware de Inteligencia Artificial On-Premise",
  description: "Estaciones de trabajo de alto rendimiento para IA. AI Station Starter, Pro y Ultra. Procesamiento privado y seguro para Machine Learning y LLMs en su propia oficina.",
};

export default function Page() {
  return <ProductsPage />;
}
