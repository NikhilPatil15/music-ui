import FeaturedSection from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CardSection from '@/components/CardSection'
import Image from "next/image";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

    <HeroSection/>
    <FeaturedSection/>
    <WhyChooseUs/>
    <CardSection/>
    <UpcomingWebinars/>
    <Instructors/>
    <Footer/>
   </main>
  );
}
