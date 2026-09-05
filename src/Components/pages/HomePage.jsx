import React from 'react'
import {HeroSection, Trending, Popular } from '../../Components/index'
const HomePage = () => {
    return (
        <>
            <HeroSection />
            <Trending />
            <hr className='w-7/8 mx-auto text-gray-400 shadow-2xl' />
            <Popular />
        </>
    )
}

export default HomePage
