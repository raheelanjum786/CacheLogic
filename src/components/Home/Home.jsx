const Home = () => {
  return (
    <section className="min-h-screen text-center p-10  text-white relative">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">
          Fast-Tracking Your{" "}
          <span className="text-blue-400">IT Evolution.</span>
        </h1>
        <p className="mt-4">
          Empowering businesses with cutting-edge technology and tailored
          solutions.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-blue-500 px-6 py-3 rounded-lg">
            Discover Our Services
          </button>
          <button className="border px-6 py-3 rounded-lg">Contact Us</button>
        </div>
      </div>
    </section>
  );
};
export default Home;
