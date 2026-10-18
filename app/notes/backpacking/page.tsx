import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Backpacking advice — Ashish Jain",
};

const TIPS = [
  "Most people carry a book; also carry a notebook. Write down thoughts and ideas. It calms you down. Don't consume too much information on trips; write and reflect instead.",
  "Carry a small medical kit. The medicines you rely on at home might not be available abroad.",
  "If you're taking a rucksack, buy packing organisers so you can quickly find socks, undergarments, t-shirts and so on.",
  "Carry a strong, damp-proof bag for used or wet clothes.",
  "Carry a tote bag (yes, there are masculine tote bags) for quickly heading out.",
  "Learn to swim. It opens up a whole new set of activities to plan your trip around.",
  "For the beach, pack sunscreen, a beach towel, a sheet, sunglasses, a cap, swim shorts, a book and a notebook — whatever your plan is.",
  "Cut your clothing tags before you leave. You might not find scissors.",
  "Buy a good water bottle and refill wherever you can: hostels, restaurants, cafés.",
  "Before visiting a new country, learn the basics: thank you, excuse me, please, sorry.",
  "You're travelling to meet people from somewhere else. It's their country — be kind and open to learning from them rather than seeing them as different.",
  "Try to make a real connection with locals.",
];

export default function Backpacking() {
  return (
    <main className="page article">
      <Link href="/">← Ashish Jain</Link>
      <h1>Unstructured advice to make your backpacking trip better</h1>
      <ul className="plain-list">
        {TIPS.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </main>
  );
}
