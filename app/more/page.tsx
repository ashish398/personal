import Link from "next/link";

const More = () => {
  return (
    <article>
      <p className="mb-6">
        <Link href="/">home</Link>
      </p>
      <h1 className="name">more about me</h1>

      <h2 className="section-title">idols</h2>
      <p>
        deceased — leonardo da vinci, albert einstein, richard feynman, gregor
        mendel
      </p>
      <p>
        alive — elon musk, paul graham, mark zuckerberg, sam altman, bill gates
      </p>

      <h2 className="section-title">current dream</h2>
      <p className="italic">to be in sf</p>

      <h2 className="section-title">big things i want to work on</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>plastic eating enzymes</li>
        <li>direct pollution capture</li>
        <li>autonomous cars</li>
      </ul>

      <h2 className="section-title">small things i want to build</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          a science and tech shop in india — merch, posters, a community around
          science and tech. (i wish someone invited me to watch the nobel prize
          ceremony when i was in high school — ref. young sheldon)
        </li>
      </ul>
    </article>
  );
};

export default More;
