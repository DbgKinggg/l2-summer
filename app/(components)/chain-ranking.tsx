import { Chain } from "@/config/type";
import { forwardRef, Dispatch, SetStateAction } from "react";
import { SortableList } from "@/components/sortable-list";
import { twMerge } from "tailwind-merge";
import DragIcon from "@/components/icons/drag-icon";
import ClientOnly from "@/components/shared/client-only";

type ChainRankingProps = {
    chains: Chain[];
    nickname: string;
    setChains: Dispatch<SetStateAction<Chain[]>>;
}

type ChainRowProps = {
    chains: Chain[],
    setChains: Dispatch<SetStateAction<Chain[]>>
}


const ChainRanking = forwardRef<HTMLDivElement, ChainRankingProps>(function ({ chains, nickname, setChains }: ChainRankingProps, ref) {
    return (
        <div className="w-full max-w-[28rem] relative h-auto px-4 py-4 md:px-6 md:py-6 text-white transition-all duration-200"
            style={{
                background: 'linear-gradient(to right bottom,rgb(255 255 255/10%),rgb(0 0 0/50%)), ' + chains[0].colors.background
            }}
            ref={ref}
        >
            <div className="border border-white/40 flex flex-col py-4 px-2 md:px-4 w-full h-full rounded-[2rem]">
                <h3 className="text-3xl mx-auto font-semibold uppercase">L2 Ranking</h3>
                <p className="text-center text-white/70">By {nickname.length === 0 ? 'you' : nickname}</p>
                <div className="flex">
                    <ul className="mt-4 ml-2 grid gap-y-3 min-h-[300px] overflow-auto">
                        {
                            Array.from({ length: chains.length }, (_, i) => (
                                <li key={i} className="py-2 font-bold text-xl md:text-2xl">{i + 1}</li>
                            ))
                        }
                    </ul>
                    <ul className="mt-4 grid gap-y-3 min-h-[300px] overflow-auto w-full">
                        <ClientOnly>
                            <ChainRow chains={chains} setChains={setChains} />
                        </ClientOnly>
                    </ul>
                </div>
                <span className="tracking-widest uppercase font-semibold text-xl absolute left-0 md:translate-x-1/3 top-1/2 -translate-y-1/2"
                    style={{
                        textOrientation: 'mixed',
                        writingMode: 'vertical-rl'
                    }}
                >
                    Layer 2 Summer
                </span>
            </div>
            <p className="absolute bottom-0 md:bottom-1 right-6 text-xs opacity-75">l2summer.com</p>
        </div>
    );
})

ChainRanking.displayName = 'ChainRanking';

function ChainRow({ chains, setChains }: ChainRowProps) {
    return (
        <SortableList
            items={chains}
            getItemId={(chain) => chain.name}
            renderItem={({
                item,
                isActive,
                isDragged,
                ref,
                props,
                handleProps,
            }) => {
                let className = twMerge(
                    "flex border-b-2 group border-b-white/70 py-2 justify-start gap-x-4 mx-4",
                    isActive ? 'opacity-100' : '',
                    isDragged ? 'opacity-50 cursor-grabbing' : 'cursor-grab'
                );

                return (
                    <li className={className}
                        ref={ref} key={item.name}
                        {...props}
                        {...handleProps}
                    >
                        <DragIcon className="transition-all fill-white/70 ease-in my-auto opacity-0 group-hover:opacity-100" />
                        <img
                            src={'/icons/' + item.icon}
                            className="rounded-full border my-auto border-white bg-white w-6 h-6 md:w-8 md:h-8"
                            alt={item.name}
                        />
                        <span className="font-bold my-auto text-white/90 text-xl">{item.name}</span>
                    </li>
                );
            }}
            onSort={(oldIndex, newIndex) => {
                const newItems = chains.slice();
                newItems.splice(newIndex, 0, newItems.splice(oldIndex, 1)[0]);
                setChains(newItems);
            }}
        />
    );
}

export default ChainRanking;