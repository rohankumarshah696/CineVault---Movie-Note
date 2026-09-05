import React from 'react'
import { Header, Hero, Trending, Popular } from './Components'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Outlet } from 'react-router';
import { HomePage, Discover, Library } from "./Components/index"
import { useSelector } from 'react-redux'
import MovieGrid from './searchMovies/MovieGrid'
import HeroSection from './Components/HeroSetup/HeroSection'
function App() {
  const searchStatus = useSelector(store => store.search.searchStatus)

  return (
    <>
      <Header />
      {
        searchStatus ? <MovieGrid /> : <Outlet />
      }
    </>
  )
}


export default App