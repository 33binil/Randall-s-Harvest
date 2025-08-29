import React, { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
    const [isExiting, setIsExiting] = useState(false);

    const handleReadyToBuy = useCallback(() => {
        if (isExiting) return;
        setIsExiting(true);
    }, [isExiting]);

    return (
        <motion.section
            className="min-h-screen w-full flex flex-col text-white relative overflow-hidden"
            style={{
                background: "radial-gradient(circle, #6E0F0F 0%, #300000 100%)",
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
        >
            {/* Navbar */}
            <motion.header
                className="w-full flex items-center justify-between px-6 lg:px-16 py-6 absolute top-0 left-0"
                initial={{ opacity: 1 }}
                animate={{ opacity: isExiting ? 0 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Logo */}
                <img
                    src="/logo1.png"
                    alt="Landing Logo"
                    className="w-[90px] lg:w-[110px] h-auto"
                />

                {/* Center Buttons */}
                <nav className="relative flex gap-3 lg:left-0 left-12">
                    <button className="text-[13px] font-michroma font-medium text-[#0A0A0A] bg-[#D9D9D9] hover:bg-[#FFFFFF] transition px-4 py-1.5 rounded-full">
                        Product
                    </button>
                    <button className="text-[13px] font-michroma font-medium text-[#EDEAFF] bg-[#1E1E1E] hover:bg-[#000000] transition px-4 py-1.5 rounded-full">
                        Contact
                    </button>
                </nav>

                {/* Right Icon */}
                <h1 className="relative text-white font-extrabold text-2xl top-14 lg:top-0 -left-3 lgleft-0">. . .</h1>
            </motion.header>

            {/* Hero Section */}
            <main className="flex-1 flex items-center justify-center relative">

                {/* Central product container */}
                <div className="relative flex justify-center items-center">
                    {/* Background image */}
                    <motion.img
                        src="/Omniblendbg.png"
                        alt="Background Omniblend"
                        className="absolute w-[350px] lg:w-[500px] top-28 lg:top-24 h-auto "
                        initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                        animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                    />
                    {/* Foreground image */}
                    <motion.img
                        src="/omniblend.png"
                        alt="Landing"
                        className={`relative w-[330px] lg:w-[500px] top-14 lg:top-0 h-auto z-20 ${isExiting ? "" : "animate-drop-then-float"}`}
                        initial={false}
                        animate={isExiting ? { scale: 1.6, opacity: 0 } : {}}
                        transition={isExiting ? { duration: 1.1, ease: "easeIn" } : {}}
                        onAnimationComplete={() => {
                            if (isExiting) {
                                // Navigate slightly after fade-to-black starts
                                setTimeout(() => navigate("/home"), 150);
                            }
                        }}
                    />

                    {/* Overlay text (positioned around product) */}
                    <div className="absolute -left-0 lg:-left-[600px] -top-16 lg:top-36 text-right">
                        <h1 className="font-light font-michroma text-[22px] lg:text-[30px]">
                            Randall’s <br /> Harvest
                        </h1>
                    </div>

                    <div className="absolute -left-0 lg:-left-[600px] -top-0 lg:top-[240px] text-right">
                        <h1 className="font-extrabold font-michroma text-[22px] lg:text-[30px]">
                            OMNIBLEND
                        </h1>
                    </div>

                    <div className="absolute -right-0 lg:-right-[500px] -bottom-48 lg:bottom-24">
                        <h2 className="text-[18px] lg:text-[20px]">85 g</h2>
                    </div>
                </div>

                {/* Blur overlay (below product to blur background only) */}
                <AnimatePresence>
                    {isExiting && (
                        <motion.div
                            className="absolute inset-0 z-10"
                            initial={{ backdropFilter: "blur(0px)" }}
                            animate={{ backdropFilter: "blur(8px)" }}
                            exit={{ backdropFilter: "blur(0px)" }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            style={{ background: "transparent" }}
                        />
                    )}
                </AnimatePresence>

                {/* Black fade overlay (above everything) */}
                <AnimatePresence>
                    {isExiting && (
                        <motion.div
                            className="absolute inset-0 bg-black z-30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.1, ease: "easeIn" }}
                        />
                    )}
                </AnimatePresence>
            </main>

            {/* Bottom Section */}
            <motion.footer
                className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 mb-8 gap-3"
                initial={{ opacity: 1 }}
                animate={{ opacity: isExiting ? 0 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Left Icon */}
                <h1 className="relative text-white font-extrabold -left-40 text-2xl">. . .</h1>

                {/* Price */}
                <h1 className="text-white font-michroma font-bold text-lg lg:text-xl">
                    ₹ 179.00
                </h1>

                {/* Button */}
                <button onClick={handleReadyToBuy} className="text-[13px] font-michroma font-bold text-[#0A0A0A] bg-[#D9D9D9] hover:bg-[#FFFFFF] transition px-3 lg:px-5 py-1 lg:py-2 rounded-full">
                    Ready to Buy ?
                </button>
            </motion.footer>

            {/* Global overlays placed at section level to cover entire page */}
            <AnimatePresence>
                {isExiting && (
                    <motion.div
                        className="absolute inset-0 z-40"
                        initial={{ backdropFilter: "blur(0px)" }}
                        animate={{ backdropFilter: "blur(10px)" }}
                        exit={{ backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{ background: "transparent" }}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isExiting && (
                    <motion.div
                        className="absolute inset-0 bg-black z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.1, ease: "easeIn" }}
                    />
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default Landing;

