import { useEffect, useState, useMemo } from "react";

export function useGetConversation(userId) {
    const [conversation, setConversation] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = useMemo(() => process.env.REACT_APP_MESSAGES_URL, []);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchConversation = async () => {
            setLoading(true);
            setError(null);
            try {
                const user = localStorage.getItem("inumber");
                const response = await fetch(`${apiUrl}/messages?senderId=${user}&receiverId=${userId}`, { signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setConversation(data);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(`Error fetching data: ${error.message}`);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchConversation();

        return () => {
            controller.abort();
        };
    }, [apiUrl, userId]);

    return { conversation, loading, error };
}