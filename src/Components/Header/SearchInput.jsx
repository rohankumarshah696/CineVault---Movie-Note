import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchVal, searchRemove } from '../../store/SearchSlice'
import { RxCross1 } from "react-icons/rx";

function SearchInput() {
    const dispatch = useDispatch()
    const searchState = useSelector(store => store.search.searchState)
    const inputValue = useSelector(store => store.search.value)

    return (
        <div className={`relative flex justify-center items-center ${searchState ? "w-50 max-h-full md:w-100 opacity-100 transition-all duration-500" : "opacity-0 w-0 max-w-0"}`}>

            <input
                value={inputValue}
                className={`absolute h-8 duration-500 w-full bg-white text-black  px-2 rounded-sm py-1 pr-7`}
                onChange={(e) => { dispatch(searchVal(e.target.value)) }}
                type="text" placeholder='search here' />
            <button className={`absolute right-1 text-black cursor-pointer`} onClick={() => dispatch(searchRemove())}>
                <RxCross1 />
            </button>
        </div>
    )
}

export default SearchInput
