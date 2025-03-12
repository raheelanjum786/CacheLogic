import AiSolutions from "../components/Home/AiSolutions";
import Service from "../components/Services/Service";
import Footer from "../content/Footer";
import Navbar from "../content/Navbar";

const ServicePage = () => {
  return (
    <div className="text-white">
      {" "}
      <Navbar />
      <Service />
      <AiSolutions />
      <Footer />
    </div>
  );
};
export default ServicePage;
