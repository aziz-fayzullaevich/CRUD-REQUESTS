import { useEffect, useState } from "react"
import { api } from "../api/API";

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState();
    const [error, setIsError] = useState();
    const fetchPosts = async () => {
        try {
            setIsLoading(true);
            setIsError('');
            const { data } = await api('/posts?limit=251');
            setPosts(data.posts);
        } catch (error) {
            setIsError('Ошибка при получении Posts')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return { posts, isLoading, error }
}