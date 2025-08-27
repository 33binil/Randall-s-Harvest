import React from "react";
import {Leaf, FlaskConical, HeartPulse, Instagram, MessageCircleReply, Copyright} from "lucide-react";

const Home = () => {
    return (
        <section
            className="w-screen min-h-screen flex flex-col items-center"
            style={{
                backgroundColor: "#171816", // page background
            }}
        >
            {/* 1st div */}
            <div
                className="w-screen h-screen"
                style={{
                    background: "linear-gradient(135deg, #273123, #1A1A1A)",
                }}
            >
                {/* Navbar */}
                <div>
                    <div className="absolute left-[71px] top-[34px]">
                        <img src="/public/logo1.png"
                             alt="Logo"
                             className=" w-[110.9px] h-[42px]"/>
                    </div>

                    <div className="absolute left-[938px] top-[42px] font-bold">
                        <button className="text-white font-andika text=[18px]">
                            Home
                        </button>
                    </div>
                    <div className="absolute left-[1053px] top-[42px] font-bold">
                        <button className="text-white font-andika text=[18px]">
                            Story
                        </button>
                    </div>
                    <div className="absolute left-[1161px] top-[42px] font-bold">
                        <button className="text-white font-andika text=[18px]">
                            Shop
                        </button>
                    </div>
                    <div className="absolute left-[1263px] top-[42px] font-bold">
                        <button className="text-white font-andika text=[18px]">
                            Cart
                        </button>
                    </div>
                    <div className="absolute left-[1362px] top-[42px] font-bold">
                        <button className="text-white font-andika text=[18px]">
                            Contact Us
                        </button>
                    </div>

                    <div className="absolute left-[1650px] top-[30px]">
                        <button
                            className="w-[170px] h-[40px] rounded-lg bg-[#265B06] text-white font-andika text-lg transition duration-300 hover:bg-[#38611F] hover:shadow-[0_0_15px_#38611F] hover:scale-105"
                        >
                            Login
                        </button>
                    </div>
                </div>

                {/* Heading */}
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full ">
                    {/* Left Side - Texts */}
                    <div className="lg:w-1/2 w-full left-[240px] top-[270px] relative text-center lg:text-left">
                        <h1 className="text-white font text-[36px] lg:text-[60px] font-bold leading-tight">
                            Elevate Your <br /> Culinary Experience
                        </h1>

                        <p className="mt-9 text-white font-andika text-[18px] lg:text-[24px] lg:w-[624px]">
                            Discover Randall's OMNIBLEND, a premium collection of artisanal spice blends
                            crafted to transform ordinary dishes into extraordinary culinary experiences.
                        </p>

                        <button
                            className="relative left-[100px] mt-16 w-[170px] h-[40px] rounded-lg bg-[#265B06] text-white font-andika text-lg
                 transition duration-300 hover:bg-[#38611F] hover:shadow-[0_0_15px_#38611F] hover:scale-105"
                        >
                            🛒 Shop now
                        </button>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative w-full flex justify-center mb-8 lg:mb-0 top-[194px] animate-float-y right-72 lg:w-[558px] lg:h-[700px]">
                        <img
                            src="/public/omniblend.png"
                            alt="Product"
                            className="w-[300px] lg:w-[550px] h-auto rotate-[6deg]"
                        />
                    </div>
                </div>

            </div>

            {/* 2nd div */}
            <div
                className="w-screen h-[802px]"
                style={{
                    background: "linear-gradient(135deg, #1E211D, #161616)",
                }}
            >
                {/* Heading */}
                <div className="relative top-[30px] mt-6">
                    <h1 className="text-white font-andika text-[49px] text-center">
                        Why Choose Omniblend
                    </h1>
                </div>

                <div className="relative flex flex-col lg:flex-row justify-center items-start gap-[130px] top-[120px]  ">

                    {/* Box 1 */}
                    <div className="w-[320px] h-[483px] bg-[#2A3028] rounded-lg flex flex-col items-center">
                        <Leaf className="relative w-[60px] h-[60px] text-[#38611F] top-[80px]" />
                        <h2 className="relative text-white text-[26px] font-andika font-bold top-[140px]">100% Natural</h2>
                        <p className="text-gray-300 text-center relative text-[20px] font-andika top-[180px] w-[255px] h-[133px]">
                            Sourced from the finest organic farms  around the world, free from additives and preservatives
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div className="w-[320px] h-[483px] bg-[#2A3028] rounded-lg flex flex-col items-center ">
                        <FlaskConical className="relative w-[60px] h-[60px] text-[#38611F] top-[80px]" />
                        <h2 className="relative text-white text-[26px] font-andika font-bold top-[140px]">Expertly Crafted</h2>
                        <p className="text-gray-300 text-center relative text-[20px] font-andika top-[180px] w-[255px] h-[133px]">
                            Blended by master herbalists with decades of experience in flavor profiling
                        </p>
                    </div>

                    {/* Box 3 */}
                    <div className="w-[320px] h-[483px] bg-[#2A3028] rounded-lg flex flex-col items-center ">
                        <HeartPulse className="relative w-[60px] h-[60px] text-[#38611F] top-[80px]" />
                        <h2 className="relative text-white text-[26px] font-andika font-bold top-[140px]">Health Benefits</h2>
                        <p className="text-gray-300 text-center text-[20px] font-andika relative top-[180px] w-[255px] h-[133px]">
                            Packed with antioxidants and nutrients that support overall wellness and immunity
                        </p>
                    </div>

                </div>
            </div>

            {/* 3rd div (transparent, shows page bg) */}
            <div
                className="w-screen h-[845px]"
                style={{
                    background: "transparent",
                }}
            >
                <div className="flex mt-12  relative">
                    <img src="/public/omniblend.png" alt="Logo" className="relative w-[509px] h-[638px] left-[250px]" />
                    <div className="py-24 px-96">
                        <h1 className="text-white font-bold font-andika text-[52px]">
                            Why Choose Omniblend
                        </h1>
                        <h1 className="relative text-white font-andika text-[22px] w-[653px] top-[20px]">
                            Because your time, taste, and standards deserve better.
                            Cooking shouldn't be a chore—or a flavorless routine. Whether it’s breakfast or a midnight snack, OmniBlend replaces cluttered spice racks and guesswork with one bold shake.<br/>
                            OmniBlend — where flavor meets freedom.
                        </h1>
                        <h1 className="relative font-andika text-white text-[24px] top-[40px]">
                            ₹ 179.00
                        </h1>
                        <button
                            className="relative left-[50px] top-[120px] w-[170px] h-[40px] rounded-lg bg-[#265B06] text-white font-andika text-lg
                 transition duration-300 hover:bg-[#38611F] hover:shadow-[0_0_15px_#38611F] hover:scale-105"
                        >
                            🛒 Add to Cart
                        </button>
                    </div>
                </div>

            </div>

            {/* 4th div */}
            <div
                className="w-screen h-[560px]"
                style={{
                    background: "linear-gradient(135deg, #1E211D, #131313)",
                }}
            >
                <div className="relative mt-28">
                    <h1 className="text-white font-andika text-[42px] text-center mt-20 font-bold">
                        Join Our Community
                    </h1>
                    <div className="flex justify-center items-center">

                        <h1 className="text-white font-andika text-[18px] text-center w-[847px] h-[88px] mt-4">
                            Subscribe to receive exclusive recipes, special offers, and expert tips on how to make the most of your Omniblend spices
                        </h1>
                    </div>
                    <div className="flex justify-center items-center relative top-[30px] gap-4">
                        {/* Email input */}
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-[500px] h-[45px] rounded-3xl bg-[#4C4C4C] text-white font-andika text-lg px-5
               placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#38611F]
               transition duration-300"
                        />

                        {/* Subscribe button */}
                        <button
                            className="w-[170px] h-[45px] rounded-3xl bg-[#265B06] text-white font-andika text-lg
               transition duration-300 hover:bg-[#38611F] hover:shadow-[0_0_15px_#38611F] hover:scale-105"
                        >
                            Subscribe
                        </button>
                    </div>

                </div>
            </div>

            {/* 5th div (transparent, shows page bg) */}
            <div
                className="w-screen h-[275px]"
                style={{
                    background: "transparent",
                }}
            >
                <div>
                    <img src="/public/logo1.png" alt="Logo" className="relative w-[148px] h-[56px] mt-28" />


                </div>
                <div className="flex flex-col lg:flex-row space-x-4">
                    <div className="relative left-[938px] top-[-120px] font-bold">
                        <button className="text-white font-andika text=[18px]">
                            About Us
                        </button>
                    </div>
                    <div className="relative left-[1053px] top-[-120px] font-bold">
                        <button className="text-white font-andika text=[18px]">
                            Recipes
                        </button>
                    </div>
                    <div className="relative left-[1161px] top-[-120px] font-bold">
                        <button className="text-white font-andika text=[18px]">
                            Blog
                        </button>
                    </div>
                    <div className="relative left-[1263px] top-[-120px] font-bold">
                        <button className="text-white font-andika text=[18px]">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row space-x-4">
                    <div className="relative left-[940px] top-[-70px]">
                        <button>
                            <Instagram className="relative w-[37px] h-[37px] text-white" />
                        </button>
                    </div>
                    <div className="relative left-[970px] top-[-70px]">
                        <button>
                            <MessageCircleReply className="relative w-[37px] h-[37px] text-white" />
                        </button>
                    </div>
                </div>

                <div className="relative flex flex-col lg:flex-row space-x-2 items-center justify-center">
                    <Copyright className="relative top-[2px] w-[19px] h-[19px] text-white" />
                    <h1 className="font-albert text-white text-[16px] font-light">
                        2025 Randall’s Omniblend. All rights reserved
                    </h1>
                </div>

            </div>
        </section>
    );
};

export default Home;
