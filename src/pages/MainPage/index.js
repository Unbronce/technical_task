import React from "react";
import UserList from "./UsersList";
import MonthList from "./MonthList";

import classes from "./styles.module.css";
import Header from "../../components/Header/index";

import useUserList from "./hook";

const MainPage = () => {
  const {
    usersList,
    filteredUsersList,
    setAmountOfBirthdaysPerMonth,
    amountOfBirthdayPerMonth,
    setFilteredUsersList,
  } = useUserList();

  return (
    <>
      <Header />
      <div className={classes.Wrapper}>
        <UserList
          users={filteredUsersList.length > 0 ? filteredUsersList : usersList}
          setAmountOfBirthdaysPerMonth={setAmountOfBirthdaysPerMonth}
        />
        <MonthList
          totalBirthdaysPerMonth={amountOfBirthdayPerMonth}
          filterUsers={setFilteredUsersList}
          users={usersList}
        />
      </div>
    </>
  );
};

export default MainPage;
