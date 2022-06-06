import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import axoGenesis from "../public/components/AxoGenesis.json"
import Ethereum from "../public/logos/ethereum"
import Supply from "../public/logos/supply"
import ExportedImage from 'next-image-export-optimizer'
import {Routes, Route, useNavigate} from 'react-router-dom';
const contents = [
  {
  id: 1,
  mainText: 'In a lake full of opportunities, a lovable Axolotl smiles at you...',
  howMany: 'How many Axolotl for today?',
  }
]

const navigate = useNavigate();

  const navigateToMint = () => {
    // 👇️ navigate to /mint
    navigate('/mint');
  };
  
  return (
    <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      {contents.map((content) => (
      <div key={content.id} className="mx-auto lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-1 font-PhantomRush sm:text-9xl text-8xl text-maastricht text-center sm:text-left">
                {content.title} <span className="text-fuschia">{content.pTitle}</span>
              </h1>
              <p className="mt-3 font-PhantomRush text-3xl text-center sm:text-3xl sm:text-left text-purple">{content.mainText}</p>
              <p className="mt-3 pt-3 sm:mt-4 font-PhantomRush text-4xl text-center sm:text-left lg:text-left text-fuschia">{content.howMany}</p>
              <div className="mt-4 sm:mt-3">
                  <div className="sm:flex">
                    <div>
                        <button className="text-center font-PhantomRush text-4xl inline-flex py-3 px-4 rounded-md shadow bg-fuschia text-black items-center" onClick={navigateToMint}>Mint Now</button>
                    </div>)
                  </div>
                  <div className="pt-3 sm:flex">
                  <button className="text-center mr-3 md:mb-0 sm:mb-3 mb-3 lg:mb-0 font-PhantomRush text-3xl inline-flex w-full py-3 px-4 rounded-md shadow bg-fuschia text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 items-center"><Supply className="h-8 mr-3"/>total supply:3333</button> 
                  <button className="text-center font-PhantomRush text-3xl inline-flex w-full py-3 px-4 rounded-md shadow bg-fuschia text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 items-center"><Ethereum className="h-10 mr-3"/>mint price: 50 </button> 
                  </div>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <ExportedImage
                className="max-w-50xl lg:auto-right sm:center md:mt-[5rem]"
                src="/images/main-image/preview.gif"
                priority
                width={1080}
                height={1080}
                alt=""
                />
            </div>
          </div>
        </div>
      </div>
    ))};

export default Heroes;
