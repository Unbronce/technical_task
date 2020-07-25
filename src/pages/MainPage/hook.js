import { useState } from "react";
import { months } from "../../utilis/months/index";

const getUsersBirthdaysByMonth = (users) => {
  const initialMonths = monthsArray.reduce((userBirthdays, currentMonth) => {
    return { ...userBirthdays, [currentMonth]: 0 };
  }, {});

  return users.reduce((birthdaysByMonths, user) => {
    const month = new Date(Date.parse(user.dob)).getMonth();
    const monthKey = birthdaysByMonths[months[month]];

    return {
      ...birthdaysByMonths,
      [monthKey]: birthdaysByMonths[monthKey] + 1,
    };
  }, initialMonths);
};

const useUsersList = () => {
  const [usersList, setUsersList] = useState([]);
  const [filteredUsersList, setFilteredUsersList] = useState([]);
  const [amountOfBirthdayPerMonth, setAmountOfBirthdaysPerMonth] = useState(
    null
  );

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://yalantis-react-school-api.yalantis.com/api/task0/users"
      );
      const users = response.json();
      setUserslist(users);
      setAmountOfBirthdaysPerMonth(getUsersBirthdaysByMonth(usersList));
    };

    fetchUsers();
  }, []);

  return [
    usersList,
    setUsersList,
    filteredUsersList,
    setAmountOfBirthdaysPerMonth,
    amountOfBirthdayPerMonth,
    setFilteredUsersList,
  ];
};

export default useUsersList;
