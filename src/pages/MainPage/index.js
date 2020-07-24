import React from "react";
import UserList from "./UserList";
import MonthList from "./MonthList";

import classes from "./styles.module.css";
import Header from "../../components/Header/index";

import useUserList from "./hook";

const MainPage = () => {
  const [
    usersList,
    setUsersList,
    filteredUsersList,
    setAmountOfBirthdaysPerMonth,
    amountOfBirthdayPerMonth,
    setFilteredUsersList,
  ] = useUserList();

  return (
    <>
      <Header />
      <div className={classes.Wrapper}>
        <UserList
          filteredList={filteredUsersList}
          setUsersList={setUsersList}
          setAmountOfBirthdaysPerMonth={setAmountOfBirthdaysPerMonth}
        />
        <MonthList
          totalBirthdaysPerMonth={amountOfBirthdayPerMonth}
          filterUsers={setFilteredUsersList}
          usersList={usersList}
        />
      </div>
    </>
  );
};

export default MainPage;
