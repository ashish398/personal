import Link from "next/link";
import AI from "./components/AI";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Updates from "./components/Updates";

export default function Home() {
  return (
    <div>
      <Header />
      <Updates />
      <Projects />
      <AI />

      <section>
        <h2 className="section-title">notes</h2>
        <p>
          <Link href="/travel">
            unstructured advice to make your backpacking journey better
          </Link>
        </p>
        <p>
          <Link href="/more">more about me</Link>
        </p>
      </section>
    </div>
  );
}
