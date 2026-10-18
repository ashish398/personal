const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="section">
      <h2 className="section-title">
        <span className="dot" aria-hidden />
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
