import React from "react";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import {
  StyledFooter,
  FooterContainer,
  Container,
  FooterLink,
  Social,
  SocialLink,
  SocialIcon,
  FooterText,
} from "./StyledFooter";

export default function Footer() {
  return (
    <StyledFooter>
        <FooterContainer>
            <Container>
                <FooterLink href="mailto:freitas.ma.1993@gmail.com" target="__blank">
                    freitas.ma.1993@gmail.com
                </FooterLink>

                <Social>
                    <SocialLink
                        href="https://www.linkedin.com/in/freitas-marcos/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SocialIcon src={linkedinIcon} alt="Linkedin" />
                    </SocialLink>
                    <SocialLink
                        href="https://github.com/Freitas-MA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SocialIcon src={githubIcon} alt="GitHub" />
                    </SocialLink>
                </Social>

                <FooterText>
                    Copyright &copy; Marcos Freitas <span id="datee"></span>,
                    All rights reserved --V.4.0--
                </FooterText>
            </Container>
        </FooterContainer>
    </StyledFooter>
);
}
