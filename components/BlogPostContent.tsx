'use client';

import { Box, Heading, Text } from 'grommet';
import { Calendar, User } from 'grommet-icons';
import { BlogPost } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <Box pad="large" margin={{ top: 'large' }} background="#3a3a3a" style={{ minHeight: '100vh' }}>
      <Box width="large" alignSelf="center">
        <Heading level={1} margin={{ bottom: 'small' }} color="white">
          {post.title}
        </Heading>
        <Box direction="row" gap="medium" margin={{ bottom: 'large' }}>
          <Box direction="row" gap="xsmall" align="center">
            <Calendar size="small" color="rgba(255, 255, 255, 0.8)" />
            <Text size="small" color="rgba(255, 255, 255, 0.8)">
              {post.date}
            </Text>
          </Box>
          <Box direction="row" gap="xsmall" align="center">
            <User size="small" color="rgba(255, 255, 255, 0.8)" />
            <Text size="small" color="rgba(255, 255, 255, 0.8)">
              {post.author}
            </Text>
          </Box>
        </Box>
        <Box background="white" pad="large" round="small" elevation="small">
          <div style={{ fontSize: '18px', lineHeight: '1.8' }}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
