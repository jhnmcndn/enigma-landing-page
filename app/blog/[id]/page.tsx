'use client';

type Props = {
  params: { id: string };
};

const Blog = ({ params }: Props) => {
  const { id } = params;
  console.log('~~id:', id);

  return <div>Blog is: {id}</div>;
};

export default Blog;
