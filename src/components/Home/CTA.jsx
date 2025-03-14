// import "./styles.css";
const CTA = () => {
  return (
    <section className="min-h-screen w-full bg-[#020817] text-white flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="relative w-full max-w-4xl mx-auto bg-[#020817] border-gray-600 border-2 rounded-3xl shadow-md p-6 md:p-10 lg:p-16">
          <img
            src="/svgs/backgroundEffects/CtaLine.svg"
            alt="cta"
            className="absolute left-20 top-0 w-auto h-auto object-cover"
          />
          <img
            src="/svgs/backgroundEffects/CtaInner.svg"
            alt="CTA"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <img
            src="/svgs/backgroundEffects/CtaLeftTexture.svg"
            alt="cta"
            className="absolute left-[-10vw] w-auto h-auto object-cover"
          />
          <img
            src="/svgs/backgroundEffects/CtaRightTexture.svg"
            alt="cta"
            className="absolute right-[-10vw] w-auto h-auto object-cover"
          />
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center max-w-3xl">
              Ready to Transform Your Business?
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="bg-blue-500 px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Request a Quote
              </button>
              <button className="border px-6 sm:px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
