import { motion } from 'framer-motion'

import React, { useEffect, useRef, useState } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Hero from './Hero/Hero'

import banner from '../assets/banner.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'


const Home = () => {
  const { products } = useSelector(state => state.ProductsReducer)
  const [width, setWidth] = useState(0)
  const corousel = useRef()

  useEffect(() => {
    setWidth(corousel.current.scrollWidth - corousel.current.offsetWidth)
  }, [])
  return (
    <>
      {/* Hero Section */}
      <div>
        <Hero />
      </div>

      {/* Products Section */}
      <div>
        <div>
          <h2 className='text-center mt-24 text-4xl font-bold '>Latest Products</h2>
        </div>
        <motion.div
          initial={{ y: 150 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0, duration: 1.2, type: 'spring', stiffness: 100 }}
        >
          <div className='grid grid-cols-2 place-items-center lg:grid-cols-5 '>
            {products.map(product => {
              return (
                <div className='mt-10 w-[220px] md:w-64' key={product.id} >
                  <div>
                    <div className='bg-slate-200 border-2 border-black rounded-lg p-6 '>
                      <Link to={`/details/${product.id}`}><motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.24 }} src={`/images/${product.image}`} className='w-48 h-full' alt="pos" /></Link>
                    </div>
                    <div className='mt-[7px] '>
                      {product.name}
                    </div>
                    <div className='flex justify-between font-semibold mt-[6px]'>
                      <div>
                        <div className='line-through'>
                          ${product.price}
                        </div>
                      </div>
                      <div>
                        <div>
                          ${product.discountPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Product button */}
        <div className='mt-20'>
          <Link className='flex' to='/product'>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='bg-black font-semibold m-auto text-white px-12 py-4 text-md  rounded-full transition-all duration-1000   hover:bg-white hover:text-black hover:border-black hover:border-solid hover:border-2  '>
              See All Products
            </motion.button>
          </Link>
        </div>

        {/* Three images */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='mt-24 flex flex-col lg:flex-row relative left-[18%] lg:left-[10%] w-[65%]  lg:w-1/4 gap-10'
        >
          <img src={banner} alt="" />
          <img src={banner3} alt="" />
          <img src={banner2} alt="" />
        </motion.div>

        {/* Product Slider */}
        <motion.h1
          initial={{ opacity: 0 }}
          transition={{ delay: 0, duration: 0.5 }}
          whileInView={{ opacity: 1 }} className='text-center mt-24 font-bold text-4xl'>Most Popular</motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0, duration: 0.5 }}
          ref={corousel}
          whileTap={"grabbing"}
          className='cursor-grab overflow-hidden'>
          <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='flex'>
            {products.map(product => {
              return (
                <>
                  <motion.div className=' min-h-[30rem] min-w-[15rem] relative bottom-8 lg:bottom-0 px-[18px] py-[100px] lg:min-w-[20rem] lg:px-[25px] lg:py-[85px]' key={product.image}>
                    <Link to={`/details/${product.id}`}> <img src={`/images/${product.image}`} className=' bg-slate-200 rounded-2xl border-2 border-black  p-8 w-full h-full' alt="pos" /></Link>
                    <p className='mt-2 text-xl '>{product.name}</p>
                    <div className='flex justify-between font-semibold mt-[6px]'>
                      <div>
                        <div className='line-through'>
                          ${product.price}
                        </div>
                      </div>
                      <div>
                        <div>
                          ${product.discountPrice}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Home