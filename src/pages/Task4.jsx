import React from "react";
import { users } from "../js/Data.js";

// filter by company state
export default function Task4() {
  const companyStates = users.reduce((accum, user) => {
    const state = user.company.address.state;

    if (!accum[state]) {
      accum[state] = [
        {
          name: user.firstName + " " + user.lastName + " " + user.maidenName,
          ssn: user.ssn,
        },
      ];
    } else {
      accum[state].push({
        name: user.firstName + " " + user.lastName + " " + user.maidenName,
        ssn: user.ssn,
      });
    }
    return accum;
  }, {});

  console.log("Company state vise User's group", companyStates);

  let total = 0;
  for (const property in companyStates) {
    console.log(property, companyStates[property].length);
    total = total + companyStates[property].length;
  }
  console.log("total : " + total);

  return <div>Task4</div>;
}
