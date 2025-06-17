import { useNavigate } from "react-router-dom"
import { useLoadingStore } from "../zustand/useLoadingStore"
import './Home.css';
import React from 'react';
import logo from "../assets/gihub.png";





const SocialImpact = () => {
    const navigate = useNavigate();
    const { isLoading, setLoading } = useLoadingStore();
    const [name, setName] = React.useState("");


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        localStorage.setItem("name", e.target.value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/certone')
        }, 3300);
    }




  return (
    <>
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="w-screen max-w-lg bg-white p-6 shadow-orange-300 shadow-2xl rounded-xl">
                <h1 className="flex justify-center">
                    <img src={logo} alt="Logo" className="w-20 sm:w-24" />
                </h1>
                {isLoading ? (
                    <div className="flex justify-center items-center py-5">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <form id="certificateForm" className="p-5" onSubmit={handleSubmit} autoComplete="true" >
                        <div className="">
                            <h3 className="text-sm sm:text-xs text-center italic">
                                Enter your name below <br /> to generate your certificate.
                            </h3>
                            <div className="py-2">
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    name="name"
                                    onChange={handleInputChange}
                                    placeholder="Name"
                                    className="border border-gray-300 w-full rounded-xl p-3 pl-5 focus:outline-none focus:border-orange-600 focus:ring-orange-600 "
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={!name}
                            className="bg-orange-500 text-white p-3 my-1 rounded-xl w-full hover:bg-orange-600"
                        >
                            Generate Certificate
                        </button>
                    </form>
                )}
            </div>
        </div>
    </>
  )
}

export default SocialImpact