import { useState, useEffect } from 'react';
import { BASE_API_URL, ALL_POSTS } from './url';
import { Product } from './types';

const apiUrl = BASE_API_URL + ALL_POSTS;

export function useApi() {
    const [posts, setPosts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => { 
        async function getData() {
            try {
                setIsLoading(true);
                setIsError(false);
                const theData = await fetch(apiUrl);
                const json = await theData.json();

                console.log(json);
                setPosts(json.data);
            } catch (error) {
                console.log('There is something wrong here', error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, []);
    return { posts, isLoading, isError };
}

