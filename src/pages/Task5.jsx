import React from "react";
import { users } from "../js/Data.js";

// filter by gender
export default function Task5() {
  const genderLists = users.reduce((accum, user) => {
    const gender = user.gender;

    if (!accum[gender]) {
      accum[gender] = [
        user.firstName + " " + user.lastName + " " + user.maidenName,
      ];
    } else {
      accum[gender].push(
        user.firstName + " " + user.lastName + " " + user.maidenName
      );
    }
    return accum;
  }, {});

  console.log(genderLists);

  return <div>Task5</div>;
}
