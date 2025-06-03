import { useState } from "react";
import { api } from "../../api/API";
import { notifications } from "@mantine/notifications";
import { modals } from "@mantine/modals";
import { DeleteModal } from "../../ui/DeleteModal";

export const DeleteComments = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const deletePost = async () => {
    try {
      setIsLoading(true);
      setError('');
      await api.delete(`/comments/${id}`)
      notifications.show({
        title: 'Delete Comments',
        message: 'The comment has been successfully deleted.'
      });
      modals.closeAll();
    } catch (error) {
      setError('Ошибка при удалении Comment')
    } finally {
      setIsLoading(false)
    }
  };
  return (
    <DeleteModal loading={isLoading} error={error} onDelete={deletePost} />
  )
};