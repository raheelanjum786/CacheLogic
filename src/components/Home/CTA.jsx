// import "./styles.css";
const CTA = () => {
  return (
    <section
      className="relative min-h-screen p-4 sm:p-6 md:p-10 
    bg-[#020817]
     text-white text-center flex items-center justify-center CTA"
    >
      <div className="w-full bg-[#020817] border-gray-600 border-2 h-auto rounded-3xl shadow-md mx-4 sm:mx-8 md:mx-16 lg:mx-32 p-6 sm:p-8 md:p-10 lg:p-20 xl:p-30">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Ready to Transform Your Business?
        </h1>
        <div className="mt-4 space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10">
          <button className="bg-blue-500 px-4 sm:px-6 md:px-8 py-2 rounded-lg">
            Request a Quote
          </button>
          <button className="border px-4 sm:px-6 md:px-8 py-2 mt-8 rounded-lg">
            Talk to an Expert
          </button>
        </div>
      </div>
      {/* <div className="absolute inset-0 z-0">
        <img src="/svgs/colorfull.svg" alt="" />
      </div> */}
    </section>
  );
};
export default CTA;
