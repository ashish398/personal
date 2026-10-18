import React from "react";
import ProjectTile from "./ProjectTile";

const PROJECTS = [
  {
    title: "gpt2",
    imageUrl: "/transformer.png",
    url: "https://github.com/ashish398/gpt2",
    description:
      "built a gpt-2 model from scratch, following Karpathy sensei's series, and implemented the transformer model based on the 'attention is all you need' paper. used pytorch to code and train the model, pretty magical to see a model generate completely new text.",
  },
  {
    title: "certifications",
    imageUrl: "/neural.jpg",
    url: "",
    description:
      "completed og Andrew Ng's courses on coursera to deepen my understanding of machine learning and deep learning concepts.",
  },
  {
    title: "other",
    imageUrl: "/math.jpg",
    url: "",
    description:
      "completed courses in data structures and algorithms, statistics, linear algebra, series and matrices, computational neuroscience to better understand and appreciate how magic happens.",
  },
];

const AI = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 mt-8">learning ai: </h2>
      <div className="flex flex-col gap-6">
        {PROJECTS.map((item) => (
          <ProjectTile key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AI;
