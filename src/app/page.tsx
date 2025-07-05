
import Nav from "@/components/sections/Nav";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import CategorySection from "@/components/sections/CategorySection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";


export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <GallerySection/>
      <FeaturesSection />
      <TestimonialsSection/>
      {/* <NewsletterSection/> */}
    </>
  );
}
