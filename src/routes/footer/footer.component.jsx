import { Fragment, useContext } from 'react';

import { ReactComponent as GithubLogo } from '../../assets/github_logo.svg'

import {
    Box,
    Container,
    Row,
    LogoContainer
  } from "./footer.styles";

const Footer = () => {
  
    return (
        <Box>
        
        <Container>
          <Row>
           <LogoContainer> <GithubLogo /> </LogoContainer>
           
          </Row>
        </Container>
      </Box>
    );
};

export default Footer;