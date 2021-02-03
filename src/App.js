import "./App.css";
import Carousel from "./components/Carousel";
import FurnitureContainer from "./components/FurnitureContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Carousel />
      <FurnitureContainer />
    </div>
  );
}

export default App;
