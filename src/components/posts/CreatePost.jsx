import { useState } from "react"
import { api } from "../../api/API";
import { LoaderWithError } from "../../ui/LoaderWithError";
import { PostForm } from "./PostForm";

export const CreatePost = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchCreatePost = async (body) => {
        try {
            setLoading(true);
            setError('');
            const { data } = await api.post('/posts/add', body)
        } catch (error) {
            setError('Ошибка при добавлении post');
            throw error
        } finally {
            setLoading(false)
        }  
    };

    const createPostFn = async (body) => {
        await fetchCreatePost(body);
    }

    return (
        <LoaderWithError isLoading={loading} error={error}>
            <PostForm title={'Add'} onSubmitFn={createPostFn} />
        </LoaderWithError>
    )
}