import Link from "next/link";

const Blog = ({
  children: blogBody,
  title: blogTitle,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <article>
      <p className="mb-6">
        <Link href="/">home</Link>
      </p>
      <h1 className="name">{blogTitle}</h1>
      <div className="mt-4">{blogBody}</div>
    </article>
  );
};

export default Blog;
