import React from "react";
import BigCard from "@/components/BigCard";
import Layout from "@/components/Layout";
import { getTrack } from "@/database/musicLibrary";
import { serializeErrorFunc } from "@/utils/utilityFuncs";

const Track = ({ data }) => {   

  return (
    <Layout>
      <main className=" w-full col-start-2 col-end-13 row-start-2 row-end-7 bg-gradient-to-r from-main-bg ... grid grid-cols-2 grid-rows-6 justify-items-center">
        <BigCard data={data} />
      </main>
    </Layout>
  )
};

export default Track;

export async function getServerSideProps(context) {
  let { track } = context.query;
  let res = await getTrack(track);
  let data = await serializeErrorFunc(res);

  return {
    props: { data },
  };
}
