import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins,setCoins]=useState([])
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res=>res.json())
            .then(data => {
            console.log(data)
            setCoins(data)
        })
    },[])
    return (
        <div className='bg-gray-100 mx-auto max-w-7xl'>
            <div className='pt-10'>
            <h1 className='text-4xl text-center text-gray-800 font-mono'>
            Available Crypto Currencies
                </h1>
                <p className='text-center text-xl text-gray-500 font-sans mt-2'>Total Coins: { coins.length}</p>
           </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4  pt-16 pb-20 justify-items-center '>
            {
                coins.map(coin => <CoinCard key={coin.id} coin={coin}></CoinCard>)
            }
            </div>
        </div>
    );
};

export default Coins;