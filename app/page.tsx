import Link from "next/link";
import AI from "./components/AI";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Links from "./components/Links";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between p-8 md:p-24 pt-12 font-mono text-sm gap-4 pb-4">
      <Header />
      <Links />
      <Projects />
      <AI />
      <div className="flex flex-row gap-4">
        <Link href={"/more"} className="underline text-blue-700">
          {"more about me"}
        </Link>
        <div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            resume
          </a>
        </div>
      </div>

      <p className="italic text-xs text-gray-400">
        last updated: 20th sept 2024
      </p>
    </div>
  );
}
