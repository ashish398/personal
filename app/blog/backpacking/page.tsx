import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Backpacking advice | Ashish Jain",
};

const TIPS = [
  "Most people carry a book, but also carry a notebook. It helps you write down thoughts and ideas, and it calms you down. Don't consume a lot of information on trips. Focus on writing and reflecting.",
  "Carry a small medical box. The medicines you use at home might not be available in another country.",
  "If you are taking a rucksack, buy organizers so you can quickly find socks, underwear, t-shirts, etc.",
  "Carry a strong, damp-proof bag for used or wet clothes.",
  "Carry a tote bag (yes, there are masculine tote bags) to quickly put your stuff in when going out.",
  "Learn to swim. It gives you a whole new set of activities to explore and plan your trip around.",
  "When going to a beach, pack sunscreen, a beach towel, a sheet, sunglasses, a cap, swim shorts, a book and a notebook. Whatever your plan is, you never know.",
  "Cut the tags off your clothes. You might not find scissors.",
  "Buy a good quality water bottle and refill it wherever you can (hostels, restaurants, etc).",
  "When going to a new country, learn a few basic phrases: thank you, excuse me, please, sorry.",
  "You are going to a new place to meet new people. It is their country, so be kind and open to learning from them instead of seeing them as different.",
  "Try to make a connection with the locals.",
];

export default function Backpacking() {
  return (
    <main className="page article">
      <Link href="/blog/">← Blog</Link>
      <h1>Unstructured advice to make your backpacking trip better</h1>
      <ul className="plain-list">
        {TIPS.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </main>
  );
}
