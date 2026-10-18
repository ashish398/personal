import Link from "next/link";
import Header from "./components/Header";
import Section from "./components/Section";
import EntryList from "./components/EntryList";
import {
  LAST_UPDATED,
  NOTES,
  PROBLEMS,
  PROJECTS,
  RESEARCH,
  UPDATES,
} from "./data";

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

      <Section title="Research">
        <p className="lede">
          I am interested in how machine learning can help us understand and
          engineer biological systems, and in the models themselves: how
          transformers learn, and what makes them work. Selected work below.
        </p>
        <EntryList entries={RESEARCH} />
      </Section>

      <Section title="Things I've Built">
        <EntryList entries={PROJECTS} />
      </Section>

      <Section title="Problems I Want to Work On">
        <ul className="plain-list">
          {PROBLEMS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </Section>

      <Section title="Notes">
        <ul className="plain-list">
          {NOTES.map((note) => (
            <li key={note.href}>
              <Link href={note.href}>{note.title}</Link>
              <span className="muted"> · {note.date}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Beyond Work">
        <p>
          I played for the IIT Madras football team at the Inter-IIT Sports
          Meet and captained my hostel team to first place in the Dean&apos;s
          Trophy. As Sponsorship &amp; PR head of the sports organizing
          committee, I helped rebrand the institute sports fest as{" "}
          <em>Agrata</em>. These days I backpack, keep a notebook, and someday
          want to open a science and tech shop in India: posters, kits, and a
          community for curious kids. <Link href="/more/">More about me</Link>.
        </p>
      </Section>

      <footer className="footer">
        Last updated {LAST_UPDATED}. Layout inspired by{" "}
        <a href="https://jonbarron.info">Jon Barron</a>.
      </footer>
    </main>
  );
}
