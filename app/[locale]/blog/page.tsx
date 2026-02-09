import { getAllPosts } from '@/lib/blog';
import BlogList from '@/components/BlogList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog de Tecnología e Inteligencia Artificial",
  description: "Artículos, noticias y análisis sobre el impacto de la Inteligencia Artificial en los negocios. Manténgase informado con las últimas tendencias.",
};

export default function Blog() {
  const posts = getAllPosts();

  return <BlogList posts={posts} />;
}
