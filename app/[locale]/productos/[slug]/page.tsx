import type { Metadata, ResolvingMetadata } from 'next';
import { products } from '@/lib/products';
import ProductDetailPage from '@/components/pages/ProductDetailPage';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return {
            title: 'Producto no encontrado',
        };
    }

    return {
        title: `${product.name} - ${product.tagline}`,
        description: product.description,
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);
    if (!product) {
        notFound();
    }

    return <ProductDetailPage slug={slug} />;
}
