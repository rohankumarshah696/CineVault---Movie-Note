import React from 'react'
import { Header, Hero, Trending, Popular, Footer } from './Components'
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux'
import ScrollToTop from "./Components/ScrollToTop"
function App() {
  const searchStatus = useSelector(store => store.search.searchStatus)

  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}


export default App