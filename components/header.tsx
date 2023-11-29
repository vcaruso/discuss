import Link from 'next/link';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    
  
} from '@nextui-org/react';
import { Suspense } from 'react';
import React from 'react'
import HeaderAuth from './header-auth';
import SearchInput from './search-input';

export default function Header() {
   

  return (
    <Navbar className='shadow mb-6'>
        <NavbarBrand>
            <Link href="/" className='font-bold'>Discuss</Link>
        </NavbarBrand>
        <NavbarContent justify='center'>
            <NavbarItem>
                <Suspense>
                    <SearchInput />
                </Suspense>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
           <HeaderAuth/>
        </NavbarContent>
    </Navbar>
  )
}
