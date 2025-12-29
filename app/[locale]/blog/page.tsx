import { getAllPosts } from '@/lib/blog';
import BlogList from '@/components/BlogList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog de IA y Tecnología | Noticias y Análisis",
  description: "Artículos, noticias y guías sobre Inteligencia Artificial, Machine Learning y tecnología empresarial. Manténgase actualizado con nuestro blog.",
};

export default function Blog() {
  const posts = getAllPosts();

  return <BlogList posts={posts} />;
}
