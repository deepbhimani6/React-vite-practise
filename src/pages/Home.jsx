import { React, useState } from "react";
import "../style/Table.css";
import { users as initialUsers } from "../js/Data.js";

// array table with filter
export default function Home() {
  const [users, setUsers] = useState(initialUsers);

  function handleChange(e) {
    const filterFirstName = initialUsers.filter((user) => {
      let inputValue = e.target.value.toLowerCase();
      const propertiesToCheck = [
        "firstName",
        "lastName",
        "maidenName",
        "gender",
        "email",
        "phone",
        "age",
        "address",
      ];

      for (const property of propertiesToCheck) {
        // check that value is number or not
        let value = user[property];
        if (typeof value === "number") {
          value = value.toString();
        }
        if (typeof value !== "string") {
          return true;
        }

        return value.toLowerCase().includes(inputValue);
      }
      // if (user.firstName.toLowerCase().startsWith(inputValue)) {
      //   return user.firstName.toLowerCase().startsWith(inputValue);
      // } else if (user.lastName.toLowerCase().startsWith(inputValue)) {
      //   return user.lastName.toLowerCase().startsWith(inputValue);
      // } else if (user.maidenName.toLowerCase().startsWith(inputValue)) {
      //   return user.maidenName.toLowerCase().startsWith(inputValue);
      // } else if (user.gender.toLowerCase().startsWith(inputValue)) {
      //   return user.gender.toLowerCase().startsWith(inputValue);
      // } else if (user.email.toLowerCase().startsWith(inputValue)) {
      //   return user.email.toLowerCase().startsWith(inputValue);
      // } else if (user.phone.toLowerCase().startsWith(inputValue)) {
      //   return user.phone.toLowerCase().startsWith(inputValue);
      // }
    });
    setUsers(filterFirstName);
  }

  return (
    <div className="user-table-section">
      <div className="container">
        <h2>User Table</h2>

        <div className="search">
          <form action="http://www.google.com/search" method="get">
            <div className="searchbar">
              <input
                onChange={handleChange}
                className="search_input"
                type="text"
                name="searchInput"
                placeholder="Search Table..."
              />
              <div className="search_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search icon icon-search-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="10" cy="10" r="7"></circle>
                  <line x1="21" y1="21" x2="15" y2="15"></line>
                </svg>
              </div>
            </div>
          </form>
        </div>

        <div className="table-content">
          <table border="2" cellSpacing={0}>
            <thead>
              <tr>
                <th rowSpan={4}>ID</th>
                <th rowSpan={4}>Avatar</th>
                <th rowSpan={4}>First Name</th>
                <th rowSpan={4}>Maiden Name</th>
                <th rowSpan={4}>Last Name</th>
                <th rowSpan={4}>Age</th>
                <th rowSpan={4}>Gender</th>
                <th rowSpan={4}>Email</th>
                <th rowSpan={4}>Phone</th>
                <th rowSpan={4}>User Name</th>
                <th rowSpan={4}>Password</th>
                <th rowSpan={4}>Birth Date</th>
                <th rowSpan={4}>Blood Group</th>
                <th rowSpan={4}>Height</th>
                <th rowSpan={4}>Weight</th>
                <th rowSpan={4}>Eye Color</th>
                <th colSpan={2}>Hair</th>
                <th rowSpan={4}>Domain</th>
                <th rowSpan={4}>IP</th>
                <th colSpan={6}>Address</th>
                <th rowSpan={4}>Mac Address</th>
                <th rowSpan={4}>University</th>
                <th colSpan={5}>Bank</th>
                <th colSpan={9}>Company</th>
                <th rowSpan={4}>Ein</th>
                <th rowSpan={4}>Ssn</th>
                <th rowSpan={4}>User Agent</th>
                <th colSpan={3}>Crypto</th>
              </tr>
              <tr>
                <th rowSpan={3}>Color</th>
                <th rowSpan={3}>Type</th>
                <th rowSpan={3}>Address</th>
                <th rowSpan={3}>City</th>
                <th colSpan={2}>Coordinates</th>
                <th rowSpan={3}>PostalCode</th>
                <th rowSpan={3}>State</th>
                <th rowSpan={3}>CardExpire</th>
                <th rowSpan={3}>CardNumber</th>
                <th rowSpan={3}>CardType</th>
                <th rowSpan={3}>Currency</th>
                <th rowSpan={3}>Iban</th>
                <th colSpan={6}>Address</th>
                <th rowSpan={3}>Department</th>
                <th rowSpan={3}>Name</th>
                <th rowSpan={3}>Title</th>
                <th rowSpan={3}>Coin</th>
                <th rowSpan={3}>Wallet</th>
                <th rowSpan={3}>Network</th>
              </tr>
              <tr>
                <th rowSpan={2}>Lat</th>
                <th rowSpan={2}>Lng</th>
                <th rowSpan={2}>Address</th>
                <th rowSpan={2}>City</th>
                <th colSpan={2}>Coordinates</th>
                <th rowSpan={2}>PostalCode</th>
                <th rowSpan={2}>State</th>
              </tr>
              <tr>
                <th>Lat</th>
                <th>Lng</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th>{user.id}</th>
                  <td>
                    <img src={user.image} alt="avatar" />
                  </td>
                  <td>{user.firstName}</td>
                  <td>{user.maidenName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.birthDate}</td>
                  <td>{user.bloodGroup}</td>
                  <td>{user.height}</td>
                  <td>{user.weight}</td>
                  <td>{user.eyeColor}</td>
                  <td>{user.hair.color}</td>
                  <td>{user.hair.type}</td>
                  <td>{user.domain}</td>
                  <td>{user.ip}</td>
                  <td>{user.address.address}</td>
                  <td>{user.address.city}</td>
                  <td>{user.address.coordinates.lat}</td>
                  <td>{user.address.coordinates.lng}</td>
                  <td>{user.address.postalCode}</td>
                  <td>{user.address.state}</td>
                  <td>{user.macAddress}</td>
                  <td>{user.university}</td>
                  <td>{user.bank.cardExpire}</td>
                  <td>{user.bank.cardNumber}</td>
                  <td>{user.bank.cardType}</td>
                  <td>{user.bank.currency}</td>
                  <td>{user.bank.iban}</td>
                  <td>{user.company.address.address}</td>
                  <td>{user.company.address.city}</td>
                  <td>{user.company.address.coordinates.lat}</td>
                  <td>{user.company.address.coordinates.lng}</td>
                  <td>{user.company.address.postalCode}</td>
                  <td>{user.company.address.state}</td>
                  <td>{user.company.department}</td>
                  <td>{user.company.name}</td>
                  <td>{user.company.title}</td>
                  <td>{user.ein}</td>
                  <td>{user.ssn}</td>
                  <td>{user.userAgent}</td>
                  <td>{user.crypto.coin}</td>
                  <td>{user.crypto.wallet}</td>
                  <td>{user.crypto.network}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
