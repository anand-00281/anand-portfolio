import React from 'react'
import profilepic from '../assets/profilepic.jpg'
import {TypeAnimation} from 'react-type-animation'
import Portfolio from './Portfolio'

const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14'>
        <div className='max-w-[800px]'>
            <p className='text-gray-200 md:text-6xl tracking-tight'>
                HEY,I AM <br />
                <span className=''>ANAND SANODIYA, </span> <br /> 
                <TypeAnimation
                sequence={[
                    "developer",
                    1000,
                    "Webdesigner",
                    1000,
                    "Contultant",
                    1000
                ]}
                speed={50}
                repeat={Infinity}
                className='font-bold italic '
                />
            </p>
            <h2 className='text-gray-300 '>A passionate learner and aspiring developer !!</h2>
                <div className='flex flex-row gap-4 mb-4 md:mb-0 '>
                     <button className='transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6c34] rounded-xl'><a href="https://drive.google.com/file/d/1DN7kW9K8_rqSgtEHv3_3xNWxo3H3YYW4/view?usp=sharing">Download cv</a></button>
                     
                </div>
        </div>

         <img src={profilepic} className='w-[300px] md:w-[450px] rounded-full shadow-lg animated-shadow' />
    </div>
  )
}

export default Hero