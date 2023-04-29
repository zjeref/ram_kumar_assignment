import React, { useEffect, useState } from 'react'

const Ad = ({ data }) => {
    const [currentData, setcurrentData] = useState(null)
    useEffect(() => {
        setcurrentData(data)
    }, [data])
    console.log(currentData)

    return (
        <div className="">
            {currentData &&
                <div className="w-64 bg-white p-2">
                    <h1 className="text-lg font-semibold">{currentData.companyId.name}</h1>
                    <div>
                        <h2 className="text-md font-semibold">{currentData.headline}</h2>
                        <p>{currentData.primaryText}</p>
                        <div>
                            <img src="https://i.imgur.com/YoMXcLE.jpeg" alt="" />
                        </div>
                        <p className="text-slate-600">{currentData.description}</p>
                    </div>
                    <div className="w-full text-center my-2">
                        <a href={currentData.companyId.url} class="btn bg-dark-pastel">{currentData.CTA}</a>
                    </div>
                </div>
            }
        </div>
    )
}

export default Ad
