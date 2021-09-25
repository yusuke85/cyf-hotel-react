import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(response => setProfile(response));
  }, [id]);

  return id ? (
    <>
      <p>Custmer {id} Profile</p>
      <h3>Client Name:{profile.firstName}</h3>
      <h3>Client surname:{profile.surname}</h3>
    </>
  ) : (
    <></>
  );
};

export default CustomerProfile;
