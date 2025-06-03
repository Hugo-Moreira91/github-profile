import styled from "styled-components";

const UserStats = ({ name, value }) => {
    return (
        <Stats>
            <span>{name}</span>
            <hr />
            <span>{value !== null ? value : "unspecified"}</span>
        </Stats>
    );
}

const Stats = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    width: fit-content;
    padding: .5rem 1rem;
    border-radius: .8rem;
    color: var(--font-color-primary);
    background-color: var(--bg-color-profile-info);

    span {
        text-transform: capitalize;
        margin: .5rem 0;
    }

    hr {
        align-self:normal;
        border: 0;
        border-left: .1rem solid var(--bg-color-line);
    }
`

export { UserStats };