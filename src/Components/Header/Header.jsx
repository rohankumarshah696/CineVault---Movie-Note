import React, { useState } from 'react'
import { Hamburger, Logo, Nav, SearchIcon, SearchInput } from '../index'
import { useSelector } from 'react-redux'
function Header() {
    const nav = useSelector(store => store.hamburgerMenu.value)
    const searchInput = useSelector(store => store.search.searchState)
    return (
        <header className='h-fit w-full flex flex-col'>
            <div className='flex px-5 justify-between items-center h-15 w-full'>
                <Hamburger />
                <Logo />
                {
                    nav ? <Nav className=" hidden md:flex " /> : null
                }
                {
                    searchInput ? <SearchInput /> : null
                }
                <SearchIcon />
            </div>
            {
                <Nav
                    className={`overflow-hidden flex justify-center items-center flex-col transition-all duration-500  ${nav ? "max-h-0 opacity-0 " : "max-h-40 opacity-100 py-1"
                        }`}
                />
            }
        </header>
    )
}

export default Header
