import React from 'react'
import { Header, Hero, Trending, Popular, Footer } from './Components'
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux'
import MovieGrid from './searchMovies/MovieGrid'
function App() {
  const searchStatus = useSelector(store => store.search.searchStatus)

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}


export default App