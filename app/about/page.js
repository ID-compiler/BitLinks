/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const about = () => {
  return (
    <section className="bg-purple-50 py-20 px-6 md:px-32">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-6 text-center">
          About Us
        </h2>
        <p className="text-purple-900 text-lg leading-relaxed text-center">
          We created this URL shortener with a simple philosophy: no fluff, no tracking, no logins. While most services complicate things or invade your privacy, ours is fast, private, and built purely for ease of use. Whether you're sharing links with your team or posting online, you can count on us for a smooth experience — every time.
        </p>
      </div>
    </section>
  );
}

export default about