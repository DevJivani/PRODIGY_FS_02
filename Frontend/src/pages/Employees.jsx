import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import EmployeeForm from '../components/EmployeeForm';

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/employees', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEmployees(response.data);
    } catch (error) {
      toast.error('Error fetching employees');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:5000/api/employees/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Employee deleted successfully');
        fetchEmployees();
      } catch (error) {
        toast.error('Error deleting employee');
      }
    }
  };

  const handleEdit = (employee) => {
    setEditEmployee(employee);
    setShowForm(true);
  };

  const handleFormSubmit = async (data) => {
    try {
      const token = localStorage.getItem('token');
      if (editEmployee) {
        await axios.put(`http://localhost:5000/api/employees/${editEmployee._id}`, data, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Employee updated successfully');
      } else {
        await axios.post('http://localhost:5000/api/employees', data, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Employee created successfully');
      }
      setShowForm(false);
      setEditEmployee(null);
      fetchEmployees();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error saving employee');
    }
  };

  // Format date to local string
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  // Format salary in Indian Rupees
  const formatSalary = (salary) => {
    return salary.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    });
  };

  const DeleteIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="hover:scale-110 transition-transform"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Employees</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Employee
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <EmployeeForm
              onSubmit={handleFormSubmit}
              onCancel={() => {
                setShowForm(false);
                setEditEmployee(null);
              }}
              initialData={editEmployee}
            />
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-center">Name</th>
              <th className="py-2 px-4 text-center">Position</th>
              <th className="py-2 px-4 text-center">Department</th>
              <th className="py-2 px-4 text-center">Email</th>
              <th className="py-2 px-4 text-center">Phone</th>
              <th className="py-2 px-4 text-center">Salary</th>
              <th className="py-2 px-4 text-center">Joining Date</th>
              <th className="py-2 px-4 text-center">Edit</th>
              <th className="py-2 px-4 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id} className="border-t">
                <td className="py-2 px-4 text-center">{`${employee.firstName} ${employee.lastName}`}</td>
                <td className="py-2 px-4 text-center">{employee.position}</td>
                <td className="py-2 px-4 text-center">{employee.department}</td>
                <td className="py-2 px-4 text-center">{employee.email}</td>
                <td className="py-2 px-4 text-center">{employee.phone}</td>
                <td className="py-2 px-4 text-center">{formatSalary(employee.salary)}</td>
                <td className="py-2 px-4 text-center">{formatDate(employee.joiningDate)}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleEdit(employee)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                </td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleDelete(employee._id)}
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employees; 