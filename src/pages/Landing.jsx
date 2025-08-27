// src/components/Landing.jsx
import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Landing = () => {
    return (
        <section
            className="h-screen w-full flex items-center justify-center text-white relative"
            style={{
                background: "radial-gradient(circle, #6E0F0F 0%, #300000 100%)",
            }}
        >
            <div>
                <div>
                    {/* Logo in top-left */}
                    <div className="absolute left-[72px] top-[59px]">
                        <img
                            src="/logo1.png"
                            alt="Landing Logo"
                            className="w-[110px] h-[42px]"
                        />
                    </div>

                    {/* Top Center content */}
                    <div className="absolute left-[855px] top-[59px] space-x-[10px]">
                        <button
                            className=" text-[13px] font-michroma font-medium text-[#0A0A0A] bg-[#D9D9D9] hover:bg-[#FFFFFF] transition"
                            style={{
                                width: "101px",
                                height: "25px",
                                borderRadius: "15px",
                            }}
                        >
                            Product
                        </button>
                        <button
                            className=" text-[13px] font-michroma font-medium text-[#EDEAFF] bg-[#1E1E1E] hover:bg-[#000000] transition"
                            style={{
                                width: "101px",
                                height: "27px",
                                borderRadius: "15px",
                            }}
                        >
                            Contact
                        </button>
                    </div>
                    {/* Top Right content */}
                    <div className="absolute left-[1792px] top-[40px]">
                        <h1 className="text-white font-extrabold text-3xl">
                            . . .
                        </h1>
                    </div>
                </div>

                {/* Middle */}
                <div>
                    <div>
                        <h1 className=" absolute left-[72px] font-light top-[364px] text-white font-michroma text-[34px]">
                            Randall’s <br /> harvest
                        </h1>
                    </div>
                    <div>
                        <h1 className="absolute left-[72px] top-[478px] font-extrabold text-white font-michroma text-[34px]">
                            OMNIBLEND
                        </h1>
                    </div>
                    <div>
                        <h1 className="absolute left-[137px] top-[593px] text-[20px]">
                            85 g
                        </h1>
                    </div>

                    {/* Container with background + main image */}
                    <div className="relative w-[1197px] h-[689px]">
                        {/* Background image (appears after drop-in) */}
                        <img
                            src="/Omniblendbg.png"
                            alt="Background Omniblend"
                            className="absolute top-10 inset-0 w-[600px] h-[600px] m-auto opacity-0 animate-zoom-rotate-once"
                            style={{ animationDelay: "1.2s" }}
                        />

                        {/* Foreground image (drops in, then floats) */}
                        <img
                            src="/omniblend.png"
                            alt="Landing"
                            className="absolute inset-0 w-[590px] h-[729px] m-auto animate-drop-then-float"
                        />
                    </div>

                </div>


                {/* Bottom */}
                <div>
                    <div className="absolute left-[93px] top-[1030px] ">
                        <h1 className="text-white font-extrabold text-3xl">
                            . . .
                        </h1>
                    </div>
                    <div className="absolute left-[920px] top-[1006px] font-bold">
                        <h1 className=" text-white font-michroma ">
                            ₹ 179.00
                        </h1>
                    </div>
                    <div className="absolute left-[1685px] top-[1006px] ">
                        <button
                            className=" text-[13px] font-michroma font-bold text-[#0A0A0A] bg-[#D9D9D9] hover:bg-[#FFFFFF] transition"
                            style={{
                                width: "140px",
                                height: "40px",
                                borderRadius: "15px",
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
