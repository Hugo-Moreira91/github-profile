import styled from "styled-components";

const RepoStats = ({ name, image, value }) => {
    return (
        <RepoStatsInfo>
            <img src={image} alt={name} />
            <span>{value}</span>
        </RepoStatsInfo>
    );
}

const RepoStatsInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .15rem;

    span {
        font-size: 1rem;
    }
`

export { RepoStats };