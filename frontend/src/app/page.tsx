import Category from "@/components/category";
import HeroSection from "@/components/herosection";
import HotDeals from "@/components/hotdeals";
import NewArrivals from "@/components/newarrival";
import Vendors from "@/components/vendors";
import WhyShopWithUs from "@/components/whyshopwithus";
import Newsletter from "@/components/newsletter";
import React from 'react';
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
     <HeroSection />
     <Category />
     <HotDeals />
     <Vendors />
     <NewArrivals />
     <WhyShopWithUs />
     <Newsletter />
     <Footer />
    </div>
  );
}
