import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Successfullyreg = () => {
    return (
        <motion.section
            className="w-full min-h-screen flex flex-col items-center justify-center bg-[#171816] overflow-x-hidden"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
        >
            <div
                className="w-full min-h-screen relative bg-cover bg-left lg:bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/Loginbg.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative z-10 text-center text-white p-8">
                    <h1 className="text-5xl font-bold mb-4 font-andika">Registration Successful!</h1>
                    <p className="text-xl mb-8 font-andika">Thank you for joining our community.</p>
                    <Link
                        to="/login"
                        className="bg-[#3C7E14] text-white px-6 py-3 rounded-md text-lg font-andika hover:bg-green-700 transition"
                    >
                        Proceed to Login
                    </Link>
                </div>
            </div>
        </motion.section>
    )
}
export default Successfullyreg;
