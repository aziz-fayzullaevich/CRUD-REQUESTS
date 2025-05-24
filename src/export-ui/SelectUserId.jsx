import { Select } from '@mantine/core';
import React, { useEffect, useState } from 'react'

const SelectUserId = (props) => {
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.users));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const filterSelectData = users.map(user => ({
        value: user.id.toString(),
        label: user.username.charAt(0).toUpperCase() + user.username.slice(1).toLowerCase(),
    }))

    return <Select data={filterSelectData} {...props} />
}

export default SelectUserId