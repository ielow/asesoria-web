import { getAllPosts, getPostBySlug } from '@/lib/blog';
import BlogPostContent from '@/components/BlogPostContent';
import { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  // We can't rely on getPostBySlug matching exactly if it throws error for non-existent file
  // But getPostBySlug in lib/blog.ts reads file directly, which throws if not found
  // We should probably wrap it try/catch or assume generateStaticParams handles validity for SSG
  // safely we can try:
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch (e) {
    return {
      title: 'Artículo no encontrado',
    };
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return <BlogPostContent post={post} />;
}
