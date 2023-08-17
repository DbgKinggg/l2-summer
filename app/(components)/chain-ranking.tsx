import { Chain } from "@/config/type";
import Image from "next/image";
import { forwardRef } from "react";

type ChainRankingProps = {
    chains: Chain[];
    nickname: string;
}

type ChainRowProps = {
    chain: Chain;
    index: number;
}

const ChainRanking = forwardRef<HTMLDivElement, ChainRankingProps>(function ({ chains, nickname }: ChainRankingProps, ref) {
    return (
        <div className="w-full max-w-[28rem] relative h-auto px-4 py-4 md:px-6 md:py-6 text-white"
            style={{
                background: chains[0].colors.background,
            }}
            ref={ref}
        >
            <div className="border border-white/40 flex flex-col py-4 px-2 md:px-4 w-full h-full rounded-[2rem]">
                <h3 className="text-3xl mx-auto font-semibold uppercase">L2 Ranking</h3>
                <p className="text-center text-white/70">By {nickname.length === 0 ? 'you' : nickname}</p>
                <ul className="mt-4 grid gap-y-3">
                    {
                        chains.map((chain, i) => (
                            <ChainRow key={chain.name} chain={chain} index={i} />
                        ))
                    }
                </ul>
                <span className="tracking-widest uppercase font-semibold text-xl absolute left-0 md:translate-x-1/3 top-1/2 -translate-y-1/2"
                    style={{
                        textOrientation: 'mixed',
                        writingMode: 'vertical-rl'
                    }}
                >
                    Layer 2 Summer
                </span>
            </div>
            <p className="absolute bottom-0 md:bottom-1 right-6 text-xs opacity-75">l2summer.xyz</p>
        </div>
    );
})

ChainRanking.displayName = 'ChainRanking';

function ChainRow({ chain, index }: ChainRowProps) {
    return (
        <li className="flex border-b-2 border-b-white/70 py-2 justify-start gap-x-4 mx-4">
            <span className="my-auto font-bold text-2xl">{index + 1}</span>
            <img
                src={'/icons/' + chain.icon}
                className="rounded-full border my-auto border-white bg-white w-6 h-6 md:w-8 md:h-8"
                alt={chain.name}
            />
            <span className="font-bold my-auto text-white/90 text-xl">{chain.name}</span>
        </li>
    );
}

export default ChainRanking;