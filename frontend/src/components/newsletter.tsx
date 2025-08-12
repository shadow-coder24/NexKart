import React from 'react'

function Newsletter() {
  return (
    <div id='newsletter'className='pb-8 h-[350px]'>
        <h2 id='newsletter-heading' className="text-5xl font-bold mb-4 text-center pt-10">Subscribe for Exclusive Deals</h2>
        <p className="mb-10 font-semibold text-xl text-center pt-4">📩 Subscribe & Get 10% Off Your First Order</p>
        <input type="email" placeholder="Enter your email" className="border-2 p-2 rounded mr-2 w-[700px] h-[50px] ml-[350px] bg-white" />
        <button id='subscribe-button' className="w-[150px] h-[50px] p-2 rounded">Subscribe</button>
        <p className="text-center text-sm mt-5">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  )
}

export default Newsletter