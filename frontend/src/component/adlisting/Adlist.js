import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../../middlewares/global-states'
import axios from 'axios';
import Ad from './Ad';

const Adlist = () => {
    const { data } = useContext(GlobalState)
    const [searchInput, setSearchInput] = useState("");
    const [ads, setAds] = useState(null);
    useEffect(() => {
        setSearchInput(data.searchInput);
    }, [data.searchInput]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/ad?search=${searchInput}`)
            .then(res => setAds(res.data))
            .catch(err => console.error(err))
    }, [searchInput])

    return (
        <div className="w-full flex justify-center mt-10 px-5">
            <div className="max-w-6xl ">
                <div className="grid grid-cols-1 grid-cols-1 md:grid-cols-2 gap-6">
                    {ads && ads.length >0?
                        ads.map((ad) => {
                            return <Ad key={ad._id} data={ad} />
                        }):""
                    }

                </div>
            </div>
        </div>
    )
}

export default Adlist
