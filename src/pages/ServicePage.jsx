import Service from "../components/Services/Service";
import Footer from "../content/Footer";
import Navbar from "../content/Navbar";

const ServicePage = () => {
  return (
    <div className="text-white">
      {" "}
      <Navbar />
      <Service />
      <Footer />
    </div>
  );
};
export default ServicePage;
