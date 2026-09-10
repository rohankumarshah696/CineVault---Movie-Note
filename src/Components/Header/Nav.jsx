import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router';

function Nav({ className }) {

  const navOptions = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Discover",
      path: "/discover"
    },
    {
      name: "Library",
      path: "/library"
    }
  ]
  return (
    <nav className=' md:flex'>
      <ul className={`${className} `}>
      
        {
          navOptions.map((option) => (
            <NavLink key={option.name} to={option.path} className={({ isActive }) => (
              isActive ? "active" : "" )} >
                  { option.name }
              </NavLink>
      ))
           }


    </ul>
    </nav >
  )
}

export default Nav
