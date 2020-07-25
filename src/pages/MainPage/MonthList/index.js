import React from "react";
import MonthListItem from "./MonthListItem";

import classes from "./styles.module.css";
import Spinner from "../../../components/Spinner";
import { months } from "../../../utilis/months";

const getMonthColor = (month) => {
  if (month === 0 && month < 3) {
    return "Grey";
  } else if (month >= 3 && month <= 6) {
    return "Blue";
  } else if (month >= 7 && month <= 10) {
    return "Green";
  } else if (month >= 11) {
    return "Red";
  }
};

const MonthList = (props) => {
  const { totalBirthdaysPerMonth, filterUsers, users } = props;

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
        {months.map((key, index) => (
          <MonthListItem
            id={index}
            list={users}
            filterUsers={filterUsers}
            backgroundColor={getMonthColor(totalBirthdaysPerMonth[key])}
            name={key}
            key={key}
          />
        ))}
      </ul>
    );
  } else {
    return <Spinner />;
  }
};

export default MonthList;
