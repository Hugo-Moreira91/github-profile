import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [ username, setUsername ] = useState("");
    const [ profile, setProfile ] = useState(null);
    const [ repos, setRepos ] = useState([]);
    const [ errorUser, setErrorUser ] = useState(null);
    const [ errorRepos, setErrorRepos ] = useState(null);

    return (
        <UserContext.Provider value={{ 
            username, 
            setUsername, 
            profile, setProfile, 
            repos, 
            setRepos, 
            errorUser, 
            setErrorUser,
            errorRepos,
            setErrorRepos 
        }}>
            { children }
        </UserContext.Provider>
    );
}