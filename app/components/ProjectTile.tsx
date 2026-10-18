import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectTile = ({ item }) => {
  return (
    <div className="flex flex-row gap-2 " key={item.title}>
      <div className="w-[80px] h-[80px] flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={item.imageUrl}
          alt="app_logo"
          width={80}
          height={80}
          className="object-fill max-w-full max-h-full"
        />
      </div>
      <div>
        <Link
          href={item.url}
          className={item?.url ? "underline text-blue-700" : "font-semibold"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </Link>
        <span> {item.description}</span>
      </div>
    </div>
  );
};

export default ProjectTile;
