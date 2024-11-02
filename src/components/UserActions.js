// src/components/UserActions.js
import React, { useState } from 'react';

const UserActions = ({ onAddUser }) => {
    const [userName, setUserName] = useState('');
    const [userRole, setUserRole] = useState('');

    const handleAddUser = () => {
        if (userName && userRole) {
            onAddUser({ name: userName, role: userRole });
            setUserName('');
            setUserRole('');
        }
    };

    return (
        <div>
            <h2>Дії з користувачами</h2>
            <input
                type="text"
                placeholder="Ім'я користувача"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Роль користувача"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
            />
            <button onClick={handleAddUser}>Додати користувача</button>
        </div>
    );
};

export default UserActions;
