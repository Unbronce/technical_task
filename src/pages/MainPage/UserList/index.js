import React, { useEffect } from "react";
import Users from "./User";
import Spinner from "../../../components/Spinner";
import useHttp from "./hook";
import { months } from "../../../utilis/months";

const UserList = React.memo((props) => {
  const users = useHttp();
  const { filteredList, setUsersList, setAmountOfBirthdaysPerMonth } = props;

  const usersBirthdaysByMonths = months.reduce(
    (userBirthdays, currentMonth) => {
      return { ...userBirthdays, [currentMonth]: 0 };
    },
    {}
  );

  useEffect(() => {
    setUsersList(users);
    setAmountOfBirthdaysPerMonth(usersBirthdaysByMonths);
  }, [
    setUsersList,
    setAmountOfBirthdaysPerMonth,
    users,
    usersBirthdaysByMonths,
  ]);

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
