import React from 'react';

const CoinCard = ({coin}) => {
    const { name, image, symbol } = coin;
    return (
        <div className='flex justify-between w-[250px] bg-white px-4 py-2 rounded-xl shadow-lg'>
            <div>
                <img className='w-16 h-16' src={image} alt="" />
            </div>
            <div className='flex flex-col items-end'>
                <h2 className='text-lg font-semibold text-gray-800'>{ name}</h2>
                <p className='text text-gray-700'>{ symbol}</p>
            </div>
        </div>
    );
};

export default CoinCard;