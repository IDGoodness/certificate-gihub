// import { Navigate, useLocation } from "react-router-dom"
import { useRef, useEffect, useState, useCallback } from "react"
import { toPng } from "html-to-image";
import award from "../../assets/award-simple.png";
// import barcode from "../../assets/barcode.png";
import logo from "../../assets/gihub-full.png";
import sign1 from "../../assets/sign1.png";
import sign2 from "../../assets/sign2.png";
import angle1 from "../../assets/angle1.jpg";
import angle2 from "../../assets/angle2.jpg";





const CertificateOne = () => {
    const [formData, setFormData] = useState({
        name: "",
        course: "",
    });
  
    useEffect(() => {
        const storedName = localStorage.getItem("name");
        const storedCourse = localStorage.getItem("course");
    
        setFormData({
            name: storedName || "",
            course: storedCourse || "",
        });
    }, []);
  
    const ref = useRef(null);
  
    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return;
        }
    
        toPng(ref.current, { cacheBust: true })
            .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "my-certificate.png";
            link.href = dataUrl;
            link.click();
            })
            .catch(() => {
            alert(
                "An error occurred while generating your certificate. Please try again."
            );
        });
    }, [ref]);

    // const location = useLocation()
    // if (!location.state?.fromHome) {
    //     return <Navigate to="/" replace />
    // }

    
  return (
    <>
        <div className="min-w-[1000px] flex justify-center items-center min-h-screen">
                <div
                    ref={ref}
                    className="flex flex-col justify-center items-center bg-white relative"
                >
                    <div className="relative w-[1000px] h-[600px] flex flex-col z-10 border border-red-600 ">
                        <div className="p-5 z-10" >
                            <img src={logo} alt="Logo" className="w-24" />
                        </div>

                        <div className="z-10" >
                            <p className="text-center text-5xl text-orange-500 uppercase -mt-5 italic " >
                                Certificate of Participation
                            </p>

                            <p className="text-center text-3xl " >
                                This certificate is presented to:
                            </p>
                        </div>

                        <div className="text-center mt-20 mx-40 z-10" >
                            <p className="text-4xl font-bold border-b-2 border-orange-500 pb-2 " >
                                {formData.name}
                            </p>
                            <p className="text-xl mt-3 " >
                                for successfully participating in the Basic Web Development class and demonstrating commitment to learning foundational web technologies organised by Genomac Innovation Hub 
                            </p>
                            <p className="text-xl font-bold " >
                                27th June 2025
                            </p>
                        </div>
                        
                        <div className="absolute top-0 right-0 z-0" >
                            <img src={angle2} alt="Angle 2" className="w-[600px] " />
                        </div>
                        <div className="absolute bottom-0 left-0 z-0" >
                            <img src={angle1} alt="Angle 1" className="w-[400px] " />
                        </div>
                        
                        <section className="flex justify-between mx-12 text-center z-10" >
                            <div className="mt-3" >
                                <p className="border-b-2 border-orange-500 " >
                                    <img src={sign1} alt="Signature 1" className="w-40 ml-10 -mb-5" />
                                </p>
                                <p className="text-lg font-bold" >Oluwaseyi Abraham Olawale</p>
                                <p className="text-sm" >Founder & CEO, Genomac Holdings</p>
                            </div>
                            <div className="mt-10" >
                                <img src={award} alt="Award" className="w-20" />
                            </div>
                            <div className="text-center mt-10 " >
                                <p className="border-b-2 border-orange-500 pl-7 " >
                                    <img src={sign2} alt="Signature 2" className="w-32" />
                                </p>
                                <p className="text-lg font-bold" >Abraham Oluwaseun Aderinto</p>
                                <p className="text-sm" >Director, G-iHub</p>
                            </div>
                        </section>
                        
                    </div>
                </div>
        </div>

        <div className='flex justify-center -mt-5' >
                <button className='bg-orange-400 p-2 rounded-xl hover:bg-orange-500 text-white' onClick={onButtonClick} >
                Download Certificate
                </button>
        </div>
    
    
    
    </>
  )
}

export default CertificateOne