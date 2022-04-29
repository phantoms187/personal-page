import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationConatiner = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`
export const LogoConatiner = styled(Link)`
  height: auto;
  width: auto;
  max-height: 72px;
  max-width: 350px;  
  img {
    height: 50px;
    width: 50px;
  }
  display: flex;
  align-items: center;
`
export const NameContainer = styled.span`
font-family: 'Brush Script MT', cursive;
font-size: 30px;
padding 15px;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
  