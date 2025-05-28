import { useEffect, useState } from 'react';
import { api } from '../api/API';

export const useTodosList = () => {
    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
        const { data } = await api('/todos?limit=150')
        setTodos(data.todos);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return { todos }
};