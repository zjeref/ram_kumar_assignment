import React from 'react'

const CreateAd = () => {
    return (
        <div className="w-full absolute left-1/2 ">
            <div className="max-w-md w-full border-2 border-primary transform -translate-x-1/2 bg-white px-4 ">
                <h3 className="text-center text-xl font-bold my-2">Create Ads</h3>
                <form className="flex flex-col space-y-1 my-2">
                    <label htmlFor="companyName" className="flex flex-col">
                        <span className="w-1/3">Company:</span>
                        <select name="companyName" id="companyName" className="border-2 border-black bg-white">
                            <option value="company1">company1</option>
                        </select>
                    </label>
                    <label htmlFor="primaryText" className="flex flex-col">
                        <span className="w-1/3">Primary Text: </span>
                        <textarea className="border-2 px-1 border-black" type="text" placeholder='Enter your primary Text' />
                    </label>
                    <label htmlFor="headline" className="flex flex-col">
                        <span className="w-1/3">HeadLine: </span>
                        <textarea className="border-2 px-1 border-black" type="text" placeholder='Enter your headline' />
                    </label>
                    <label htmlFor="CTA" className="flex flex-col">
                        <span className="w-1/3">CTA: </span>
                        <select name="cta" id="cta" className="border-2 border-black bg-white">
                            <option value="">Signup</option>
                        </select>
                    </label>
                    <div className="space-x-2 w-full flex justify-end my-2">
                        <button className="btn bg-dark-pastel">Cancel</button>
                        <button type='submit' className="btn  bg-green-800">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateAd
