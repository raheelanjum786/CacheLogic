const Home = () => {
  return (
    <section className="relative h-[1000px] bg-[#020817]  px-4">
      <div className="absolute inset-0 z-0">
        <img
          src="/svgs/HomeCenter.svg"
          alt="Home"
          className="mx-auto object-cover"
        />
      </div>
      <div className="w-full pt-60 mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Fast-Tracking
          <br />
          Your <span className="text-[#3B82F6]">IT Evolution</span>.
        </h1>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Empowering businesses with cutting-edge technology and tailored
          solutions.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-[#3B82F6] text-white px-6 py-3 w-56 rounded-lg hover:bg-blue-600 transition">
            Discover Our Services
          </button>
          <button
            className="border border-gray-600 px-6 py-3 w-56 rounded-lg transition
          
          "
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/svgs/mingcute.svg"
          alt="Background"
          className="pl-[680px] pt-[730px] object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/svgs/solarCode.svg"
          alt="Background"
          className="pl-[500px] pt-[750px] object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/svgs/Union.svg"
          alt="Background"
          className="w-[75%] pt-[675px] object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/svgs/octicon.svg"
          alt="Background"
          className="pl-[750px] pt-[880px] object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/svgs/TextBox.svg"
          alt="Background"
          className="pl-12 pt-[730px] object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/svgs/Robot.svg"
          alt="Background"
          className="pl-20 pt-[660px] object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/svgs/Group.svg"
          alt="Background"
          className="pl-[850px] pt-[650px] object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/svgs/SpeechBubble.svg"
          alt="Background"
          className="pl-[1170px] pt-[600px] object-cover"
        />
      </div>
    </section>
  );
};
export default Home;
