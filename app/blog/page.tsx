'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Blog = () => {
  const router = useRouter();
  return (
    <div>
      This is Blog
      <h1
        style={{ cursor: 'pointer' }}
        onClick={() => router.push('/blog/testid')}
      >
        Go to this Blog
      </h1>
    </div>
  );
};

export default Blog;
