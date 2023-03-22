import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Cart = () => {
  const { products, totalPrice, totalQuantities } = useSelector(state => state.CartReducer)
  const dispatch = useDispatch()
  return (
    <motion.div   
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0, duration: 0.5 }}
    >
      <div className="container mx-auto mt-10 font-nunito ">
        <div className="lg:flex my-10">
          <div className="w-full  bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            </div>
            {products.length > 0 ? <>

              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
              </div>
              {products.map(product => (
                <div className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5' key={product.id}>
                  <div className='flex w-2/5'>
                    <div className='w-20'>
                      <img className='h-24' src={`/images/${product.image}`} alt="no image" />
                    </div>
                    <div className='flex flex-col justify-between ml-4 flex-grow'>
                      <span className="font-bold text-sm">{product.name}</span>
                      <span className="font-semibold duration-200 hover:text-red-500 text-gray-500 text-xs cursor-pointer" onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}>Remove</span>
                    </div>
                  </div>
                  <div className='flex justify-center w-1/5'>
                    {/* Decrement */}
                    <span className='mt-[5px] cursor-pointer' onClick={() => dispatch({ type: 'DEC', payload: product.id })}>
                      <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </span>

                    <span className='mx-2 border text-center w-8'>{product.quantity}</span>

                    {/* Increment */}
                    <span className='mt-[5px] cursor-pointer' onClick={() => dispatch({ type: 'INC', payload: product.id })}>
                      <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </span>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">${product.price}</span>
                  <span className="text-center w-1/5 font-semibold text-sm">${product.discountPrice}</span>
                </div>
              ))}
            </> : <div className='mt-10 '>Your Cart is Empty</div>}

            <Link to="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Total Items</span>
              <span className="font-semibold text-sm">{totalQuantities}</span>
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${totalPrice}</span>
              </div>
              <Link to='/'><button className="bg-purple-500 font-semibold hover:bg-purple-600 py-3 text-sm text-white uppercase w-full">Checkout</button></Link>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Cart
