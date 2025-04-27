// app/components/PremiumHeroSection.tsx

import React from 'react';

const PremiumHeroSection = () => {
  // Mock data for latest posts (can be replaced with actual dynamic content later)
  const latestPosts = [
    { title: "Exploring the Future of Design", date: "April 15, 2025", link: "/posts/design-future" },
    { title: "Building a Sustainable Brand Identity", date: "March 28, 2025", link: "/posts/sustainable-brand" },
    { title: "The Power of Animation in Marketing", date: "February 18, 2025", link: "/posts/animation-marketing" }
  ];

  return (
    <section className="relative h-screen grid grid-cols-12 gap-6 bg-cover bg-center">
      {/* Left side: Hero image (taking 7 out of 12 columns) */}
      <div className="col-span-12 md:col-span-7 h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?nature,water')", // Left side background image
        }}
      />

      {/* Right side: Content (taking 5 out of 12 columns) */}
      <div className="col-span-12 md:col-span-5 h-full flex flex-col justify-center items-start p-8 text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 logo-font animate__animated animate__fadeInUp">
          Welcome to My World
        </h1>

        <p className="text-lg md:text-2xl mb-6 max-w-xl animate__animated animate__fadeInUp animate__delay-1s">
          I’m Harshad Gillurkar — a passionate creator, builder, and dreamer.
        </p>

        <button className="bg-navy text-softgrey px-6 py-3 rounded-full hover:scale-105 transition transform animate__animated animate__fadeInUp animate__delay-2s">
          Get in Touch
        </button>

        {/* Latest Posts Section with gray background */}
        <div className="mt-12 w-full bg-gray-200 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>

          <div className="space-y-4">
            {latestPosts.map((post, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <a href={post.link} className="text-lg font-semibold hover:underline">
                  {post.title}
                </a>
                <span className="text-sm text-teal">{post.date}</span>
              </div>
            ))}
          </div>

          {/* Read More Button */}
          <div className="mt-6 text-center">
            <a href="/posts" className="px-8 py-3 bg-navy text-white rounded-full hover:bg-[#162133] transition transform hover:scale-105">
              Read More
            </a>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-10 animate__animated animate__bounceIn animate__delay-3s">
          <a href="#next-section">
            <svg
              className="w-8 h-8 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PremiumHeroSection;
