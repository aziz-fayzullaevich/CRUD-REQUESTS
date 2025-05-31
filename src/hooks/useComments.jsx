import { useEffect, useState } from "react"
import { api } from "../api/API";

export const useComments = () => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchComments = async () => {
        try {
            setIsLoading(true);
            setError('');
            const { data } = await api('/comments?limit=340')
            setComments(data.comments);
        } catch (error) {
            setError('Ошибка при получении Comments');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return { comments, isLoading, error }

}