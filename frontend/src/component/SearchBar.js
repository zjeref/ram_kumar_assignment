import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
    return (
        <div className="w-full flex justify-center my-4">
            <div className="max-w-6xl w-full flex justify-evenly">
                <button className="btn bg-dark-pastel">Create Company</button>
                <label htmlFor="search" className="flex items-center bg-white px-3 py-0.5 border-2 border-primary rounded-xl text-primary">
                    <input type="search" placeholder='Search Ads' className='focus:outline-none' />
                    <FaSearch style={{ cursor: 'pointer' }} />
                </label>
                <button className="btn  bg-dark-pastel">Create Ads</button>
            </div>
        </div>
    )
}

export default SearchBar
