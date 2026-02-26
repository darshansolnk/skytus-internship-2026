import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import { useDashboard } from "../context/DashboardContext";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Users = () => {

  const { users, setUsers } = useDashboard();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsers();
        setUsers(res.data);
      } catch {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div>
      <h3>Users List</h3>
      {users.slice(0,5).map(user => (
        <p key={user.id}>{user.email}</p>
      ))}
    </div>
  );
};

export default Users;