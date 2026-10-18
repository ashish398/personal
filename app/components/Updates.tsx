const UPDATES = [
  {
    date: "2024",
    text: "working as a founding engineer, and on an ml project in biomedical sciences.",
  },
  {
    date: "2021",
    text: "graduated from iit madras — biotechnology, computational biology.",
  },
];

const Updates = () => {
  return (
    <section>
      <h2 className="section-title">updates</h2>
      <table className="w-full">
        <tbody>
          {UPDATES.map((item) => (
            <tr key={item.date}>
              <td className="news-date">{item.date}</td>
              <td className="news-body">{item.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Updates;
