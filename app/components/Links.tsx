import Link from "next/link";

const socials = [
  {
    label: "cv",
    href: "/resume.pdf",
    external: false,
  },
  {
    label: "twitter",
    href: "https://www.twitter.com/philotor",
    external: true,
  },
  {
    label: "github",
    href: "https://www.github.com/ashish398",
    external: true,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/ashish-jain-04094b14a/",
    external: true,
  },
  {
    label: "curations",
    href: "https://www.curations.club/ashish",
    external: true,
  },
];

const Links = () => {
  return (
    <p className="mb-5">
      {socials.map((item, index) => (
        <span key={item.label}>
          {index > 0 && <span className="text-[var(--muted)]"> / </span>}
          {item.external ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ) : (
            <Link href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </p>
  );
};

export default Links;
