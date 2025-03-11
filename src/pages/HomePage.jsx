import AboutUs from "../components/Home/AboutUs";
import CTA from "../components/Home/CTA";
import Home from "../components/Home/Home";
import Services from "../components/Home/Services";

const HomePage = () => {
  return (
    <>
      <Home /> <Services />
      <AboutUs />
      <CTA />
    </>
  );
};
export default HomePage;
