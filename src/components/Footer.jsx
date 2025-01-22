"use client";

import { useEffect, useState } from "react";

const Footer = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setAnimate(true);
  }, []);

  return (
    <div
      // className={` bg-gradient-to-r from-gray-900 to-black w-screen h-20 flex justify-center items-center relative overflow-hidden rounded-b-xl shadow-2xl z-20 ${
      //   animate ? "animate-bounceInFixedTop" : ""
      // }`}
            className={` bottom-0 left-0 z-50 right-0 bg-gradient-to-r from-gray-900 to-black  p-4 flex justify-center items-center  overflow-hidden  shadow-2xl  ${
        animate ? "animate-bounceInFixedTop" : ""
      }`}
    >
      <div className="text-white relative z-10 group">
        <span className="text-lg">
        <div className="flex  gap-2">

        <div>
        {["T", "h", "a", "n", "k"].map((char, index) => (
            <span
              key={index}
              className="inline-block transition-transform duration-300 ease-in-out group-hover:animate-rotateInCircle"
            >
              {char}
            </span>
          ))}
        </div>
        <div>
        {["Y", "o", "u"].map((char, index) => (
            <span
              key={index}
              className="inline-block transition-transform duration-300 ease-in-out group-hover:animate-rotateInCircle"
            >
              {char}
            </span>
          ))}
        </div>

        </div>
          
        </span>
      </div>
    </div>
  );
};

export default Footer;
