import React, { useCallback } from "react";
import classes from "./styles.module.css";

const MonthListItem = (props) => {
  const { filterUsers, id, list } = props;

  const handleFilter = useCallback(() => {
    const filtered = list.filter(
      (item) => new Date(Date.parse(item.dob)).getMonth() === id
    );
    filterUsers(filtered);
  }, [filterUsers, id, list]);

  const handleRefresh = useCallback(() => {
    filterUsers([]);
  }, [filterUsers]);

  return (
    <li
      onMouseEnter={handleFilter}
      onMouseLeave={handleRefresh}
      className={[classes[props.background], classes.Box].join(" ")}
    >
      {props.name}
    </li>
  );
};

export default MonthListItem;
