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
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    //get USER data from API
    console.log("Connecting to API...");
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setusers(response.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError("Unable to access API: " + error.message);
      })
      .finally(() => {
        // setting the loading indicator to false.
        setIsLoading(false);
      });
    return () => {
      // Cleanup useEffect code here
      console.log("Running cleanup code");
      controller.abort();
    };
  }, []);
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button className="btn btn-outline-danger" onClick={deleteUser}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
