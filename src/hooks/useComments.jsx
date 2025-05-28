import { useEffect, useState } from "react"
import { api } from "../api/API";

export const useComments = () => {
    const [comments, setComments] = useState([]);
    const fetchComments = async () => {
        const { data } = await api('/comments')
        setComments(data.comments);
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return { comments }

}