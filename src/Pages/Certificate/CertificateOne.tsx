// import { Navigate, useLocation } from "react-router-dom"
import { useRef, useEffect, useState, useCallback } from "react"
import { toPng } from "html-to-image";
import award from "../../assets/award-simple.png";
// import barcode from "../../assets/barcode.png";
import logo from "../../assets/gihub-full.png";
import sign1 from "../../assets/sign1.png";
import sign2 from "../../assets/sign2.png";
import drop from "../../assets/drop.png";
import watermark from "../../assets/watermark.jpg";





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
                        <div className="p-5" >
                            <img src={logo} alt="Logo" className="w-24" />
                        </div>

                        <div>
                            <p className="text-center text-5xl text-orange-500 uppercase -mt-5 italic " >
                                Certificate of Participation
                            </p>

                            <p className="text-center text-3xl " >
                                This certificate is presented to:
                            </p>
                        </div>

                        <div className="text-center mt-20 mx-40" >
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
                        
                        <section className="flex justify-between mx-10 text-center" >
                            <div>
                                <p className="border-b-2 border-orange-500  " >
                                    <img src={sign1} alt="Signature 1" className="w-40" />
                                </p>
                                <p>Oluwaseyi Abraham Olawale</p>
                                <p>Founder & CEO, Genomac Holdings</p>
                            </div>
                            <div className="mt-5" >
                                <img src={award} alt="Award" className="w-20" />
                            </div>
                            <div>
                                <p className="border-b-2 border-orange-500  " >
                                    <img src={sign2} alt="Signature 2" className="w-32" />
                                </p>
                                <p>Abraham Oluwaseun Aderinto</p>
                                <p>Director, G-iHub</p>
                            </div>
                        </section>
                        
                    </div>
                </div>
        </div>

        <div className='flex justify-center mt-9' >
                <button className='bg-orange-400 p-2 rounded-xl hover:bg-orange-500 text-white' onClick={onButtonClick} >
                Download Certificate
                </button>
        </div>
    
    
    
    </>
  )
}

export default CertificateOne