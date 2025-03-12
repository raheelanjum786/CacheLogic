import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#020817] flex items-center justify-center pt-20 md:pt-40 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="text-white space-y-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Contact Us
          </button>
          <h1 className="text-3xl md:text-5xl md:pr-48">
            Connect with Our <span className="text-blue-400">Team Today.</span>
          </h1>
          <p className="md:pr-60">
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
        <div className="bg-transparent p-4 md:p-8 rounded-3xl shadow-lg text-white border-2">
          <h2 className="text-xl md:text-2xl font-bold mx-4 md:mx-8 my-4 md:my-8">
            Get In Touch
          </h2>
          <p className="mb-8 md:mb-12 mx-4 md:mx-8 text-gray-400">
            We are always ready to help you and answer your questions.
          </p>
          <form className="space-y-4 md:space-y-8 px-4 md:px-8">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-400 placeholder:text-white"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-400 placeholder:text-white"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-400 placeholder:text-white"
              />
            </div>
            <div>
              <input
                placeholder="Message"
                className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-400 placeholder:text-white"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-1/2 bg-blue-600 text-white px-4 py-2 rounded-md"
              style={{ marginTop: "60px", marginBottom: "20px" }}
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
