import React from 'react'
import shopp2 from '../assets/shopp2.png'
const Product = () => {
  return (
    <>
    <div className='bg-slate-200 text-black mt-5  py-10 flex flex-wrap lg:flex-nowrap'>
      <div className='mt-[20px] relative top-4 lg:top-0 text-center lg:text-left lg:mt-[10px]  lg:ml-32 '>
        <h1 className='text-4xl lg:text-5xl font-medium '>Online Shopping</h1>
        <p className='mt-4 font-medium text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium magni maxime! Pariatur sed doloremque voluptates eligendi laudantium autem laboriosam doloribus lor sit amet consectetur adipisicing elit. Expedita accusantium magni maxime! Pariatur sed doloremque voluptates eligendi laudantium autem laboriosam doloribus </p>
        <button className='mt-4 bg-black text-white px-5 py-3 text-md rounded-lg transition-all duration-100   hover:bg-slate-200 hover:text-black hover:border-black hover:border-solid hover:border-2  '>Shop Now</button>
      </div>
      <div className='ml-[120px] relative bottom-5 mr-[124px] -mb-10 lg:mb-0 lg:mr-48 md:ml-[200px] lg:ml-[60px] mt-10'>
        <img className='' src={shopp2} alt="" />
      </div>
    </div>
    <div>
      <h1>Shirts</h1>
    </div>
    </>
  )
}

export default Product
