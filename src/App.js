import React from "react";
import Heading from "./components/Heading";
import Bookings from "./components/Bookings";
import TouristCardsBase from "./components/TouristCardsBase";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristCardsBase />
      {/* <SearchResults /> */}
      <Footer />
    </div>
  );
};

export default App;
