import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Nav = () => {
  return (
    <nav className="nav">
      <ThemeSwitcher />
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/blog/">Blog</Link>
      </div>
    </nav>
  );
};

export default Nav;
