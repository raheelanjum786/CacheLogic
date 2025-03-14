import ServiceCard from "../../content/ServiceCard";
import { Search } from "lucide-react";

const Service = () => {
  const services = [
    {
      icon: "/svgs/ai-ml.svg",
      title: "Custom Software Development",
      description:
        "From concept to code, our bespoke software solutions are crafted to fit your specific needs, enabling innovation and efficiency at every step.",
    },
    {
      icon: "/svgs/advanceDevOps.svg",
      title: "Advanced DevOps & DevSecOps",
      description:
        "Accelerate your development cycles and ensure robust security with our integrated DevOps and DevSecOps practices that minimize downtime and maximize performance.",
    },
    {
      icon: "/svgs/aiLearning.svg",
      title: "AI & Machine Learning Solutions",
      description:
        "Harness the power of data with AI algorithms designed to optimize operations, enhance decision-making, and revolutionize customer experiences.",
    },
    {
      icon: "/svgs/cloud.svg",
      title: "Cloud Strategy & Migration",
      description:
        "Transition smoothly to the cloud with our comprehensive strategies that not only streamline migration but also optimize your cloud operations for scalability and cost efficiency.",
    },
    {
      icon: "/svgs/cybersecurity.svg",
      title: "Cybersecurity & Risk Management",
      description:
        "Protect your assets and data with state-of-the-art security systems and risk management protocols tailored to your business's unique vulnerabilities.",
    },
    {
      icon: "/svgs/devops.svg",
      title: "IoT Solutions",
      description:
        "Connect and scale your devices seamlessly with our IoT services that enhance data collection and analytics, improving operational efficiency and innovation.",
    },
    {
      icon: "/svgs/blockchain.svg",
      title: "Blockchain Development",
      description:
        "Implement secure, decentralized technologies for transactions and data storage that enhance transparency and trust across operations.",
    },
    {
      icon: "/svgs/erpCrm.svg",
      title: "ERP & CRM Implementation",
      description:
        "Integrate powerful ERP and CRM systems that improve workflow efficiency, enhance customer relationships, and drive business growth.",
    },
    {
      icon: "/svgs/digitalMarketing.svg",
      title: "Digital Marketing",
      description:
        "Elevate your online presence with our digital marketing expertise, ranging from SEO to content marketing and social media strategies.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#020817]" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="flex px-6 py-2 align-middle items-center justify-start border-2 rounded-xl w-full sm:w-40 mt-12">
          <Search className="w-4 h-4 mr-2 text-white" />
          <span className="text-[#3B82F6] text-sm font-semibold">
            Our Services
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between py-12">
          <h1 className="text-4xl text-white mb-4 md:mb-0">
            Empower Your Business with Cutting Edge{" "}
            <span className="text-blue-600 font-bold">IT Solutions</span>.
          </h1>
          <p className="text-lg text-white text-right">
            Explore our full site of services tailored to meet the unique
            challenges of your industry.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
