import { useState } from "react";
import { api } from "../../api/API";
import { notifications } from "@mantine/notifications";
import { modals } from "@mantine/modals";
import { DeleteModal } from "../../ui/DeleteModal";

export const DeletePost = ({ id }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const deletePost = async () => {
        try {
            setIsLoading(true);
            setError('');
            await api.delete(`/posts/${id}`)
            notifications.show({
                title: 'Delete Post',
                message: 'The post has been successfully deleted.'
            });
            modals.closeAll();
        } catch (error) {
            setError('Ошибка при удалении Post')
        } finally {
            setIsLoading(false)
        }
    };
    return (
        <DeleteModal loading={isLoading} error={error} onDelete={deletePost} />
    )
};