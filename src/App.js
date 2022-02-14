import React from "react";
import Heading from "./components/Heading";
import TouristCardsBase from "./components/TouristCardsBase";
import Bookings from "./components/Bookings";
import Restaurant from "./components/Restaurant";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristCardsBase />
      <Bookings />
      <Restaurant />
      <SearchResults />
      <Footer />
    </div>
  );
};

export default App;
