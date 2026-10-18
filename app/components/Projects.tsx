import ProjectTile from "./ProjectTile";

const PROJECTS = [
  {
    title: "curations",
    imageUrl: "/curations.png",
    url: "https://www.curations.club",
    detail: "web app",
    description:
      "a place to share everything you're reading, listening to, and more — kind of like what bill gates shares every summer and winter. the content we consume says a lot about us, and shapes who we are.",
  },
  {
    title: "pokeconnect",
    imageUrl: "/poke.jpg",
    url: "https://www.pokeconnect.com",
    detail: "inactive",
    description:
      "an app to connect people traveling to/from the same location, with an algorithm to match riders on routes and schedules. why? expensive cabs from blr airport.",
  },
  {
    title: "gpt2",
    imageUrl: "/transformer.png",
    url: "https://github.com/ashish398/gpt2",
    detail: "from scratch, pytorch",
    description:
      "built a gpt-2 from scratch following karpathy's series, and implemented the transformer from attention is all you need. pretty magical to watch a model generate new text.",
  },
];

const Projects = () => {
  return (
    <section>
      <h2 className="section-title">selected work</h2>
      <div className="flex flex-col gap-8">
        {PROJECTS.map((item) => (
          <ProjectTile key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
