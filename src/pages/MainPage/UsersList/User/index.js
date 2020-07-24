import React from "react";
import Card from "../../../../components/Card/index";

const Users = (props) => {
  const date = new Date(Date.parse(props.dob)).toLocaleString();

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
