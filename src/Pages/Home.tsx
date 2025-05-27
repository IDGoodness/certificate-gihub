import React from 'react'
import { useNavigate } from "react-router-dom"
import { useLoadingStore } from '../zustand/useLoadingStore'
import logo from '../assets/gihub.png'
import './Home.css'



const Home = () => {
    const navigate = useNavigate()
    const { isLoading, setLoading } = useLoadingStore()
    const [name, setName] = React.useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        localStorage.setItem("name", e.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/certone', { state: { fromHome: true } })
        }, 3300);
    }

    return (
        <>
        
            <div className="flex items-center justify-center min-h-screen px-4">
                <div className="w-full max-w-md bg-white p-6 shadow-purple-400 shadow-2xl rounded-xl">
                    <h1 className="flex justify-center">
                        <img src={logo} alt="Logo" className="w-20 sm:w-24" />
                    </h1>
                    {isLoading ? (
                        <div className="flex justify-center items-center py-5">
                            <div className="loader"></div>
                        </div>
                    ) : (
                        <form id="certificateForm" className="p-5" onSubmit={handleSubmit}>
                            <div className="">
                                <h3 className="text-sm sm:text-xs text-center italic">
                                    Enter your name below <br /> to generate your certificate.
                                </h3>
                                <div className="py-2">
                                    <input
                                        type="text"
                                        id="name"
                                        value= {name}
                                        name="name"
                                        onChange={handleInputChange}
                                        placeholder="Name"
                                        className="border border-gray-300 w-full rounded-xl p-3 pl-5 focus:outline-none focus:border-orange-600 focus:ring-orange-600 "
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                // onClick={handleSubmit}
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

export default Home