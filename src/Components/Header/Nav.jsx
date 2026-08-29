import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Nav({className}) {
  const select = useSelector(store => store.hamburgerMenu.value);
  const [active, setActive] = useState('Home')
  const navLinks = ["Home", "Discover", "Library"]
  return (
    <nav className=''>
      <ul className={`${className}   gap-3`}>
        {
          navLinks.map(e => (
            <button className={`${active === e ? 'active' : ''} navs h-10 w-15 cursor-pointer hover:text-shadow-white`} key={e} onClick={() => setActive(e)}>{e}</button>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav
  