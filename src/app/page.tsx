import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { ScrollSection } from "@/components/ScrollSection";
import TestimonialsCards from "@/components/TestimonialsCards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <ScrollSection/>
      <TestimonialsCards/>
    </main>
  );
}
