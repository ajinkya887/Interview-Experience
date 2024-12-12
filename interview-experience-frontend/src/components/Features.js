import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section
      className="text-center mb-12 py-8 px-4 bg-gradient-to-r from-blue-200 via-white to-blue-200 shadow-lg rounded-lg"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Features</h2>
      <p className="text-lg text-gray-600 mb-12">
        Explore the platform and gain valuable insights from real interview
        experiences.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Company List Feature */}
        <div
          className=" w-full bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-semibold mb-4">Company List</h3>
          <p className="text-gray-600 mb-6">
            Discover a comprehensive list of companies and browse interviews
            from different industries.
          </p>
          <Link
            to="/list"
            className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-all duration-300"
          >
            View Companies
          </Link>
        </div>

        {/* Add Experience Feature */}
        <div
          className="w-full bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-2xl font-semibold mb-4">Add Your Experience</h3>
          <p className="text-gray-600 mb-6">
            Have an interview experience? Share your insights with the community
            and help others!
          </p>
          <Link
            to="/add"
            className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-all duration-300"
          >
            Add Experience
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
