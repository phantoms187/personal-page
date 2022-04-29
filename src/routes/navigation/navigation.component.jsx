import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

//import { ReactComponent as SnowboarderLogo } from '../../assets/snowboardLogo.png'
import SnowboarderLogo from '../../assets/snowboardLogo.png'

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationConatiner, LogoConatiner, NavLinks, NavLink, NameContainer } from './navigation.styles';

const Navigation = () => {
  
    const { currentUser, displayName, setDisplayName } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
    <Fragment>
        <NavigationConatiner>
            <LogoConatiner to='/'>
                <img src={SnowboarderLogo} alt="snowboarder" /> 
                <NameContainer>
                  { displayName ? ( "Hello " + displayName + "!") : ( "" ) }
                </NameContainer>
            </LogoConatiner> 
            
            <NavLinks>
                <NavLink to='/shop'>
                    ABOUT
                </NavLink>
                { currentUser ? (
                    <NavLink as='span' onClick={signOutUser} >
                        SIGN OUT
                    </NavLink>
                ) : (
                    <NavLink to='/auth'>
                        SIGN IN
                    </NavLink>
                )}
                <CartIcon />
            </NavLinks>
        </NavigationConatiner>
        <Outlet />
    </Fragment>
    );
};

export default Navigation;