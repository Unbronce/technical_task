import React, { useCallback } from "react";
import classes from "./MonthListItem.module.css";

const MonthLIstItem = (props) => {
  const { filter, id, list } = props;
  const onFilteredUsers = useCallback(() => {
    const filtered = list.filter(
      (item) => new Date(Date.parse(item.dob)).getMonth() === id
    );
    filter(filtered);
  }, [filter, id, list]);

  const onRefreshUsers = useCallback(() => {
    filter([]);
  }, [filter]);

  return (
    <li
      onMouseEnter={onFilteredUsers}
      onMouseLeave={onRefreshUsers}
      className={[classes[props.background], classes.Box].join(" ")}
    >
      {props.name}
    </li>
  );
};

export default MonthLIstItem;
