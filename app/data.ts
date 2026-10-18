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
    { label: "X", href: "https://x.com/philotor" },
  ],
};

export type Update = { date: string; text: string; href?: string };

export const UPDATES: Update[] = [
  {
    date: "2026",
    text: "UserProxyBench accepted at the AABA4ET Workshop at NeurIPS 2026.",
  },
  {
    date: "2026",
    text: "Named among India's Top 18 Agentic AI Developers by Analytics India Magazine.",
    href: "https://analyticsindiamag.com/lists/top-18-agentic-software-developers-in-india/ashish-jain",
  },
  {
    date: "Nov 2024",
    text: "Joined Sarvam AI as a Research Engineer, working on post-training and RL.",
    href: "https://www.sarvam.ai/",
  },
  {
    date: "May 2021",
    text: "Graduated from IIT Madras with a BS & MS in Computational Biology.",
  },
];

export type Publication = {
  title: string;
  authors: string[]; // the author named PROFILE.name is highlighted
  venue: string;
  links?: { label: string; href: string }[];
};

export const PUBLICATIONS: Publication[] = [
  {
    title:
      "UserProxyBench: Evaluating LLM User Simulators for Agent Benchmarks and Training",
    authors: ["Ashish Jain", "Armaan Sandhu"],
    venue:
      "Agentic AI Benchmarks and Applications for Enterprise Tasks Workshop (AABA4ET), NeurIPS 2026",
    links: [
      { label: "paper", href: "https://arxiv.org/abs/2609.38043" },
      { label: "workshop", href: "https://sites.google.com/view/aaba4et" },
    ],
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

export const PROJECTS: Entry[] = [
  {
    title: "Curations",
    href: "https://www.curations.club",
    image: "/curations.png",
    venue: "Co-creator · Dec 2024 - present",
    links: [{ label: "website", href: "https://www.curations.club" }],
    description:
      "A place to share the books, films, music and articles you love. Search uses embeddings, metadata and people's own picks. 600+ users and 3,000+ recommendations.",
  },
  {
    title: "Poke Connect",
    image: "/poke.jpg",
    venue: "Independent project · Oct 2022 - Apr 2023",
    description:
      "A cab-pooling app that matched people traveling to and from the airport based on their routes, with in-app chat. Launched to 50+ early users.",
  },
];

export type Talk = { text: string; links?: { label: string; href: string }[] };

export const TALKS: Talk[] = [
  {
    text: "Speaker on large-scale language-model pretraining, Agyeya Workshop, Indian Institute of Science",
    links: [
      {
        label: "slides",
        href: "https://docs.google.com/presentation/d/1XakSmIMal4DrNzxZ_9kzAjnaqe3db9Rn0Y92sKwCpAY/edit?usp=sharing",
      },
    ],
  },
  { text: "Reviewer, NeurIPS 2026" },
  {
    text: "Judge, Cerebral Valley x Google DeepMind Hackathon, Bengaluru, 2026",
    links: [
      { label: "event", href: "https://cerebralvalley.ai/e/google-deepmind-bangalore-hackathon" },
    ],
  },
];

export const BLOG_POSTS = [
  {
    title: "Unstructured advice to make your backpacking trip better",
    href: "/blog/backpacking/",
    date: "2024",
  },
];

export const CURATIONS = {
  title: "interesting finds of the week",
  href: "https://www.curations.club/ashish#66000a51275991093686f7ea",
  items: [
    {
      title:
        "Hamming, Intro to The Art of Doing Science and Engineering: Learning to Learn (March 28, 1995)",
      image:
        "https://storage.googleapis.com/user-item-images/user-items/67ebbfef6a345d4df73c47c9/test_1747649897170.jpeg",
    },
    {
      title: "Richard Feynman - The World from another point of view",
      image:
        "https://storage.googleapis.com/user-item-images/user-items/67e31b446a345d4df73c1cdd/test_1747649884570.jpeg",
    },
    {
      title: "Hamming, Learning to Learn: You and Your Research (June 6, 1995)",
      image:
        "https://storage.googleapis.com/user-item-images/user-items/67b242eccacbb26cfa0c5e4c/test_1747649458920.jpeg",
    },
    {
      title: "You Should Be Working On Hardware - Casey Handmer's blog",
      image:
        "https://storage.googleapis.com/user-item-images/user-items/6666d79d2d39fd919e200ac3/test_1747647455225.jpeg",
    },
  ],
};

export const LAST_UPDATED = "October 2026";
