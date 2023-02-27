import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className=" bg-gradient-to-r from-slate-900 to-slate-800 mt-10 text-white py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="mb-4 ml-7 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Shop</h3>
                            <ul className="list-none">
                                <li><a href="#">New Arrivals</a></li>
                                <li><a href="#">Men's Clothing</a></li>
                                <li><a href="#">Women's Clothing</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Sale</a></li>
                            </ul>
                        </div>
                        <div className="mb-4  md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">About Us</h3>
                            <ul className="list-none">
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Journey</a></li>
                            </ul>
                        </div>
                        <div className="mb-4 ml-7 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                            <ul className="list-none">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Pinterest</a></li>
                            </ul>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
                            <p className="mb-2 mr-">Get the latest news and updates.</p>
                            <form className='mr-2'>
                                <input type="email" className="border-none outline-none text-black p-2 rounded w-full mb-2" placeholder="Email Address" />
                                <button className="bg-gray-700 text-white px-4 py-2 mt-1 rounded duration-300 hover:bg-gray-600">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <hr className="my-8" />
                    <p className="text-center">© 2023 My Ecommerce Store. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
