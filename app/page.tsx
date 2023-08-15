"use client"
import NavBar from '@/components/base/navbar'
import { chains } from '@/config/constant'
import { Chain } from '@/config/type';
import { useState, Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

export default function Home() {
  const [selectedChain, setSelectedChain] = useState<Chain>(chains[0])

  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col space-y-12 items-center justify-between py-24 px-4 md:px-24 overflow-hidden transition-all delay-150"
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
    <section className="grid md:grid-cols-2 gap-y-2 md:gap-y-0 md:space-x-6 my-auto max-w-6xl">
      <div className="px-3 md:px-6">
        <div className="flex space-x-2 md:space-x-4 my-auto">
          <Image
            width="100"
            height="100"
            src={'/icons/' + selectedChain.icon}
            className="rounded-full border border-white bg-white w-14 h-14 md:w-20 md:h-20"
            alt={selectedChain.name}
          />
          <h1 className="text-5xl md:text-6xl font-bold my-auto">{selectedChain.name}</h1>
        </div>
        <p className="md:text-xl mt-4 md:mt-8">{selectedChain.description}</p>
      </div>
      <div className='px-2 md:pt-20'>
        <ul>
          <SocialLink url={selectedChain.website} label={`Website`} />
          <SocialLink url={selectedChain.explorer} label={`Explorer`} />
          <SocialLink url={selectedChain.github} label={`Github`} />
          <SocialLink url={selectedChain.bridge} label={`Bridge`} />
          <SocialLink url={selectedChain.twitter.url} label={selectedChain.twitter.handle} />
        </ul>
      </div>
    </section>
  );
}

function SocialLink({ url, label }: { url: string, label: string }) {
  return (
    <li className="rounded-3xl px-2 md:px-6 py-2 transition cursor-pointer hover:bg-white/10">
      <a className="flex space-x-4 md:space-x-8" href={url} target='_blank'>
        <div className="w-10 h-10 aspect-square rounded-full bg-white my-auto"></div>
        <div className="my-auto">
          <label>{label}</label>
          <div className="text-white/70 text-xs md:text-base">{url}</div>
        </div>
      </a>
    </li>
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