import React, { useState } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi'
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs'
import './navbar.css'
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const {totalQuantities} = useSelector(state => state.CartReducer)

  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <nav className=' flex justify-between items-center px-12 p-4 bg-gray-100 shadow-lg '>
      <div className=' items-center hidden lg:inline'>
        <Link to="/">
          <motion.h1
            initial={{ y: -250 }} animate={{ y: 0 }} transition={{ type: 'spring', bounce: 0.25 }}
            className='text-3xl font-bold
             '>
            E-
            <span className='text-purple-800'>Store</span></motion.h1>
        </Link>
      </div>

      <div className='flex items-center  lg:hidden'>
        <Link to="/">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='text-3xl font-bold
             '>
            E-
            <span className='text-purple-800'>Store</span></motion.h1>
        </Link>
      </div>

      <div className='hidden lg:inline'>
        <motion.ul initial={{ y: -250 }} animate={{ y: 0 }} transition={{ type: 'spring', bounce: 0.25 }} className='flex justify-center hover:cursor-pointer'>
          <li className=' text-lg py-2 px-6 hover:rounded '><Link className='nav' to="/">Home</Link></li>
          <li className=' text-lg py-2 px-6 hover:rounded'><Link className='nav' to="/cart">Cart</Link></li>
          <li className=' text-lg py-2 px-6 hover:rounded'><Link className='nav' to="/product">Products</Link></li>
          <li className=' text-lg py-2 px-6 hover:rounded '><Link className='nav' to="/contact">Contact Us</Link></li>
        </motion.ul>
      </div>

      <div className='hidden lg:inline'>
        <motion.ul
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', bounce: 0.25 }}
          className='flex relative justify-center hover:cursor-pointer
      '>
          <Link to="/cart">
            <BiCart size={26} />
            <span className='block absolute text-center -right-3 px-[0.46rem] -top-[13px]  bg-purple-600 rounded-[50%] text-white '>{totalQuantities}</span>
          </Link>
        </motion.ul>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=' flex gap-4 lg:hidden
        '>
        <Link to="/cart">
          <BiCart size={24} />
        </Link>
        <span className='block absolute text-center right-[76px] px-[0.42rem] top-[6.9px]  bg-purple-600 rounded-[50%] text-white'>{totalQuantities}</span>
        <RxHamburgerMenu onClick={handleMenu} size={26} />
      </motion.div>

      <motion.div className={menu ? 'bg-slate-50 shadow-slate-400 text-xl shadow-2xl absolute top-0 right-0 w-80 h-[748.5%] z-10 duration-700' : 'fixed right-[100%]'}>
        <div className='flex justify-end pr-8 pt-8'>
          <TfiClose onClick={handleMenu} className='p-1 cursor-pointer' size={26} />
        </div>
        <ul className='pt-10 px-10  '>
          <li className="py-3 pl-3  ">
            <Link to="/" className='nav'>Home</Link>
          </li>
          <li className="py-3 pl-3 ">
            <Link to="/cart" className='nav'>Cart</Link>
          </li>
          <li className="py-3 pl-3 ">
            <Link to="/product" className='nav'>Products</Link>
          </li>
          <li className="py-3 pl-3 ">
            <Link to="/contact" className='nav'>Contact Us</Link>
          </li>
          <div className='flex gap-6 mt-2'>
          <li className="py-3 pl-3 ">
            <Link target={'_blank'} to="https://www.facebook.com/"><BsFacebook size={30}/></Link>
          </li>
          <li className="py-3 pl-3 ">
            <Link target={'_blank'} to="https://www.instagram.com/"><BsInstagram size={30}/></Link>
          </li>
          <li className="py-3 pl-3 ">
            <Link target={'_blank'} to="https://twitter.com/"><BsTwitter size={30}/></Link>
          </li>
          </div>
        </ul>
      </motion.div>

    </nav>
  )
}

export default Navbar
