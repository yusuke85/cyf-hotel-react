import React from "react";

const Footer = props => {
  const myFooter = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  const { item } = props;
  return (
    <div>
      <ul className="list">
        {myFooter.map((ability, item) => (
          <li key={item}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
