export default function TrustedBy() {
  const companies = [
    "Google",
    "Seclock",
    "LinkedIn",
    "Commvault",
    "Spotify",
    "Stripe",
  ];

  return (
    <div className="py-8 bg-[#020817]">
      <div className="max-w-6xl  mx-auto px-4">
        <p className="text-center text-gray-500 mb-8">
          Trusted by leading companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {companies.map((company) => (
            <span key={company} className="text-gray-400 text-xl font-semibold">
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
