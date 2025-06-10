// import { Navigate, useLocation } from "react-router-dom"
import { useRef, useEffect, useState, useCallback } from "react"
import { toPng } from "html-to-image";
import award from "../../assets/award.png";
// import barcode from "../../assets/barcode.png";
import logo from "../../assets/gihub.png";
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
                <div className="relative w-[1000px] h-[600px] flex z-10 border ">

                    <div className="">
                        <img src={watermark} alt="genes" className='absolute w-[1000px] h-[500px] opacity-20 z-0 ' />

                        <div className="relative z-10 flex  items-center w-[1000px]">
                            <div className="flex items-center -space-x-5">
                                <img src={logo} alt="Logo" className="w-32" />
                                <p className="font-bold text-xl">G-iHub</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-4xl font-semibold uppercase mx-auto ml-16 ">Certificate of Participation</p>
                            </div>
                            <div className="absolute right-1 top-0">
                                <img src={drop} alt="Alt" className="w-56" />
                            </div>
                        </div>
                        
                        <div className="relative z-10" >
                            <p className="text-md font-semibold text-center -mt-5">
                                This certificate is presented to:
                            </p>
                            <p className="text-3xl font-bold text-center mt-10 border-b-2 border-orange-400 mx-56">
                                {formData.name}
                            </p>
                            <p className="text-xl font-semibold text-left mt-10 mx-20 capitalize">
                            For Successfully Participating in the International Virtual Bio-Coding workshop on mastering python and r for basic to advance genomics and Bioinformatics with NGS research applications organized by Genomac Innovation Hub.
                            </p>
                            <p className="font-bold mx-auto mt-5 text-center w-[300px] uppercase border ">
                                27th june 2025
                            </p>                
                        </div>

                        <section className="relative z-10 mx-20 flex justify-between -mt-5 " >
                            <div>
                                <p className="border-b-2 border-orange-400 w-[200px] h-[150px] pt-10 " >
                                    <img src={sign1} alt="" className="-mb-20" />
                                </p>
                                <p className="text-base font-semibold">
                                    Oluwaseyi Abraham Olawale
                                </p>
                                <p className="text-xs font-medium">
                                    Founder & CEO of Genomac Holdings.
                                </p>
                            </div>
                            <div className="w-[400px] h-auto -mt-[30px] -ml-[400px] -mr-[320px]">
                                <img src={award} alt="award" />
                            </div>
                            <div>
                                <p className="border-b-2 border-orange-400 w-[200px] h-[150px] pt-24 pl-10 " >
                                    <img src={sign2} alt="" className="w-[100px] h-[50px]  " />
                                </p>
                                <p className="text-base font-semibold">
                                    Abraham Adeyemi Aderinto
                                </p>
                                <p className="text-xs text-center font-medium">
                                    Director, G-iHub.
                                </p>
                            </div>
                        </section>
                        
                    </div>
                </div>
            </div>
      </div>

      <div className='flex justify-center -mt-9' >
            <button className='bg-orange-400 p-2 rounded-xl hover:bg-orange-500 text-white' onClick={onButtonClick} >
            Download Certificate
            </button>
      </div>
    
    
    
    </>
  )
}

export default CertificateOne