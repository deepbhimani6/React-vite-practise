import { React, useState } from "react";

// onchange event
export default function Task8() {
  const [person, setPerson] = useState({
    name: "deep",
    lastname: "bhimani",
    age: "12",
  });

  function changePerson(field, value) {
    setPerson((prevPerson) => {
      return { ...prevPerson, [field]: value };
    });
  }

  return (
    <div
      style={{
        padding: "100px",
      }}
    >
      <div>
        <input
          name="firstname"
          onChange={(e) => {
            changePerson("name", e.target.value);
          }}
          value={person?.name}
        />
      </div>

      <div>
        <input
          name="lastname"
          value={person?.lastname}
          onChange={(e) => {
            changePerson("lastname", e.target.value);
          }}
        />
      </div>
      <div>
        <input
          name="age"
          value={person?.age}
          onChange={(e) => {
            changePerson("age", e.target.value);
          }}
        />
      </div>

      <div>
        <div>
          <p>firstName : {person.name}</p>
          <p>lastName : {person.lastname}</p>
          <p>age : {person.age}</p>
        </div>
      </div>
    </div>
  );
}
