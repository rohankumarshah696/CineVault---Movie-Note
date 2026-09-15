import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { searchState } from '../../store/SearchSlice';
import { useNavigate } from 'react-router';
import { useRef } from 'react';

function SearchIcon() {
  const searchStatus = useSelector(store => store.search.searchState)
  const navigate = useNavigate()
  const dispatch = useDispatch()
const firstRender = useRef(true)
  useEffect(()=>{

     if (firstRender.current) {
    firstRender.current = false
    return
  }

   if (searchStatus) {
    navigate("/search")
  }
  },[searchStatus])
 
 function handleClick() {
   dispatch(searchState())
  }

  return (
    <button className=' rounded-xl cursor-pointer text-white text-2xl w-fit' onClick={() => {
      handleClick()
    }}>
      <CiSearch />
    </button>
  )
}

export default SearchIcon

