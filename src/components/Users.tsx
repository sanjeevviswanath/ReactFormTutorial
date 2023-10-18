import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
// TODO: Refactoring the code to implement separation of concern by weekenmd
//TODO: Implement custom hooks over the weekend. added
//TODO: Implement util classes to implement separation of concern for all data related operations
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
      name: "Satish",
      username: "mgkumar",
      email: "mgkumar@gmail.com",
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
  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "-updated" };
    setusers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    setError("");
    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updatedUser
      )
      .catch((err) => {
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
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
