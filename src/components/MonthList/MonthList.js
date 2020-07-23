import React from "react";
import MonthLIstItem from "./MonthListItem/MonthListItem";

import classes from "./MonthList.module.css";
import Spinner from "../Spinner/Spinner";

const MonthList = (props) => {
  const { totalBirthdaysPerMonth, filter, usersList } = props;
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  let listItems = (
    <li>
      <Spinner />
    </li>
  );

  if (totalBirthdaysPerMonth) {
    listItems = months.map((item, id) => {
      if (
        totalBirthdaysPerMonth[item] > 0 &&
        totalBirthdaysPerMonth[item] < 2
      ) {
        return (
          <MonthLIstItem
            id={id}
            list={usersList}
            filter={filter}
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
          <MonthLIstItem
            id={id}
            list={usersList}
            filter={filter}
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
          <MonthLIstItem
            id={id}
            list={usersList}
            filter={filter}
            background="Green"
            name={item}
            key={item}
          />
        );
      } else if (totalBirthdaysPerMonth[item] >= 11) {
        return (
          <MonthLIstItem
            id={id}
            list={usersList}
            filter={filter}
            background="Red"
            name={item}
            key={item}
          />
        );
      } else {
        return <li key={item}>{item}</li>;
      }
    });
  }

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
      {listItems}
    </ul>
  );
};

export default MonthList;
