'use client';

import Link from 'next/link';
import { Box, Heading, Grid, Card, CardBody, CardHeader, Text, Anchor } from 'grommet';
import { Article, Next } from 'grommet-icons';
import { BlogPost } from '@/lib/blog';

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <Box pad="large" background="#3a3a3a" style={{ minHeight: '100vh', paddingTop: '150px' }}>
      <Box width="xlarge" alignSelf="center">
        <Heading level={1} textAlign="center" margin={{ bottom: 'large' }} color="white">
          Blog
        </Heading>
        <Grid columns={{ count: 3, size: 'auto' }} gap="medium">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <Card background="white" elevation="medium" hoverIndicator>
                <CardHeader pad="medium" background="light-2">
                  <Box direction="row" gap="small" align="center">
                    <Article color="brand" />
                    <Text weight="bold" truncate>
                      {post.title}
                    </Text>
                  </Box>
                </CardHeader>
                <CardBody pad="medium" gap="small">
                  <Text size="small" color="dark-3">
                    {post.date} • {post.author}
                  </Text>
                  <Text color="dark-2">{post.excerpt}</Text>
                  <Box direction="row" gap="small" align="center" margin={{ top: 'small' }}>
                    <span>Leer mas</span>
                  </Box>
                </CardBody>
              </Card>
            </Link>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
