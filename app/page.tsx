"use client"
import NavBar from '@/components/base/navbar'
import { chains } from '@/config/constant'
import { Chain } from '@/config/type';
import { useState, Dispatch, SetStateAction, useRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { SortableList } from '@/components/sortable-list';
import DragIcon from "@/components/icons/drag-icon";
import ClientOnly from '@/components/shared/client-only';
import AddNetworkBtn from '@/components/shared/add-network-btn';
import { ExternalLink, Cable, Github, ArrowRightLeft, Twitter } from 'lucide-react';
import ChainRanking from './(components)/chain-ranking';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShareDrawer } from './(components)/share-drawer';
import Footer from '@/components/base/footer';

export default function Home() {
  const [selectedChain, setSelectedChain] = useState<Chain>(chains[0])
  const [chainList, setChainList] = useState<Chain[]>(chains);
  const [nickname, setNickname] = useState<string>('');
  const rankingElementRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <NavBar />
      <main className="pb-4">
        <section className="flex min-h-screen flex-col space-y-12 items-center justify-between py-24 overflow-hidden transition-all delay-150"
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
        </section>
        <section className="min-h-screen pb-20">
          <img src="/images/up-arrow.png"
            className="w-32 h-32 md:w-52 md:h-52 -translate-y-1/3 mx-auto"
            alt="up arrow"
          />
          <p className="px-2 text-5xl md:text-7xl text-center font-semibold">Rank your Layer 2 chains by dragging them</p>
          <div className="mt-12 flex flex-col px-2 items-center space-y-3 md:space-y-8 md:justify-center md:flex-row md:gap-x-6">
            <div className="rounded-3xl w-full max-w-[28rem] overflow-hidden shadow-md">
              <ChainRanking ref={rankingElementRef} chains={chainList} nickname={nickname} />
            </div>
            <div className="px-4 md:px-6 md:self-end border rounded-3xl py-6 shadow-md w-full md:w-auto bg-secondary">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name-input">Nickname</Label>
                <Input type="name"
                  id="name-input"
                  placeholder="Enter your name"
                  value={nickname}
                  onChange={event => setNickname(event.target.value)}
                />
              </div>
              <div className="mt-2">
                <ShareDrawer refVal={rankingElementRef} />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}

function ChainInfo({ selectedChain }: { selectedChain: Chain }) {
  return (
    <section className="grid md:grid-cols-2 gap-y-2 px-4 md:gap-y-0 md:space-x-6 my-auto max-w-5xl">
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
        <p className="md:text-xl mt-4 md:mt-8 text-white/80">{selectedChain.description}</p>
      </div>
      <div className='px-2 md:pt-20'>
        <ul>
          <SocialLink url={selectedChain.website} label={`Website`} icon={<Cable className="w-8 h-8 my-auto first-line:" />} />
          <SocialLink url={selectedChain.explorer} label={`Explorer`} icon={<ExternalLink className="w-8 h-8 my-auto" />} />
          <SocialLink url={selectedChain.github} label={`Github`} icon={<Github className="w-8 h-8 my-auto" />} />
          <SocialLink url={selectedChain.bridge} label={`Bridge`} icon={<ArrowRightLeft className="w-8 h-8 my-auto" />} />
          <SocialLink url={selectedChain.twitter.url} label={'@' + selectedChain.twitter.handle} icon={<Twitter className="w-8 h-8 my-auto" />} />
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

function SocialLink({ url, label, icon }: { url: string, label: string, icon: ReactNode }) {
  return (
    <li className="rounded-3xl px-2 md:px-6 py-2 transition group cursor-pointer hover:bg-white/10">
      <a className="flex space-x-4 md:space-x-8" href={url} target='_blank'>
        {icon}
        <div className="my-auto flex-1">
          <label className="cursor-pointer">{label}</label>
          <div className="text-white/70 text-xs md:text-sm break-all">{url}</div>
        </div>
        <ExternalLink className="my-auto opacity-0 transition-all group-hover:opacity-90 ease-in duration-300" />
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
    <div className="flex justify-between overflow-x-hidden w-full px-1">
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
            const iconClassName = `absolute bottom-1 transition-all ease-in duration-300 opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 ${isSelected ? 'fill-black' : 'fill-white/70'}`;

            if (isActive) className += " opacity-50";
            if (isDragged) className += " opacity-50";

            return (
              <li ref={ref} className={className} {...props}
                style={{
                  color: isSelected ? selectedChain.colors.background : 'white'
                }}
                onClick={() => handleChainButtonClick(item)}
              >
                <span className="m-auto group-hover:text-xl transition-all font-bold group-hover:-translate-y-2">{item.name}</span>
                <div className={`absolute h-8 w-full bottom-0 ${isDragged ? 'cursor-grabbing' : 'cursor-grab'}`} {...handleProps}>
                  <DragIcon className={iconClassName} />
                </div>
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