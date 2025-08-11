import { useEffect, useState } from "react";
import UserList from "../../components/User/UserList";
import { userService } from "../../services/userService";

export default function UserListContainer() {
  const [users, setUsers] = useState([]);
  const { getUsers } = userService;

  useEffect(() => {
    getUsers();
  }, []);

  return <UserList users={users} />;
}
