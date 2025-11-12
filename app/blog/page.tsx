import { getAllPosts } from '@/lib/blog';
import BlogList from '@/components/BlogList';

export default function Blog() {
  const posts = getAllPosts();

  return <BlogList posts={posts} />;
}
