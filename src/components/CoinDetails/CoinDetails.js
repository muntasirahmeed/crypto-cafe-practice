import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading,setLoading]=useState(false)
  const {
    community_score,
    country_origin,
    developer_score,
    market_data,
    name,
    symbol,
  } = coin;
  const { id } = useParams();
  useEffect(() => {
    setLoading(true)
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoin(data);
        setLoading(false)
      });
  }, [id]);
  return (
    <>
      {loading?<Spinner></Spinner>: <div className="flex flex-col-reverse md:flex-row  h-[90vh] max-w-screen-2xl mx-auto justify-around items-center bg-gray-100">
      <div className="">
        <h1 className="text-3xl text-gray-800">General Info</h1>
        <hr />
        <p> Name: {name}</p>
        <p>Symbol: {symbol}</p>
              <p>Market Rank: {market_data?.market_cap_rank}</p>
              <p>Origin: { country_origin? country_origin:'Not Available'}</p>
        <h1 className="text-3xl text-gray-800">Scores</h1>
        <hr />
        <p> Community_score: {community_score}</p>
        <p>Developer_score: {developer_score}</p>
        <p>Market_cap_rank: {market_data?.market_cap_rank}</p>
      </div>
      <div className="">
        <img src={coin.image?.large} alt="" />
      </div>
    </div>}
    </>
  );
};

export default CoinDetails;
