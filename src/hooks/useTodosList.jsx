import axios from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../api/API';

export const useTodosList = () => {
    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
        const { data } = await api('/todos')
        setTodos(data.todos);

    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return { todos }
};