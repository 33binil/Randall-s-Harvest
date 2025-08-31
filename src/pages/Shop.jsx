// src/pages/Shop.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {AlignJustify, Copyright, Instagram, MessageCircleReply, Minus, Plus, Truck} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Shop = () => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const [mainImage, setMainImage] = useState("/7.jpg");
    const thumbnails = ["/6.jpg", "/5.jpg", "/3.jpg", "/2.jpg"];
    const [activeTab, setActiveTab] = useState("description");

    return (
        <motion.section
            className="w-full min-h-screen flex flex-col items-center bg-[#171816] overflow-x-hidden"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
        >
        <div
            className="w-full min-h-screen"
            style={{
                background: "linear-gradient(135deg, #273123, #1A1A1A)",
            }}
        >
            {/* ---------- Header ---------- */}
            <section className="w-screen flex justify-center">
                <div className="relative w-screen lg:h-[90px] overflow-hidden">
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
            </section>

            {/* ---------- Main Content ---------- */}
            <section className="h-auto w-full text-white font-andika lg:px-64 py-2 lg:py-32 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* ---------- Left Section - Product Images ---------- */}
                    <section className="flex flex-col items-center">
                        {/* Main Product Image */}
                        <div className="relative w-[350px] lg:w-[615px] lg:h-[504px] rounded-xl overflow-hidden mt-2 lg:mt-0 bg-gradient-to-br from-[#FFFFFF]/20 to-[#FFFFFF]/0 p-5 shadow-lg flex justify-center items-center">
                            <img
                                src={mainImage}
                                alt="Omniblend"
                                className="w-[358px] h-auto rounded-lg"
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="relative w-[350px] lg:w-full max-w-[615px] flex justify-center gap-4 mt-4 lg:mt-6">
                            {thumbnails.map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setMainImage(img)}
                                    className="w-20 h-24 lg:w-[141px] lg:h-[212px] rounded-lg overflow-hidden bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/0 cursor-pointer border border-transparent hover:border-green-500 transition flex items-center justify-center shadow-xl"
                                >
                                    <img
                                        src={img}
                                        alt={`thumb-${i}`}
                                        className="w-[70px] lg:w-[132px] h-auto object-cover px-1"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ---------- Right Section - Product Details ---------- */}
                    <section className="mt-7 px-16">
                        <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 bg-green-800/80 rounded-md text-xs font-bold uppercase tracking-wide">
                New
              </span>
                            <span className="px-2 py-1 bg-green-800/80 rounded-md text-xs font-bold uppercase tracking-wide">
                Premium
              </span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Omniblend</h1>
                        <p className="text-[#4C9B1D] font-semibold mb-4">
                            Randall's Harvest Premium Spice Blend
                        </p>

                        <p className="lg:w-[497px] text-gray-300 mb-8 text-sm lg:text-base leading-relaxed">
                            Experience the perfect harmony of flavors with Omniblend, our
                            signature premium spice powder. Carefully crafted with a selection
                            of the finest herbs and spices from around the world, this
                            versatile blend elevates any dish with its complex, balanced
                            profile. Each jar contains 100g of our proprietary blend,
                            packaged to preserve freshness and flavor.
                        </p>

                        <p className="lg:w-[497px] text-[#4C9B1D] mb-8 text-sm lg:text-base leading-relaxed">
                            85g | Gourmet Seasoning Blend | Dual Texture | No BS |
                        </p>

                        <h2 className="text-2xl lg:text-3xl font-bold mb-14">₹ 179.00</h2>

                        <div className="flex items-center gap-4 mb-6">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="bg-gray-700 px-3 py-2 rounded-md"
                            >
                                <Minus />
                            </button>
                            <span className="font-bold text-lg">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="bg-gray-700 px-3 py-2 rounded-md"
                            >
                                <Plus />
                            </button>
                        </div>

                        <button onClick={() => navigate("/checkout")} className="w-[170px] h-[40px] flex items-center justify-center gap-2 px-6 py-3 bg-[#265B06] rounded-full font-semibold text-white shadow-lg hover:bg-[#38611F] hover:shadow-green-500/30 transition">
                            Buy <Truck size={18} />
                        </button>

                        <div className="text-sm text-gray-400 py-2 space-y-2 mt-10 mb-14">
                            <div className="flex items-center gap-2">
                                <Truck size={18} />
                                <span>Fast Delivery Available</span>
                            </div>
                            <p>
                                <span className="font-semibold text-white">Category:</span>{" "}
                                Premium Spices
                            </p>
                            <p>
                                <span className="font-semibold text-white">Tags:</span> Organic,
                                Gourmet, Artisanal
                            </p>
                        </div>
                    </section>
                </div>
            </section>
            <section
                className="w-full h-auto flex flex-col gap-10 px-4 sm:px-6 lg:px-16 py-10 sm:py-14"
                style={{ background: "linear-gradient(135deg, #1D2219, #171816)" }}
            >
                {/* Tabs */}
                <div className="flex flex-wrap justify-center lg:gap-x-6 sm:gap-x-10 border-b border-gray-700 px-4 sm:px-10 lg:px-20">
                    {["description", "ingredients", "usage"].map((tab) => {
                        const isActive = activeTab === tab;
                        const tabLabel = tab.charAt(0).toUpperCase() + tab.slice(1);

                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-t-md font-semibold transition ${
                                    isActive
                                        ? "bg-green-700 text-white"
                                        : "bg-transparent text-gray-300 hover:bg-green-900 hover:text-white"
                                }`}
                            >
                                {tabLabel}
                            </button>
                        );
                    })}
                </div>

                {/* Content */}
                <div className="bg-transparent max-w-screen-xl mx-auto px-4 sm:px-10 lg:px-20 text-gray-200 rounded-b-md shadow-lg mb-8">
                    {activeTab === "description" && (
                        <div className="text-sm lg:text-base leading-relaxed space-y-4 text-center">
                            <p>
                                Omniblend is the culmination of decades of spice expertise from Randall's Harvest. This premium blend combines over 11 carefully selected spices and herbs, creating a versatile seasoning that enhances everything from grilled meats to roasted vegetables.
                            </p>
                            <p>
                                Each small-batch production ensures quality and consistency, with our master blender personally overseeing the process.
                            </p>
                            <p>
                                The result is a perfectly balanced profile that brings depth and complexity to your culinary creations.
                            </p>
                        </div>
                    )}

                    {activeTab === "ingredients" && (
                        <ul className="list-disc list-inside space-y-2 text-sm lg:text-base text-left">
                            <li>Black Pepper</li>
                            <li>Smoked Paprika</li>
                            <li>Garlic</li>
                            <li>Onion</li>
                            <li>Cumin Seeds</li>
                            <li>Rosemary Seeds</li>
                            <li>Coriander Seeds</li>
                            <li>Toasted Sesame Seeds</li>
                            <li>Light Citrus</li>
                            <li>Cracked Fennel</li>
                        </ul>
                    )}

                    {activeTab === "usage" && (
                        <div className="text-sm lg:text-base space-y-4 leading-relaxed text-center mb-8">
                            <p>
                                Sprinkle generously over meats before grilling, mix into marinades, or toss with vegetables before roasting. A teaspoon can transform soups, stews, and even scrambled eggs into gourmet experiences.
                            </p>
                            <p>
                                <strong>Engineered for:</strong> Grills • Roasts • Eggs • Stir-Fries • Wraps • Veggies • Marinades • Sauces • Rice
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <section
                className="w-screen px-6 lg:px-16 py-12"
                style={{ background: "transparent" }}
            >
                <div className="max-w-[1200px] h-[280px] lg:h-[210px] mx-auto w-full">
                    {/* Top row: left logo, centered nav */}
                    <div className="relative flex items-center justify-center h-[60px]">
                        <img src="/logo1.png" alt="Logo" className="absolute lg:-left-32 mb-8 mt-8 lg:top-1/2 -translate-y-1/2 w-[100px] lg:w-[148px] h-auto] object-contain" />
                        <nav className="relative mt-32 lg:mt-0 flex items-center gap-12 lg:gap-24 text-[12px] lg:text-[16px] text-white font-andika font-bold ">
                            <a href="/about" className="hover:text-[#6AC05E] transition">About Us</a>
                            <a href="/recipes" className="hover:text-[#6AC05E] transition">Recipes</a>
                            <a href="/blog" className="hover:text-[#6AC05E] transition">Blog</a>
                            <a href="/contact" className="hover:text-[#6AC05E] transition">Contact Us</a>
                        </nav>
                    </div>

                    {/* Icon buttons centered */}
                    <div className="mt-24 lg:mt-6 flex items-center justify-center gap-8">
                        <button aria-label="Instagram" className="w-[25px] h-auto lg:w-[30px] text-white hover:text-[#6AC05E] transition">
                            <Instagram className="w-7 h-7" />
                        </button>
                        <button aria-label="Message" className="w-[25px] h-auto lg:w-[30px] text-white hover:text-[#6AC05E] transition">
                            <MessageCircleReply className="w-7 h-7" />
                        </button>
                    </div>

                    {/* Copyright centered */}
                    <div className="mt-24 flex items-center justify-center gap-2 text-white/70 font-andika text-[12px]">
                        <Copyright className="w-3 h-3" />
                        <span>2025 Randall’s Omniblend. All rights reserved</span>
                    </div>
                </div>
            </section>
        </div>
        </motion.section>
    );
};

export default Shop;
