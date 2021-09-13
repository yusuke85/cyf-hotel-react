import React from "react";

// const Heading = () => {
//   return (
//     <img
//       src="https://image.flaticon.com/icons/svg/139/139899.svg"
//       alt="Hotel"
//       width="100px"
//       height="100px"
//     />
//     );
//   };

const styles = {
  width: "48px",
  position: "absolute",
  top: "-1px",
  left: "111px"
};

const Heading = () => (
  <div>
    <header className="App-header">
      <span>CYF Hotel</span>
      <img
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="logo svg"
        style={styles}
      />
    </header>
  </div>
);

export default Heading;
