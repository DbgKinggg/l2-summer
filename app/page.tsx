"use client"
import NavBar from '@/components/base/navbar'
import { chains } from '@/config/constant'
import { Chain } from '@/config/type';
import { useState, Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Home() {
  const [selectedChain, setSelectedChain] = useState<Chain>(chains[0])

  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col space-y-12 items-center justify-between p-24 overflow-hidden transition-all delay-150"
        style={{
          background: selectedChain.colors.background,
          color: selectedChain.colors.text,
        }}
      >
        <ChainInfo selectedChain={selectedChain} />
        <ChainButtons selectedChain={selectedChain} setSelectedChain={setSelectedChain} />
      </main>
    </>
  )
}

function ChainInfo({ selectedChain }: { selectedChain: Chain }) {
  return (
    <section className="grid md:grid-cols-2 md:space-x-6 my-auto">
      <div className=" px-2 md:px-6">
        <h1 className="text-6xl font-bold">{selectedChain.name}</h1>
        <p className="text-xl mt-4 md:mt-8">{selectedChain.description}</p>
      </div>
      <div className='px-12 md:pt-20'>
        <ul>
          <li>Website: {selectedChain.website}</li>
          <li>Explorer: {selectedChain.explorer}</li>
          <li>Github: {selectedChain.github}</li>
          <li>Bridge: {selectedChain.bridge}</li>
          <li>Twitter: {selectedChain.twitter.url}</li>
        </ul>
      </div>
    </section>
  );
}

function ChainButtons({ selectedChain, setSelectedChain }: { selectedChain: Chain, setSelectedChain: Dispatch<SetStateAction<Chain>> }) {
  return (
    <div className="flex flex-row space-x-3 overflow-x-auto">
      {
        chains.map((chain) => (
          <ChainButton key={chain.name} chain={chain} selectedChain={selectedChain} setSelectedChain={setSelectedChain} />
        ))
      }
    </div>
  )
}

function ChainButton({ chain, selectedChain, setSelectedChain }: { chain: Chain, selectedChain: Chain, setSelectedChain: Dispatch<SetStateAction<Chain>> }) {
  const isSelected = selectedChain.name === chain.name;
  const isSelectedClasses = isSelected ? 'bg-white' : 'hover:border-4';

  function handleChainButtonClick(chain: Chain) {
    setSelectedChain(chain);
  }

  return (
    <button
      type="button"
      className={twMerge('w-28 h-28 rounded-3xl transition-all border transition-all inline-block relative', isSelectedClasses)}
      style={{
        color: isSelected ? selectedChain.colors.background : 'white'
      }}
      onClick={() => handleChainButtonClick(chain)}
    >
      {chain.name}
    </button>
  );
}