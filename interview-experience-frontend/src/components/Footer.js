import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-2">InterviewHub</h3>
            <p className="text-sm">
              A platform where you can find real interview experiences, coding
              challenges, and expert advice.
            </p>
          </div>
          <div className="hidden md:block"></div>
          {/* Contact */}
          <div className="md:col-span-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-semibold">Email:</span>{" "}
                contact@interviewhub.com
              </li>
              <li className="text-gray-400">
                <span className="font-semibold">Phone:</span> +1 234 567 890
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">
            Made with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            by Ajinkya Sontakke
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} InterviewHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
