import Head from 'next/head'
import Image from 'next/image'
import getPricesPancake from '../PancakeSwap/GetPrices'
import getPricesApe from '../ApeSwap/GetPrices'
import { useState } from 'react'

export default function Home() {

  const [somme, setSomme] = useState("");
  const [pricesPancake, setPricesPancake] = useState("?");
  const [pricesApe, setPricesApe] = useState("?");
  const [tokenFrom, setTokenFrom] = useState("?");
  const [tokenTo, setTokenTo] = useState("?");
  const [addressFrom, setAddressFrom] = useState("");
  const [addressTo, setAddressTo] = useState("");

  const displayPrice = async (amount) => {
    setPricesApe("Loading...");
    setPricesPancake("Loading...");

    let pricePancake = await getPricesPancake(`${amount}`, addressFrom, addressTo);
    //console.log(pricePancake)
    setPricesPancake(parseFloat(pricePancake.amountOutHuman).toFixed(5))

    setTokenFrom(pricePancake.tokSymbFrom);
    setTokenTo(pricePancake.tokSymbTo);

    let priceApe = await getPricesApe(`${amount}`, addressFrom, addressTo);
    //console.log(priceApe);
    setPricesApe(parseFloat(priceApe.amountOutHuman).toFixed(5));

  }

  return (
    <div className='bg-black h-screen w-screen text-white flex flex-col flex-wrap justify-center items-center font-Roboto'>
      <input
        type="text"
        onChange={(e) => {
          setSomme(e.target.value);
          setPricesApe("");
          setPricesPancake("");
        }}
        className="border border-1 border-gray-500 bg-black outline-0 p-4 rounded-lg m-4"
        placeholder='Somme'
      />

      <div>

        <input
          type="text"
          onChange={(e) => {
            setAddressFrom(e.target.value);
          }}
          className="border border-1 border-gray-500 bg-black outline-0 p-4 rounded-lg m-4"
          placeholder='AdressFrom'
        />

        <input
          type="text"
          onChange={(e) => {
            setAddressTo(e.target.value);
          }}
          className="border border-1 border-gray-500 bg-black outline-0 p-4 rounded-lg m-4"
          placeholder='AddressTo'
        />

      </div>


      <div className=''>

      </div>

      <button onClick={() => displayPrice(somme)}
        className='bg-yellow-500 p-3 text-lg rounded-full hover:bg-yellow-600 transition-all delay-50' >
        BUSD in WBNB
      </button>

      <div className='w-12/12 p-5 flex flex-col lg:flex-row'>

        <div className='bg-dark-gray p-4 lg:mr-10 w-80 flex flex-col items-center'>

          <h1>Pancake</h1>

          <div className='w-11/12 bg-light-dark-gray rounded-lg text-lg p-4 flex flex-row justify-between'>
            <h1 className='overflow-hidden'>{somme}</h1>
            <h1>{tokenFrom}</h1>
          </div>

          <div className='font-bold text-xl mt-1 mb-1 pr-2 pl-2 bg-yellow-500 rounded-full'>
            =
          </div>

          <div className='w-11/12 bg-light-dark-gray rounded-lg text-lg p-4 flex flex-row justify-between'>
            <h1 className='overflow-hidden'>{pricesPancake}</h1>
            <h1>{tokenTo}</h1>
          </div>

        </div>

        <div className='bg-dark-gray p-4 w-80 flex flex-col items-center mt-5 lg:mt-0'>

          <h1>Ape</h1>

          <div className='w-11/12 bg-light-dark-gray rounded-lg text-lg p-4 flex flex-row justify-between'>
            <h1 className='overflow-hidden'>{somme}</h1>
            <h1>{tokenFrom}</h1>
          </div>

          <div className='font-bold text-xl mt-1 mb-1 pr-2 pl-2 bg-yellow-500 rounded-full'>
            =
          </div>


          <div className='w-11/12 bg-light-dark-gray rounded-lg text-lg p-4 flex flex-row justify-between'>
            <h1 className='overflow-hidden'>{pricesApe}</h1>
            <h1>{tokenTo}</h1>
          </div>

        </div>

      </div>

    </div>
  )
}
