import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex items-center justify-center md:justify-between bg-white px-12 py-8 sticky top-0 max-w-screen-2xl mx-auto'>
            <div className='hidden md:block'>
                <Link to='/home'><h1 className='text-xl font-bold text-gray-600'>Crypto Cafe</h1></Link>
            </div>
            <div className='flex gap-4 text-xl'>
                <CustomLink to='/home'>Home</CustomLink> 
                <CustomLink to='/coins'>Coins</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </div>
        </nav>
    );
};

export default Header;