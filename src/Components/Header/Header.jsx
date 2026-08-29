import React, { useState } from 'react'
import { Hamburger, Logo, Nav, SearchIcon } from '../index'
import { useSelector } from 'react-redux'
function Header() {
    const select = useSelector(state => state.hamburgerMenu.value)
    return (
        <div className='h-fit w-full flex flex-col'>
            <header className='flex px-5 justify-between items-center h-15 w-full'>
                <Hamburger />
                <Logo />
                {select ? <Nav className=" hidden md:flex " /> : null}
                <SearchIcon />
            </header>
            {
                <Nav
                    className={`overflow-hidden flex justify-center items-center flex-col transition-all duration-500  ${select ? "max-h-0 opacity-0 " : "max-h-40 opacity-100 py-1"
                        }`}
                />
            }
        </div>
    )
}

export default Header
