import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router';

function Nav({ className }) {
  const select = useSelector(store => store.hamburgerMenu.value);
  const navLinks = ["home", "discover", "library"]
  const [active, setActive] = useState('home')
  return (
    <nav className='hidden md:flex'>
      <ul className={`${className} `}>
        {
          navLinks.map(e => (

            <Link to={`${e === "home" ? "" : `/${e}`}`} className={`${active === e ? 'active' : ''}  h-10 cursor-pointer hover:text-shadow-white`} key={e} onClick={() => {
              setActive(e)
            }}>
              {e.toUpperCase()}
            </Link>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav
