import React from "react";
import Card from "../../Card/Card";

const Users = (props) => {
  const date = new Date(Date.parse(props.dob)).toUTCString();

  return (
    <li>
      <Card>
        <p style={{ margin: "0" }}>
          {props.firstName} {props.lastName}
        </p>
        <p style={{ margin: "0" }}>{date}</p>
      </Card>
    </li>
  );
};

export default Users;
