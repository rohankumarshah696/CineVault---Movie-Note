import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { searchState } from '../../store/SearchSlice';


function SearchIcon() {
  const dispatch = useDispatch()

  return (
    <button className=' rounded-xl cursor-pointer text-white text-2xl w-fit' onClick={() => {
      dispatch(searchState());

    }}>
      <CiSearch />
    </button>
  )
}

export default SearchIcon
