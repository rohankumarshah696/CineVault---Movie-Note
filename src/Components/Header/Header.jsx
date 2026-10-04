import React, { useState } from 'react'
import { Hamburger, Logo, Nav, SearchIcon, SearchInput } from '../index'
import { useSelector } from 'react-redux'
function Header({}) {
    const nav = useSelector(store => store.hamburgerMenu.value)
    const searchInput = useSelector(store => store.search.searchState)
    return (
        <header className={`h-fit w-full flex bg-black flex-col top-0 z-10 sticky`}>
            <div className='flex px-5 justify-between items-center h-15 w-full'>
                <Hamburger />
                <Logo />
                <Nav className=" hidden md:flex gap-10" />
                {
                    searchInput ? <SearchInput /> : null
                }
                <SearchIcon />
            </div>
           { 
           console.log(nav)
           }
            
            <Nav
                className={`overflow-hidden md:hidden  flex justify-center items-center flex-col transition-all duration-500  ${nav ? "max-h-0 opacity-0 " : " max-h-40 opacity-100 py-1 "
                    }`}
            />
        </header>
    )
}

export default Header
