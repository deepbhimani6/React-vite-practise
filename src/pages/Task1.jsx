import React from "react";
import { users } from "../js/Data.js";

// concat first & last & maiden name
export default function Task1() {
  const usersList = users.map((user) => {
    return user.firstName + " " + user.lastName + " " + user.maidenName;
  });
  console.log(usersList);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.firstName + " " + user.lastName + " " + user.maidenName}
        </div>
      ))}
    </div>
  );
}
