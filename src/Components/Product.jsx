import { motion } from 'framer-motion';
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
const Product = () => {

  const { products } = useSelector(state => state.ProductsReducer)
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector(state => state.ProductsReducer);
  useEffect(() => {
    dispatch({ type: 'PRODUCT', id })
  }, [id])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className='bg-slate-200 text-black mt-4 font-nunito  py-10 flex flex-wrap lg:flex-nowrap'>
        <div className='mt-[20px] relative -top-3 m-auto flex-col lg:-top-1 lg:mt-[0px]  '>
          <h1 className='text-4xl lg:text-5xl text-center font-medium '>#stayhome</h1>
          <p className='mt-4 font-medium text-sm  lg:text-lg'>Save more with coupons & up to 50% off!!</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className='mt-16'>
        <div className=' flex justify-center  '>
          <div>
            <h1 className=' border-black border-b-4 font-bold font-nunito text-3xl lg:text-4xl'> New Arrivals </h1>
          </div>
        </div>
        <motion.div className='grid grid-cols-2 place-items-center lg:grid-cols-5 '>
          {products.map(product => {
            return (
              <div className='mt-10 w-[150px] bg-slate-300 p-2 rounded-2xl sm:w-[220px] md:w-64' key={product.id} >
                <div>
                  <div className='bg-slate-50 rounded-2xl p-6 '>
                    <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.24 }} src={`/images/${product.image}`} className='w-48 h-full' alt="pos" />
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
        </motion.div>
        <div className=' mt-16 flex justify-center  '>
          <div >
            <h1 className='  border-black  border-b-4  font-bold font-nunito text-3xl lg:text-4xl'> Most Popular </h1>
          </div>
        </div>
        <div className='grid grid-cols-2 place-items-center lg:grid-cols-5 '>
          {products.map(product => {
            return (
              <div className='mt-10 w-[150px] bg-slate-300 p-2 rounded-2xl sm:w-[220px] md:w-64' key={product.id} >
                <div>
                  <div className='bg-slate-50 rounded-2xl p-6 '>
                    <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.24 }} src={`/images/${product.image}`} className='w-48 h-full' alt="pos" />
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
        <div className='grid grid-cols-2 place-items-center lg:grid-cols-5 '>
          {products.map(product => {
            return (
              <div className='mt-10 w-[150px] bg-slate-300 p-2 rounded-2xl sm:w-[220px] md:w-64' key={product.id} >
                <div>
                  <div className='bg-slate-50 rounded-2xl p-6 '>
                    <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.24 }} src={`/images/${product.image}`} className='w-48 h-full' alt="pos" />
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
        <div className='bg-slate-200 p-6 mt-16 flex flex-col font-nunito font-black'>
          <h1 className='text-center text-5xl'>Save more with coupons </h1>
          <h1 className='text-center text-5xl'>up to 50% off!!</h1>
          <Link className='m-auto' to="/product"><button className='bg-black text-white px-5 py-3 text-md mt-5 lg:mt-6 rounded-3xl    hover:bg-slate-100 hover:text-black hover:border-black hover:border-solid hover:border-2 '>Shop Now</button></Link>
        </div>
      </motion.div>

    </>
  )
}

export default Product
