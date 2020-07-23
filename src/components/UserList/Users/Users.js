import React from "react";

const Users = (props) => {
  const date = new Date(Date.parse(props.dob)).toUTCString();

  return (
    <li>
      <p>
        {props.firstName} {props.lastName}
      </p>
      <p>{date}</p>
    </li>
  );
};

export default Users;
