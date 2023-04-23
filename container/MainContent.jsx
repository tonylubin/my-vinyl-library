import React, { useContext } from "react";
import useSWR from "swr";
import Card from "@/components/Card";
import { fetcher, API_BASE } from "@/utils/utilityFuncs";
import { SearchContext } from "@/components/Layout";
import { capitaliseWord } from "@/utils/utilityFuncs";

const MainContent = () => {
  const { searchQuery } = useContext(SearchContext);
  const { data, error } = useSWR(
    `${API_BASE}?searchTerm=${searchQuery}`,
    fetcher,
    { keepPreviousData: true }
  );
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";


  const getMusicLib = data.map((track) => (
    <Card
      key={track.id}
      title={capitaliseWord(track.title)}
      artist={capitaliseWord(track.artist)}
      trackId={track.id}
    />
  ));

  return (
    <main className=" col-start-2 col-end-13 row-start-2 row-end-7 grid grid-cols-4 justify-items-center gap-x-12 gap-y-24 py-24 px-12 overflow-auto bg-main-bg">
      {getMusicLib}
    </main>
  );
};

export default MainContent;
