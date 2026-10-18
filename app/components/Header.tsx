import { PROFILE } from "../data";

const Header = () => {
  return (
    <header className="header">
      <div className="header-text">
        <h1 className="name">{PROFILE.name}</h1>
        <p>
          I work at the intersection of machine learning and biology. I studied
          at <a href="https://www.iitm.ac.in">IIT Madras</a>, where I earned a
          dual B.S. + M.S. in Biotechnology with a specialization in
          Computational Biology, and was an INSPIRE Fellow of the Department of
          Science and Technology, India.
        </p>
        <p>
          Currently I am a Founding Engineer at Homble, and am working on a
          machine learning project in the biomedical sciences. Before that I
          was a Software Developer at{" "}
          <a href="https://hiverhq.com">Hiver</a>.
        </p>
        <p>
          I like learning things by building them from first principles, from
          training transformers from scratch to shipping products that real
          people use.
        </p>
        <p className="links">
          {PROFILE.links.map((link, i) => (
            <span key={link.label}>
              {i > 0 && <span className="sep">/</span>}
              <a href={link.href}>{link.label}</a>
            </span>
          ))}
        </p>
      </div>
      <div className="avatar">
        {PROFILE.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={PROFILE.photo} alt={PROFILE.name} />
        ) : (
          <span aria-hidden>AJ</span>
        )}
      </div>
    </header>
  );
};

export default Header;
