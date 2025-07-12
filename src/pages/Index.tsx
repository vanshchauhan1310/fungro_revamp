
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Cosmic overlay for better readability */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-[0.5px]" />
      
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <Stats />
          <Features />
          <HowItWorks />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
