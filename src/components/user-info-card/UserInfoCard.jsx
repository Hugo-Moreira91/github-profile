import styled from "styled-components";
import { UserStats } from "../user-stats/UserStats";

const UserInfoCard = ({ profile }) => {

    if (profile === null) {
        return (
            <InfoSearchMessage>
                Search for a GitHub profile to display their information here!
            </InfoSearchMessage>
        );
    }

    return (
        <Card>
            <UserInfo>
                <AvatarContainer>
                    <Avatar src={profile.avatar_url} alt={profile.name} />
                </AvatarContainer>
                <StatsContainer>
                    <UserStats name="followers" value={profile.followers} />
                    <UserStats name="following" value={profile.following} />
                    <UserStats name="location" value={profile.location} />
                </StatsContainer>
            </UserInfo>
            <h1>{profile.name}</h1>
            <p>{profile.bio}</p>
        </Card>
    );
}

const InfoSearchMessage = styled.p`
    text-align: center;
    padding-top: 3.7rem;
    color: var(--font-color-primary);
`

const Card = styled.section`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 2rem;
        font-weight: var(--font-weight-medium);
        color: var(--font-color-primary);
        margin-bottom: .5rem;
    }

    p {
        color: var(--font-color-primary);
    }
`

const UserInfo = styled.div`
    display: flex;
    align-items: end;
    justify-content: left;
    margin-bottom: 1.25rem;

    @media(max-width: 40rem) {
        flex-direction: column;
        gap: 2rem;
        align-items: flex-start;
    }
`

const AvatarContainer = styled.div`
    width: 7.5rem;
    height: 7.5rem;
    padding: .5rem;
    border-radius: 1.25rem;
    background-color: var(--bg-color-base);
`

const Avatar = styled.img`
    width: 6.5rem;
    border-radius: .75rem;
`

const StatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-left: 2rem;
    margin-bottom: .6rem;

    @media(max-width: 40rem) {
        margin-left: 0;
    }
`

export { UserInfoCard };