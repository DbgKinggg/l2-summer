import { Chain, Dapp } from "@/config/type";
import { ChainList } from "@/config/constant";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import DappCard from "./dapp-card";
import DappListBtn from "./dapp-list-btn";

type DAppListProps = {
    selectedChain: Chain;
};

async function getDApps(chainName: string) {
    const dapps = await getDAppsFromFile(chainName);

    return dapps.slice(0, 3);
}

async function getDAppsFromFile(chainName: string) {
    if (chainName === ChainList.BASE) {
        return (await import('../../lib/dapps/base')).dapps;
    }

    return [];
}

function HomeDAppList({ selectedChain }: DAppListProps) {
    const [dapps, setDapps] = useState<Dapp[]>([]);
    const { toast } = useToast();

    useEffect(() => {
        (async () => {
            try {
                const dapps = await getDApps(selectedChain.name);
                setDapps(dapps);
            } catch (err) {
                toast({
                    title: 'Error occurred when fetching dapps',
                    description: 'Please try again later',
                    variant: `destructive`
                });
            }
        })();
    }, [selectedChain.name])


    return (
        <section className="flex flex-col">
            <h2 className="hidden">
                dApps
            </h2>
            <div className="mt-3 mx-2 md:mx-4 grid grid-cols-2 md:flex gap-y-3 gap-x-3">
                {
                    dapps.map((dapp, index) => {
                        return (
                            <div
                                className="max-w-xs md:flex-1 transition ease-in hover:-translate-y-2"
                                key={index}
                            >
                                <DappCard dapp={dapp} descriptionClasses="text-white/70" />
                            </div>
                        );
                    })
                }
            </div>
            <DappListBtn selectedChain={selectedChain} />
        </section>
    );
}

export {
    HomeDAppList
}