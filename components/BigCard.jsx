import Image from "next/image";
import React from "react";
import CardInfo from "./CardInfo";
import { capitaliseWord } from "@/utils/utilityFuncs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";


const BigCard = ({ data }) => {
  const { artist, title, album, genre, year, id } = data;

  const router = useRouter();    
 
  const handleDelRequest = async () => {
    let response = await axios.delete(`/api/deleteTrack?trackId=${id}`);
    let responseMsg = response.data;
    toast.success(responseMsg, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => router.push('/tracks'), 5000);
  };
    

  return (
    <>
      <div className=" max-w-xs rounded-xl overflow-hidden col-start-1 row-start-2 col-end-2 row-end-5">
        <Image
          src={"/images/DANNJLOEWIS-scaled.jpg"}
          width={600}
          height={600}
          alt="vinyl artwork"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-2 col-start-2 row-start-2 col-end-3 row-end-5">
        <CardInfo heading="TITLE:" name={capitaliseWord(title)} />
        <CardInfo heading="ARTIST:" name={capitaliseWord(artist)} />
        <CardInfo heading="ALBUM:" name={album} />
        <CardInfo heading="YEAR:" name={year} />
        <CardInfo heading="GENRE:" name={genre} />
      </div>
      <audio
        className="col-start-1 col-end-2 row-start-5 row-end-6 self-end"
        controls
      ></audio>
      <div className="w-1/2 flex col-start-2 col-end-3 row-start-5 row-end-6 self-end justify-around">
        <div className="hover:text-neutral-400">
          <FontAwesomeIcon icon={faPenToSquare} className="text-teal-500" />
          <Link href={`/tracks/update/${id}`} className="pl-4 hover:text-teal-500">
            Update
          </Link>
        </div>
        <div className="hover:text-neutral-400">
          <FontAwesomeIcon icon={faTrashCan} className="text-rose-500" />
          <button onClick={handleDelRequest} className="pl-4 hover:text-rose-500">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default BigCard;
