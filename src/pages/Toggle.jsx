import React from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const Toggle = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 z-50">
            {/* Background overlay (50% black) */}
            <button
                aria-label="Close menu"
                onClick={() => navigate(-1)}
                className="absolute inset-0 bg-black/50"
            />

            {/* Slide-in panel from right */}
            <motion.aside
                className="absolute right-0 top-0 h-full w-[82%] sm:w-[420px] bg-[#2B332B] text-white shadow-2xl"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.35 }}
            >
                <div className="h-full px-6 py-8">
                    <div className="flex items-center justify-between">
                        <h2 className="font-andika text-[22px] sm:text-[24px] font-bold">Pages :</h2>
                        <button aria-label="Go back" onClick={() => navigate(-1)} className="p-2 hover:text-[#6AC05E]">
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="mt-3 h-[2px] w-full bg-white/30" />

                    <nav className="mt-8 space-y-8 font-andika">
                        <Link className="block text-[20px] sm:text-[22px]" to="/home">Home</Link>
                        <Link className="block text-[20px] sm:text-[22px]" to="/story">Story</Link>
                        <Link className="block text-[20px] sm:text-[22px]" to="/shop">Shop</Link>
                        <Link className="block text-[20px] sm:text-[22px]" to="/contact">Contact Us</Link>
                    </nav>
                </div>
            </motion.aside>
        </div>
    )
}

export default Toggle


