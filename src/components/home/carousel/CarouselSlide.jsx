import React from "react";

const CarouselSlide = ({ name, image, sub, experience, statement }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-12 relative overflow-visible">
      {/* Left side with image and decorative elements */}
      <div className="relative w-[90%] max-w-[450px] h-[300px] sm:h-[350px] shrink-0">
        {/* Mint green blob */}
        <div className="absolute top-0 left-12 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-[#a8e6d5] rounded-[70%_30%_70%_30%/60%_40%_60%_40%] -z-10"></div>

        {/* Image container with blob shape */}
        <div className="absolute top-8 left-0 w-full h-full bg-white rounded-[60%_40%_50%_50%/60%_50%_50%_40%] overflow-hidden shadow-xl z-10">
          <img
            src={image || "/placeholder.svg?height=600&width=600"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right side content */}
      <div className="max-w-lg text-center md:text-left relative z-10">
        <div className="text-[#e6b94d] text-lg font-semibold mb-2">
          Top Rated Teacher
        </div>
        <h2 className="text-[#1d5245] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {name}
        </h2>
        <p className="text-gray-600 mb-4">{sub}</p>
        <p className="text-gray-500 mb-6">{statement}</p>
        <p className="text-sm font-medium text-[#1d5245] mb-4">
          Experience: {experience} years
        </p>
        <button className="bg-[#e6b94d] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-[#d1a947] transition">
          Book a Session
        </button>
      </div>

      {/* Decorative lines on right */}
      <div className="absolute right-0 bottom-0 opacity-20 z-0 hidden md:block">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M190,10 Q160,40 130,20 Q100,0 70,30 Q40,60 10,40"
            stroke="#1d5245"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M190,50 Q150,80 120,60 Q90,40 60,70 Q30,100 10,80"
            stroke="#1d5245"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M190,90 Q140,120 110,100 Q80,80 50,110 Q20,140 10,120"
            stroke="#1d5245"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default CarouselSlide;
