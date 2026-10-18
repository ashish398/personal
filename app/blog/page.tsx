import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "../data";

export const metadata: Metadata = {
  title: "Blog | Ashish Jain",
};

export default function Blog() {
  return (
    <main className="page article">
      <h1>Blog</h1>
      <ul className="posts">
        {BLOG_POSTS.map((post) => (
          <li key={post.href}>
            <Link href={post.href}>{post.title}</Link>
            <span className="muted">{post.date}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
