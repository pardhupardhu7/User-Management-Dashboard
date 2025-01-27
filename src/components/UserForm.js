import React, { useState, useEffect } from 'react';

const UserForm = ({ onAddUser, onUpdateUser, isEditing, currentUser }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });

  useEffect(() => {
    if (isEditing && currentUser) {
      setUser(currentUser);
    }
  }, [isEditing, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      onUpdateUser(user);
    } else {
      onAddUser(user);
    }
    setUser({ firstName: '', lastName: '', email: '', department: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Department"
        value={user.department}
        onChange={(e) => setUser({ ...user, department: e.target.value })}
        required
      />
      <button type="submit">{isEditing ? 'Update User' : 'Add User'}</button>
    </form>
  );
};

export default UserForm;