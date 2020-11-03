import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavbarMain from '../Navbar/NavbarMain';
import './Header.css';
const Header = () => {
    return (
        <div className="header-main">
            <NavbarMain></NavbarMain>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;