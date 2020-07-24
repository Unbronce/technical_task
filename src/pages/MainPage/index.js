import React, { useState, useCallback } from "react";
import UserList from "./UserList";
import MonthList from "./MonthList";

import classes from "./styles.module.css";
import Header from "../../components/Header/index";

const MainPage = () => {
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

  return (
    <>
      <Header />
      <div className={classes.Wrapper}>
        <UserList
          filteredList={filteredUsersList}
          onUserListHandler={onUserListHandler}
          onBirthdayHandler={onBirthdayHandler}
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

export default MainPage;
