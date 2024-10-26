'use client';

import { useParams } from 'next/navigation';

const Blog = () => {
  const params = useParams();
  const id = params?.id;
  console.log('~~id:', id);

  return <div>Blog is: {id}</div>;
};

export default Blog;
