import React from 'react'

const Select = ({ options = [] }) => {
    return (
        <select name="" id="" className='border px-2 py-1 rounded-xl bg-gray-700 '>
            {
                options.map((option) =>
                    (<option key={option} value={option}>{option}</option>)
                )
            }
        </select>
    )
}

export default Select
