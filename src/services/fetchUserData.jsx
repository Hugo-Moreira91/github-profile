import axios from "axios";

async function fetchUserData(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);

        return response.data;
    } catch (error) {
        console.error(`Error fetching GitHub user: ${error.message}`);
        throw error;
    }
}

export { fetchUserData };