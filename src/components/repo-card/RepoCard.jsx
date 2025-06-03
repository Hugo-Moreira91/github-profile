import { RepoStats } from "../repo-stats/RepoStats";
import { LastUpdated } from "../last-updated/LastUpdated";
import chieldAlt from "../../assets/images/Chield_alt.svg";
import nesting from "../../assets/images/Nesting.svg";
import star from "../../assets/images/Star.svg";
import styled from "styled-components";

const RepoCard = ({ repo }) => {
    return (
        <a href={repo.html_url} target="_blank">
            <RepoCardContainer>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <RepoStatsContainer>
                    {repo.license && <RepoStats name="License" image={chieldAlt} value={repo.license.spdx_id} />}
                    <RepoStats name="Fork" image={nesting} value={repo.forks_count} />
                    <RepoStats name="Stars" image={star} value={repo.stargazers_count} />
                    <p>
                        updated <LastUpdated date={repo.updated_at} />
                    </p>
                </RepoStatsContainer>
            </RepoCardContainer>
        </a>
    );
}

const RepoCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1.15rem;
    border-radius: .75rem;
    background: linear-gradient(95deg, var(--bg-primary-color-repo-card) 3%, var(--bg-secondary-color-repo-card) 99.61%);

    h3 {
        font-size: 1.25rem;
        font-weight: var(--font-weight-medium);
        color: var(--font-color-primary);
    }

    p {
        margin: .85rem 0 .75rem;
        color: var(--font-color-secondary);
    }
`

const RepoStatsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
    gap: .8rem;
    color: var(--font-color-secondary);

    p {
        font-size: .75rem;
        font-weight: var(--font-weight-medium);
        margin-left: .5rem;

        @media(max-width: 30rem) {
            margin-left: 0;
        } 
    }
`

export { RepoCard };