import { useContext } from "react"
import { UserContext } from "../../contexts/user-context"
import { UserInfoCard } from "../user-info-card/UserInfoCard";
import { RepoList } from "../repo-list/RepoList";
import styled from "styled-components";

const UserDetails = () => {
    const { username, profile } = useContext(UserContext);

    return (
        <DetailsContainer>
            <ProfileResume>
                <UserInfoCard profile={profile} />
                <RepoList username={username} />
            </ProfileResume>
        </DetailsContainer>
    );
}

const DetailsContainer = styled.section`
    position: relative;
    width: 85vw;
    margin: auto;
    min-height: calc(100vh - 15rem);

    @media(max-width: 30rem) {
        width: 95vw;
    } 
`

const ProfileResume = styled.div`
    width: 100%;
    margin-top: -2.7rem;
`

export { UserDetails };