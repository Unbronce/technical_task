import React from "react";
import MonthListItem from "./MonthListItem";

import classes from "./styles.module.css";
import Spinner from "../../../components/Spinner";
import { months } from "../../../utilis/months";

const MonthList = (props) => {
  const { totalBirthdaysPerMonth, filterUsers, usersList } = props;

  if (totalBirthdaysPerMonth) {
    return (
      <ul
        className={classes.Box}
        style={{
          width: "300px",
          listStyle: "none",
          margin: "0",
          padding: "0",
        }}
      >
        {months.map((item, id) => {
          if (
            totalBirthdaysPerMonth[item] > 0 &&
            totalBirthdaysPerMonth[item] < 2
          ) {
            return (
              <MonthListItem
                id={id}
                list={usersList}
                filterUsers={filterUsers}
                background="Grey"
                name={item}
                key={item}
              />
            );
          } else if (
            totalBirthdaysPerMonth[item] >= 3 &&
            totalBirthdaysPerMonth[item] <= 6
          ) {
            return (
              <MonthListItem
                id={id}
                list={usersList}
                filterUsers={filterUsers}
                background="Blue"
                name={item}
                key={item}
              />
            );
          } else if (
            totalBirthdaysPerMonth[item] >= 7 &&
            totalBirthdaysPerMonth[item] <= 10
          ) {
            return (
              <MonthListItem
                id={id}
                list={usersList}
                filterUsers={filterUsers}
                background="Green"
                name={item}
                key={item}
              />
            );
          } else if (totalBirthdaysPerMonth[item] >= 11) {
            return (
              <MonthListItem
                id={id}
                list={usersList}
                filterUsers={filterUsers}
                background="Red"
                name={item}
                key={item}
              />
            );
          } else {
            return <li key={item}>{item}</li>;
          }
        })}
      </ul>
    );
  } else {
    return <Spinner />;
  }
};

export default MonthList;
