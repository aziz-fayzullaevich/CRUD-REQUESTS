import { useEffect, useState } from "react";
import { api } from "../api/API";

export const useSearchPosts = (query) => {
    const [result, setResult] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [searchError, setSearchError] = useState(null);

    useEffect(() => {
        if (!query) {
            setResult([]);
            return;
        }

        setIsSearching(true);
        setSearchError(null);

        api.get(`/posts/search?q=${query}`)
            .then(res => setResult(res.data.posts))
            .catch(err => setSearchError(err.message))
            .finally(() => setIsSearching(false));
    }, [query]);

    return { result, isSearching, searchError };
};