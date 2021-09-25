import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  const [searchedProfileId, setSearchProfiledId] = useState(null);

  const search = (searchVal, index) => {
    if (searchVal === "") {
      setBookings(FakeBookings);
    } else {
      const filterBookings = bookings.filter(
        item => item.firstName === searchVal || item.surname === searchVal
      );
      setBookings(filterBookings);
    }
  };

  const changeSearchedProfile = newProfileId => {
    setSearchProfiledId(newProfileId);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(results => results.json())
      .then(results => setBookings(results))
      .then(changeLoading => setLoading(false));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        {loading ? (
          <div class="alert alert-success" role="alert">
            Loading
          </div>
        ) : (
          <>
            <Search search={search} />
            <SearchResults
              bookings={bookings}
              changeProfile={changeSearchedProfile}
            />
            <CustomerProfile id={searchedProfileId} />
          </>
        )}
      </div>
    </div>
  );
};

export default Bookings;
