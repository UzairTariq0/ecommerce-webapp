import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import men from '../../assets/men.png'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      
      className='flex flex-wrap justify-center gap-56 my-12 rounded-lg lg:my-14 mx-3  lg:mx-10 bg-gray-100   
     '>
      <div className=' relative mt-36 lg:mt-40 font-nunito  font-bold   '>
        <h2 className='font-black text-5xl  lg:text-6xl text-center lg:text-left'>Shirt's</h2>
        <h2 className='font-black  mt-1 text-5xl lg:text-6xl text-center lg:text-left'>Collections</h2>
        <p className=' text-base lg:text-lg font-medium mt-7 lg:mt-3 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptates </p>
        <p className=' text-base lg:text-lg font-medium text-center lg:text-left '>magnam modi veritatis tenetur earum eos sapiente consectetur tempora qu </p>
        <div className='flex justify-center lg:justify-start'>
          <Link to="/product"><button className='bg-black text-white px-5 py-3 text-md mt-5 lg:mt-4 rounded-3xl transition-all duration-200   hover:bg-slate-100 hover:text-black hover:border-black hover:border-solid hover:border-2 '>Shop Now</button></Link>
        </div>
      </div>

      <div className=''>
        <img className='p-1 h-[100%] lg:h-[89%] -mt-20 lg:mt-6 w-full' src={men} alt="" />
      </div>
    </motion.div>
  )
}

export default Hero
