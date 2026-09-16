import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between px-4 py-3 w-full h-fit text-gray-700 bg-gray-900'>
        <div>
            <span className={`text-xl`}
                style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.06em",
                }}
            >
                <span className='text-[#C9A84C]'>CINE</span>
                <span className='text-[#F2EDE4]'>VAULT</span>
            </span>
        </div>
        <div className='text-sm'>
            © 2026 CineVault. All rights reserved.
        </div>
    </div>
  )
}

export default Footer
