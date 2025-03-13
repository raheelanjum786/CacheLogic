const AiSolutions = () => {
  return (
    <div className="bg-[#020817] min-h-screen flex items-center justify-center px-40 py-4">
      <div className="w-full border border-gray-700 rounded-lg p-8">
        <div className="text-center mb-8">
          <span className="inline-block border border-blue-500 rounded-full px-6 py-2 text-blue-500">
            Our Services
          </span>
        </div>

        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Ask AI for the{" "}
          <span className="bg-gradient-to-r from-[#1AB5E9] via-[#23AAEB] via-[#4382F3] to-[#4F73F6] text-transparent bg-clip-text">
            Perfect Solution
          </span>{" "}
          .
        </h2>

        <p className="text-gray-400 text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>

        <div className="pt-32 px-32 grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <button className=" bg-gray-800 hover:bg-gray-700 text-white rounded-lg p-4">
            Web Development
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg p-4">
            Mobile Apps
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg p-4">
            Cloud Solutions
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg p-4">
            AI Integration
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Ask AI your Solution"
            className="w-full bg-gray-900 text-white rounded-lg pl-4 pr-12 py-3 my-6 border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSolutions;
