import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [ username, setUsername ] = useState("github");
    const [ profile, setProfile ] = useState(null);
    const [ repos, setRepos ] = useState([]);
    const [ error, setError ] = useState(null);

    return (
        <UserContext.Provider value={{ username, setUsername, profile, setProfile, repos, setRepos, error, setError }}>
            { children }
        </UserContext.Provider>
    );
}