import Logo from '@/components/Logo';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

const SideBar = () => {
  return (
    <div className=' flex flex-col col-start-1 col-end-2 row-start-2 row-end-7 bg-black'>
      <div className=' flex flex-col items-center bg-black font-bioRhyme text-lg'>
          <div className='mt-24 hover:text-neutral-400'>
            <FontAwesomeIcon icon={faCompactDisc} />
            <Link href={'/addMusic'} className='pl-4'>Add Music</Link>
          </div>
      </div>
    </div>
  )
}

export default SideBar;