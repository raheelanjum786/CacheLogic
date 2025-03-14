import React from "react";
import GetInTouch from "../../content/GetInTouch";

const ContactUs = () => {
  return (
    <div className="bg-[#020817] flex items-center justify-center pt-20 md:pt-40 px-4">
      <div className="w-full relative">
        <img
          src="/svgs/backgroundEffects/getInTouchTopLeft.svg"
          alt="background"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-auto h-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <div className="text-white space-y-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Contact Us
            </button>
            <h1 className="text-3xl md:text-5xl">
              Connect with Our{" "}
              <span className="bg-gradient-to-r from-[#1AB5E9] via-[#23AAEB] via-[#4382F3] to-[#4F73F6] text-transparent bg-clip-text">
                Team Today.
              </span>
            </h1>
            <p className="max-w-xl">
              We're here to answer your questions and explore new opportunities
              together.
            </p>
            <div>
              <p className="font-semibold">Call</p>
              <p>info@cachelogic.tech</p>
            </div>
            <div>
              <p className="font-semibold">Our Location</p>
              <p>info@cachelogic.tech</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p>info@cachelogic.tech</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Right side - GetInTouch component */}
          <div className="relative">
            <GetInTouch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
