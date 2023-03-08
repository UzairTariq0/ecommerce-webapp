import { motion } from 'framer-motion'
import React from 'react'
const Contact = () => {
  return (
    <div>
      <h2 className='text-center text-4xl font-bold mt-7'>Feel Free to Contact us</h2>

      <iframe className='w-full mt-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.091067167836!2d66.99665172502878!3d24.860739100382787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4e2375278b%3A0xb227c30640fba919!2sAdidas!5e0!3m2!1sen!2s!4v1678275100009!5m2!1sen!2s" width="600" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div>
        <div className='max-w-[50%] m-auto mt-10'>
          <form
            action="https://formspree.io/f/mgebyggy"
            method="POST"
            className='flex flex-col gap-12 '
          >
            <input
              type="text"
              name="username"
              placeholder="Name"
              autoComplete="off"
              className='outline-none border-2 p-4'
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              className='outline-none border-2 p-4'

              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              className='outline-none border-2 p-4'
              placeholder="Enter Your Message here"
              required></textarea>

            <button type='submit' className='bg-black text-white px-5 py-3 text-md duration-150 hover:bg-zinc-900 '>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
