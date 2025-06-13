
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p>Welcome, {user?.email}!</p>
    </div>
  );
}

export default Dashboard;