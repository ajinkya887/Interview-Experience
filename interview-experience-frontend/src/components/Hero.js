import React from "react";
import { Link } from "react-router-dom";

const WelcomeSection = () => {
  return (
    <section
      className="text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 sm:p-12 md:p-16 rounded-lg shadow-2xl relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg blur-3xl"></div>
      <div className="absolute top-[-2rem] left-[-3rem] w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-[-2rem] right-[-3rem] w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-spin-reverse-slow"></div>

      {/* Main Content */}
      <div className="relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg animate-slide-in">
          Welcome to Interview Experiences
        </h1>
        <p className="text-sm sm:text-base md:text-xl mb-6 sm:mb-8 max-w-md sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Browse through real interview experiences shared by others and
          contribute your own story to help others succeed in their interviews.
        </p>
        <Link
          to="/add"
          className="bg-white text-blue-600 px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 hover:scale-105 transition-transform duration-300"
        >
          Share Your Experience
        </Link>
      </div>
    </section>
  );
};

export default WelcomeSection;
