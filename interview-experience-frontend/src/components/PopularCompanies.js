import React from "react";
import { Link } from "react-router-dom";

const PopularCompanies = () => {
  return (
    <section
      className="text-center mb-12 py-8 px-4 bg-gradient-to-r from-blue-200 via-white to-blue-200 shadow-lg rounded-lg"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Popular Companies
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        Discover interview experiences from popular companies where users have
        shared their journeys:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Example Companies */}
        <div className="w-full bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4">Google</h3>
          <p className="text-gray-600 mb-4">
            Explore multiple experiences from candidates who interviewed at
            Google.
          </p>
          <Link
            to="/company/Google"
            className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-all duration-300"
          >
            View Experiences
          </Link>
        </div>
        <div className="w-full bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4">Amazon</h3>
          <p className="text-gray-600 mb-4">
            Read through detailed Amazon interview experiences shared by real
            candidates.
          </p>
          <Link
            to="/company/Amazon"
            className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-all duration-300"
          >
            View Experiences
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCompanies;
