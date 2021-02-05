import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import FurnitureContainer from "./components/FurnitureContainer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Carousel />
            <FurnitureContainer />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
