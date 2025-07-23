"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [urlList, setUrlList] = useState([]);

  const fetchAllUrls = async () => {
    try {
      const res = await fetch("/api/generate");
      const data = await res.json();
      if (data.success) {
        setUrlList(data.data);
      }
    } catch (error) {
      console.error("Error fetching URLs:", error);
    }
  };

  useEffect(() => {
    fetchAllUrls();
  }, []);

  const generate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, shorturl }),
    });

    const result = await res.json();

    if (result.success) {
      const fullLink = `${process.env.NEXT_PUBLIC_HOST || "https://yourbitlinks.netlify.app"}/${shorturl}`;
      setGenerated(fullLink);
      setUrl("");
      setShortUrl("");
      fetchAllUrls();
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 pt-[97px] pb-[10px] px-0
    ">
      {/* Generator Box */}
      <div className="mx-auto w-full max-w-xl bg-white rounded-xl p-6 md:p-8 shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-purple-800 text-center">
          Generate your short URLs
        </h1>

        <input
          type="text"
          value={url}
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-2 bg-purple-100 rounded-md focus:outline-purple-600"
        />

        <input
          type="text"
          value={shorturl}
          placeholder="Enter preferred short text"
          onChange={(e) => setShortUrl(e.target.value)}
          className="w-full px-4 py-2 bg-purple-100 rounded-md focus:outline-purple-600"
        />

        <button
          onClick={generate}
          className="w-full bg-purple-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-purple-600 transition-all duration-300"
        >
          Generate
        </button>

        {generated && (
          <div className="text-center">
            <p className="text-purple-700 font-medium">Your Link:</p>
            <Link
              href={generated}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 underline mt-1 break-all hover:text-blue-800 transition"
            >
              {generated}
            </Link>
          </div>
        )}
      </div>

      {/* Previously Generated Links */}
      <div className="mx-auto w-full max-w-xl mt-10 px-2">
        <h2 className="text-xl font-semibold text-purple-700 mb-4 text-center md:text-left">
          Your Generated URLs
        </h2>

        {urlList.length === 0 ? (
          <p className="text-center text-purple-500">No URLs generated yet.</p>
        ) : (
          <ul className="space-y-3">
            {urlList.map((item) => (
              <li
                key={item.shorturl}
                className="bg-white rounded-md p-3 shadow-sm hover:shadow-md transition"
              >
                <a
                  href={`/${item.shorturl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 underline hover:text-purple-800 break-all"
                >
                  {process.env.NEXT_PUBLIC_HOST || "https://yourbitlinks.netlify.app"}/{item.shorturl}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Shorten;
