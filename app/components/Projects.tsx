import React from "react";
import ProjectTile from "./ProjectTile";

const PROJECTS = [
  {
    title: "curations",
    imageUrl: "/curations.png",
    url: "https://www.curations.club",
    description:
      "a web app where you can share everything you're reading, listening to, and more, all in one place (kind of like what bill gates shares every summer and winter). why? because the content we consume says a lot about us and shapes who we are.",
  },
  {
    title: "pokeconnect",
    imageUrl: "/poke.jpg",
    url: "https://www.pokeconnect.com",
    description:
      "[inactive] built an app to connect people traveling to/from the same location and developed an algorithm to match riders based on their routes and schedules. why? to help solve the problem of expensive cab fares from blr airport.",
  },
];
const Projects = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 mt-8">
        some things i have built:{" "}
      </h2>
      <div className="flex flex-col gap-6">
        {PROJECTS.map((item) => (
          <ProjectTile key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
