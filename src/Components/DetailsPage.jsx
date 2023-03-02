import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { motion } from 'framer-motion';

const DetailsPage = () => {
  const { products } = useSelector(state => state.ProductsReducer)
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector(state => state.ProductsReducer);
  useEffect(() => {
    dispatch({ type: 'PRODUCT', id })
  }, [id])
  return (
    <>

      {/* For Desktop */}
      <motion.div i
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className='  mt-48 hidden lg:block mb-52 lg:mt-36 
      '>
        <div className='flex flex-col lg:flex-row'>
          <div>
            <img className=' bg-slate-200 rounded-lg ml-[105px] md:ml-80 lg:ml-64 p-6 w-[300px] lg:w-[850px] h-full' src={`/images/${product.image}`} alt="" />
          </div>
          <div className='  ml-[260px]'>
            <div className='font-bold -ml-28 mt-7 md:ml-20 lg:ml-6 text-lg lg:text-3xl uppercase'>
              {product.name}
            </div>
            <div className='mt-7 -ml-[30px] md:ml-[180px] lg:ml-[26px] font-bold text-3xl flex gap-[345px] '>
              <span>${product.discountPrice}</span>
              <span className='font-normal line-through'>${product.price}</span>
            </div>
            <div>
              <div>
                <h1 className=' -ml-[55px] md:ml-[150px] lg:ml-[26px] mt-5 font-semibold text-lg lg:text-lg'>Product Details</h1>
                <div className=' -ml-40 md:-ml-[60px]  lg:ml-[26px] mt-3 '>
                  {product.desc}
                </div>
              </div>
              <div className='flex  -ml-[200px] md:-ml-[60px]  lg:ml-[26px] mt-7'>
                <span className=' w-[100px] lg:w-[60px] h-[60px] border-[1px] border-solid bg-slate-50 duration-200 hover:bg-slate-100 cursor-pointer flex justify-center items-center'><AiOutlineMinus className='' /></span>
                <span className=' w-[100px] lg:w-[60px] h-[60px] border-[1px] border-solid cursor-pointer flex justify-center items-center'>1</span>
                <span className=' w-[100px] lg:w-[60px] h-[60px] border-[1px] border-solid bg-slate-50 duration-200 hover:bg-slate-100 cursor-pointer flex justify-center items-center'><AiOutlinePlus className='' /></span>
                <button className='ml-[10px] w-80  bg-purple-700 duration-300 hover:bg-purple-600 text-white outline-none border-none'>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* For Mobile and Tablets  */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container block lg:hidden mx-auto my-44"
      >
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <img src={`/images/${product.image}`} alt="Product Image" className="h-auto w-screen bg-slate-200 rounded-lg p-6 " />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h1 className="mb-2 mt-8 text-3xl font-bold uppercase">   {product.name}</h1>
            <div className="mb-4 mt-4">
              <span className="text-lg font-semibold ">${product.discountPrice}</span>
              <span className="ml-2 text-sm line-through">${product.price}</span>
            </div>
            <div>
              <h1 className=' font-bokd text-lg'>Product Details</h1>
              <p className="mb-4 mt-4 text-gray-800">{product.desc}</p>
            </div>
            <div className='flex gap-3 '>


              <div className='flex '>
                <span className='w-[60px] h-[60px] border-[1px] border-solid flex justify-center items-center bg-slate-50 hover:bg-slate-100 duration-200 cursor-pointer '><AiOutlineMinus /></span>
                <span className='w-[60px] h-[60px] border-[1px] border-solid flex justify-center items-center duration-200 cursor-pointer '>1</span>
                <span className='w-[60px] h-[60px] border-[1px] border-solid flex justify-center items-center bg-slate-50 hover:bg-slate-100 duration-200 cursor-pointer '><AiOutlinePlus /></span>
              </div>
              <button className=" w-full duration-300 bg-purple-600 px-4 py-2 text-white hover:bg-purple-500 focus:bg-purple-500 focus:outline-none">Add to Cart</button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Products Section */}
      <div>
        <h1 className='font-semibold text-4xl text-center'>Related Products</h1>
        <div className='mt-10 mb-28'
        >
          <div className='grid grid-cols-2 place-items-center lg:grid-cols-5 '>
            {products.map(product => {
              return (
                <div className='mt-10 w-[150px] sm:w-[220px] md:w-64' key={product.id} >
                  <div>
                    <div className='bg-slate-200 border-2 border-black rounded-lg p-6 '>
                      <Link target={'_blank'} to={`/details/${product.id}`}><motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.24 }} src={`/images/${product.image}`} className='w-48 h-full' alt="pos" /></Link>
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
        </div>
      </div>

    </>

  )
}

export default DetailsPage
