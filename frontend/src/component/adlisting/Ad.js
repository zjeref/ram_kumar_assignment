import React, { useEffect, useState } from 'react'

const Ad = ({ data }) => {
    const [currentData, setcurrentData] = useState(null)
    useEffect(() => {
        setcurrentData(data)
    }, [data])

    return (
        <>
            {currentData &&
                <div className="w-96 h-full bg-white p-2 rounded-md shadow-xl flex flex-col">
                    <h1 className="text-xl text-primary font-semibold">{currentData.company.name}</h1>
                    <div>
                        <h2 className="text-md font-semibold">{currentData.headline}</h2>
                        <p>{currentData.primaryText}</p>
                        <div>
                            <img src={currentData.imageUrl} alt="" className='w-full h-64' />
                        </div>
                        <p className="text-slate-600">{currentData.description}</p>
                    </div>
                    <div className="w-full text-center justify-end my-2 ">
                        <a href={currentData.company.url} rel="noreferrer" className="btn bg-dark-pastel" target="_blank">{currentData.CTA}</a>
                    </div>
                </div>
            }
        </>
    )
}

export default Ad
