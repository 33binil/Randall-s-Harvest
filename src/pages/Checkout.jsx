import React, { useState } from 'react';
import { Globe, Landmark as LandmarkIcon, User, Smartphone, Phone, Home, Building2, MapPin, Milestone, Pin } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-b from-[#162412] to-[#37452F] p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl h-auto bg-[#C5C7C3] bg-opacity-80 rounded-lg p-4 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row justify-around items-center mb-8 text-gray-800">
          <h2 className="text-lg sm:text-xl opacity-50 mb-4 sm:mb-0">Shop</h2>
          <div className="flex items-center bg-[#3C7E14] text-white px-4 py-2 mb-4 sm:mb-8 rounded-[42px] w-fit relative">
            {/* White circle with tick */}
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-5">
              {/* Tick icon (using SVG) */}
              <svg
                className="w-4 h-4 text-[#3C7E14]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 22 22"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {/* Delivery details text */}
            <h2 className="text-lg sm:text-[23px] font-semibold">Delivery details</h2>
          </div>
          <h2 className="text-lg sm:text-xl opacity-50">Payment </h2>
        </div>
        <form>
          <div className="flex justify-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-20 gap-y-4">
              <div className="flex flex-col">
                <label className="flex items-center mb-1 text-gray-700 font-semibold">
                  <Globe size={18} className="mr-2" />
                  Country
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full sm:w-[440px] h-[45px] p-3 rounded-md bg-white "
                >
                  <option value="" disabled>Select Country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="flex items-center mb-1 text-gray-700 font-semibold">
                  <LandmarkIcon size={18} className="mr-2" />
                  State
                </label>
                <select
                  disabled={!selectedCountry}
                  className="w-full sm:w-[440px] h-[45px] p-3 rounded-md bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>Select State</option>
                  {selectedCountry && states[selectedCountry].map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="flex items-center mb-1 text-gray-700 font-semibold">
                  <User size={18} className="mr-2" />
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full sm:w-[440px] p-3 rounded-md bg-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="flex items-center mb-1 text-gray-700 font-semibold">
                  <Smartphone size={18} className="mr-2" />
                  Mobile Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    {selectedCountry ? countryCodes[selectedCountry] : "--"}
                  </span>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="w-full sm:w-[380px] p-3 rounded-r-md bg-white"
                    maxLength={selectedCountry ? countryPhoneLength[selectedCountry] : undefined}
                    onInput={handleNumberInput}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="flex items-center mb-1 text-gray-700 font-semibold">
                  <Phone size={18} className="mr-2" />
                  Alternative Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    {selectedCountry ? countryCodes[selectedCountry] : "--"}
                  </span>
                  <input
                    type="text"
                    placeholder="Alternative Number"
                    className="w-full sm:w-[380px] p-3 rounded-r-md bg-white"
                    maxLength={selectedCountry ? countryPhoneLength[selectedCountry] : undefined}
                    onInput={handleNumberInput}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="flex items-center mb-1 text-gray-700 font-semibold">
                  <Home size={18} className="mr-2" />
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full sm:w-[440px] p-3 rounded-md bg-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="flex items-center mb-1 text-gray-700 font-semibold">
                  <Building2 size={18} className="mr-2" />
                  Town/city
                </label>
                <input
                  type="text"
                  placeholder="Town/city"
                  className="w-full sm:w-[440px] p-3 rounded-md bg-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="flex items-center mb-1 text-gray-700 font-semibold">
                  <MapPin size={18} className="mr-2" />
                  Area
                </label>
                <input
                  type="text"
                  placeholder="Area"
                  className="w-full sm:w-[440px] p-3 rounded-md bg-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="flex items-center mb-1 text-gray-700 font-semibold">
                  <Milestone size={18} className="mr-2" />
                  Landmark
                </label>
                <input
                  type="text"
                  placeholder="Landmark"
                  className="w-full sm:w-[440px] p-3 rounded-md bg-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="flex items-center mb-1 text-gray-700 font-semibold">
                  <Pin size={18} className="mr-2" />
                  Pincode
                </label>
                <input
                  type="text"
                  placeholder="Pincode"
                  className="w-full sm:w-[440px] p-3 rounded-md bg-white"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 sm:mt-20">
            <button
              type="submit"
              className="w-full max-w-md sm:w-[497px] bg-[#3C7E14] text-white py-3 rounded-md text-lg"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
