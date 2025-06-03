import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            Coded by <ExternalLink href="https://github.com/Hugo-Moreira91" target="_blank">Hugo Moreira</ExternalLink> | Challenge by
            <ExternalLink href="https://www.devchallenges.io?ref=challenge" target="_blank"> devChallenges.io</ExternalLink>.
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    font-size: .875rem;
    text-align: center;
    padding: 1rem 0 .5rem;
    color: var(--font-color-secondary);
    background-color: var(--bg-color-base);
`

const ExternalLink = styled.a`
    color: var(--font-color-primary);
    transition: color 250ms ease-in;

    &:hover {
        color: var(--font-color-secondary);
    }
`

export { Footer };