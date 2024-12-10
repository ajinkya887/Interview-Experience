import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FAQ from "../components/Faq";
import InterviewTips from "../components/InterviewTips";
import PopularCompanies from "../components/PopularCompanies";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import WelcomeSection from "../components/Hero";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto mt-12 px-4">
      {/* Hero Section */}
      <WelcomeSection />

      {/* Features Section */}
      < Features />

      {/* Interview Tips Section */}
      <InterviewTips />

      {/* Popular Companies Section */}
      <PopularCompanies />

      <FAQ />

      {/* What Users Are Saying */}
      <Testimonials />
    </div>
  );
};

export default Home;
