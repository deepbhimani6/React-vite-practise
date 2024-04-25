import React from "react";
import { users } from "../js/Data.js";

// get first single value
export default function Task6() {
  const bloodGroupList = users.find((user) => {
    return user.bloodGroup == "B+";
  });
  console.log(bloodGroupList);

  return <div>Task6</div>;
}
