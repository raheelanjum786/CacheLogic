import { Award, Globe, Headphones, Target } from "lucide-react";
import FeaturePoint from "../../content/FeaturePoint";

const AboutUs = () => {
  const features = [
    { icon: Target, title: "Tailored solutions for every industry" },
    { icon: Globe, title: "Global reach with localized expertise" },
    { icon: Award, title: "Proven track record in innovation and growth" },
    { icon: Headphones, title: "Dedicated support to drive your success" },
  ];

  return (
    <section className="py-20 px-4 bg-[#020817]" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#3B82F6] text-sm font-semibold">
              About Us
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-8 text-white">
              Why CacheLogic?
            </h2>

            {/* FIX: Making it a 2x2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {features.map((feature, index) => (
                <FeaturePoint
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  showBottomBorder={index < 2} // Bottom border for top row
                  showRightBorder={index % 2 === 0} // Right border for left column
                />
              ))}
            </div>

            <button className="mt-8 border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition text-white">
              Read Our Story
            </button>
          </div>

          <div className="relative">
            <img src="/svgs/PuzzlePeople.svg" alt="Team collaboration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
