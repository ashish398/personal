"use client";
import React from "react";
import Image from "next/image";

const iconSize = 25;

const socials = [
  {
    imageUrl: "twitter.svg",
    alt: "twitter",
    redirectUrl: "https://www.twitter.com/philotor",
  },
  {
    imageUrl: "linkedin.svg",
    alt: "linkedin",
    redirectUrl: "https://www.linkedin.com/in/ashish-jain-04094b14a/",
  },
  {
    imageUrl: "github.svg",
    alt: "github",
    redirectUrl: "https://www.github.com/ashish398",
  },
  {
    imageUrl: "curations.svg",
    alt: "curations",
    redirectUrl: "https://www.curations.club/ashish",
  },
];

const Icon = ({ item }) => {
  const { imageUrl, alt, redirectUrl } = item;

  const onClickHandler = () => {
    window.open(redirectUrl, "_blank");
  };

  return (
    <div onClick={onClickHandler} className="cursor-pointer">
      <Image src={imageUrl} alt={alt} width={iconSize} height={iconSize} />
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex flex-row gap-4">
      {socials.map((item) => (
        <Icon key={item?.imageUrl} item={item} />
      ))}
    </div>
  );
};

export default Links;
