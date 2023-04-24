import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { SearchContext } from './Layout';

const SearchBar = () => {

  const { setSearchQuery } = useContext(SearchContext);
 
  const handleSearchInput = (e) => setSearchQuery(e.target.value);

  return (
    <div className=' flex gap-4 items-center relative pr-12'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className=' text-blue-400 absolute left-2' size='sm'/>
        <input className="text-black placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-1 pl-9 pr-3 shadow-md focus:outline-none focus:border-blue-700 focus:ring-blue-700 focus:ring sm:text-sm" placeholder="Search artist/title..." type="text" name="search" onChange={handleSearchInput}/>
    </div>
  )
}

export default SearchBar;