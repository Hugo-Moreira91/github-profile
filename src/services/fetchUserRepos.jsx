import axios from "axios";

const token = import.meta.env.VITE_GITHUB_TOKEN;

async function fetchUserRepos(username) {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}/repos?per_page=4`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error(`Error fetching repositories: ${error.message}`);
        throw error;
    }
}

export { fetchUserRepos };