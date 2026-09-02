import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { searchState } from '../../store/SearchSlice';


function SearchIcon() {

  const dispatch = useDispatch()
  async function handleClick(){
    dispatch(searchState());
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
