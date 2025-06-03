import axios from "axios";

const token = import.meta.env.VITE_GITHUB_TOKEN;

async function fetchUserData(username) {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error(`Error fetching GitHub user: ${error.message}`);
        throw error;
    }
}

export { fetchUserData };