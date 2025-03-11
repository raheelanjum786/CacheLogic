const Footer = () => {
  return (
    <footer className="b text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Brand Info */}
        <div className="text-center md:text-left w-full md:w-1/3 pr-10">
          <img src="/svgs/Logo.svg" alt="Logo" />
          <p className="mt-2 text-gray-100">
            Empowering businesses with cutting-edge technology and tailored
            solutions.
          </p>
        </div>

        {/* Useful Links */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          {[
            "About Us",
            "Services",
            "Blog",
            "Careers",
            "Contact Us",
            "Privacy Policy",
          ].map((link, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-white transition duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-4">
          {["facebook", "twitter", "linkedin"].map((platform, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.9 3.6 8.9 8.3 9.7V14.9H7.9V12h2.6V9.8c0-2.6 1.6-4 3.9-4 1.1 0 2 .1 2.3.1v2.7h-1.6c-1.3 0-1.6.6-1.6 1.5V12h3.2l-.5 2.9H13v6.8c4.7-.8 8.3-4.8 8.3-9.7 0-5.4-4.4-9.8-9.8-9.8z" />
              </svg>
            </a>
          ))}
        </div>
      </div>
      <hr className="mt-12 mx-12" />
      <div className="text-center text-gray-100 text-sm mt-8">
        &copy; 2025 - All Rights Reserved CacheLogic.
      </div>
    </footer>
  );
};

export default Footer;
