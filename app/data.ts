// All site content lives here. Edit this file to update the homepage.

export const PROFILE = {
  name: "Ashish Jain",
  email: "ashish.ashish.jain591@gmail.com",
  photo: "/profile.jpg",
  links: [
    { label: "Email", href: "mailto:ashish.ashish.jain591@gmail.com" },
    { label: "CV", href: "/resume.pdf" },
    { label: "GitHub", href: "https://github.com/ashish398" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ashish-jain-04094b14a/" },
    { label: "Twitter", href: "https://www.twitter.com/philotor" },
    { label: "Curations", href: "https://www.curations.club/ashish" },
  ],
};

export type Update = { date: string; text: string; href?: string };

export const UPDATES: Update[] = [
  {
    date: "Sep 2024",
    text: "Implemented GPT-2 from scratch in PyTorch, following the Attention Is All You Need paper.",
    href: "https://github.com/ashish398/gpt2",
  },
  {
    date: "Dec 2023",
    text: "Launched Curations Club — #2 Product of the Day on Product Hunt.",
    href: "https://www.curations.club",
  },
  {
    date: "May 2023",
    text: "Joined Homble as a Founding Engineer.",
  },
  {
    date: "Jun 2021",
    text: "Graduated from IIT Madras (B.S. + M.S., Biotechnology) and joined Hiver as a Software Developer.",
  },
  {
    date: "Feb 2019",
    text: "Semester exchange at Instituto Superior Técnico, Lisbon.",
  },
  {
    date: "2017",
    text: "Awarded the INSPIRE Fellowship by the Department of Science and Technology, India.",
  },
];

export type Entry = {
  title: string;
  href?: string;
  image: string;
  venue: string;
  links?: { label: string; href: string }[];
  description: string;
};

export const RESEARCH: Entry[] = [
  {
    title: "GPT-2 from Scratch",
    href: "https://github.com/ashish398/gpt2",
    image: "/transformer.png",
    venue: "Independent project, 2024",
    links: [{ label: "code", href: "https://github.com/ashish398/gpt2" }],
    description:
      "Built and trained a GPT-2 style language model from scratch in PyTorch, implementing the transformer from Attention Is All You Need. Followed Karpathy's Zero to Hero series.",
  },
  {
    title: "Face Recognition via Singular Value Decomposition",
    image: "/neural.jpg",
    venue: "Computational Neuroscience, IIT Madras, 2020",
    description:
      "Applied SVD to grayscale face images of 10 subjects to extract representative features, then recognised faces by comparing norms against those representatives — 99.3% accuracy with a much smaller storage footprint.",
  },
  {
    title: "Ingredient Label Reader",
    image: "/science.png",
    venue: "Homble, 2023",
    description:
      "An OCR and generative-AI pipeline that reads packaged-food labels in real time and flags harmful ingredients for shoppers.",
  },
];

export const PROJECTS: Entry[] = [
  {
    title: "Curations Club",
    href: "https://www.curations.club",
    image: "/curations.png",
    venue: "Dec 2023 – present",
    links: [{ label: "website", href: "https://www.curations.club" }],
    description:
      "A place to share what you read, watch and listen to. Natural-language search over curated items uses text embeddings and a vector database. #2 Product of the Day on Product Hunt; 450+ users and 1,000+ curated items.",
  },
  {
    title: "Poke Connect",
    image: "/poke.jpg",
    venue: "Dec 2022 – Mar 2023 · inactive",
    description:
      "Matches people travelling to or from Bangalore airport by comparing the extra travel distance between their routes, so they can share a cab.",
  },
];

export const PROBLEMS = [
  "Enzymes that break down plastic",
  "Direct capture of air pollution",
  "Autonomous vehicles",
];

export const NOTES = [
  {
    title: "Unstructured advice to make your backpacking trip better",
    href: "/notes/backpacking/",
    date: "2024",
  },
];

export const LAST_UPDATED = "October 2026";
