import React from "react";
import UserList from "./UserList";
import MonthList from "./MonthList";

import classes from "./styles.module.css";
import Header from "../../components/Header/index";

import useUserList from "./hook";

const MainPage = () => {
  const [
    usersList,
    onUserListHandler,
    filteredUsersList,
    onBirthdayHandler,
    amountOfBirthdayPerMonth,
    onUsersFilteredHandler,
  ] = useUserList();

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
