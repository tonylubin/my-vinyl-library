import Image from "next/image";
import React from "react";
//import pic from "../public/images/DANNJLOEWIS-scaled.jpg";
import Link from "next/link";

const Card = (props) => {
  const { trackId, title, artist } = props;

  return (
    <Link href={`/tracks/${trackId}`} className=" w-full">
      <article className=" w-full flex flex-col font-bioRhyme p-4 bg-neutral-900 rounded-lg duration-300 ease-in-out hover:bg-neutral-800 hover:transition hover:duration-300 hover:scale-105">
        <div className=" flex justify-center items-center aspect-square mb-2 rounded-lg overflow-hidden">
          <Image src={'/images/DANNJLOEWIS-scaled.jpg'} width={300} height={300} alt="record" />
        </div>
        <h3 className=" font-bold text-lg text-white truncate">{artist}</h3>
        <h3 className="text-stone-400 truncate">{title}</h3>
      </article>
    </Link>
  );
};

export default Card;
