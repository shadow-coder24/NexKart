"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

function HotDeals() {
  const [number, setNumber] = useState(0);
  const [liked, setLiked] = useState<{ [key: number]: boolean }>({});

  const toggleLike = (index: number) => {
    setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  const randomNumber = () => {
    const random = Math.floor(Math.random() * 100);
    setNumber(random);
  };


  React.useEffect(() => {
    randomNumber();
  }, []);

  return (
    <div>
      <div id="h2" className="bg-gray-100">
        <h2
          id="categoryheadding"
          className="text-6xl font-bold text-center pt-8 pb-6"
        >
          Hot Deals
        </h2>
      </div>
      <div className="pt-7 pb-7">
        <Swiper
          spaceBetween={20}
          slidesPerView={6}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation]}
        >
          <div className="flex">
            {Array.from({ length: number }, (_, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-[230px] h-[350px] pb-2">
                  <Image
                    id="dealimage"
                    src="/categoryimage/cosmetics.png"
                    alt="deal"
                    width={250}
                    height={100}
                    className="object-cover rounded-lg shadow-lg"
                  />
                  <p id="productname" className="text-center text-lg pt-4 font-bold">Product Name</p>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Vendor Name</p>
                    <p className="text-sm">4.5 &#9733;</p>
                  </div>
                  <div className="flex"><button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">Add to Cart</button>
                  <div id={`heartcontainer-${i}`} className="pt-6 pl-9 cursor-pointer"><i className={liked[i] ? "bi bi-heart-fill" : "bi bi-heart"} style={{ color: "red", fontSize: "24px" }} id={`heart-icon-${i}`} onClick={() => toggleLike(i)}></i></div></div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default HotDeals;
