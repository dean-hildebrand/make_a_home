import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import FurnitureContainer from "./components/FurnitureContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Carousel />
      <FurnitureContainer />
      <Footer />
    </div>
  );
}

export default App;
