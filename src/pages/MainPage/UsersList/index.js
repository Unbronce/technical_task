import React from "react";
import Users from "./User";
import Spinner from "../../../components/Spinner";

const UserList = React.memo((props) => {
  const { users } = props;

  if (users.length > 0) {
    return (
      <ul
        style={{
          width: "260px",
          listStyle: "none",
          margin: "0",
          padding: "0",
        }}
      >
        {users.map((item) => {
          return (
            <Users
              key={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              dob={item.dob}
            />
          );
        })}
      </ul>
    );
  } else {
    return <Spinner />;
  }
});

export default UserList;
