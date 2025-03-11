import ServiceCard from "../../content/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: "/svgs/ai-ml.svg",
      title: "AI/ML",
      description: "Revolutionizing decisions through intelligent solutions",
    },
    {
      icon: "/svgs/automation.svg",
      title: "Automation",
      description: "Streamlining processes to enhance efficiency",
    },
    {
      icon: "/svgs/cybersecurity.svg",
      title: "Cybersecurity",
      description: "Fortifying your business against evolving threats",
    },
    {
      icon: "/svgs/webApp.svg",
      title: "Web & Mobile Apps",
      description: "Crafting seamless digital experiences",
    },
    {
      icon: "/svgs/custom.svg",
      title: "Custom Solutions",
      description: "Tailored tech built just for you",
    },
    {
      icon: "/svgs/devops.svg",
      title: "Dev Ops",
      description: "Optimizing development and deployment pipelines",
    },
  ];
  return (
    <section className="py-20 px-4 bg-[#020817]" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#3B82F6] text-sm font-semibold py-2 px-6 border rounded-xl">
            Why Us
          </span>
          <h2 className="text-4xl font-bold mt-4">
            Our Popular <span className="text-[#3B82F6]">Services</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};
export default Services;
