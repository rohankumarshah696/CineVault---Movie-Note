import React from 'react'
import { Header, Hero, Trending, Popular } from './Components'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Trending />
      <hr className='w-7/8 mx-auto text-gray-400 shadow-2xl'/>
      <Popular />
    </>
  )
}

export default App