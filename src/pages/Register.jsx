import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {AlignJustify} from "lucide-react";

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
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

                <section>
                    <div className=" flex items-center justify-center bg-transparent px-4 lg:py-32">
                        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-24">

                            {/* Left Side - Login */}
                            <div className="w-full lg:w-[48%] bg-transparent rounded-xl shadow-lg flex flex-col items-center justify-center px-12 py-10 space-y-4 leading-[1.5rem]">
                                {/* Heading */}
                                <h1 className="text-white text-3xl font-bold mb-2 font-andika">Let’s get Started</h1>
                                <p className="relative w-[372px] text-center h-auto text-white font-andika text-[16]">
                                    Ready to join the flavor revolution? Create <br/> your account to unlock exclusive updates,<br/> delicious inspiration, and insider access<br/> to all things Randell’s Harvest. It only<br/> takes a moment to register—and your next <br/>kitchen masterpiece starts here.
                                </p>
                            </div>

                            {/* Right Side - Register */}
                            <div className="lg:w-[786px] h-auto bg-black/70 rounded-xl shadow-lg px-12 py-10 flex flex-col items-center leading-10">
                                {/* Heading & Description */}
                                <h1 className="text-white text-3xl font-bold mb-2 font-andika">Join Us</h1>
                                <p className="text-gray-300 text-lg mb-6 font-andika text-center">
                                    Create your account and start your journey with us.
                                </p>

                                {/* Registration Form */}
                                <div className="w-full flex flex-col gap-4 mb-6">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full font-andika border-b border-gray-500 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full font-andika border-b border-gray-500 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="w-full font-andika border-b border-gray-500 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none"
                                    />
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Create a Password"
                                            className="w-full font-andika border-b border-gray-500 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute font-andika right-2 top-2 text-gray-400 text-sm"
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirm Password"
                                            className="w-full font-andika border-b border-gray-500 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute font-andika right-2 top-2 text-gray-400 text-sm"
                                        >
                                            {showConfirmPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>

                                {/* OR Separator */}
                                <div className="flex items-center w-full mt-8 mb-6">
                                    <div className="flex-1 h-px bg-gray-500"></div>
                                    <p className="mx-3 text-gray-300">OR</p>
                                    <div className="flex-1 h-px bg-gray-500"></div>
                                </div>

                                {/* Google Sign In */}
                                <button className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 py-3 rounded-md font-semibold hover:bg-gray-100 transition mb-6">
                                    {/* Google Icon */}
                                    <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
                                        <path
                                            d="M533.5 278.4c0-17.2-1.5-34.1-4.5-50.4H272v95.5h146.9c-6.4 34.5-25.8 63.7-54.8 83.4v69.4h88.6c51.7-47.7 81.8-118 81.8-197.9z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M272 544.3c73.2 0 134.7-24.3 179.6-66.2l-88.6-69.4c-24.5 16.4-55.8 26-91 26-69.9 0-129.2-47.1-150.3-110.1H29.2v69.1C74.2 486 167.2 544.3 272 544.3z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M121.7 326.8c-10.3-30.9-10.3-64.8 0-95.7v-69.1H29.2c-43.3 85.3-43.3 187.4 0 272.7l92.5-69.1z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M272 107.7c37.2-.6 72.8 13.5 100 39.7l74.9-74.9C406.7 28.3 344.2 0 272 0 167.2 0 74.2 58.3 29.2 145.5l92.5 69.1c21.1-63 80.4-110.1 150.3-110.1z"
                                            fill="#EA4335"
                                        />
                                    </svg>
                                    <span>Sign in with Google</span>
                                </button>


                                {/* Already Have Account */}
                                <p className="text-gray-300 font-andika text-sm">
                                    Already a member?{" "}
                                    <Link
                                        to="/login"
                                        className="text-white font-andika font-semibold hover:underline">
                                        Sign In
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Register
