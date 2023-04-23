import BigCard from "@/components/BigCard";
import Layout from "@/components/Layout";
import { getTrack } from "@/database/musicLibrary";
import React from "react";

const Track = ({ data }) => { 

  return (
    <Layout>
      <main className=" w-full col-start-2 col-end-13 row-start-2 row-end-7 flex gap-20 items-center justify-center px-12 bg-gradient-to-r from-main-bg ...">
        <BigCard data={data} />
      </main>
    </Layout>
  )
};

export default Track;

export async function getServerSideProps(context) {
  let { track } = context.query;
  let data = await getTrack(track);
  data = JSON.parse(JSON.stringify(data));

  return {
    props: { data },
  };
}
