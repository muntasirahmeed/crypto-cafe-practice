import React from 'react';

const CoinCard = ({coin}) => {
    const { name, image, symbol } = coin;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h2>{ name}</h2>
                <p>{ symbol}</p>
            </div>
        </div>
    );
};

export default CoinCard;