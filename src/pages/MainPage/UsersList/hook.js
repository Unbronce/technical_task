import { useEffect, useState } from "react";

const useHttp = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  return users;
};

export default useHttp;
