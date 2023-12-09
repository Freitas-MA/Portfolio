import styled from "styled-components";

export const StyledFooter = styled.section`
    margin-top: 5rem;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: max-content;
`;

export const FooterContainer = styled.footer`
    background: #111111;
    max-width: 100vw;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    min-height: 160px;
    text-align: center;
`;

export const FooterLink = styled.a`
    font-size: 0.8rem;
    color: #fff;

    &:hover {
        opacity: 0.6;
    }
`;

export const Social = styled.div`
    margin: 0.9rem 0;
`;

export const SocialIcon = styled.img`
    width: 20px;
    height: 20px;
`;

export const SocialLink = styled.a`
    margin: 0 0.5rem;
`;

export const FooterText = styled.p`
    font-size: 0.8rem;
`;

