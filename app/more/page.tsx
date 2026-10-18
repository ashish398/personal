import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "More about me — Ashish Jain",
};

const More = () => {
  return (
    <main className="page article">
      <Link href="/">← Ashish Jain</Link>
      <h1>More about me</h1>

      <h2>People I look up to</h2>
      <p>
        Leonardo da Vinci, Albert Einstein, Richard Feynman, Gregor Mendel,
        Paul Graham, Bill Gates.
      </p>

      <h2>Big problems I&apos;m excited about</h2>
      <ul className="plain-list">
        <li>Enzymes that break down plastic</li>
        <li>Direct capture of air pollution</li>
        <li>Autonomous vehicles</li>
      </ul>

      <h2>Small things I want to build</h2>
      <ul className="plain-list">
        <li>
          A science and tech shop in India that sells posters and merchandise
          and has a community around science. (I wish someone had invited me
          to watch the Nobel Prize ceremony when I was in high school.)
        </li>
      </ul>
    </main>
  );
};

export default More;
