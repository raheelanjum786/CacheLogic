const Services = () => {
  return (
    <section id="services" className="p-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center">
        Our Popular <span className="text-blue-400">Services.</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="p-6 bg-gray-800 rounded-lg">
          <img src="/icon-ai.svg" alt="AI/ML Icon" className="w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold">AI/ML</h3>
          <p className="mt-2 text-gray-400">
            Revolutionizing decisions through intelligent solutions.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg">
          <img
            src="/icon-automation.svg"
            alt="Automation Icon"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-xl font-semibold">Automation</h3>
          <p className="mt-2 text-gray-400">
            Streamlining processes to enhance efficiency.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg">
          <img
            src="/icon-cybersecurity.svg"
            alt="Cybersecurity Icon"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-xl font-semibold">Cybersecurity</h3>
          <p className="mt-2 text-gray-400">
            Fortifying your business against evolving threats.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg">
          <img
            src="/icon-cybersecurity.svg"
            alt="Cybersecurity Icon"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-xl font-semibold">Cybersecurity</h3>
          <p className="mt-2 text-gray-400">
            Fortifying your business against evolving threats.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg">
          <img
            src="/icon-cybersecurity.svg"
            alt="Cybersecurity Icon"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-xl font-semibold">Cybersecurity</h3>
          <p className="mt-2 text-gray-400">
            Fortifying your business against evolving threats.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg">
          <img
            src="/icon-cybersecurity.svg"
            alt="Cybersecurity Icon"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-xl font-semibold">Dev Ops</h3>
          <p className="mt-2 text-gray-400">
            Optimizing development and deployement pipelines.
          </p>
        </div>
        <button>Explore All Services</button>
      </div>
    </section>
  );
};
export default Services;
