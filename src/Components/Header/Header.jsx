import React from 'react'
import { Logo, Nav, SearchIcon } from '../index'
function Header() {
    return (
        <header className='flex p-4 justify-between items-center h-15 w-full'>
            <Logo />
            <Nav />
            <SearchIcon />
        </header>
    )
}

export default Header
