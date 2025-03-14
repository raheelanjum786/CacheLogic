const GetInTouch = () => {
  return (
    <div className="relative">
      <div className="bg-transparent p-4 md:p-8 rounded-3xl shadow-lg text-white border-2">
        <img
          src="/svgs/backgroundEffects/getinTouchRight.svg"
          alt="background"
          className="absolute right-0 top-24 h-full md:h-auto md:w-auto"
        />
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
  );
};
export default GetInTouch;
