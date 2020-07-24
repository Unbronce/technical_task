import { useState, useCallback } from "react";

const useUsersList = () => {
  const [usersList, setUserslist] = useState([]);
  const [filteredUsersList, setFilteredUsersList] = useState([]);
  const [amountOfBirthdayPerMonth, setAmountOfBirthdayPerMonth] = useState(
    null
  );

  const onUserListHandler = useCallback((list) => {
    setUserslist(list);
  }, []);

  const onBirthdayHandler = useCallback((userBdayByMonth) => {
    setAmountOfBirthdayPerMonth(userBdayByMonth);
  }, []);

  const onUsersFilteredHandler = useCallback((byMonth) => {
    setFilteredUsersList(byMonth);
  }, []);

  return [
    usersList,
    onUserListHandler,
    filteredUsersList,
    onBirthdayHandler,
    amountOfBirthdayPerMonth,
    onUsersFilteredHandler,
  ];
};

export default useUsersList;
