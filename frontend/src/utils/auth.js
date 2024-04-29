

export const isAuthenticated = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return false;
    }

    try {
        const response = await fetch('https://your-backend-url.com/auth-check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data.isAuthenticated;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
};