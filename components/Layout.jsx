import React, { createContext, useState } from "react";
import SideBar from "@/container/SideBar";
import Header from "@/container/Header";

export const SearchContext = createContext();

const Layout = ({ children }) => {
  // search input state
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      <div className=" grid grid-cols-6 grid-rows-6 h-full bg-black">
        <Header />
        <SideBar />
        {children}
      </div>
    </SearchContext.Provider>
  );
};

export default Layout;
