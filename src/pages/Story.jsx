import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {AlignJustify, Leaf, Award, Users, Lightbulb, Scale, Headset, Instagram, MessageCircleReply, Copyright} from "lucide-react";

const Story = () => {
    const navigate = useNavigate();
    return (
        <div
            className="w-full min-h-screen"
            style={{
                background: "linear-gradient(135deg, #273123, #1A1A1A)",
            }}
        >
            <section className="w-screen flex justify-center ">
                <div className="relative w-screen h-[326px] overflow-hidden">
                    <img src="/Navbar.jpg" alt="Navbar background" className="absolute inset-0 w-[440px] h-[378px] lg:w-screen lg:h-auto object-cover opacity-40 pointer-events-none z-0" />
                    <div className="absolute inset-0 bg-black opacity-60 pointer-events-none z-10" />
                    <div className="relative z-20 flex items-center justify-between py-5 lg:py-8 ">
                        <img src="/logo1.png" alt="Logo" className="relative w-[74px] h-[25px] lg:w-[110px] lg:h-[42px] left-2 lg:left-5" />

                        <div className="hidden md:flex space-x-16 font-bold text-white font-andika">
                            <Link to="/home">Home</Link>
                            <Link to="/story">Story</Link>
                            <Link to="/Shop">Shop</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>

                        <button className="relative w-[85px] h-[20px] lg:w-[170px] lg:h-[40px] right-5 lg:right-5 rounded-lg bg-[#265B06] text-white font-andika text-[10px] lg:text-lg transition duration-300 hover:bg-[#38611F] hover:shadow-[0_0_15px_#38611F] hover:scale-105">
                            Login
                        </button>
                        <div className="md:hidden flex right-4 relative">
                            <button onClick={() => navigate('/toggle')} aria-label="Menu" className="p-2 hover:text-[#38611F] transition">
                                <AlignJustify className="text-white"/>
                            </button>
                        </div>
                    </div>
                    <div className="relative justify-center text-center rihg z-20 lg:mt-4 mt-8 space-y-2">
                        <h1 className="font-bold text-white font-andika text-[45px] lg:text-[55px]">
                            Our Story
                        </h1>
                        <h1 className="font-andika text-white font-light text-[18px] lg:text-[18px] ">
                            Discover the journey behind Omniblend. Where traidition meets <br/> innovations in creating the perfect blend of premium spices.
                        </h1>
                    </div>
                </div>
            </section>
            {/* Intro Section */}
            <section
                className="w-screen h-auto lg:h-[790px] flex flex-col items-center justify-center gap-10 px-6 lg:px-16 py-14"
                style={{ background: "linear-gradient(135deg, #282E22, #161715)" }}
            >
                {/* Centered heading row */}
                <div className="w-full flex justify-center">
                    <h2 className="text-white font-andika font-bold text-[28px] sm:text-[32px] lg:text-[36px] text-center inline-block border-b-2 border-white/65 pb-2 mt-8">
                        Introducing Omniblend
                    </h2>
                </div>

                {/* Content: image left, paragraph right on desktop; stacked on mobile */}
                <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: Product */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src="/omniblend.png"
                            alt="Omniblend product"
                            className="w-[240px] sm:w-[280px] lg:w-[420px] rotate-[-8deg]"
                        />
                    </div>

                    {/* Right: Paragraph */}
                    <div className="flex justify-center lg:justify-start">
                        <p className="text-white/90 font-andika text-[16px] sm:text-[18px] lg:text-[24px] leading-relaxed max-w-[780px] text-center lg:text-left">
                            OmniBlend is our all-in-one spice innovation—meticulously balanced with 20+ premium ingredients. From smoked paprika to real sumac, each spice is crushed and powdered for maximum depth and texture. Whether you’re grilling, roasting, stir-frying, or sprinkling on snacks, one shake transforms any meal into a masterpiece.
                        </p>
                    </div>
                </div>
            </section>

            {/* Ingredients Section */}
            <section
                className="w-screen px-6 lg:px-16 py-16"
                style={{ background: "linear-gradient(135deg, #1D2219, #171816)" }}
            >
                {/* Heading */}
                <div className=" w-full flex flex-col items-center text-center mt-8">
                    <h2 className="text-white font-andika font-bold text-[26px] sm:text-[30px] lg:text-[36px]">
                        Sourcing The Finest Ingredients
                    </h2>
                    <div className="w-24 h-[2px] bg-white/70 mt-2 mb-4" />
                    <p className="text-white/80 font-andika text-[14px] sm:text-[16px] lg:text-[18px] max-w-[900px]">
                        We travel the world to find the highest quality spices, working directly with farmers who share our
                        commitment to sustainable and ethical practices
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-28 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Smoked Paprika", image: "/smokedpaprika.jpg", href: "https://en.wikipedia.org/wiki/Paprika", desc: "Smoked paprika is a rich, smoky spice made from wood-smoked red peppers, perfect for adding depth and flavor to meats, stews, and veggies." },
                        { title: "Garlic", image: "/garlic.jpg", href: "https://en.wikipedia.org/wiki/Garlic", desc: "Garlic is a flavorful, aromatic bulb used worldwide as a spice and medicine, known for its pungent taste and health benefits." },
                        { title: "Onion", image: "/onion.jpg", href: "https://en.wikipedia.org/wiki/Onion", desc: "Onion is a versatile vegetable with a sharp, savory flavor that turns sweet when cooked, widely used to enhance dishes around the world." },
                        { title: "Black pepper", image: "/pepper.jpg", href: "https://en.wikipedia.org/wiki/Black_pepper", desc: "Black pepper is a bold, aromatic spice made from dried peppercorns, prized for its sharp, spicy flavor that enhances both savory and sweet dishes." },
                        { title: "Cumin Seeds", image: "/cuminseed.jpg", href: "https://en.wikipedia.org/wiki/Cumin", desc: "Cumin is a warm, earthy spice made from dried seeds, known for its nutty, slightly peppery flavor that adds depth to curries, stews, and spice blends." },
                        { title: "Coriander Seeds", image: "/corriander.jpg", href: "https://en.wikipedia.org/wiki/Coriander", desc: "Coriander seed is a fragrant spice with a warm, citrusy, and slightly sweet flavor, commonly used in curries, pickles, and spice blends." },
                        { title: "Toasted Sesame Seeds", image: "/toastedseasame.jpg", href: "https://en.wikipedia.org/wiki/Sesame", desc: "Toasted sesame seeds have a rich, nutty flavor and a crunchy texture, perfect for sprinkling on breads, salads, and stir-fries." },
                        { title: "Light Citrus", image: "/citrus.jpg", href: "https://en.wikipedia.org/wiki/Citrus", desc: "Delivers light citrus notes that brighten and balance the spice blend." },
                        { title: "Rosemary Seeds", image: "/rosemarseeds.jpg", href: "https://en.wikipedia.org/wiki/Rosmarinus_officinalis", desc: "Rosemary seeds grow into a fragrant herb with a pine-like flavor, perfect for seasoning meats, breads, and Mediterranean dishes." },
                        { title: "Cracked Fennel", image: "/crackedfennel.jpg", href: "https://en.wikipedia.org/wiki/Fennel", desc: "Cracked fennel has a sweet, slightly licorice-like flavor, perfect for adding aroma and depth to breads, sausages, and spice blends." },
                    ].map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            className="group bg-[#2A3028]/80 rounded-lg border border-[#3B4A39]/60 p-4 lg:p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:border-[#6AC05E]/60 focus:outline-none focus:ring-2 focus:ring-[#6AC05E]/40"
                        >
                            <div className="w-full h-[160px] lg:h-[180px] rounded-md overflow-hidden mb-4">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <h3 className="text-[#6AC05E] font-andika font-bold text-[16px] lg:text-[18px] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-white/85 font-andika text-[13px] lg:text-[14px] leading-relaxed">
                                {item.desc}
                            </p>
                        </a>
                    ))}
                </div>
            </section>

            {/* Values Section */}
            <section
                className="w-screen px-6 lg:px-16 py-16"
                style={{ background: "linear-gradient(135deg, #1D2219, #171816)" }}
            >
                <div className="w-full flex flex-col items-center text-center">
                    <h2 className="text-white font-andika font-bold text-[26px] sm:text-[30px] lg:text-[36px]">
                        Our Values
                    </h2>
                    <div className="w-20 h-[2px] bg-white/70 mt-2 mb-4" />
                    <p className="text-white/80 font-andika text-[14px] sm:text-[16px] lg:text-[18px] max-w-[900px]">
                        At Omniblend, our business is built on core principles that guide every decision we make,
                        from sourcing to production to community engagement.
                    </p>
                </div>

                <div className="mt-20 lg:w-[1224px] mx-auto mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 place-items-center">
                    {[
                        { icon: Leaf, title: 'Sustainability', text: "we're committed to environmentally responsible practices throughout our supply chain, from farm to table." },
                        { icon: Award, title: 'Quality', text: 'we never compromise on quality, selecting only the finest ingredients and maintaining rigorous standards.' },
                        { icon: Users, title: 'Community', text: 'we build lasting relationships with farmers and support the communities where our ingredients are grown.' },
                        { icon: Lightbulb, title: 'Innovation', text: 'we constantly explore new techniques and combinations while respecting traditional methods.' },
                        { icon: Scale, title: 'Fair Trade', text: 'we ensure fair compensation for farmers and workers throughout our global supply chain.' },
                        { icon: Headset, title: 'Service', text: "we're dedicated to exceptional customer service and building relationships with our customers" },
                    ].map(({ icon: Icon, title, text }, idx) => (
                        <div key={idx} className="w-[300px] sm:w-[340px] lg:w-[360px] h-auto lg:h-[390px] mx-auto bg-[#2A3028]/60 rounded-lg border border-[#3B4A39]/60 p-6 lg:p-8 text-center shadow-[0_0_0_1px_rgba(0,0,0,0.15)] flex flex-col items-center justify-start">
                            <Icon className="mt-10 mx-auto w-10 h-10 text-[#38611F] mb-4 animate-float-y" />
                            <h3 className="mt-4 text-white font-andika font-bold text-[18px] lg:text-[24px] mb-1">{title}</h3>
                            <p className="mt-4 text-white/80 font-andika text-[13px] lg:text-[14px] leading-relaxed max-w-[320px] mx-auto">{text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Honor & Impact Section */}
            <section
                className="w-screen px-6 lg:px-16 py-16"
                style={{ background: "linear-gradient(135deg, #1D2219, #171816)" }}
            >
                {/* Heading */}
                <div className="w-full flex flex-col items-center text-center mb-8 lg:mb-12">
                    <h2 className="text-white font-andika font-bold text-[26px] sm:text-[30px] lg:text-[36px]">
                        Honor & Impact
                    </h2>
                    <div className="w-24 h-[2px] bg-white/70 mt-2 mb-8" />
                </div>

                {/* Content */}
                <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center mb-20">
                    {/* Left: Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="rounded-xl bg-black/30 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                            <img
                                src="/Randall.jpg"
                                alt="Randall"
                                className="w-[520px] max-w-full rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Copy */}
                    <div className="text-center lg:text-left">
                        <p className="text-white font-andika text-[18px] sm:text-[20px] lg:text-[24px] leading-relaxed">
                            In memory of our dear friend Randall L. McConahay, whose passion inspired us daily, a
                            percentage of every order goes to the Randall’s Cremation Society—to plant trees and keep his
                            spirit alive in every forest we grow.
                        </p>
                    </div>
                </div>
            </section>

            {/* Links Section (Footer-style) */}
            <section
                className="w-screen px-6 lg:px-16 py-12"
                style={{ background: "transparent" }}
            >
                <div className="max-w-[1200px] h-[280px] lg:h-[210px] mx-auto w-full">
                    {/* Top row: left logo, centered nav */}
                    <div className="relative flex items-center justify-center h-[60px]">
                        <img src="/logo1.png" alt="Logo" className="absolute lg:-left-32 mb-8 mt-8 lg:top-1/2 -translate-y-1/2 w-[148px] h-[56px] object-contain" />
                        <nav className="relative mt-32 lg:mt-0 flex items-center gap-12 lg:gap-24 text-white font-andika font-bold ">
                            <a href="/about" className="hover:text-[#6AC05E] transition">About Us</a>
                            <a href="/recipes" className="hover:text-[#6AC05E] transition">Recipes</a>
                            <a href="/blog" className="hover:text-[#6AC05E] transition">Blog</a>
                            <a href="/contact" className="hover:text-[#6AC05E] transition">Contact Us</a>
                        </nav>
                    </div>

                    {/* Icon buttons centered */}
                    <div className="mt-24 lg:mt-6 flex items-center justify-center gap-8">
                        <button aria-label="Instagram" className="p-2 text-white hover:text-[#6AC05E] transition">
                            <Instagram className="w-7 h-7" />
                        </button>
                        <button aria-label="Message" className="p-2 text-white hover:text-[#6AC05E] transition">
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
    )
}
export default Story
