import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { searchState } from '../../store/SearchSlice';
import { fetchMovies } from '../../media/mediaApi';

function SearchIcon() {

  const dispatch = useDispatch()
  const searchContent = useSelector(store=> store.search.value);
  const searchval = useSelector(store=>store.search.searchState)
  async function handleClick(){
    dispatch(searchState());
    if(searchContent && searchval){
     const res= await fetchMovies(searchContent);
     console.log(res)
     res.results.map(e=>{
      console.log(e.title);
     })
    }
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
