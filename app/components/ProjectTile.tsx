import Image from "next/image";

export type ProjectItem = {
  title: string;
  imageUrl: string;
  url?: string;
  description: string;
  detail?: string;
};

const ProjectTile = ({ item }: { item: ProjectItem }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
      <div className="flex-shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={140}
          height={90}
          className="work-thumb"
        />
      </div>
      <div className="min-w-0">
        {item.url ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            {item.title}
          </a>
        ) : (
          <span className="font-semibold">{item.title}</span>
        )}
        {item.detail && (
          <div className="italic text-[var(--muted)]">{item.detail}</div>
        )}
        <p className="mt-1">{item.description}</p>
      </div>
    </div>
  );
};

export default ProjectTile;
