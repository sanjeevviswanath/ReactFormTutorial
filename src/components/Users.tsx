import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

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
    //get USER data from API
    console.log("Connecting to API...");
    const controller = new AbortController();
    axios
      .get<User[]>("https://xjsonplaceholder.typicode.com/users")
      .then((response) => {
        setusers(response.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError("Unable to access API: " + error.message);
      });
    return () => {
      //TODO: Cleanup useEffect code here
      console.log("Running cleanup code");
      controller.abort();
    };
  }, []);
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
