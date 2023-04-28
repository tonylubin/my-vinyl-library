import SearchBar from '@/components/SearchBar';
import { faCompactDisc, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

const SideBar = () => {
  return (
    <div className='flex items-center flex-col col-start-1 col-end-2 row-start-2 row-end-7 bg-black'>
      <div className='w-2/3 flex flex-col gap-10 bg-black font-bioRhyme text-lg'>
          <div className=' self-start mt-24 hover:text-neutral-400'>
            <FontAwesomeIcon icon={faHouse} />
            <Link href={'/tracks'} className='pl-4'>Home</Link>
          </div>
          <div className='hover:text-neutral-400'>
            <FontAwesomeIcon icon={faCompactDisc} />
            <Link href={'/addMusic/step1'} className='pl-4'>Add Music</Link>
          </div>
          <div className='hover:text-neutral-400'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p className=' inline-block pl-4'>Search</p>
            <SearchBar />
          </div>
      </div>
    </div>
  )
}

export default SideBar;