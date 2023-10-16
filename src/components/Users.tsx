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
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setusers(users.filter((u) => u.id !== user.id));
    setError("");
    //call axios function to delete a user
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setusers(originalUsers);
      });
  };
  const addUser = () => {
    const originalUsers = [...users];
    const newuser = {
      id: 0,
      name: "Sanjeev",
      username: "sanjeevv",
      email: "sanjeev@zymr.com",
    };
    setusers([newuser, ...users]);
    setError("");
    axios
      .post("https://jsonplaceholder.typicode.com/users", newuser)
      .then((res) => {
        setusers([res.data, ...users]);
      })
      .catch((err) => {
        console.log("Error detected in adding user");
        setError(err.message);
        setusers(originalUsers);
      });
  };
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary" onClick={() => addUser()}>
        Add User{" "}
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
