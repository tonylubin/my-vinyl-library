import Logo from '@/components/Logo';
import React from 'react';

const Header = () => {
  return (
    <header className=' flex justify-between col-start-1 col-end-13 row-start-1 row-end-2'>
        <Logo />
    </header>
  )
}

export default Header;