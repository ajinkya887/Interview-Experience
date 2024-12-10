import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "This platform helped me prepare for my technical interview. The detailed experiences made me confident going into my interview.",
      name: "John Doe",
    },
    {
      quote:
        "I added my interview experience here, and I was glad to help others prepare for their interviews!",
      name: "Jane Smith",
    },
    {
      quote:
        "Browsing through interview experiences helped me understand what to expect in my interview. A great resource!",
      name: "Emily Johnson",
    },
    {
      quote:
        "The insights I gained from this platform gave me a big advantage. Highly recommended for job seekers.",
      name: "Michael Lee",
    },
    {
      quote:
        "A fantastic tool for freshers and experienced professionals alike. The platform is easy to use and full of valuable content.",
      name: "Sophia Brown",
    },
  ];

  return (
    <section className="text-center mb-12 py-8 px-4 bg-gradient-to-r from-blue-200 via-white to-blue-200 shadow-lg rounded-lg"
    data-aos="fade-up"
    data-aos-delay="200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">What Users Are Saying</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-80 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <p className="text-gray-600 mb-4">
              <span className="animate-typing">"{testimonial.quote}"</span>
            </p>
            <p className="font-semibold text-gray-800">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
