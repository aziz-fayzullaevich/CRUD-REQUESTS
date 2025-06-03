import { useEffect, useState } from 'react'
import { api } from '../../api/API';
import { LoaderWithError } from '../../ui/LoaderWithError';
import CommentsForm from './CommentsForm';

export const EditComments = ({ id }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchComments = async () => {
    try {
      const { data } = await api.get(`/comments/${id}`);
      setIsLoading(true);
      setData(data)
    }
    catch (err) {
      setError('Ошибка при получении Comments');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchComments();
  }, [id]);

  const fetchEditComments = async (body) => {
    try {
      await api.patch(`/comments/${id}`, body);
    } catch (error) {
      setError('Ошибка при изменении Comments')
      throw error;
    }
  };

  const editCommentsFn = async (values) => {
    await fetchEditComments(values)
  }

  return (
    <LoaderWithError isLoading={isLoading} error={error}>
      {data !== null && <CommentsForm
        title={'Save'}
        onSubmitFn={editCommentsFn}
        initialValues={{
          userId: String(data.userId),
          postId: String(data.postId),
          body: data.body
        }} />}
    </LoaderWithError>
  )
};