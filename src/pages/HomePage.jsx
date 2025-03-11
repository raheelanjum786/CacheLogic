import {
  Brain,
  Code,
  Shield,
  Smartphone,
  Settings,
  Terminal,
} from "lucide-react";
import Navbar from "../content/Navbar";
import TrustedBy from "../content/TrustedBy";
import FeaturePoint from "../components/Home/AboutUs";
import ServiceCard from "../components/Home/Services";
import CTA from "../components/Home/CTA";
import Footer from "../content/Footer";
import Services from "../components/Home/Services";
import AboutUs from "../components/Home/AboutUs";
import Home from "../components/Home/Home";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen  text-white">
        <Navbar />
        <Home />
        <TrustedBy />
        <Services />
        <AboutUs />
        <CTA />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;
