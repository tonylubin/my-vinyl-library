import React, { useContext } from 'react';
import { SearchContext } from './Layout';

const SearchBar = () => {

  const { setSearchQuery } = useContext(SearchContext);
 
  const handleSearchInput = (e) => setSearchQuery(e.target.value);

  return (
    <div className=' flex gap-4 items-center relative pt-5'>
        <input className="text-black placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-1 pr-3 shadow-md hover:ring-neutral-400 hover:border-neutral-400 hover:ring-2 focus:outline-none focus:border-blue-700 focus:ring-blue-700 focus:ring-2 sm:text-sm" placeholder="Search artist/title..." type="text" name="search" onChange={handleSearchInput}/>
    </div>
  )
}

export default SearchBar;