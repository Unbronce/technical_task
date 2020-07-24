import { useState } from "react";

const useUsersList = () => {
  const [usersList, _setUserslist] = useState([]);
  const [filteredUsersList, _setFilteredUsersList] = useState([]);
  const [amountOfBirthdayPerMonth, _setAmountOfBirthdaysPerMonth] = useState(
    null
  );

  const setUsersList = (list) => _setUserslist(list);

  const setAmountOfBirthdaysPerMonth = (userBdayByMonth) =>
    _setAmountOfBirthdaysPerMonth(userBdayByMonth);

  const setFilteredUsersList = (byMonth) => _setFilteredUsersList(byMonth);

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
