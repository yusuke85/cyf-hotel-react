import React from "react";
import TouristInfoCards from "./TouristInfoCards";

const citys = [
  {
    name: "Grasgow",
    image:
      "https://viajarporescocia.com/contenido/uploads/xfoto_principal-19.jpg.pagespeed.ic.uBUWk1sJuy.webp",
    url: "https://peoplemakeglasgow.com/",
    description: ""
  },

  {
    name: "Manchester",
    image:
      "https://blog.esl-idiomas.com/wp-content/uploads/2019/04/485450351.jpg",
    url: "https://www.visitmanchester.com/",
    description: ""
  },

  {
    name: "London",
    image:
      "https://static.neweuropetours.eu/wp-content/uploads/2018/09/thio-lon-ft-4-1600x900.jpg",
    url: "https://visitlondon.com/",
    description: ""
  }
];

const ToCards = () => {
  return citys.map(city => {
    return (
      <TouristInfoCards
        name={city.name}
        image={city.image}
        url={city.url}
        description={city.description}
      />
    );
  });
};

export default ToCards;
