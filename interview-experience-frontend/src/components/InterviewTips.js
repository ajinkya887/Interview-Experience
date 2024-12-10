import React from "react";

const InterviewTips = () => {
  return (
    <section
      className="text-center mb-12 py-8 px-4 bg-gradient-to-r from-blue-200 via-white to-blue-200 shadow-lg rounded-lg"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h2 className="text-4xl font-extrabold text-blue-800 mb-6">
        Interview Tips & Tricks
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Preparing for an interview can be nerve-wracking, but these tips from
        real interviewees can help you succeed:
      </p>
      <ul className="list-none text-left mx-auto max-w-2xl text-gray-700 space-y-4">
        <li className="flex items-center gap-4">
          <span className="w-6 h-6 flex justify-center items-center rounded-full bg-blue-500 text-white text-sm font-bold">
            1
          </span>
          <p>Research the company thoroughly before the interview.</p>
        </li>
        <li className="flex items-center gap-4">
          <span className="w-6 h-6 flex justify-center items-center rounded-full bg-blue-500 text-white text-sm font-bold">
            2
          </span>
          <p>Practice coding challenges and technical questions regularly.</p>
        </li>
        <li className="flex items-center gap-4">
          <span className="w-6 h-6 flex justify-center items-center rounded-full bg-blue-500 text-white text-sm font-bold">
            3
          </span>
          <p>
            Prepare for behavioral interview questions to showcase your
            experience and skills.
          </p>
        </li>
        <li className="flex items-center gap-4">
          <span className="w-6 h-6 flex justify-center items-center rounded-full bg-blue-500 text-white text-sm font-bold">
            4
          </span>
          <p>Be confident and don't hesitate to ask questions during the interview.</p>
        </li>
      </ul>
    </section>
  );
};

export default InterviewTips;
