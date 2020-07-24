import React, { useState, useEffect } from "react";
import Users from "./User";
import Spinner from "../../../components/Spinner";

const UserList = React.memo((props) => {
  const [users, setUsers] = useState([]);
  const { filteredList, onUserListHandler, onBirthdayHandler } = props;

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
    fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    onUserListHandler(users);
    onBirthdayHandler(usersBirthdaysByMonths);
  });

  users.forEach((item) => {
    let month = new Date(Date.parse(item.dob)).getMonth();
    usersBirthdaysByMonths[months[month]] += 1;
  });

  let list = (
    <li>
      <Spinner />
    </li>
  );

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
