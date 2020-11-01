import React from 'react';

const Navbar = () => {
    return ( 
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <Navmenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/portfolio" activeStyle>
                    Portfolio
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
            </Navmenu>
        </Nav>
     );
}
 
export default Navbar;