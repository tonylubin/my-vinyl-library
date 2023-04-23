import Image from "next/image";
import React from "react";
import pic from "../public/images/destiny-dem2.jpg";
import CardInfo from "./CardInfo";
import { capitaliseWord } from "@/utils/utilityFuncs";

const BigCard = ({ data }) => {

  const { artist, title, album, genre, year } = data;

  return (
    <>
      <div className=" rounded-xl overflow-hidden">
        <Image src={pic} alt="vinyl artwork" />
      </div>
      <div  className=" flex flex-col gap-2 ">
        <CardInfo heading='TITLE:' name={capitaliseWord(title)} />
        <CardInfo heading='ARTIST:' name={capitaliseWord(artist)} />
        <CardInfo heading='ALBUM:' name={album} />
        <CardInfo heading='YEAR:' name={year} />
        <CardInfo heading='GENRE:' name={genre} />
      </div>
      <audio controls></audio>
    </>
  );
};

export default BigCard;
