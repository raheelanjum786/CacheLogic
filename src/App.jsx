import Footer from "./content/Footer";
import Navbar from "./content/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="bg-blue-950">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};
export default App;
