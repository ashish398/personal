export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between p-24 pt-12 font-mono text-sm">
      <div>
        <p>
          hi, <span className="text-yellow-400">ashish</span> here!
        </p>
        <p>i graduate in 2021 from iit madras in biotechnology. </p>
        <p>
          right now i am working as a frontend dev, but everyday i am learning
          more about deep learning and comp neuro.
        </p>
      </div>

      <div>
        <p className="underline">people i aspire</p>
        <p>dead - Leonardo Da Vincci</p>
        <p>alive - Elon Musk</p>
      </div>
      <div>
        <p className="underline">people i understand and follow</p>
        <p>PG, Sama, Andrej, Zuck, Bill Gates, Nikita, Brian Chesky </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="underline">some of things i have built -</p>

        <div>
          <p>
            <a href="https://www.curations.club" className="underline">
              1. curations.club
            </a>{" "}
            <span>(currently building)</span>
          </p>
          <p>
            a web app to share what you have been reading, listening, etc in 1
            place. something like what bill gates send every summer and winter.
          </p>
          <p>
            why? it reflects just too much of your personality and identity.
            consumption is how we make friends, how we grow and there was
            nothing along these lines so i thought i will build it.
          </p>
        </div>

        <div>
          <p>
            <a href="https://www.pokeconnect.com" className="underline">
              2. pokeconnect
            </a>{" "}
            <p>
              solving for super expensive cab fare from blr airport by enabling
              people to find others traveling to/from airport
            </p>
          </p>
        </div>
      </div>

      <div>
        <p className="underline">
          some big things i am excited about and want to build
        </p>
        <ul className="list-disc pl-5">
          <li>plastic eating enzymes</li>
          <li>direct pollution capture</li>
          <li>
            autonomous cars - deliveries and cabs are dangerous and stupid
          </li>
        </ul>
      </div>

      <div>
        <p className="underline">some small things i want to build</p>
        <ul className="list-disc pl-5">
          <li>
            a science and tech shop in india - sells merchandise, posters, has a
            community around science and tech. (i wish someone invited me to
            watch nobel prize ceremony when i was in high school - ref. young
            sheldon)
          </li>
        </ul>
      </div>
    </div>
  );
}
