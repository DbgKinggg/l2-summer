"use client"
import NavBar from '@/components/base/navbar'
import { chains } from '@/config/constant'
import { Chain } from '@/config/type';
import { useState, Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { SortableList } from '@/components/sortable-list';
import DragIcon from "@/components/icons/drag-icon";
import ClientOnly from '@/components/shared/client-only';
import AddNetworkBtn from '@/components/shared/add-network-btn';

export default function Home() {
  const [selectedChain, setSelectedChain] = useState<Chain>(chains[0])
  const [chainList, setChainList] = useState<Chain[]>(chains);

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
        <ClientOnly>
          <ChainButtons
            selectedChain={selectedChain}
            setSelectedChain={setSelectedChain}
            chainList={chainList}
            setChainList={setChainList}
          />
        </ClientOnly>
      </main>
    </>
  )
}

function ChainInfo({ selectedChain }: { selectedChain: Chain }) {
  const [items, setItems] = useState([
    { uid: "62cb30", name: "Item 1" },
    { uid: "0867d4", name: "Item 2" },
    { uid: "4706b3", name: "Item 3" },
    { uid: "6781ff", name: "Item 4" },
    { uid: "9be289", name: "Item 5" }
  ]);

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
          <SocialLink url={selectedChain.twitter.url} label={'@' + selectedChain.twitter.handle} />
        </ul>
        <div className="mt-4 px-2 md:px-6">
          <ClientOnly>
            <AddNetworkBtn chain={selectedChain} />
          </ClientOnly>
        </div>
      </div>
    </section >
  );
}

function SocialLink({ url, label }: { url: string, label: string }) {
  return (
    <li className="rounded-3xl px-2 md:px-6 py-2 transition cursor-pointer hover:bg-white/10">
      <a className="flex space-x-4 md:space-x-8" href={url} target='_blank'>
        <div className="w-10 h-10 aspect-square rounded-full bg-white my-auto"></div>
        <div className="my-auto">
          <label className="cursor-pointer">{label}</label>
          <div className="text-white/70 text-xs md:text-base break-all">{url}</div>
        </div>
      </a>
    </li>
  );
}

function ChainButtons({ selectedChain, setSelectedChain, chainList, setChainList }
  : { selectedChain: Chain, setSelectedChain: Dispatch<SetStateAction<Chain>>, chainList: Chain[], setChainList: Dispatch<SetStateAction<Chain[]>> }) {

  function handleChainButtonClick(chain: Chain) {
    setSelectedChain(chain);
  }

  return (
    <div className="flex justify-between overflow-x-hidden w-full">
      <ul className="flex w-full space-x-3 lg:justify-center overflow-auto transition-all">
        <SortableList
          items={chainList}
          getItemId={(chain) => chain.name}
          renderItem={({
            item,
            isActive,
            isDragged,
            ref,
            props,
            handleProps
          }) => {
            const isSelected = selectedChain.name === item.name;
            const isSelectedClasses = isSelected ? 'bg-white' : 'hover:border-4';
            let className = twMerge('w-28 h-28 aspect-square relative flex text-center rounded-3xl transition-all border relative group', isSelectedClasses)
            const iconClassName = `absolute bottom-1 transition-all opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 ${isSelected ? 'fill-black' : 'fill-white/70'} ${isDragged ? 'cursor-grabbing' : 'cursor-grab'}`;

            if (isActive) className += " opacity-50";
            if (isDragged) className += " opacity-50";

            return (
              <li ref={ref} className={className} {...props}
                style={{
                  color: isSelected ? selectedChain.colors.background : 'white'
                }}
                onClick={() => handleChainButtonClick(item)}
              >
                <span className="m-auto group-hover:text-xl transition-all group-hover:-translate-y-2">{item.name}</span>
                <DragIcon className={iconClassName} {...handleProps} />
              </li>
            );
          }}
          onSort={(oldIndex, newIndex) => {
            const newItems = chainList.slice();
            newItems.splice(newIndex, 0, newItems.splice(oldIndex, 1)[0]);
            setChainList(newItems);
          }}
        />
      </ul>
    </div>
  )
}