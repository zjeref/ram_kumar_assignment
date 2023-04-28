import React from 'react'


const Navbar = () => {
    return (
        <div className="w-full bg-secondary text-white h-12 flex justify-center">
            <div className="max-w-6xl w-full flex justify-between items-center">
                <h1 className="text-lg">Search <span className="text-dark-pastel font-bold">App</span> </h1>

                <h1 className="cursor-pointer hover:text-semi-white">Home</h1>
            </div>
        </div>
    )
}

export default Navbar
