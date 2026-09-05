import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { searchState } from '../../store/SearchSlice';
import { useNavigate } from 'react-router';


function SearchIcon() {
  const searchStatus = useSelector(store => store.search.searchStatus)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const showMovieGrid=()=>{
    
  }

 function handleClick() {
   dispatch(searchState())
  //  searchStatus? navigate("/search") : navigate(-1)
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
