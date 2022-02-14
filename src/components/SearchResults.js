import React from "react";
import moment from "moment";
import SearchResultsRow from "./SearchResultsRow";

moment().format();

const SearchResults = ({ bookings, changeProfile }) => {
  return (
    <>
      <table className="table">
        {/* <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights</th>
            <th scope="col">Show Profile</th>
          </tr>
        </thead> */}

        <tbody>
          {bookings &&
            bookings.map((item, index) => {
              return (
                <>
                  <SearchResultsRow
                    index={index}
                    item={item}
                    changeProfile={changeProfile}
                  />
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default SearchResults;
