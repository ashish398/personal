import { Entry } from "../data";

const EntryRow = ({ entry }: { entry: Entry }) => {
  return (
    <div className="entry">
      <div className="entry-thumb">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={entry.image} alt="" loading="lazy" />
      </div>
      <div className="entry-body">
        {entry.href ? (
          <a href={entry.href} className="entry-title">
            {entry.title}
          </a>
        ) : (
          <span className="entry-title">{entry.title}</span>
        )}
        <div className="entry-venue">{entry.venue}</div>
        {entry.links && (
          <div className="entry-links">
            {entry.links.map((link, i) => (
              <span key={link.label}>
                {i > 0 && <span className="sep">/</span>}
                <a href={link.href}>{link.label}</a>
              </span>
            ))}
          </div>
        )}
        <p>{entry.description}</p>
      </div>
    </div>
  );
};

const EntryList = ({ entries }: { entries: Entry[] }) => {
  return (
    <div className="entries">
      {entries.map((entry) => (
        <EntryRow key={entry.title} entry={entry} />
      ))}
    </div>
  );
};

export default EntryList;
