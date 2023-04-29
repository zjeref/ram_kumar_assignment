import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { GlobalState } from '../middlewares/global-states'

const SearchBar = () => {
    const { dispatch } = useContext(GlobalState)
    const handleModal = (payload) => {
        dispatch({ type: "modal", payload: payload })
    }

    return (
        <div className="w-full flex justify-center my-4">
            <div className="max-w-6xl w-full flex justify-evenly">
                <button className="btn bg-dark-pastel" onClick={() => handleModal("Company")}>Create Company</button>
                <label htmlFor="search" className="flex items-center bg-white px-3 py-0.5 border-2 border-primary rounded-xl text-primary">
                    <input type="search" placeholder='Search Ads' className='focus:outline-none' />
                    <FaSearch style={{ cursor: 'pointer' }} />
                </label>
                <button className="btn  bg-dark-pastel" onClick={() => handleModal("Ad")}>Create Ads</button>
            </div>
        </div>
    )
}

export default SearchBar
