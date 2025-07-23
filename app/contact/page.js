/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Contact = () => {
  return (
    <section className="bg-purple-50 py-20 px-4 sm:px-8 md:px-20 lg:px-32">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-purple-900 text-lg mb-8 text-center">
          Have questions, feedback, or need support? We'd love to hear from you!
        </p>

        <div className="bg-white rounded-xl shadow-lg px-6 py-8 md:px-10 space-y-8">
          {/* Email Section */}
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Email</h3>
            <a
              href="mailto:work.ichhadwivedi@gmail.com"
              className="text-purple-600 underline hover:text-purple-800 transition-colors"
            >
              work.ichhadwivedi@gmail.com
            </a>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Socials</h3>
            <ul className="space-y-3">
              <li>
                <span className="font-medium">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/ichha-dwivedi-55b246288/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 underline hover:text-purple-800 transition-colors"
                >
                  @linkedin
                </a>
              </li>
              <li>
                <span className="font-medium">GitHub:</span>{" "}
                <a
                  href="https://github.com/ID-compiler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 underline hover:text-purple-800 transition-colors"
                >
                  @github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
