import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import Spinner from '../Spinner/Spinner';

const Coins = () => {
    const [coins,setCoins]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(() => {
    setLoading(true)
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res=>res.json())
            .then(data => {
            setCoins(data)
           setLoading(false)
        })
    },[])
    return (
        <>
            {loading ? <Spinner></Spinner>:  <div className='bg-gray-100 px-4 pt-20 pb-24 mx-auto max-w-screen-2xl md:px-2'>
            <div className=''>
            <h1 className='text-4xl text-center text-gray-800 font-mono'>
            Available Crypto Currencies
                </h1>
                <p className='text-center text-xl text-gray-500 font-sans mt-2 mb-10'>Total Coins: { coins.length}</p>
           </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4  justify-items-center '>
            {
                coins.map(coin => <CoinCard key={coin.id} coin={coin}></CoinCard>)
            }
            </div>
        </div>}
        </>
    );
};

export default Coins;