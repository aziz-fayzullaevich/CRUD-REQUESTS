import TodosForm from "./TodosForm"
import { api } from "../../api/API";
import { useState } from "react";
import { LoaderWithError } from "../../ui/LoaderWithError";

export const CreateTodos = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchCreateTodo = async (body) => {
        try {
            setLoading(true);
            setError('');
            const { data } = await api.post('/todos/add', body);
        } catch (error) {
            setError('Ошибка при добавлении todo');
            throw err;
        }
        finally {
            setLoading(false);
        }
    };

    const createTodoFn = async (body) => {
        await fetchCreateTodo(body);
    }

    return (
        <LoaderWithError isLoading={loading} error={error}>
            <TodosForm title={'Add'} createTodoFn={createTodoFn} />
        </LoaderWithError>
    )
};