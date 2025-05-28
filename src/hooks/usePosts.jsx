import { useEffect, useState } from "react"

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const fetchPosts = async () => {
        const { data } = await api('/posts?limit=251');
        setPosts(data.posts);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return { posts }
}