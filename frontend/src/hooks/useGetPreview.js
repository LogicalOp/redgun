import React, { useEffect, useState, useMemo } from "react";

export function useGetPreview() {
    const [preview, setPreview] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = useMemo(() => process.env.REACT_APP_MESSAGES_URL, []);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchPreview = async () => {
            setLoading(true);
            setError(null);
            try {
                const user = localStorage.getItem("inumber");
                const response = await fetch(`${apiUrl}/messages/preview/${user}`, { signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                // Log the response data to debug the format
                console.log("Response data:", data);

                // Ensure data.messages is an array
                if (!Array.isArray(data.messages)) {
                    throw new Error("Unexpected response format");
                }

                // Process the data to get the most recent unique interactions
                const uniqueInteractions = new Map();
                data.messages.forEach(message => {
                    const key = [message.sender, message.recipient].sort().join('-');
                    if (!uniqueInteractions.has(key) || new Date(message.date) > new Date(uniqueInteractions.get(key).date)) {
                        uniqueInteractions.set(key, message);
                    }
                });

                setPreview(Array.from(uniqueInteractions.values()));
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(`Error fetching data: ${error.message}`);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPreview();

        return () => {
            controller.abort();
        };
    }, [apiUrl]);

    return { preview, loading, error };
};