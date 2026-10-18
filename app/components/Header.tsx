import { PROFILE } from "../data";

const Header = () => {
  return (
    <header className="header">
      <div className="header-text">
        <h1 className="name">{PROFILE.name}</h1>
        <p>
          I am a Research Engineer at{" "}
          <a href="https://www.sarvam.ai/">Sarvam AI</a> in Bangalore. I work
          on post-training and reinforcement learning for language models,
          mostly rubric-based RL, synthetic data and agents that use tools over
          long tasks. I also work on the agents that run in Sarvam&apos;s
          products.
        </p>
        <p>
          Before Sarvam, I spent 3 years as an engineer at early-stage
          startups, building products and scaling them. I studied
          Computational Biology at{" "}
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
