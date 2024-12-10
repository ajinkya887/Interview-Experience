import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "How can I add my interview experience?",
      answer:
        "To share your interview experience, click on the 'Add Your Experience' button in the navigation bar, fill out the form, and submit your story.",
    },
    {
      question: "Can I browse interviews from specific companies?",
      answer:
        "Yes! You can search for specific companies in our 'Company List' section and explore interview experiences shared by other users.",
    },
    {
      question: "Is the platform free to use?",
      answer:
        "Yes, the platform is completely free to use for browsing, sharing, and learning from real interview experiences.",
    },
  ];

  return (
    <section
    className="text-center mb-12 py-8 px-4 bg-gradient-to-r from-blue-200 via-white to-blue-200 shadow-lg rounded-lg"
    data-aos="fade-up"
    data-aos-delay="200"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Have questions? Check out the answers to some of the most common
        questions asked by our users:
      </p>

      <div className="text-left mx-auto max-w-2xl">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>
              <span
                className={`transform ${
                  activeIndex === index ? "rotate-180" : ""
                } transition-transform duration-300`}
              >
                ▼
              </span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
