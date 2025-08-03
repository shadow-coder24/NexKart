import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <div>
        <Image 
            src="/banner/banner1.png"
            alt="Hero Banner"
            width={1550}
            height={100}
            className="w-full h-screen object-cover"
        />
    </div>
  )
}

export default HeroSection