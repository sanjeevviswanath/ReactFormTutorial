import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const Users = () => {
  const [users, setusers] = useState<User[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    //TODO: get USER data from API
    axios
      .get<User[]>("https://sonplaceholder.typicode.com/users")
      .then((response) => {
        setusers(response.data);
      })
      .catch((error) => setError("Unable to access API: " + error.message));
  }, [users]);
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
