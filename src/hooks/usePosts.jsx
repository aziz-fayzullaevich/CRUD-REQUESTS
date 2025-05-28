import { useEffect, useState } from "react"
import { api } from "../api/API";

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