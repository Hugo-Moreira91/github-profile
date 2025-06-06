import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user-context";
import { fetchUserRepos } from "../../services/fetchUserRepos";
import { RepoCard } from "../repo-card/RepoCard";
import styled from "styled-components";

const RepoList = ({ username }) => {
    const { repos, setRepos, errorRepos, setErrorRepos } = useContext(UserContext);

    useEffect(() => {
        if (!username) {
            setRepos([]);
            setErrorRepos(null);
            return;
        }

        fetchUserRepos(username)
            .then((data) => {
                setRepos(data);
                setErrorRepos(null);
            })
            .catch(() => {
                setRepos([]);
                setErrorRepos("Repositories not found!");
            })
    }, [username]);

    return (
        <>
            {errorRepos && <ErrorRepos>{errorRepos}</ErrorRepos>}

            <ReposGrid>
                {repos && repos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </ReposGrid>

            {repos?.length > 0 && (
                <LinkWrapper>
                    <a href={`https://github.com/${username}?tab=repositories`} target="_blank">
                        View all repositories
                    </a>
                </LinkWrapper>
            )}
        </>
    );
}

const ErrorRepos = styled.p`
    text-align: center;
    margin-top: 2rem;
    color: var(--font-color-secondary);
`

const ReposGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    column-gap: 2rem;
    row-gap: 3.25rem;
    margin: 2rem 0 3rem;

    @media(max-width: 30rem) {
        grid-template-columns: 100%;
    }
`

const LinkWrapper = styled.div`
    text-align: center;
    margin-bottom: 5rem;

    a {
        color: var(--font-color-secondary);
        transition: color 250ms ease-in;
    }

    a:hover {
        color: var(--font-color-primary);
    }
`

export { RepoList };