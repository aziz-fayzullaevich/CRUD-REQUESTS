import { Select } from '@mantine/core';
import { useUsers } from '../hooks/useUsers';

const SelectUserId = (props) => {

    const {users} = useUsers();
    const filterSelectData = users.map(user => ({
        value: user.id.toString(),
        label: user.username.charAt(0).toUpperCase() + user.username.slice(1).toLowerCase(),
    }))

    return <Select data={filterSelectData} {...props} />
}

export default SelectUserId