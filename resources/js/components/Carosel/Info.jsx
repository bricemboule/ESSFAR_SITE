import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Info = () => {
    useEffect(()=>{

        Aos.init({duration:1200})
    })
  return (
    <div className='bg-black/2 h-full -z-1'>
        <div className='h-full flex justify-center items-center p-4 bg-primary/10' >
            <div className='container grid grid-cols-1 gap-4' >
                <div className='text-white text-8xl text-bold font-tangeri' >
                    <p data-aos="fade-up" data-aos-delay="700">A l'ESSFAR, vous obtenez une formation de qualité pour garantir votre insertion professionnelle</p>
                    <p className='text-5xl font-bold pl-[600px] pt-[100px]' data-aos="fade-up" data-aos-delay="1800">
                        Nos ofres de formations 
                    </p>
                    <p className='text-5xl font-bold pl-[700px] pt-3' data-aos="fade-up" data-aos-delay="1800">
                        <FaRegArrowAltCircleDown  className='pl-1'/>
                    </p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Info