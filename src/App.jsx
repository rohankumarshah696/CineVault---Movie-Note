import React from 'react'
import { Header, Hero, Trending, Popular } from './Components'
import { useSelector } from 'react-redux'
import MovieGrid from './searchMovies/MovieGrid'
function App() {
  const searchContent = useSelector(store => store.search.value);
  const searchVal = useSelector(store => store.search.searchState)
  const searchStatus = useSelector(store => store.search.searchStatus)
  return (
    <>
      <Header />
      {
        searchStatus ? <MovieGrid searchContent={searchContent} searchVal={searchVal} /> :
          (<>
            <Hero />
            <Trending />
            <hr className='w-7/8 mx-auto text-gray-400 shadow-2xl' />
            <Popular />
          </>)
      }
    </>
  )
}


export default App