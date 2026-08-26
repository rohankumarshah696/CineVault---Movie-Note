import React from 'react'

function Logo() {
    return (
        <div className='cursor-pointer'>
            <span className='text-2xl md:text-4xl'
                style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.06em",
                }}
            >
                <span className='text-[#C9A84C]'>CINE</span>
                <span className='text-[#F2EDE4]'>VAULT</span>
            </span>
        </div>
    )
}

export default Logo


