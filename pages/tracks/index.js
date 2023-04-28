import React from "react";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout";
import { fetcher, API_BASE } from "@/utils/utilityFuncs";
import MainContent from "@/container/MainContent";
import { serializeErrorFunc } from "@/utils/utilityFuncs";


const Library = ({ fallback }) => {
  
  return (
    <SWRConfig value={{ fallback }}>
      <Layout>
        <MainContent />
      </Layout>
    </SWRConfig>
  );
};

export default Library;

export async function getServerSideProps() {

  let request = await fetcher(API_BASE);  
  let data = await serializeErrorFunc(request);
  
  return {
    props: {
      fallback: {
        [API_BASE]: data,
      },
    },
  };
}
