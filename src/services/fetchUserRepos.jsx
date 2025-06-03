import axios from "axios";

async function fetchUserRepos(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=4`);

        return response.data;
    } catch (error) {
        console.error(`Error fetching repositories: ${error.message}`);
        throw error;
    }
}

export { fetchUserRepos };