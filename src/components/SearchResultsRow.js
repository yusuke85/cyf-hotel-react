import React, { useState } from "react";
import moment from "moment";

function SearchResultsRow({ item, index, changeProfile }) {
  const [color, setColor] = useState(null);

  const handlRowBg = () => {
    if (!color) {
      setColor("table-warning");
    } else {
      setColor(null);
    }
  };

  function getDays(dataA, dataB) {
    return dataB.diff(dataA, "days");
  }

  return (
    <tr key={index} className={color} onClick={handlRowBg}>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.firstName}</td>
      <td>{item.surname}</td>
      <td>{item.email}</td>
      <td>{item.roomId}</td>
      <td>{item.checkInDate}</td>
      <td>{item.checkOutDate}</td>
      <td>{getDays(moment(item.checkInDate), moment(item.checkOutDate))}</td>

      <td>
        <button
          className="btn btn-light"
          onClick={() => changeProfile(item.id)}
        >
          Profile
        </button>
      </td>
    </tr>
  );
}

export default SearchResultsRow;
