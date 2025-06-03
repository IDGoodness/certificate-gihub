import { useEffect, useState, useRef, useCallback } from "react";
// import React from 'react'
import award from "../assets/award.png";
import barcode from "../assets/barcode.png";
import logo from "../assets/ginsti.png";
import gihub from "../assets/gihub.png";
import nig from "../assets/nig.png";
import sign1 from "../assets/sign1.png";
import sign2 from "../assets/sign2.png";
import usa from "../assets/usa.png";
import { toPng } from "html-to-image";



const BioCoding_Cert = () => {
    
  const [formData, setFormData] = useState({
    name: "",
    // startMonth: "",
    // endMonth: "",
    course: "",
  });

  useEffect(() => {
    // Load form data from localStorage
    const storedName = localStorage.getItem("name");
    // const storedStartMonth = localStorage.getItem("startMonth");
    // const storedEndMonth = localStorage.getItem("endMonth");
    const storedCourse = localStorage.getItem("course");

    setFormData({
      name: storedName || "",
      // startMonth: storedStartMonth || "",
      // endMonth: storedEndMonth || "",
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
    
    
return (
    <>
      <div className="min-w-[1000px] flex justify-center items-center min-h-screen">
            <div
                ref={ref}
                id="certificateContent"
                className="flex flex-col justify-center items-center bg-white "
            >
            <div className="relative w-[1000px] h-[600px] border flex ">
            <div className="bg-gradient-to-b from-pink-400 via-purple-900 to-purple-900 w-[200px] h-[600px] ">
              <div className="flex absolute ">
                <div className="w-[70px] relative top-3 left-8 ">
                  <img src={logo} alt="logo2" className="" />
                </div>
                <div className="w-[100px] relative mt-0.1 ">
                  <img src={gihub} alt="logo2" className="" />
                </div>
              </div>
              <div className="mt-20 ">
                <p className="text-white text-center text-[13px] ">
                  GENOMAC INSTITUTE INC
                </p>
                <p className="text-white text-center font-thin text-[8px]  ">
                  ...discovering new things, improving life
                </p>
              </div>

              <div className="text-white text-[10px] m-2 p-2 bg-purple-950 rounded-xl text-left mt-[100px] ">
                <p>
                  This certificate is issued by Genomac Institute Inc. a
                  registered research institution in the United States of
                  America.
                </p>
                <p>Registration Number : 3844801</p>
              </div>

              <div className="text-[10px] m-2 p-2 bg-purple-950 rounded-xl text-left ">
                <div className="bg-white w-fit p-1 m-2 mx-auto flex items-center font-medium">
                  <span className="-ml-5 mr-1">
                    <img src={usa} alt="usa" className="w-6" />
                  </span>
                  USA Office Address
                </div>
                <p className="text-white">
                  The corporation&apos;s registered office in the state of
                  Delaware is located at 16192 coastal highway, lewes, Delware
                  19958, county of Sussex
                </p>
              </div>

              <div className="text-[10px] m-2 p-2 bg-purple-950 rounded-xl text-left ">
                <div className="bg-white w-fit p-1 m-2 flex items-center mx-auto font-medium ">
                  <span className="-ml-5 mr-1">
                    <img src={nig} alt="nig" className="w-6" />
                  </span>
                  NIG Office Address
                </div>
                <p className="text-white">
                  Genomac Holdings, beside Alari Akata Filling Station, Unde-G,
                  Ogbomoso, Oyo State, Nigeria.
                </p>
              </div>
            </div>

            <div className="w-[800px]">
              <div className="bg-white w-[800px] lg:h-[600px] lg:ml-4 lg:p-10">
                <div className="p-5 bg-purple-900 text-white text-4xl text-center tracking-widest uppercase ">
                  CERTIFICATE OF ParticipATION
                </div>

                <div className="font-base text-center mt-5 italic">
                  This Certificate is Presented to:
                </div>

                <div
                  id="name"
                  className=" uppercase border-b-4 border-purple-900 pb-1 text-center text-purple-900 mx-[70px] mt-[75px] text-3xl"
                >
                  {formData.name}
                </div>

                <p className=" capitalize py-4 pr-1 text-center font-base ">
                  For Successfully Participating in the International Virtual Bio-Coding workshop on mastering python and r for basic to advance genomics and Bioinformatics with NGS research applications organized by Genomac Institute Inc.
                </p>

                <p className="font-bold mx-auto text-center w-[300px] uppercase border border-1 border-black ">
                  27th january - 6th march 2025
                </p>

                <div className="flex justify-between -mt-7 ">
                  
                  <div className="w-[200px] -ml-[50px] -mr-[300px] mt-[40px] " >
                    <img src={barcode} alt="" />
                  </div>

                  <div className=" ">
                    <p className="border-b-2 border-purple-800 w-[200px] ">
                      <img
                        src={sign1}
                        alt="signature"
                        className="w-[200px] h-[150px] -mb-10 "
                      />
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

                  <div className="mt-8 ">
                    <p className="border-b-2 border-purple-800 w-52 ">
                      <img
                        src={sign2}
                        alt="signature"
                        className="w-[150px] h-[100px] -mb-5 "
                      />
                    </p>
                    <p className="text-base font-semibold ">
                      Adeyemi Aderinto
                    </p>
                    <p className="text-xs font-medium">
                      Director, G-iHub.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center -mt-9' >
            <button className='bg-purple-600 p-2 rounded-xl hover:bg-purple-700 text-white' onClick={onButtonClick} >
            Download Certificate
            </button>
      </div>
    </>
  )
}

export default BioCoding_Cert