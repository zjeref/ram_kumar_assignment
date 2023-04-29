import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../../middlewares/global-states'
import axios from 'axios';
import Ad from './Ad';

const Adlist = () => {
    const { data } = useContext(GlobalState)
    const [searchInput, setSearchInput] = useState(null);
    const [ads, setAds] = useState(null);
    useEffect(() => {
        setSearchInput(data.searchInput);
        axios.get(`${process.env.REACT_APP_API_URL}/ad/`)
            .then(res => setAds(res.data))
            .catch(err => console.error(err))
    }, [data.searchInput]);

    return (
        <div className="w-full flex justify-center">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                {ads &&
                    ads.map((ad) => {
                        return <Ad key={ad._id} data={ad}/>
                    })         
                }
            </div>
        </div>
    )
}

export default Adlist
