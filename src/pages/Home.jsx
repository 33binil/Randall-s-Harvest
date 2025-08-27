import React from "react";
import {
    Leaf,
    FlaskConical,
    HeartPulse,
    Instagram,
    MessageCircleReply,
    Copyright, AlignJustify,
} from "lucide-react";

const Home = () => {
    return (
        <section className="w-full min-h-screen flex flex-col items-center bg-[#171816]">
            {/* 1st div - Hero */}
            <div
                className="w-full min-h-screen px-12"
                style={{
                    background: "linear-gradient(135deg, #273123, #1A1A1A)",
                }}
            >
                {/* Navbar */}
                <div className="flex items-center justify-between py-5 lg:py-8 ">
                    <img src="/logo1.png" alt="Logo" className="relative w-[74px] h-[25px] lg:w-[110px] lg:h-[42px] right-5 lg:right-0" />

                    <div className="hidden md:flex space-x-10 font-bold text-white font-andika">
                        <button>Home</button>
                        <button>Story</button>
                        <button>Shop</button>
                        <button>Cart</button>
                        <button>Contact Us</button>
                    </div>

                    <button className="relative w-[85px] h-[20px] lg:w-[170px] lg:h-[40px] left-[50px] lg:left-0 rounded-lg bg-[#265B06] text-white font-andika text-[10px] lg:text-lg transition duration-300 hover:bg-[#38611F] hover:shadow-[0_0_15px_#38611F] hover:scale-105">
                        Login
                    </button>
                    <div className="md:hidden flex relative left-7">
                        <button>
                            <AlignJustify className="text-white hover:text-[#38611F]"/>
                        </button>

                    </div>
                </div>

                {/* Hero Section */}
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:mt-24 -mt-5">
                    {/* Left - Text */}
                    <div className="relative lg:w-1/2 text-center left-0 lg:left-64 lg:text-left lg:mt-12 mt-3">
                        <h1 className="text-white font-andika text-[36px] lg:text-[60px] font-bold leading-tight">
                            Elevate Your <br /> Culinary Experience
                        </h1>
                        <p className="mt-9 text-white font-andika text-[18px] lg:text-[24px] max-w-xl mx-auto lg:mx-0">
                            Discover Randall's OMNIBLEND, a premium collection of artisanal
                            spice blends crafted to transform ordinary dishes into
                            extraordinary culinary experiences.
                        </p>
                        <button className="mt-12 w-[170px] h-[40px] rounded-lg bg-[#265B06] text-white font-andika text-lg transition duration-300 hover:bg-[#38611F] hover:shadow-[0_0_15px_#38611F] hover:scale-105">
                            🛒 Shop now
                        </button>
                    </div>

                    {/* Right - Image */}
                    <div className="relative lg:mt-0 right-0 lg:right-52 animate-float-y">
                        <img
                            src="/omniblend.png"
                            alt="Product"
                            className="w-[300px] lg:w-[550px] rotate-[7deg]"
                        />
                    </div>
                </div>
            </div>

            {/* 2nd div - Why Choose Boxes */}
            <div
                className="w-full py-16"
                style={{ background: "linear-gradient(135deg, #1E211D, #161616)" }}
            >
                <div className="flex justify-center items-center">
                    <h1 className="text-white font-andika text-[40px] text-center w-[344px] h-[58px] lg:w-[588px] lg:h-[79px] flex items-center justify-center">
                        Why Choose Omniblend
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mt-24 lg:mt-12">
                    {/* Box 1 */}
                    <div className="w-[300px] h-[383px] lg:w-[320px] lg:h-[483px] bg-[#2A3028] rounded-lg flex flex-col items-center p-6 text-center">
                        <Leaf className="w-[60px] h-[60px] text-[#38611F] mt-6 animate-float-y lg:mt-12" />
                        <h2 className="text-white text-[23px] lg:text-[26px] font-andika font-bold mt-12">
                            100% Natural
                        </h2>
                        <p className="text-gray-300 text-[16px] lg:text-[20px] font-andika mt-6">
                            Sourced from the finest organic farms around the world, free from
                            additives and preservatives.
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div className="w-[300px] h-[383px] lg:w-[320px] lg:h-[483px] bg-[#2A3028] rounded-lg flex flex-col items-center p-6 text-center">
                        <FlaskConical className="w-[60px] h-[60px] text-[#38611F] mt-6 lg:mt-12 animate-float-y" />
                        <h2 className="text-white text-[23px] lg:text-[26px] font-andika font-bold mt-12">
                            Expertly Crafted
                        </h2>
                        <p className="text-gray-300 text-[16px] lg:text-[20px] font-andika mt-6">
                            Blended by master herbalists with decades of experience in flavor
                            profiling.
                        </p>
                    </div>

                    {/* Box 3 */}
                    <div className="w-[300px] h-[383px] lg:w-[320px] lg:h-[483px] bg-[#2A3028] rounded-lg flex flex-col items-center p-6 text-center">
                        <HeartPulse className="w-[60px] h-[60px] text-[#38611F] mt-6 animate-float-y lg:mt-12" />
                        <h2 className="text-white text-[23px] lg:text-[26px] font-andika font-bold mt-12">
                            Health Benefits
                        </h2>
                        <p className="text-gray-300 text-[16px] lg:text-[20px] font-andika mt-6">
                            Packed with antioxidants and nutrients that support overall
                            wellness and immunity.
                        </p>
                    </div>
                </div>
            </div>

            {/* 3rd div - Product Showcase */}
            <div className="w-full mt-4 mb-10 bg-transparent flex flex-col lg:flex-row justify-center items-center gap-28">
                <img
                    src="/omniblend.png"
                    alt="Product"
                    className="w-[300px] lg:w-[509px] h-auto rotate-[-6deg]"
                />
                <div className="relative lg:w-[653px] w-[343px]">
                    <h1 className="text-white font-bold font-andika text-[30px] lg:text-[42px] mb-6">
                        Why Choose Omniblend
                    </h1>
                    <p className="text-white font-andika text-[14px] lg:text-[20px] mb-6 ">
                        Because your time, taste, and standards deserve better. Cooking
                        shouldn't be a chore—or a flavorless routine. Whether it’s breakfast
                        or a midnight snack, OmniBlend replaces cluttered spice racks and
                        guesswork with one bold shake. <br />
                        OmniBlend — where flavor meets freedom.
                    </p>
                    <h2 className="text-white font-andika text-[24px] mb-6">₹ 179.00</h2>
                    <button className="w-[170px] h-[40px] mb-16 lg:mb-0 rounded-lg bg-[#265B06] text-white font-andika text-lg transition duration-300 hover:bg-[#38611F] hover:shadow-[0_0_15px_#38611F] hover:scale-105">
                        🛒 Add to Cart
                    </button>
                </div>
            </div>

            {/* 4th div - Newsletter */}
            <div
                className="w-full py-24"
                style={{ background: "linear-gradient(135deg, #1E211D, #131313)" }}
            >
                <h1 className="text-white font-andika text-[28px] lg:text-[42px] text-center font-bold mb-2 lg:mb-6">
                    Join Our Community
                </h1>
                <p className="text-white font-andika text-[12px] lg:text-[18px] text-center lg:w-[847px] w-[369px] lg:h-[88px] h-[30px] mx-auto mb-10">
                    Subscribe to receive exclusive recipes, special offers, and expert
                    tips on how to make the most of your Omniblend spices.
                </p>

                <div className="flex justify-center items-center gap-1 lg:gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-[240px] h-[35px] lg:w-[500px] lg:h-[45px] rounded-3xl bg-[#4C4C4C] text-white font-andika text-[14px] lg:text-lg px-5 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#38611F] transition duration-300"
                    />
                    <button className="w-[100px] h-[35px] lg:w-[170px] lg:h-[45px] rounded-3xl bg-[#265B06] text-white font-andika text-[14px] lg:text-lg transition duration-300 hover:bg-[#38611F] hover:shadow-[0_0_15px_#38611F] hover:scale-105">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* 5th div - Footer */}
            <div className="w-full bg-transparent flex flex-col items-center mt-8">
                <img src="/logo1.png" alt="Logo" className="lg:w-[148px] lg:h-[56px] w-[100px] h-[40px] mt-8 mb-7" />

                <div className="flex space-x-8 mb-9">
                    <button className="text-white text-[12px] lg:text-[16px] font-andika">About Us</button>
                    <button className="text-white text-[12px] lg:text-[16px] font-andika">Recipes</button>
                    <button className="text-white text-[12px] lg:text-[16px] font-andika">Blog</button>
                    <button className="text-white text-[12px] lg:text-[16px] font-andika">Contact Us</button>
                </div>

                <div className="flex space-x-4 mb-4">
                    <button>
                        <Instagram className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] text-white" />
                    </button>
                    <button>
                        <MessageCircleReply className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] text-white" />
                    </button>
                </div>

                <div className="flex items-center space-x-2 text-gray-400 text-[12px] mt-8 lg:mt-9 mb-1">
                    <Copyright className="w-3 h-3" />
                    <span>2025 Randall’s Omniblend. All rights reserved.</span>
                </div>
            </div>
        </section>
    );
};

export default Home;
