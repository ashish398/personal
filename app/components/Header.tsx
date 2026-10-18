import { PROFILE } from "../data";

const Header = () => {
  return (
    <header className="header">
      <div className="header-text">
        <h1 className="name">{PROFILE.name}</h1>
        <p>
          I am a Research Engineer at{" "}
          <a href="https://www.sarvam.ai/">Sarvam AI</a> in Bangalore. I work
          on reinforcement learning and evals for language models, mostly on
          non-verifiable tasks, artefacts and long-horizon agents.
        </p>
        <p>
          Before moving into research at Sarvam, I collected most of the
          engineering tags: mobile, frontend, backend, founding and
          forward-deployed engineer, building products and scaling them. I
          studied Computational Biology at{" "}
          <a href="https://www.iitm.ac.in">IIT Madras</a> (BS &amp; MS).
        </p>
        <p>
          I am interested in post-training, evaluation and agents, in how to
          measure and improve models on long, multi-turn tasks, and in
          building models with good taste.
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
