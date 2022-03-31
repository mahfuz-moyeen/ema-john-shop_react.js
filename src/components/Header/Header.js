import React from 'react';
import logo from '../../images/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const links = [
        { id: 1, name: 'Shop', link: '/' },
        { id: 2, name: 'Orders', link: '/orders' },
        { id: 3, name: 'Inventory', link: '/inventory' },
        { id: 4, name: 'About', link: '/about' }
    ];
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='header-link'>
                {
                    links.map(link=><CustomLink
                    key={link.id}
                    to={link.link}
                    className='link-title'
                    >{link.name}</CustomLink>)
                }
            </div>
        </nav>
    );
};

export default Header;