import React from 'react';
import logo from '../../logo/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt='logo'></img>

            <nav>
                <a href='/shop'>Shop</a>
                <a href='/revirw'>Revirw</a>
                <a href='/manage'>Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;
