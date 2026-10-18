import React from "react";
import Link from "next/link";

const More = () => {
  return (
    <div className="flex min-h-screen flex-col  p-8 md:p-24 pt-12 font-mono text-sm gap-4">
      <Link href={"/"} className="underline text-blue-700">
        {"back"}
      </Link>
      <h2 className="title_main">more about me</h2>

      <div>
        <p className="underline">my idols:</p>
        <p>
          deceased - Leonardo Da Vincci, Albert Einstein, Richard Feymann,
          Gregor Mendel
        </p>
        <p>
          alive - Elon Musk, Paul Graham, Mark Zuckerberg, Sam Altman, Bill
          Gates
        </p>
      </div>

      <div>
        <p className="underline">current dream:</p>
        <p className="italic">to be in SF</p>
      </div>

      <div>
        <p className="underline">
          some big things i am excited about and want to work on:
        </p>
        <ul className="list-disc pl-5">
          <li>plastic eating enzymes</li>
          <li>direct pollution capture</li>
          <li>autonomous cars</li>
        </ul>
      </div>

      <div>
        <p className="underline">some small things i want to build:</p>
        <ul className="list-disc pl-5">
          <li>
            a science and tech shop in india - sells merchandise, posters, has a
            community around science and tech. (i wish someone invited me to
            watch nobel prize ceremony when i was in high school - ref. young
            sheldon)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default More;
