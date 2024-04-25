import React from "react";
import { users } from "../js/Data.js";

// filter by mail provider
export default function Task3() {
  const usersList = users.reduce((accum, user) => {
    const provider = user.email.split("@").pop();

    if (!accum[provider]) {
      accum[provider] = [
        user.firstName + " " + user.lastName + " " + user.maidenName,
      ];
    } else {
      accum[provider].push(
        user.firstName + " " + user.lastName + " " + user.maidenName
      );
    }

    // or

    // accum[provider] = (accum[provider] || []).concat(
    //   `${user.firstName} ${user.lastName} ${user.maidenName}`
    // );

    return accum;
  }, {});

  console.log(usersList);

  return <div>Task3</div>;
}
