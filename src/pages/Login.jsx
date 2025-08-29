import React, {useState} from 'react'
import { motion } from "framer-motion";
import {Link, useNavigate} from "react-router-dom";
import {AlignJustify} from "lucide-react";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <motion.section
            className="w-full min-h-screen flex flex-col items-center bg-[#171816] overflow-x-hidden"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
        >
        <div
            className="w-full min-h-screen relative bg-cover bg-left lg:bg-center"
            style={{
                backgroundImage: "url('/Loginbg.jpg')",
            }}
        >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative z-10">

                <section className="w-screen flex justify-center">
                    <div className="relative w-full lg:h-[90px] overflow-hidden">
                        <div className="relative z-20 flex items-center justify-between py-5 lg:py-8 px-4 lg:px-8">
                            <img
                                src="/logo1.png"
                                alt="Logo"
                                className="w-[74px] h-[25px] lg:w-[110px] lg:h-[42px]"
                            />

                            <div className="hidden md:flex space-x-16 font-bold text-white font-andika">
                                <Link to="/home">Home</Link>
                                <Link to="/story">Story</Link>
                                <Link to="/shop">Shop</Link>
                                <Link to="/contact">Contact Us</Link>
                            </div>

                            <div className="md:hidden flex">
                                <button
                                    onClick={() => navigate("/toggle")}
                                    aria-label="Menu"
                                    className="p-2 hover:text-[#38611F] transition"
                                >
                                    <AlignJustify className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex justify-center items-center py-0 lg:py-24">
                    <div className="w-[786px] h-[740px] bg-black/50 rounded-xl shadow-lg flex flex-col items-center justify-center px-12">
                        {/* Heading */}
                        <h1 className="text-white font-andika text-3xl font-bold mb-6 animate-float-y">Welcome back</h1>
                        <p className="text-gray-300 text-lg font-andika mb-14 animate-float-y">Please enter your details</p>

                        {/* Email Input */}
                        <div className="w-full mt-10 lg:mt-0 mb-6">
                            <label className="block font-andika text-white font-semibold mb-2">Email / Number</label>
                            <input
                                type="email"
                                placeholder="Enter your Email/Number"
                                className="w-full border-b border-gray-500 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="w-full mb-2 relative">
                            <label className="block font-andika text-white font-semibold mb-2">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="************"
                                className="w-full border-b border-gray-500 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute font-andika right-2 top-9 text-gray-400"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        {/* Forgot Password */}
                        <div className="w-full flex justify-end mb-14">
                            <button className="text-gray-300 font-andika text-sm hover:underline">
                                Forgot your Password?
                            </button>
                        </div>

                        {/* Login Button */}
                        <button className="w-full font-andika bg-[#111] text-white py-3 rounded-md font-semibold hover:bg-[#265B06] transition mb-6">
                            Log In
                        </button>

                        {/* Register Section */}
                        <p className="text-gray-300 font-andika text-sm">
                            Don’t have an Account?{" "}
                            <Link
                                to="/register"
                                className="text-white font-andika font-semibold hover:underline">
                                Register here
                            </Link>
                        </p>
                    </div>

                </section>
            </div>
        </div>
        </motion.section>
    )
}
export default Login
