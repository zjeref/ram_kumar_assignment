import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { GlobalState } from '../../middlewares/global-states';

const CreateAd = () => {
    const [company, setCompany] = useState('Default');
    const [primaryText, setprimaryText] = useState('');
    const [headline, setHeadline] = useState('');
    const [description, setDescription] = useState('');
    const [cta, setCta] = useState('Default');
    const [imageUrl, setImageUrl] = useState('');

    const [allCompany, setAllCompany] = useState(null);
    const [allCta, setAllCta] = useState(null);

    const { dispatch } = useContext(GlobalState)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/company/`)
            .then(res => setAllCompany(res.data))
            .catch(err => console.error(err))
        setAllCta(["Sign Up", "Shop Now", "Learn More", "Order Now"])
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cta !== "Default" && company !== "Default") {
            await axios.post(`${process.env.REACT_APP_API_URL}/ad/create/${company}`, {
                primaryText: primaryText,
                headline: headline,
                description: description,
                CTA: cta,
                imageUrl: imageUrl
            })
                .then(res => {
                    dispatch({ type: "modal", payload: "" })
                })
                .catch(err => console.error(err))
        } else {
            alert("Please enter the form correctly")
        }
    }

    const closeModal = () => {
        dispatch({ type: 'modal', payload: "" })
    }
    return (
        <div className="w-full absolute left-1/2 ">
            <div className="max-w-md w-full border-2 border-primary transform -translate-x-1/2 bg-white px-4 ">
                <h3 className="text-center text-xl font-bold my-2">Create Ads</h3>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-1 my-2">
                    <label htmlFor="companyName" className="flex flex-col">
                        <span className="w-1/3">Company:</span>
                        <select name="companyName" id="companyName" className="border-2 border-black bg-white" defaultValue="Default" value={company} onChange={(e) => setCompany(e.target.value)}>
                            <option key={0} value={"Default"} selected>Default</option>
                            {Array.isArray(allCompany) && allCompany.length > 0 ?
                                allCompany.map(company => {
                                    return <option key={company._id} value={company._id}>{company.name}</option>
                                }) : ""
                            }
                        </select>
                    </label>
                    <label htmlFor="primaryText" className="flex flex-col">
                        <span className="w-1/3">Primary Text: </span>
                        <textarea className="border-2 px-1 border-black" type="text" placeholder='Enter your primary Text' value={primaryText} onChange={(e) => setprimaryText(e.target.value)} />
                    </label>
                    <label htmlFor="headline" className="flex flex-col">
                        <span className="w-1/3">HeadLine: </span>
                        <textarea className="border-2 px-1 border-black" type="text" placeholder='Enter your headline' value={headline} onChange={(e) => setHeadline(e.target.value)} />
                    </label>
                    <label htmlFor="description" className="flex flex-col">
                        <span className="w-1/3">description: </span>
                        <textarea className="border-2 px-1 border-black" type="text" placeholder='Enter your Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <label htmlFor="CTA" className="flex flex-col">
                        <span className="w-1/3">CTA: </span>
                        <select name="cta" id="cta" className="border-2 border-black bg-white" defaultValue="Default" value={cta} onChange={(e) => setCta(e.target.value)}>
                            <option key={0} value={"Default"} selected>Default</option>
                            {Array.isArray(allCta) && allCta.length > 0 ?
                                allCta.map(cta => {
                                    return <option key={cta} value={cta}>{cta}</option>
                                }) : ""
                            }
                        </select>
                    </label>
                    <label htmlFor="imageUrl" className="flex flex-col">
                        <span className="w-1/3">Image URL: </span>
                        <input id="imageUrl" className="border-2 px-1 border-black" type="url" placeholder='Enter imageUrl' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                    </label>
                    <div className="space-x-2 w-full flex justify-end my-2">
                        <button className="btn bg-dark-pastel" onClick={closeModal}>Cancel</button>
                        <button type='submit' className="btn  bg-green-800">Submit</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default CreateAd
