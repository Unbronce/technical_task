import React, { useState, useCallback } from "react";
import UserList from "./components/UserList/UserLIst";
import MonthList from "./components/MonthList/MonthList";

import classes from "./App.module.css";
import Header from "./components/Header/Header";

const App = () => {
  const [usersList, setUserslist] = useState([]);
  const [filteredUsersList, setFilteredUsersList] = useState([]);
  const [amountOfBirthdayPerMonth, setAmountOfBirthdayPerMonth] = useState(
    null
  );

  const onUserListHandler = useCallback((list) => {
    setUserslist(list);
  }, []);

  const birthdayHandler = useCallback((value) => {
    setAmountOfBirthdayPerMonth(value);
  }, []);

  const onUsersFilteredHandler = useCallback((byMonth) => {
    setFilteredUsersList(byMonth);
  }, []);

  return (
    <>
      <Header />
      <div className={classes.App}>
        <UserList
          filteredList={filteredUsersList}
          onUserListHandler={onUserListHandler}
          birthdayHandler={birthdayHandler}
        />
        <MonthList
          totalBirthdaysPerMonth={amountOfBirthdayPerMonth}
          filter={onUsersFilteredHandler}
          usersList={usersList}
        />
      </div>
    </>
  );
};

export default App;
