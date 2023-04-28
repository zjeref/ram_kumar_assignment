import React, { useState } from 'react'
import axios from 'axios'

const CreateCom = () => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await axios.post(`${process.env.REACT_APP_API_URL}/company/create`, )
    }


    return (
        <div className="w-full absolute left-1/2 ">
            <div className="max-w-md w-full border-2 border-primary transform -translate-x-1/2 bg-white px-4 ">
                <h3 className="text-center text-xl font-bold my-2">Create Company</h3>
                <form className="flex flex-col space-y-1 my-2">
                    <label htmlFor="name" className="flex flex-col">
                        <span className="w-1/3">Name: </span>
                        <input className="border-2 px-1 border-black" type="text" placeholder="Enter your company's name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="headline" className="flex flex-col">
                        <span className="w-1/3">HeadLine: </span>
                        <input className="border-2 px-1 border-black" type="url" placeholder='Enter your headline'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <div className="space-x-2 w-full flex justify-end">
                        <button className="btn bg-dark-pastel">Cancel</button>
                        <button type='submit' className="btn  bg-green-800">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateCom
