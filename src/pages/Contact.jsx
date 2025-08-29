import React from 'react'
import {Link} from "react-router-dom";
import {AlignJustify} from "lucide-react";
import {
    Phone, MapPin, Mail,
} from "lucide-react";

const Contact = () => {
    return (
        <div
            className="w-full min-h-screen"
            style={{
                background: "linear-gradient(135deg, #273123, #1A1A1A)",
            }}
        >
            <section className="w-screen flex justify-center ">
                <div className="relative w-screen h-[326px] overflow-hidden">
                    <img src="/Navbar.jpg" alt="Navbar background" className="absolute inset-0 w-[440px] h-[378px] lg:w-screen lg:h-auto object-cover opacity-40 pointer-events-none z-0" />
                    <div className="absolute inset-0 bg-black opacity-60 pointer-events-none z-10" />
                    <div className="relative z-20 flex items-center justify-between py-5 lg:py-8 ">
                        <img src="/logo1.png" alt="Logo" className="relative w-[74px] h-[25px] lg:w-[110px] lg:h-[42px] left-2 lg:left-5" />

                        <div className="hidden md:flex space-x-16 font-bold text-white font-andika">
                            <Link to="/home">Home</Link>
                            <Link to="/story">Story</Link>
                            <Link to="/Shop">Shop</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>

                        <button className="relative w-[85px] h-[20px] lg:w-[170px] lg:h-[40px] right-5 lg:right-5 rounded-lg bg-[#265B06] text-white font-andika text-[10px] lg:text-lg transition duration-300 hover:bg-[#38611F] hover:shadow-[0_0_15px_#38611F] hover:scale-105">
                            Login
                        </button>
                        <div className="md:hidden flex right-4 relative">
                            <button onClick={() => navigate('/toggle')} aria-label="Menu" className="p-2 hover:text-[#38611F] transition">
                                <AlignJustify className="text-white"/>
                            </button>
                        </div>
                    </div>
                    <div className="relative justify-center text-center rihg z-20 lg:mt-10 mt-10 space-y-2">
                        <h1 className="font-bold text-white font-andika text-[45px] lg:text-[55px]">
                            Contact Us
                        </h1>
                    </div>
                </div>
            </section>


            <section className="w-full h-full lg:h-[795px] bg-gradient-to-b from-[#1E211D] to-[#161616] flex items-center justify-center py-12 lg:py-0 px-4">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-20 w-full max-w-7xl">

                    <div>
                        <h1 className="p-6 text-[#588750] text-[27px] font-andika">Send us a Message</h1>

                    {/* Section 2: Send us a Message */}
                    <section className="bg-transparent p-4 sm:p-6 rounded-lg shadow-lg w-full lg:w-[850px]">
                        <div className="bg-gradient-to-br from-[#61745C] to-[#2E2E2E] rounded-lg p-6 sm:p-8 flex flex-col justify-between h-full">


                            {/* Row: Name & Email */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Enter Full Name"
                                    className="w-full font-andika sm:w-[312px] h-[41px] px-4 rounded-md bg-white/15 text-white placeholder-white focus:outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    className="w-full sm:w-[312px] font-andika h-[41px] px-4 rounded-md bg-white/15 text-white placeholder-white focus:outline-none"
                                />
                            </div>

                            {/* Column: Subject & Message */}
                            <div className="flex flex-col gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Enter Subject"
                                    className="w-full sm:w-[642px] font-andika h-[41px] px-4 rounded-md bg-white/15 text-white placeholder-white focus:outline-none"
                                />
                                <textarea
                                    rows="4"
                                    placeholder="Enter Your Message"
                                    className="w-full sm:w-[642px] font-andika h-[100px] px-4 py-2 rounded-md bg-white/15 text-white placeholder-white resize-none focus:outline-none"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <button className="bg-[#588750] font-andika text-white px-6 py-2 rounded-md hover:bg-[#4e7748] transition self-start">
                                Send Message
                            </button>
                        </div>
                    </section>
                    </div>
                    {/* Divider Line */}
                    <div className="hidden lg:block w-[2px] h-[484px] bg-white"></div>
                    <div className="block lg:hidden w-full h-[2px] bg-white"></div>

                    {/* Section 3: Get in Touch */}
                    <section className="bg-transparent p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-[350px]">
                        <h1 className="text-[#588750] text-[27px] font-andika mb-6">Get in Touch</h1>
                        <div className="space-y-4 text-white text-sm">
                            <div className="flex items-start gap-2">
                                <MapPin className="mt-1 w-5 h-5 text-white" />
                                <div>
                                    <h2 className="font-andika text-[18px]">Our Location</h2>
                                    <p className="relative left-2">123 Randell’s harvest, Abc., Abc., Abc.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <Phone className="mt-1 w-5 h-5 text-white" />
                                <div>
                                    <h2 className="font-andika text-[18px]">Phone Number</h2>
                                    <p className="relative left-2">+91 1234567899</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <Mail className="mt-1 w-5 h-5 text-white" />
                                <div>
                                    <h2 className="font-andika text-[18px]">Email Address</h2>
                                    <p className="relative left-2">randellsharvest@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="mt-6">
                            <iframe
                                title="Randell's Location"
                                src= "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d975.0510244285728!2d76.84561673114572!3d9.126798489160395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1756462738070!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="rounded-md shadow-md"
                            ></iframe>
                        </div>

                    </section>
                </div>
            </section>





        </div>
    )
}
export default Contact
