"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const images = [
  "/banner/banner1.png",
  "/banner/banner2.png",
  "/banner/banner3.png",
  "/banner/banner4.png",
  "/banner/banner5.png",
  "/banner/banner6.png",
  "/banner/banner7.png",
];

export default function HeroSection() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      navigation={true}
      modules={[Autoplay, Navigation]}
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-screen h-[650px]">
            <Image src={src} alt={`Banner ${i + 1}`} fill className="object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
