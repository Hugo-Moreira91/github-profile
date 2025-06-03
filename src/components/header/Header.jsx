import { useContext, useEffect } from "react";
import styled from "styled-components";
import heroImage from "../../assets/images/hero-image-github-profile.jpg";
import heroImageSm from "../../assets/images/hero-image-github-profile-sm.jpg";
import searchImage from "../../assets/images/Search.svg";
import { InputField } from "../input-field/InputField";
import { fetchUserData } from "../../services/fetchUserData";
import { UserContext } from "../../contexts/user-context";

const Header = () => {
    const { username, setUsername, profile, setProfile, error, setError } = useContext(UserContext);

    useEffect(() => {
        if (!username) {
            setProfile(null);
            setError(null);
            return;
        }

        fetchUserData(username)
            .then((data) => {
                setProfile(data);
                setError(null);
            })
            .catch(() => {
                setProfile(null);
                setError("User not found!");
            });
    }, [username]);

    return (
        <HeaderContainer>
            <SearchContainer>
                <InputContainer>
                    <img src={searchImage} alt="Magnifying glass" />
                    <InputField
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="username"
                    />
                </InputContainer>
                {error && <ErrorUser>{error}</ErrorUser>}
                {profile &&
                    <a href={profile.html_url} target="_blank">
                        <ProfileCard>
                            <img src={profile.avatar_url} alt={profile.name} />
                            <div>
                                <h2>{profile.name}</h2>
                                <p>{profile.bio}</p>
                            </div>
                        </ProfileCard>
                    </a>
                }
            </SearchContainer>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 15rem;
    padding-top: 2rem;
    background: var(--bg-color-base) url(${heroImage}) no-repeat center center;
    background-size: cover;

    @media (max-width: 40rem) {
        background-image: url(${heroImageSm});
    }

    /* Rever */
    @media (max-width: 35rem) {
        background-size: 250% 100%;
    }
`

const SearchContainer = styled.div`
    width: 30.25rem;

    @media (max-width: 40rem) {
        width: 90.5vw;
    }
`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: 1rem;
    border-radius: .75rem;
    background-color: var(--bg-color-search);
`

const ErrorUser = styled.p`
    text-align: center;
    margin-top: .5rem;
    color: var(--font-color-secondary);
`

const ProfileCard = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;
    width: 100%;
    margin-top: .5rem;
    padding: .5rem;
    border-radius: .75rem;
    background-color: var(--bg-color-search-result);
    transition: background-color 250ms ease-in;

    &:hover {
        background-color: var(--bg-color-base);
    }

    img {
        width: 4.5rem;
        border-radius: .75rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    h2 {
        font-size: var(--font-size-body-text);
        font-weight: var(--font-weight-medium);
        color: var(--font-color-primary);
    }

    p {
        font-size: var(--font-size-small-text);
        color: var(--font-color-secondary);
    }
`

export { Header };