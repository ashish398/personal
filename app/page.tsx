import Header from "./components/Header";
import Section from "./components/Section";
import EntryList from "./components/EntryList";
import CurationStack from "./components/CurationStack";
import {
  LAST_UPDATED,
  PROFILE,
  PROJECTS,
  PUBLICATIONS,
  TALKS,
  UPDATES,
} from "./data";

const LinkList = ({ links }: { links?: { label: string; href: string }[] }) =>
  links ? (
    <>
      {links.map((link) => (
        <span key={link.label}>
          {" "}
          [<a href={link.href}>{link.label}</a>]
        </span>
      ))}
    </>
  ) : null;

export default function Home() {
  return (
    <main className="page">
      <Header />

      <Section title="Updates">
        <table className="updates">
          <tbody>
            {UPDATES.map((item) => (
              <tr key={item.date + item.text}>
                <td className="update-date">{item.date}</td>
                <td>
                  {item.href ? <a href={item.href}>{item.text}</a> : item.text}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="Publications">
        <div className="pubs">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.title} className="pub">
              <div className="pub-title">{pub.title}</div>
              <div>
                {pub.authors.map((author, i) => (
                  <span key={author}>
                    {i > 0 && ", "}
                    {author === PROFILE.name ? <strong>{author}</strong> : author}
                  </span>
                ))}
              </div>
              <div className="entry-venue">
                {pub.venue}
                <LinkList links={pub.links} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Projects">
        <EntryList entries={PROJECTS} />
      </Section>

      <Section title="Talks & Service">
        <ul className="plain-list">
          {TALKS.map((talk) => (
            <li key={talk.text}>
              {talk.text}
              <LinkList links={talk.links} />
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Beyond Work">
        <p>
          I played football for IIT Madras at the Inter-IIT Sports Meet and
          captained my hostel team. I also spent a semester on exchange at
          Instituto Superior Técnico in Lisbon. These days I backpack, write
          in a notebook, and build{" "}
          <a href="https://www.curations.club">Curations</a> on the side.
        </p>
      </Section>

      <Section title="From My Curations">
        <p className="lede muted">A few talks and essays I like.</p>
        <CurationStack />
      </Section>

      <footer className="footer">
        <div>
          *inspired by{" "}
          <a href="https://en.wikipedia.org/wiki/Pale_Blue_Dot">Pale Blue Dot</a>
          , Carl Sagan: &ldquo;That&apos;s us.&rdquo;
        </div>
        <div>
          Last updated {LAST_UPDATED}. Layout inspired by{" "}
          <a href="https://jonbarron.info">Jon Barron</a>.
        </div>
      </footer>
    </main>
  );
}
