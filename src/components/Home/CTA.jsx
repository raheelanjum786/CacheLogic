const CTA = () => {
  return (
    <section
      className="min-h-screen p-10 bg-[#020817]
     text-white text-center flex items-center justify-center "
    >
      <div className="w-full bg-[#020817] border-gray-600 border-2 h-auto rounded-3xl shadow-md mx-32 p-10 md:p-10 lg:p-20 xl:p-30">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Ready to Transform Your Business?
        </h1>
        <div className="mt-4 space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10">
          <button className="bg-blue-500 px-8 rounded-lg py-2">
            Request a Quote
          </button>
          <button className="border px-8 py-2 rounded-lg ">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
};
export default CTA;
