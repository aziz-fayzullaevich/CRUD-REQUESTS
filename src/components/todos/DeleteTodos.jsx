import { useState } from "react";
import { api } from "../../api/API";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { DeleteModal } from "../../ui/DeleteModal";

export const DeleteTodos = ({ id }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const deleteTodo = async () => {
        try {
            setLoading(true);
            await api.delete(`/todos/${id}`)
            notifications.show({
                title: 'Todo Delete',
                message: 'The todo has been successfully deleted.',
            });
            modals.closeAll();
        } catch (err) {
            setError('Ошибка при удалении Todo');
        } finally {
            setLoading(false)
        }
    };

    return (
        <DeleteModal
            loading={loading}
            error={error}
            onDelete={deleteTodo}
        />
    );
};