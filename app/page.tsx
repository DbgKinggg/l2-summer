"use client"
import NavBar from '@/components/base/navbar'
import { chains } from '@/config/constant'
import { Chain } from '@/config/type';
import { useState, Dispatch, SetStateAction, useRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import ClientOnly from '@/components/shared/client-only';
import AddNetworkBtn from '@/components/shared/add-network-btn';
import { ExternalLink, Cable, Github, ArrowRightLeft, Twitter } from 'lucide-react';
import ChainRanking from './(components)/chain-ranking';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShareDrawer } from './(components)/share-drawer';
import Footer from '@/components/base/footer';
import { motion, Variants } from 'framer-motion'
import va from '@vercel/analytics';
import TokensBtn from './(components)/tokens-btn';
import DAppBtn from './(components)/dapp-btn';
import { DAppList } from './(components)/dapps-list';

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
            background: 'linear-gradient(to right bottom,rgb(255 255 255/10%),rgb(0 0 0/50%)), ' + selectedChain.colors.background,
            color: selectedChain.colors.text,
          }}
        >
          <motion.div
            initial="offscreen"
            animate="onscreen"
            key={selectedChain.name + '-info'}
          >
            <ChainInfo selectedChain={selectedChain} />
          </motion.div>
          <ClientOnly>
            <ChainButtons
              selectedChain={selectedChain}
              setSelectedChain={setSelectedChain}
              chainList={chainList}
            />
          </ClientOnly>
          <DAppList selectedChain={selectedChain} />
          <a
            href="https://www.producthunt.com/posts/layer-2-summer?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-layer&#0045;2&#0045;summer" target="_blank">
            <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=410576&theme=light" alt="Layer&#0032;2&#0032;Summer - Layer&#0032;2&#0032;summer&#0032;is&#0032;place&#0032;for&#0032;layer&#0032;2&#0032;blockchains | Product Hunt"
              style={{
                width: '250px',
                height: '54px',
              }} width="250" height="54" />
          </a>
        </section>
        <section className="min-h-screen pb-20">
          <img src="/images/up-arrow.png"
            className="w-32 h-32 md:w-52 md:h-52 -translate-y-1/3 mx-auto"
            alt="up arrow"
          />
          <p className="px-2 text-5xl md:text-7xl text-center font-semibold">Rank your Layer 2 chains by dragging them</p>
          <div className="mt-12 flex flex-col px-2 items-center space-y-3 md:space-y-8 md:justify-center md:flex-row md:gap-x-6">
            <div className="rounded-3xl w-full max-w-[28rem] overflow-hidden shadow-md">
              <ChainRanking ref={rankingElementRef} chains={chainList} nickname={nickname} setChains={setChainList} />
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
  const titleVariants: Variants = {
    offscreen: {
      y: 100,
      rotate: 20,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      opacity: 100,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const descriptionVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 100,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="grid md:grid-cols-2 gap-y-2 px-4 md:gap-y-0 md:space-x-6 my-auto max-w-5xl">
      <div className="px-3 md:px-6">
        <motion.div className="flex space-x-2 md:space-x-4 my-auto"
          key={selectedChain.name + '-title'}
          variants={titleVariants}
        >
          <Image
            width="100"
            height="100"
            src={'/icons/' + selectedChain.icon}
            className="rounded-full border border-white bg-white w-14 h-14 md:w-20 md:h-20"
            alt={selectedChain.name}
          />
          <h1 className="text-5xl md:text-6xl font-bold my-auto">{selectedChain.name}</h1>
        </motion.div>
        <motion.p
          className="md:text-xl mt-4 md:mt-8 text-white/80"
          key={selectedChain.name}
          variants={descriptionVariants}
        >
          {selectedChain.description}
        </motion.p>
      </div>
      <div className='px-2 md:pt-20'>
        <ul>
          <SocialLink url={selectedChain.website} label={`Website`} icon={<Cable className="w-8 h-8" />} />
          <SocialLink url={selectedChain.explorer} label={`Explorer`} icon={<ExternalLink className="w-8 h-8" />} />
          <SocialLink url={selectedChain.github} label={`Github`} icon={<Github className="w-8 h-8" />} />
          <SocialLink url={selectedChain.bridge} label={`Bridge`} icon={<ArrowRightLeft className="w-8 h-8" />} />
          <SocialLink url={selectedChain.twitter.url} label={'@' + selectedChain.twitter.handle} icon={<Twitter className="w-8 h-8" />} />
        </ul>
        <div className="mt-4 px-2 md:px-6 flex flex-wrap gap-x-1 gap-y-2">
          <ClientOnly>
            <AddNetworkBtn chain={selectedChain} />
            <TokensBtn selectedChain={selectedChain} />
          </ClientOnly>
          <DAppBtn />
        </div>
      </div>
    </section >
  );
}

function SocialLink({ url, label, icon }: { url: string, label: string, icon: ReactNode }) {
  const iconAnimation = {
    initial: { rotate: 0, scale: 1 },
    animate: { rotate: 20, scale: 1.5 },
  }

  return (
    <motion.li className="rounded-3xl px-2 md:px-6 py-2 transition group cursor-pointer hover:bg-white/10"
      initial="initial"
      animate="initial"
      whileHover="animate"
      whileTap={{
        scale: 1.1
      }}
    >
      <a className="flex space-x-4 md:space-x-8" href={url} target='_blank'
        onClick={() => {
          va.track('ClickSocialLink', { socialLink: label });
        }}
      >
        <motion.div
          className="my-auto"
          variants={iconAnimation}
        >
          {icon}
        </motion.div>
        <div className="my-auto flex-1">
          <label className="cursor-pointer">{label}</label>
          <div className="text-white/70 text-xs md:text-sm break-all">{url}</div>
        </div>
        <ExternalLink className="my-auto opacity-0 transition-all group-hover:opacity-90 ease-in duration-300" />
      </a>
    </motion.li>
  );
}

function ChainButtons({ selectedChain, setSelectedChain, chainList }
  : { selectedChain: Chain, setSelectedChain: Dispatch<SetStateAction<Chain>>, chainList: Chain[] }) {

  function handleChainButtonClick(chain: Chain) {
    va.track('ClickChain', { chainName: chain.name });
    setSelectedChain(chain);
  }

  return (
    <div className="flex justify-between overflow-x-hidden w-full px-1">
      <ul className="grid grid-flow-col w-full py-4 space-x-3 lg:justify-center overflow-auto transition-all">
        {
          chainList.map(chain => {
            const isSelected = selectedChain.name === chain.name;
            const isSelectedClasses = isSelected ? 'bg-white' : 'hover:border-4';
            let className = twMerge('w-28 h-28 cursor-pointer aspect-square relative flex text-center rounded-3xl transition-all border relative group', isSelectedClasses)

            return (
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={className}
                key={chain.name}
                style={{
                  color: isSelected ? selectedChain.colors.background : 'white'
                }}
                onClick={() => handleChainButtonClick(chain)}
              >
                <span className="m-auto group-hover:text-xl transition-all font-bold group-hover:-translate-y-2">{chain.name}</span>
              </motion.li>
            );
          })
        }
      </ul>
    </div>
  );
}