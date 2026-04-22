import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import ThemesToggleBtn from './ThemesToggleBtn';

const Navbar = () => {
    return (
       <>
       <nav className=" bg-black sticky top-0 z-40 w-full border-b border-separator text-white backdrop-blur-lg">
  <header className="flex h-16 items-center justify-between px-6">
    <div className="flex items-center gap-3">
      <p className="font-bold">ACME</p>
    </div>
    <ul className="flex items-center gap-4">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/tasks">Tasks</Link></li>
      <li><Link href="/hero">Family Card</Link></li>
      <ThemesToggleBtn></ThemesToggleBtn>
    </ul>
  </header>
</nav>
       </>
    );
};

export default Navbar;