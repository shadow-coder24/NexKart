"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Category() {
  return (
    <div className="h-screen mb-10">
      <div id="h2" className="bg-gray-100">
        <h2
          id="categoryheadding"
          className="text-6xl font-bold text-center pt-8 pb-3"
        >
          What&apos;s in Store
        </h2>
        <p className="text-center text-2xl pb-7">Browse through our wide range of categories made for every need.</p>
      </div>
      <div className="grid grid-cols-3 pt-4">
        <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-[400px] h-[250px] grid-cols-2 flex">
          <Image 
            id="categoryimage"
            src="/categoryimage/men.png"
            alt="Men's Fashion"
            width={250}
            height={100}
            className="object-cover rounded-lg shadow-lg w-[200px]"
          />
          <div className="pl-4 pt-6 flex flex-col gap-5">
           <p className="text-center text-xl pt-4 font-bold">Men Fashion</p>
           <Link id="categorylink" href="/category/menfashion" className="font-bold mt-3 block text-center">
            View More</Link>
          </div>
        </div>
        <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-[400px] h-[250px] grid-cols-2 flex">
          <Image 
            id="categoryimage"
            src="/categoryimage/women.png"
            alt="Women's Fashion"
            width={250}
            height={100}
            className="object-cover rounded-lg shadow-lg w-[200px]"
          />
          <div className="pl-4 pt-6 flex flex-col gap-5">
           <p className="text-center text-xl pt-4 font-bold">Women Fashion</p>
           <Link id="categorylink" href="/category/womenfashion" className="font-bold mt-3 block text-center">
            View More</Link>
          </div>
        </div>
        <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-[400px] h-[250px] grid-cols-2 flex">
          <Image 
            id="categoryimage"
            src="/categoryimage/kids.png"
            alt="Kids Fashion"
            width={250}
            height={100}
            className="object-cover rounded-lg shadow-lg w-[200px]"
          />
          <div className="pl-4 pt-6 flex flex-col gap-5">
           <p className="text-center text-xl pt-4 font-bold">Kids Fashion</p>
           <Link id="categorylink" href="/category/kidsfashion" className="font-bold mt-3 block text-center">
            View More</Link>
          </div>
        </div>
        <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-[400px] h-[250px] grid-cols-2 flex">
          <Image 
            id="categoryimage"
            src="/categoryimage/homedecor.png"
            alt="Home Decor"
            width={250}
            height={100}
            className="object-cover rounded-lg shadow-lg w-[200px]"
          />
          <div className="pl-4 pt-6 flex flex-col gap-5">
           <p className="text-center text-xl pt-4 font-bold">Home Decor</p>
           <Link id="categorylink" href="/category/homedecor" className="font-bold mt-3 block text-center">
            View More</Link>
          </div>
        </div>
        <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-[400px] h-[250px] grid-cols-2 flex">
          <Image 
            id="categoryimage"
            src="/categoryimage/cosmetics.png"
            alt="Cosmetics"
            width={250}
            height={100}
            className="object-cover rounded-lg shadow-lg w-[200px]"
          />
          <div className="pl-4 pt-6 flex flex-col gap-5">
           <p className="text-center text-xl pt-4 font-bold">Cosmetics</p>
           <Link id="categorylink" href="/category/cosmetics" className="font-bold mt-3 block text-center">
            View More</Link>
          </div>
        </div>
        <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-[400px] h-[250px] grid-cols-2 flex">
          <Image 
            id="categoryimage"
            src="/categoryimage/jewellery.png"
            alt="Jewellery"
            width={250}
            height={100}
            className="object-cover rounded-xl shadow-lg w-[200px]"
          />
          <div className="pl-4 pt-6 flex flex-col gap-5">
          <p className="text-center text-lg pt-4 font-bold">Jewellery</p>
          <Link id="categorylink" href="/category/jewellery" className="font-bold mt-3 block text-center">
            View More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
