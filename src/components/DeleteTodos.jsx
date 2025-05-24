import { useState } from "react";
import { Button, Flex, Title, Loader, Alert } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";

export const DeleteTodos = ({ id }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const deleteTodo = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://dummyjson.com/todos/${id}`, {
                method: 'DELETE',
            });

            if (!res.ok) throw new Error('Ошибка при удалении');

            await res.json();
            notifications.show({
                title: 'Todo Delete',
                message: 'The todo has been successfully deleted.',
            });
            modals.closeAll();
        } catch (err) {
            setError('Ошибка при удалении Todo');
        }
    };

    if (loading) return <Loader mt={20} />;
    if (error) return <Alert color="red" title="Ошибка">{error}</Alert>;

    return (
        <div>
            <Title size={22} mb={15}>
                Are you sure you want to delete Todo?
            </Title>
            <Flex justify={"end"} gap={15}>
                <Button onClick={() => modals.closeAll()}>Back</Button>
                <Button color="red" onClick={deleteTodo}>Delete</Button>
            </Flex>
        </div>
    );
};