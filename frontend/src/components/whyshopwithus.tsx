import React from 'react'

function WhyShopWithUs() {
  return (
    <div className='grid grid-cols-2 h-[450px]'>
         <div id="h2" className="bg-gray-100">
            <h2
            id="categoryheadding"
            className="text-6xl font-bold text-center mt-[180px] pb-6 shadow-xl"
            >
            Why Shop With Us
            </h2>
        </div>
        <div id="trustsection" className='grid grid-cols-2 pt-8 gap-[60px] pl-9 pr-9 pb-8'>
            <p id="benefits" className="text-center font-semibold text-2xl flex items-center justify-center bg-white rounded-2xl shadow-md">✅ Curated Quality</p>
            <p id="benefits" className="text-center font-semibold text-2xl flex items-center justify-center bg-white rounded-2xl shadow-md">🚚 Fast Shipping</p>
            <p id="benefits" className="text-center font-semibold text-2xl flex items-center justify-center bg-white rounded-2xl shadow-md">💳 Secure Payments</p>
            <p id="benefits" className="text-center font-semibold text-2xl flex items-center justify-center bg-white rounded-2xl shadow-md">📦 Hassle-Free Returns</p>
            <p id="benefits" className="text-center font-semibold text-2xl flex items-center justify-center bg-white rounded-2xl shadow-md">💬 24/7 Support</p>
            <p id="benefits" className="text-center font-semibold text-2xl flex items-center justify-center bg-white rounded-2xl shadow-md">🎁 Wide Variety</p>
        </div>
    </div>
  )
}

export default WhyShopWithUs