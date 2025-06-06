import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import heroImage from "../../assets/images/hero-image-github-profile.jpg";
import heroImageSm from "../../assets/images/hero-image-github-profile-sm.jpg";
import searchImage from "../../assets/images/Search.svg";
import { InputField } from "../input-field/InputField";
import { fetchUserData } from "../../services/fetchUserData";
import { UserContext } from "../../contexts/user-context";

const Header = () => {
    const { setUsername, profile, setProfile, errorUser, setErrorUser } = useContext(UserContext);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;

        fetchUser(inputValue);
    };

    const fetchUser = (user) => {
        fetchUserData(user)
            .then((data) => {
                setProfile(data);
                setErrorUser(null);
                setUsername(user);
            })
            .catch(() => {
                setProfile(null);
                setErrorUser("User not found!");
                setUsername(user);
            });
    };

    useEffect(() => {
        fetchUser("github");
        setInputValue("github");
    }, []);

    return (
        <HeaderContainer>
            <SearchContainer>
                <form onSubmit={handleSubmit}>
                    <InputContainer>
                        <button type="submit">
                            <img src={searchImage} alt="Magnifying glass" />
                        </button>
                        <InputField
                            name="username"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="username"
                            autocomplete="off"
                        />
                    </InputContainer>
                </form>
                {errorUser && <ErrorUser>{errorUser}</ErrorUser>}
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
    border-radius: .75rem;
    background-color: var(--bg-color-search);

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.75rem;
        border: none;
        border-top-left-radius: .75rem;
        border-bottom-left-radius: .75rem;
        padding: 1rem 1.5rem;
        background-color: var(--bg-color-search);
        cursor: pointer;
        transition: background-color 250ms ease-in;
    }

    button:hover {
        background-color: var(--bg-color-search-result);
    }
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