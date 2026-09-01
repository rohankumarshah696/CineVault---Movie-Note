import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { changeVal } from '../../store/HamburgerSlice';


function Hamburger() {
  const dispatch = useDispatch()
  const select = useSelector(store => store.hamburgerMenu.value)

  return (
    <button className={`md:hidden  cursor-pointer `} onClick={() => { dispatch(changeVal()); }}
    >
      {
        select ? <GiHamburgerMenu /> : <RxCross1 />
      }
    </button>
  )
}

export default Hamburger
