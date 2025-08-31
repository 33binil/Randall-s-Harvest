import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Successfullyreg = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Background Image */}
            <img
                src="/Loginbg.jpg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60 z-10" />

            {/* Motion container for animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4"
            >
                {/* Success Box */}
                <div className="w-full max-w-md sm:max-w-lg bg-[#C5C7C3]/80 rounded-2xl shadow-2xl p-8 sm:p-10 md:p-12 text-center backdrop-blur-sm">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                        className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-[#3C7E14] rounded-full"
                    >
                        <CheckCircle className="text-white w-12 h-12 sm:w-14 sm:h-14" />
                    </motion.div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-andika font-bold text-[#1A2C16] mb-4">
                        Registration Successful!
                    </h1>

                    <p className="text-sm sm:text-base text-[#1A2C16] mb-8">
                        Thank you for joining Omniblend. You can now log in to your account.
                    </p>

                    <Link
                        to="/login"
                        className="inline-block w-full max-w-xs py-3 bg-[#3C7E14] text-white font-bold text-base sm:text-lg rounded-lg shadow-lg hover:bg-[#2E6010] transition-transform transform hover:scale-105 duration-300"
                    >
                        Go to Login
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Successfullyreg;
