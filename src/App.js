import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Pagination from './components/Pagination';
import { getUsers, addUser, updateUser, deleteUser } from './services/api';
import './styles.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError('Failed to fetch users. Please try again later.');
    }
  };

  const handleAddUser = async (user) => {
    try {
      const newUser = await addUser(user);
      setUsers([...users, newUser]);
      setError('');
    } catch (err) {
      setError('Failed to add user. Please try again.');
    }
  };

  const handleUpdateUser = async (updatedUser) => {
    try {
      await updateUser(updatedUser);
      setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
      setIsEditing(false);
      setCurrentUser(null);
      setError('');
    } catch (err) {
      setError('Failed to update user. Please try again.');
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
      setError('');
    } catch (err) {
      setError('Failed to delete user. Please try again.');
    }
  };

  const handleEditUser = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1>User Management Dashboard</h1>
      {error && <div className="error">{error}</div>}
      <UserForm
        onAddUser={handleAddUser}
        onUpdateUser={handleUpdateUser}
        isEditing={isEditing}
        currentUser={currentUser}
      />
      <UserList
        users={currentUsers}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
      />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;