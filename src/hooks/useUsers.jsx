import { useEffect, useState } from "react"
import { api } from "../api/API";

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const { data } = await api('/users');
        setUsers(data.users);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return { users }

}