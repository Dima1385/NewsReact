// src/pages/userManagement/UserManagementPage.js
import React, { useState } from 'react';
import UserActions from '../../components/UserActions';
import UserList from '../../components/UserList';

const UserManagementPage = () => {
    const [users, setUsers] = useState([]);

    const handleAddUser = (user) => {
        setUsers([...users, user]);
    };

    const handleDeleteUser = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Керування користувачами</h1>
            <UserActions onAddUser={handleAddUser} />
            <UserList users={users} onDeleteUser={handleDeleteUser} />
        </div>
    );
};

export default UserManagementPage;
