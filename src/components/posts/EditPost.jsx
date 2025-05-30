import { useEffect, useState } from 'react'
import { api } from '../../api/API';
import { PostForm } from './PostForm';
import { LoaderWithError } from '../../ui/LoaderWithError';

export const EditPost = ({ id }) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchPost = async () => {
        try {
            const { data } = await api.get(`/posts/${id}`);
            setIsLoading(true);
            setData(data)
        }
        catch (err) {
            setError('Ошибка при получении Posts');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPost();
    }, [id]);

    const fetchEditPost = async (body) => {
        try {
            await api.patch(`/posts/${id}`, body);
        } catch (error) {
            setError('Ошибка при изменении Posts')
            throw error;
        }
    };

    const editPostFn = async (values) => {
        await fetchEditPost(values)
    }

    return (
        <LoaderWithError isLoading={isLoading} error={error}>
            {data !== null && <PostForm
                title={'Save'}
                editPostFn={editPostFn}
                initialValues={{
                    userId: String(data.userId),
                    title: data.title,
                    body: data.body
                }} />}
        </LoaderWithError>
    )
};