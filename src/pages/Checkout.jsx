import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Globe, Landmark as LandmarkIcon, User, Smartphone, Phone, Home, Building2, MapPin, Milestone, Pin, ArrowRight, Check } from 'lucide-react';

const countries = ["India", "USA", "Canada", "UK", "United Arab Emirates"];
const states = {
    "India": ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],
    "USA": ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
    "Canada": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"],
    "UK": ["England", "Scotland", "Wales", "Northern Ireland"],
    "United Arab Emirates": ["Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain"]
};

const countryCodes = {
    "India": "+91",
    "USA": "+1",
    "Canada": "+1",
    "UK": "+44",
    "United Arab Emirates": "+971"
};

const countryPhoneLength = {
    "India": 10,
    "USA": 10,
    "Canada": 10,
    "UK": 11,
    "United Arab Emirates": 9
};

const Checkout = () => {
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleNumberInput = (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1A2C16] to-[#37452F] p-4 sm:p-8 flex items-center justify-center font-andika">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-5xl bg-[#C5C7C3]/80 rounded-2xl shadow-2xl p-6 sm:p-10 backdrop-blur-sm"
            >
                {/* Stepper */}
                <div className="flex items-center justify-center mb-8 sm:mb-12">
                    <div className="flex items-center text-gray-500">
                        <div className="rounded-full bg-gray-400/70 text-white w-8 h-8 flex items-center justify-center">1</div>
                        <span className="ml-2 text-sm sm:text-base">Shop</span>
                    </div>
                    <div className="flex-auto border-t-2 border-dashed border-gray-400 mx-4"></div>
                    <div className="flex items-center text-[#3C7E14] font-bold">
                        <div className="rounded-full bg-[#3C7E14] text-white w-8 h-8 flex items-center justify-center">
                            <Check size={20} />
                        </div>
                        <span className="ml-2 text-sm sm:text-base">Delivery Details</span>
                    </div>
                    <div className="flex-auto border-t-2 border-dashed border-gray-400 mx-4"></div>
                    <div className="flex items-center text-gray-500">
                        <div className="rounded-full bg-gray-400/70 text-white w-8 h-8 flex items-center justify-center">3</div>
                        <span className="ml-2 text-sm sm:text-base">Payment</span>
                    </div>
                </div>

                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {/* Form Fields */}
                        {[
                            { label: 'Full name', icon: User, placeholder: 'John Doe' },
                            { label: 'Address', icon: Home, placeholder: '123, Spice Street' },
                            { label: 'Town/city', icon: Building2, placeholder: 'Flavorville' },
                            { label: 'Area', icon: MapPin, placeholder: 'Downtown' },
                            { label: 'Landmark', icon: Milestone, placeholder: 'Near the big pepper mill' },
                            { label: 'Pincode', icon: Pin, placeholder: '123456' },
                        ].map((field, index) => (
                            <div className="flex flex-col" key={index}>
                                <label className="flex items-center mb-2 text-gray-800 font-semibold">
                                    {React.createElement(field.icon, { size: 18, className: "mr-2 text-gray-600" })}
                                    {field.label}
                                </label>
                                <input
                                    type="text"
                                    placeholder={field.placeholder}
                                    className="w-full p-3 rounded-lg bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3C7E14] transition shadow-sm"
                                />
                            </div>
                        ))}

                        {/* Country Dropdown */}
                        <div className="flex flex-col">
                            <label className="flex items-center mb-2 text-gray-800 font-semibold">
                                <Globe size={18} className="mr-2 text-gray-600" />
                                Country
                            </label>
                            <select
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                                className="w-full h-[50px] p-3 rounded-lg bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3C7E14] transition shadow-sm"
                            >
                                <option value="" disabled>Select Country</option>
                                {countries.map(country => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                        </div>

                        {/* State Dropdown */}
                        <div className="flex flex-col">
                            <label className="flex items-center mb-2 text-gray-800 font-semibold">
                                <LandmarkIcon size={18} className="mr-2 text-gray-600" />
                                State
                            </label>
                            <select
                                disabled={!selectedCountry}
                                className="w-full p-3 h-[50px] rounded-lg bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3C7E14] transition shadow-sm"
                                defaultValue=""
                            >
                                <option value="" disabled>Select State</option>
                                {selectedCountry && states[selectedCountry].map(state => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>

                        {/* Mobile Number */}
                        <div className="flex flex-col">
                            <label className="flex items-center mb-2 text-gray-800 font-semibold">
                                <Smartphone size={18} className="mr-2 text-gray-600" />
                                Mobile Number
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-lg">
                                    {selectedCountry ? countryCodes[selectedCountry] : "--"}
                                </span>
                                <input
                                    type="text"
                                    placeholder="9876543210"
                                    className="w-full p-3 rounded-r-lg bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3C7E14] transition shadow-sm"
                                    maxLength={selectedCountry ? countryPhoneLength[selectedCountry] : undefined}
                                    onInput={handleNumberInput}
                                />
                            </div>
                        </div>

                        {/* Alternative Number */}
                        <div className="flex flex-col">
                            <label className="flex items-center mb-2 text-gray-800 font-semibold">
                                <Phone size={18} className="mr-2 text-gray-600" />
                                Alternative Number
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-lg">
                                    {selectedCountry ? countryCodes[selectedCountry] : "--"}
                                </span>
                                <input
                                    type="text"
                                    placeholder="Optional"
                                    className="w-full p-3 rounded-r-lg bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3C7E14] transition shadow-sm"
                                    maxLength={selectedCountry ? countryPhoneLength[selectedCountry] : undefined}
                                    onInput={handleNumberInput}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 sm:mt-12">
                        <button
                            type="submit"
                            className="group w-full max-w-md sm:w-[497px] bg-[#3C7E14] text-white py-3 px-6 rounded-lg text-lg font-bold shadow-lg hover:bg-[#2E6010] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                            Continue to Payment
                            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={20} />
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Checkout;
