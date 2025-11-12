import { getAllPosts, getPostBySlug } from '@/lib/blog';
import BlogPostContent from '@/components/BlogPostContent';

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
