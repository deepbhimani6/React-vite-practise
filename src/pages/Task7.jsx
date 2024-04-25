import React from "react";
import { users } from "../js/Data.js";

// filter by company state then filter bt city
export default function Task7() {
  const filteredUsers = users.reduce((accum, user) => {
    const {
      address: { city, state },
      lastName,
      firstName,
      ssn,
    } = user;

    if (!accum[state]) {
      accum[state] = {};
    }

    if (!accum[state][city]) {
      accum[state][city] = [];
    }

    accum[state][city].push({
      name: `${city} ${lastName} ${firstName}`,
      ssn: ssn,
    });

    return accum;
  }, {});

  console.log("Company state vise User's group", filteredUsers);

  return <div>Task7</div>;
}
