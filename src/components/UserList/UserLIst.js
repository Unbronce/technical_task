import React, { useState, useEffect } from "react";
import Users from "./Users/Users";

const UserList = React.memo((props) => {
  const [users, setUsers] = useState([]);
  const { filteredList, onUserListHandler, birthdayHandler } = props;

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const usersBirthdaysByMonths = months.reduce(
    (userBirthdays, currentMonth) => {
      return { ...userBirthdays, [currentMonth]: 0 };
    },
    {}
  );

  useEffect(() => {
    let promise = fetch(
      "https://yalantis-react-school-api.yalantis.com/api/task0/users"
    );
    promise.then((res) => res.json()).then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    onUserListHandler(users);
    birthdayHandler(usersBirthdaysByMonths);
  });

  let list = (
    <li>
      <p>wait a second...</p>
    </li>
  );

  users.forEach((item) => {
    let month = new Date(Date.parse(item.dob)).getMonth();
    usersBirthdaysByMonths[months[month]] += 1;
  });

  if (filteredList.length > 0) {
    list = filteredList.map((item) => {
      return (
        <Users
          key={item.id}
          firstName={item.firstName}
          lastName={item.lastName}
          dob={item.dob}
        />
      );
    });
  } else if (users.length > 0) {
    list = users.map((item) => {
      return (
        <Users
          key={item.id}
          firstName={item.firstName}
          lastName={item.lastName}
          dob={item.dob}
        />
      );
    });
  }

  return (
    <ul
      style={{ width: "260px", listStyle: "none", margin: "0", padding: "0" }}
    >
      {list}
    </ul>
  );
});

export default UserList;
