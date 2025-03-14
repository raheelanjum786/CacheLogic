const Home = () => {
  return (
    <section className="relative h-[120vh] bg-[#020817] w-full px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/svgs/HomeCenter.svg"
          alt="Home"
          className="mx-auto object-cover w-full md:w-auto"
        />
      </div>
      <div className="w-full pt-20 md:pt-60 mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
          Fast-Tracking
          <br />
          Your{" "}
          <span className="bg-gradient-to-r from-[#1AB5E9] via-[#23AAEB] via-[#4382F3] to-[#4F73F6] text-transparent bg-clip-text">
            IT Evolution
          </span>
          .
        </h1>
        <p className="text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          Empowering businesses with cutting-edge technology and tailored
          solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <button className="bg-[#3B82F6] text-white px-6 py-3 w-full sm:w-56 rounded-lg hover:bg-blue-600 transition">
            Discover Our Services
          </button>
          <button className="border border-gray-600 px-6 py-3 w-full sm:w-56 rounded-lg hover:border-gray-400 transition">
            Contact Us
          </button>
        </div>
      </div>

      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/svgs/mingcute.svg"
          alt="Background"
          className="absolute left-[50%] md:left-[60%] lg:left-[70%] top-[70%] md:top-[73%] lg:top-[73%] w-auto h-auto object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/svgs/solarCode.svg"
          alt="Background"
          className="absolute left-[40%] md:left-[45%] lg:left-[50%] top-[72%] md:top-[75%] lg:top-[75%] w-auto h-auto object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/svgs/Union.svg"
          alt="Background"
          className="absolute left-0 top-[65%] md:top-[64.5%] w-[75%] object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/svgs/octicon.svg"
          alt="Background"
          className="absolute left-[60%] md:left-[70%] lg:left-[75%] top-[85%] md:top-[88%] w-auto h-auto object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/svgs/TextBox.svg"
          alt="Background"
          className="absolute left-[5%] md:left-[4%] lg:left-[12%] top-[70%] md:top-[67%]  md:w-7 object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/svgs/Robot.svg"
          alt="Background"
          className="absolute left-[8%] md:left-[8%] lg:left-[20%] top-[63%] md:top-[63%] w-[30vw] object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/svgs/Group.svg"
          alt="Background"
          className="absolute left-[70%] md:left-[68%] lg:left-[75%] top-[60%] md:top-[70%] xl:top-[72%] w-56 xl:w-[300px] object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/svgs/SpeechBubble.svg"
          alt="Background"
          className="absolute left-[90%] md:left-[90%] lg:left-[93%] top-[55%] md:top-[65%] xl:top-[67%] w-auto h-auto object-cover"
        />
      </div>
    </section>
  );
};
export default Home;
