import { Chain, Dapp } from "@/config/type";
import { ChainList } from "@/config/constant";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

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

function DAppList({ selectedChain }: DAppListProps) {
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
            <div className="mt-3 mx-2 grid grid-cols-2 md:flex gap-y-3 gap-x-3">
                {
                    dapps.map((dapp, index) => {
                        return (
                            <motion.div
                                className="max-w-xs"
                                key={index}
                                initial={{
                                    y: 0
                                }}
                                whileHover={{
                                    y: -5
                                }}
                            >
                                <Link
                                    href={dapp.url}
                                    target="_blank"
                                    className="flex flex-col rounded-3xl px-6 py-6 bg-white/20 h-full"
                                >
                                    <div className="flex flex-col gap-y-2 md:flex-row gap-x-2">
                                        <Image
                                            src={`/dapps/${dapp.image_url}`}
                                            className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                                            width={100}
                                            height={100}
                                            alt={dapp.name}
                                        />
                                        <span className="md:text-lg font-medium my-auto break-all">{dapp.name}</span>
                                    </div>
                                    <div className="flex gap-x-1 mt-3">
                                        {
                                            dapp.categories.map((category, index) => {
                                                return (
                                                    <Badge
                                                        key={index}
                                                        variant={`default`}
                                                    >
                                                        {category}
                                                    </Badge>
                                                );
                                            })
                                        }
                                    </div>
                                    <p className="text-white/70 mt-3 text-sm md:text-base">
                                        {dapp.description}
                                    </p>
                                </Link>
                            </motion.div>
                        );
                    })
                }
            </div>
            <Button
                variant={`link`}
                className="text-white ml-auto mt-2 group"
                size="lg"
            >
                View all
                <MoveRight className="ml-2 group-hover:translate-x-2 transition-all" />
            </Button>
        </section>
    );
}

export {
    DAppList
}