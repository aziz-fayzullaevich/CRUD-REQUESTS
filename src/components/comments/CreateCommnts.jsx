import { useState } from 'react';
import { api } from '../../api/API';
import { LoaderWithError } from '../../ui/LoaderWithError';
import CommentsForm from './CommentsForm';

const CreateCommnts = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchCreateComments = async (body) => {
        try {
            setLoading(true);
            setError('');
            const { data } = await api.post('/comments/add', body);
            return data;
        } catch (error) {
            setError('Ошибка при добавлении Comments');
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const createCommentsFn = (body) => fetchCreateComments(body);

    return (
        <LoaderWithError isLoading={loading} error={error}>
            <CommentsForm title={'Add'} createCommentsFn={createCommentsFn} />
        </LoaderWithError>
    );
};

export default CreateCommnts;
