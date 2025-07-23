'use client';
import Image from "next/image";
import localfont from "next/font/local";
import Link from "next/link";

const rubik = localfont({
  src: "./fonts/Rubik-SemiBold.ttf",
  variable: "--font-rubik",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen">
      <section className="grid grid-cols-1 py-[120px] md:grid-cols-2 items-center px-6 md:px-20 py-12 gap-8">
        {/* Text Section */}
        <div className="flex flex-col gap-6 items-start justify-center text-center md:text-left">
          <h1 className={`text-4xl md:text-5xl font-extrabold text-purple-800 ${rubik.className}`}>
            The best URL shortener in the market
          </h1>
          <p className="text-purple-900 text-lg leading-relaxed md:px-0 px-2">
            We are the most straightforward URL shortener in the world. Most URL shorteners will track you or ask for login. We understand your needs and built this with privacy and speed in mind.
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <Link href="/shorten">
              <button
                type="button"
                className="bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition-all duration-300 text-white font-semibold px-5 py-2 rounded-lg shadow-lg"
              >
                Try Now
              </button>
            </Link>

            <a
              href="https://github.com/ID-compiler"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition-all duration-300 text-white font-semibold px-5 py-2 rounded-lg shadow-lg"
              >
                Github
              </button>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/vector.jpg"
            alt="vector image"
            width={600}
            height={400}
            className="mix-blend-darken max-w-full h-auto rounded-lg "
          />
        </div>
      </section>
    </main>
  );
}
