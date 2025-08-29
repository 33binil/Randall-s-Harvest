import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
    Leaf,
    FlaskConical,
    HeartPulse,
    Instagram,
    MessageCircleReply,
    Copyright,
    AlignJustify,
} from "lucide-react";


const Home = () => {
    const navigate = useNavigate();

    return (
        <motion.section
            className="w-full min-h-screen flex flex-col items-center bg-[#171816] overflow-x-hidden"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
        >
            {/* 1st div - Hero */}
            <div
                className="w-full min-h-screen px-6 lg:px-12"
                style={{
                    background: "linear-gradient(135deg, #273123, #1A1A1A)",
                }}
            >
                {/* Navbar */}
                <div className="flex items-center justify-between py-5 lg:py-8">
                    <img
                        src="/logo1.png"
                        alt="Logo"
                        className="w-[74px] h-[25px] lg:w-[110px] lg:h-[42px]"
                    />

                    <div className="hidden md:flex space-x-10 lg:space-x-16 font-bold text-white font-andika">
                        <Link to="/home">Home</Link>
                        <Link to="/story">Story</Link>
                        <Link to="/Shop">Shop</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>

                    <div className="flex items-center space-x-3">
                        <Link
                            to="/login"
                            className="w-[85px] h-[28px] lg:w-[170px] lg:h-[40px] flex items-center justify-center rounded-lg bg-[#265B06] text-white font-andika
                                         text-[10px] lg:text-lg transition duration-300 hover:bg-[#38611F] hover:shadow-[0_0_15px_#38611F] hover:scale-105">
                            Login
                        </Link>


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

                {/* Hero Section */}
                {/* Hero Section */}
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-0 lg:mt-32 mt-5">
                    {/* Left - Text */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-white font-andika text-[32px] lg:text-[60px] animate-fade-drop font-bold leading-tight">
                            Elevate Your <br /> Culinary Experience
                        </h1>
                        <p className="mt-6 text-white font-andika text-[16px] animate-fade-drop lg:text-[22px] max-w-xl mx-auto lg:mx-0">
                            Discover Randall's OMNIBLEND, a premium collection of artisanal
                            spice blends crafted to transform ordinary dishes into
                            extraordinary culinary experiences.
                        </p>
                        <button className="mt-10 w-[160px] h-[40px] rounded-lg bg-[#265B06] animate-fade-drop text-white font-andika text-lg transition duration-300 hover:bg-[#38611F] hover:shadow-[0_0_15px_#38611F] hover:scale-105">
                            🛒 Shop now
                        </button>
                    </div>

                    {/* Right - Image */}
                    <div className="relative animate-float-y">
                        <motion.img
                            src="/omniblend.png"
                            alt="Product"
                            className="w-[260px] lg:w-[500px] rotate-[7deg]"
                            initial={{ scale: 1.3, rotate: 40, opacity: 0 }}
                            animate={{ scale: 1, rotate: 7, opacity: 1 }}
                            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
                        />
                    </div>
                </div>

            </div>

            {/* 2nd div - Why Choose Boxes */}
            <div
                className="w-full py-16"
                style={{ background: "linear-gradient(135deg, #1E211D, #161616)" }}
            >
                <h1 className="text-white font-andika text-[32px] animate-fade-drop lg:text-[40px] text-center font-bold">
                    Why Choose Omniblend
                </h1>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mt-16 lg:mt-12">
                    {/* Box 1 */}
                    <div className="w-[280px] lg:w-[320px] min-h-[380px] bg-[#2A3028] rounded-lg flex flex-col items-center p-6 text-center">
                        <Leaf className="w-[55px] h-[55px] text-[#38611F] mt-6 lg:mt-10 animate-float-y" />
                        <h2 className="animate-fade-drop text-white text-[22px] lg:text-[26px] font-andika font-bold mt-10">
                            100% Natural
                        </h2>
                        <p className="animate-fade-drop text-gray-300 text-[15px] lg:text-[18px] font-andika mt-6">
                            Sourced from the finest organic farms around the world, free from
                            additives and preservatives.
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div className="w-[280px] lg:w-[320px] min-h-[380px] bg-[#2A3028] rounded-lg flex flex-col items-center p-6 text-center">
                        <FlaskConical className="w-[55px] h-[55px] text-[#38611F] mt-6 lg:mt-10 animate-float-y" />
                        <h2 className="animate-fade-drop text-white text-[22px] lg:text-[26px] font-andika font-bold mt-10">
                            Expertly Crafted
                        </h2>
                        <p className="animate-fade-drop text-gray-300 text-[15px] lg:text-[18px] font-andika mt-6">
                            Blended by master herbalists with decades of experience in flavor
                            profiling.
                        </p>
                    </div>

                    {/* Box 3 */}
                    <div className="w-[280px] lg:w-[320px] min-h-[380px] bg-[#2A3028] rounded-lg flex flex-col items-center p-6 text-center">
                        <HeartPulse className="w-[55px] h-[55px] text-[#38611F] mt-6 lg:mt-10 animate-float-y" />
                        <h2 className="animate-fade-drop text-white text-[22px] lg:text-[26px] font-andika font-bold mt-10">
                            Health Benefits
                        </h2>
                        <p className="animate-fade-drop text-gray-300 text-[15px] lg:text-[18px] font-andika mt-6">
                            Packed with antioxidants and nutrients that support overall
                            wellness and immunity.
                        </p>
                    </div>
                </div>
            </div>

            {/* 3rd div - Product Showcase */}
            <div className="w-full mt-6 mb-10 flex flex-col lg:flex-row justify-center items-center gap-20 px-6 lg:px-20">
                <img
                    src="/omniblend.png"
                    alt="Product"
                    className="w-[260px] lg:w-[480px] h-auto rotate-[-6deg]"
                />
                <div className="max-w-[650px]">
                    <h1 className="text-white animate-fade-drop font-bold font-andika text-[28px] lg:text-[42px] mb-6">
                        Why Choose Omniblend
                    </h1>
                    <p className="text-white animate-fade-drop font-andika text-[14px] lg:text-[18px] mb-6">
                        Because your time, taste, and standards deserve better. Cooking
                        shouldn't be a chore—or a flavorless routine. Whether it’s breakfast
                        or a midnight snack, OmniBlend replaces cluttered spice racks and
                        guesswork with one bold shake. <br />
                        OmniBlend — where flavor meets freedom.
                    </p>
                    <h2 className="text-white animate-fade-drop font-andika text-[22px] mb-6">₹ 179.00</h2>
                    <button className="w-[170px] h-[40px] rounded-lg bg-[#265B06] text-white font-andika text-lg transition duration-300 hover:bg-[#38611F] hover:shadow-[0_0_15px_#38611F] hover:scale-105">
                        🛒 Ready to Buy ?
                    </button>
                </div>
            </div>

            {/* 4th div - Newsletter */}
            <div
                className="w-full py-20 px-6"
                style={{ background: "linear-gradient(135deg, #1E211D, #131313)" }}
            >
                <h1 className="text-white font-andika text-[26px] lg:text-[42px] text-center font-bold mb-3">
                    Join Our Community
                </h1>
                <p className="text-white font-andika text-[13px] lg:text-[18px] text-center max-w-[850px] mx-auto mb-10">
                    Subscribe to receive exclusive recipes, special offers, and expert
                    tips on how to make the most of your Omniblend spices.
                </p>

                <div className="flex justify-center items-center gap-2 lg:gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-[220px] lg:w-[500px] h-[40px] lg:h-[45px] rounded-3xl bg-[#4C4C4C] text-white font-andika text-[14px] lg:text-lg px-5 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#38611F] transition duration-300"
                    />
                    <button className="w-[110px] lg:w-[170px] h-[40px] lg:h-[45px] rounded-3xl bg-[#265B06] text-white font-andika text-[14px] lg:text-lg transition duration-300 hover:bg-[#38611F] hover:shadow-[0_0_15px_#38611F] hover:scale-105">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* 5th div - Footer */}
            <div className="w-full bg-transparent flex flex-col items-center mt-8">
                <img
                    src="/logo1.png"
                    alt="Logo"
                    className="lg:w-[148px] lg:h-[56px] w-[100px] h-[40px] mt-8 mb-7"
                />

                <div className="flex flex-wrap justify-center gap-6 mb-9">
                    <button className="text-white text-[12px] lg:text-[16px] font-andika">
                        About Us
                    </button>
                    <button className="text-white text-[12px] lg:text-[16px] font-andika">
                        Recipes
                    </button>
                    <button className="text-white text-[12px] lg:text-[16px] font-andika">
                        Blog
                    </button>
                    <button className="text-white text-[12px] lg:text-[16px] font-andika">
                        Contact Us
                    </button>
                </div>

                <div className="flex space-x-4 mb-4">
                    <button>
                        <Instagram className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] text-white" />
                    </button>
                    <button>
                        <MessageCircleReply className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] text-white" />
                    </button>
                </div>

                <div className="flex items-center space-x-2 text-gray-400 text-[12px] mt-6 mb-6">
                    <Copyright className="w-3 h-3" />
                    <span>2025 Randall’s Omniblend. All rights reserved.</span>
                </div>
            </div>
        </motion.section>
    );
};

export default Home;
