export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-[#1E293B]/50 p-6 pb-12 rounded-xl hover:text-white border border-gray-800 hover:bg-gradient-to-r hover:from-[#1AB5E9] hover:via-[#23AAEB] hover:via-[#4382F3] hover:to-[#4F73F6] transition group relative hover:scale-105">
      <div className="w-12 h-12 flex justify-center items-center">
        <img src={icon} alt={title} className=" object-cover" />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
        {title}
      </h3>
      <p className="text-gray-400 mb-4 group-hover:text-white">{description}</p>
      <a
        href="#"
        className="text-[#3B82F6] inline-flex items-center absolute bottom-6 left-6 group-hover:text-white hover:border-b"
      >
        Learn More →
      </a>
    </div>
  );
}
