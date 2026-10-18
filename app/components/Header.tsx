import Links from "./Links";

const Header = () => {
  return (
    <header>
      <h1 className="name">ashish jain</h1>
      <Links />
      <div className="space-y-4">
        <p>
          i graduated from iit madras in 2021 with a degree in biotechnology,
          specializing in computational biology. currently, i&apos;m working as
          a founding engineer at a startup and on an ml project in biomedical
          sciences.
        </p>
        <p>
          i care about building things people actually use, and about the
          science underneath — from transformers trained from scratch to messy
          real-world products. outside work, i backpack, write things down, and
          keep a running list of ideas i want to make real.
        </p>
      </div>
    </header>
  );
};

export default Header;
