import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-gray-100 max-w-screen-2xl mx-auto'>
            <div className='flex flex-col h-[90vh] items-center justify-center'>
                <h1 className='font-mono mb-4 md:text-5xl text-xl '>Welcome to CRYPTO CAFE
                    <span className='md:text-6xl text-xl mt-0'>☕</span></h1>
                <Link to='/coins' className='bg-cyan-600	px-6  py-2 rounded-full text-white'>Explore Coins</Link>
            </div> 
        </div>
    );
};

export default Home;<h1 className='text-4xl'>this is home</h1>