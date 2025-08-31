import React, { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

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
                className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-16 py-6 absolute top-0 left-0 z-50"
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
                <nav className="hidden sm:flex relative gap-3 lg:left-0 left-12">
                    <Link
                        to="/home"
                        className="text-[13px] font-michroma font-medium text-[#0A0A0A] bg-[#D9D9D9] hover:bg-[#FFFFFF] transition px-4 py-1.5 rounded-full"
                    >
                        Product
                    </Link>
                    <Link
                        to="/contact"
                        className="text-[13px] font-michroma font-medium text-[#EDEAFF] bg-[#1E1E1E] hover:bg-[#000000] transition px-4 py-1.5 rounded-full"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Right Icon */}
                <div className="flex sm:hidden items-center justify-center">
                    <MoreHorizontal className="text-white w-8 h-8" />
                </div>
                <div className="hidden sm:flex items-center justify-center">
                    <MoreHorizontal className="text-white w-8 h-8" />
                </div>
            </motion.header>


            {/* Hero Section */}
            <main className="flex-1 flex items-center justify-center relative mt-16 sm:mt-0">
                {/* Central product container */}
                <div className="relative flex justify-center items-center">
                    {/* Background image */}
                    <motion.img
                        src="/Omniblendbg.png"
                        alt="Background Omniblend"
                        className="absolute w-[300px] sm:w-[350px] lg:w-[500px] top-28 sm:top-24 h-auto "
                        initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                        animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                    />
                    {/* Foreground image */}
                    <motion.img
                        src="/omniblend.png"
                        alt="Landing"
                        className={`relative w-[280px] sm:w-[330px] lg:w-[500px] top-14 sm:top-0 h-auto z-20 ${isExiting ? "" : "animate-drop-then-float"}`}
                        initial={false}
                        animate={isExiting ? { scale: 1.6, opacity: 0 } : {}}
                        transition={isExiting ? { duration: 1.1, ease: "easeIn" } : {}}
                        onAnimationComplete={() => {
                            if (isExiting) {
                                setTimeout(() => navigate("/home"), 150);
                            }
                        }}
                    />

                    {/* Overlay text */}
                    <div className="absolute -left-10 sm:-left-0 lg:-left-[600px] -top-24 sm:-top-6 lg:top-36 text-right">
                        <h1 className="font-light font-michroma text-lg sm:text-[22px] lg:text-[30px]">
                            Randall’s <br /> Harvest
                        </h1>
                    </div>

                    <div className="absolute -left-10 sm:-left-0 lg:-left-[600px] -top-8 sm:-top-10 lg:top-[240px] text-right">
                        <h1 className="font-extrabold font-michroma text-lg sm:text-[22px] lg:text-[30px]">
                            OMNIBLEND
                        </h1>
                    </div>

                    <div className="absolute -right-10 sm:-right-0 lg:-right-[500px] -bottom-40 sm:-bottom-48 lg:bottom-24">
                        <h2 className="text-base sm:text-[18px] lg:text-[20px]">85 g</h2>
                    </div>
                </div>

                {/* Blur overlay */}
                <AnimatePresence>
                    {isExiting && (
                        <motion.div
                            className="fixed inset-0 z-10"
                            initial={{ backdropFilter: "blur(0px)" }}
                            animate={{ backdropFilter: "blur(8px)" }}
                            exit={{ backdropFilter: "blur(0px)" }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            style={{ background: "transparent" }}
                        />
                    )}
                </AnimatePresence>

                {/* Black fade overlay */}
                <AnimatePresence>
                    {isExiting && (
                        <motion.div
                            className="fixed inset-0 bg-black z-30"
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
                className="w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-16 mb-8 gap-4 sm:gap-3"
                initial={{ opacity: 1 }}
                animate={{ opacity: isExiting ? 0 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Left Icon */}
                <div className="flex sm:hidden items-center justify-center">
                    <MoreHorizontal className="text-white w-8 h-8" />
                </div>
                <div className="hidden sm:flex items-center justify-center">
                    <MoreHorizontal className="text-white w-8 h-8" />
                </div>

                {/* Price */}
                <h1 className="text-white font-michroma font-bold text-lg lg:text-xl order-2 sm:order-1">
                    ₹ 179.00
                </h1>

                {/* Button */}
                <button
                    onClick={handleReadyToBuy}
                    className="text-[13px] font-michroma font-bold text-[#0A0A0A] bg-[#D9D9D9] hover:bg-[#FFFFFF] transition px-4 sm:px-3 lg:px-5 py-2 sm:py-1 lg:py-2 rounded-full order-1 sm:order-2"
                >
                    Ready to Buy ?
                </button>
            </motion.footer>
        </motion.section>
    );
};

export default Landing;
