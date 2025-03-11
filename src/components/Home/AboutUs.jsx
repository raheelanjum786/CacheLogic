const AboutUs = () => {
  return (
    <div>
      {" "}
      <section id="about" className="py-16 bg-gray-800">
        <div className="flex justify-center items-center h-screen mx-4 md:mx-32">
          <div className="w-full md:w-1/2">
            <h1 className="bg-blue-500 w-full md:w-32 px-6 py-3 rounded my-6">
              About Us
            </h1>
            <h2 className="text-3xl font-bold">
              Why <span className="text-blue-400">CacheLogic?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
              <div className="p-6 rounded">
                Tailored solutions for every industry.
              </div>
              <div className="p-6 rounded">
                Global reach with localized expertise.
              </div>
              <div className="p-6 rounded">
                Proven track record in innovation.
              </div>
              <div className="p-6 rounded">
                Dedicated support for your success.
              </div>
            </div>
            <button className="bg-blue-500 px-6 py-3 rounded mt-6 w-full md:w-1/2">
              Read Our Story
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="svgs/PuzzlePeople.svg"
              alt=""
              srcset=""
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
