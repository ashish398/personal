const COURSES = [
  "andrew ng's machine learning and deep learning courses",
  "data structures and algorithms, statistics, linear algebra, series and matrices, computational neuroscience",
];

const AI = () => {
  return (
    <section>
      <h2 className="section-title">learning</h2>
      <p className="mb-2">
        still filling in the gaps — the math, the papers, the boring-but-load-bearing
        stuff.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        {COURSES.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default AI;
