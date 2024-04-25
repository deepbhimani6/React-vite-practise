import React from "react";
import { users } from "../js/Data.js";

// filter by 20 to 30 years age
export default function Task2() {
  const usersList = users.filter((user) => {
    return user.age > 20 && user.age < 30;
  });
  console.log(
    "This List is more than 20 and less than 30 age's Users",
    usersList
  );
  console.log(
    "Users Count is more than 20 and less than 30 age:",
    usersList.length
  );

  return (
    <div>
      {usersList.map((user) => (
        <div key={user.id}>
          {user.firstName + " " + user.lastName + " " + user.maidenName} age is{" "}
          {user.age}
        </div>
      ))}
    </div>
  );
}
