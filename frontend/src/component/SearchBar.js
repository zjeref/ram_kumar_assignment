import React, { useState, useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { GlobalState } from '../middlewares/global-states'

const SearchBar = () => {
    const { dispatch } = useContext(GlobalState)
    const [searchText, setSearchText] = useState('')
    const handleModal = (payload) => {
        dispatch({ type: "modal", payload: payload })
    }
    const handleSearch = () => {
        dispatch({ type: "search", payload: searchText })
    }
    const keydownSearch = (e) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    return (
        <div className="w-full flex justify-center my-4">
            <div className="max-w-6xl w-full flex justify-evenly">
                <button className="btn bg-dark-pastel" onClick={() => handleModal("Company")}>Create Company</button>
                <label htmlFor="search" className="flex items-center bg-white px-3 py-0.5 border-2 border-primary rounded-xl text-primary">
                    <input type="search" placeholder='Search Ads' className='focus:outline-none' value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyDown={(e) => keydownSearch(e)} />
                    <div onClick={handleSearch}>
                        <FaSearch style={{ cursor: 'pointer' }} />
                    </div>
                </label>
                <button className="btn  bg-dark-pastel" onClick={() => handleModal("Ad")}>Create Ads</button>
            </div>
        </div>
    )
}

export default SearchBar
