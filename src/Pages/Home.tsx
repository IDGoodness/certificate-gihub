import React from 'react'
import { useNavigate } from "react-router-dom"
import { useLoadingStore } from '../zustand/useLoadingStore'
import logo from '../assets/gihub.png'
import './Home.css'
// import emailjs from '@emailjs/browser';



const Home = () => {
    const navigate = useNavigate()
    const { isLoading, setLoading } = useLoadingStore();
    const [name, setName] = React.useState("");
    const [showFeedback, setShowFeedback] = React.useState(false);
    // const [feedback, setFeedback] = React.useState({
    //     email: "",
    //     message: "",
    // });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        localStorage.setItem("name", e.target.value);
    };

    
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowFeedback(true); // Show feedback form before navigating
        }, 3300);
    }
    
    // const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setFeedback({
    //         ...feedback, [e.target.name]: e.target.value
    //     })
    // }

    // const handleFeedbackSubmit = (e: React.FormEvent) => {
    //     e.preventDefault()
    //     // Send feedback via EmailJS
    //     emailjs.send(
    //         'service_8g4i7pj',
    //         'template_t4m2l8u',
    //         {
    //             from_name: name,
    //             email_id: feedback.email,
    //             message: feedback.message,
    //         },
    //         'SwvzBam1DXaKItXKm'
    //     ).then(() => {
    //         setShowFeedback(false)
    //         alert('Feedback sent successfully! Thank you for your feedback.')
    //         navigate('/certone', { state: { fromHome: true, name } })
    //     }).catch((err) => {
    //         alert('Failed to send feedback: ' + err)
    //     })
    // }


    return (
        <>
        
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="w-screen max-w-screen lg:max-w-lg bg-white p-6 shadow-orange-300 shadow-2xl rounded-xl">
                <h1 className="flex justify-center">
                    <img src={logo} alt="Logo" className="w-20 sm:w-24" />
                </h1>
                {isLoading ? (
                    <div className="flex justify-center items-center py-5">
                        <div className="loader"></div>
                    </div>
                ) : showFeedback ? (
                    <div className="p-5">
                        <h3 className="text-sm sm:text-xs text-center italic mb-2">
                            We value your feedback! Please fill the form below.
                        </h3>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1cob6dB56WzcFj1WhU9w1e4-6-nsNhBdCg7L4MSgt8SucKg/viewform?embedded=true" width="100%" height="3085">Loading…</iframe>
                        <button
                            className="bg-orange-500 text-white p-3 my-3 rounded-xl w-full hover:bg-orange-600"
                            onClick={() => {
                                setShowFeedback(false)
                                navigate('/biocoding', { state: { fromHome: true, name } })
                            }}
                        >
                            Continue to Certificate
                        </button>
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

export default Home