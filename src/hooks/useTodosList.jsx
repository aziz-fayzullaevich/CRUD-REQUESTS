import { useEffect, useState } from 'react';
import { api } from '../api/API';

export const useTodosList = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchTodos = async () => {
        try {
            setIsLoading(true);
            setError('');
            const { data } = await api('/todos?limit=150');
            setTodos(data.todos);
        } catch (error) {
            setError('Ошибка при получении Todo');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return { todos, isLoading, error }
};