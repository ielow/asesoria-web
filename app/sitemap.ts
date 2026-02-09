import { MetadataRoute } from 'next';
import { getAllCursos } from '@/lib/cursos';
import { products } from '@/lib/products';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://asesoriadeia.com';

    // Static routes
    const routes = [
        '',
        '/capacitacion',
        '/productos',
        '/servicios',
        '/solicitar-cotizacion',
        '/privacidad',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic routes: Capacitacion
    const cursos = getAllCursos().map((curso) => ({
        url: `${baseUrl}/capacitacion/${curso.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Dynamic routes: Productos
    const productRoutes = products.map((product) => ({
        url: `${baseUrl}/productos/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Dynamic routes: Blog
    const blogRoutes = getAllPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...routes, ...cursos, ...productRoutes, ...blogRoutes];
}
