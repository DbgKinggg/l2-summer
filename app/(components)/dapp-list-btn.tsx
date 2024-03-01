import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Chain } from "@/config/type";
import { useEffect } from "react";
import { useState } from "react";
import { ChainList } from "@/config/constant";
import va from '@vercel/analytics';
import { useToast } from "@/components/ui/use-toast";
import { MoveRight } from "lucide-react";
import { Dapp } from "@/config/type";
import DappCard from "./dapp-card";


async function getDApps(chainName: string) {
    return await getDAppsFromFile(chainName);
}

async function getDAppsFromFile(chainName: string) {
    if (chainName === ChainList.BLAST) {
        return (await import('../../lib/dapps/blast')).dapps;
    }

    if (chainName === ChainList.BASE) {
        return (await import('../../lib/dapps/base')).dapps;
    }

    if (chainName === ChainList.SCROLL) {
        return (await import('../../lib/dapps/scroll')).dapps;
    }

    return [];
}

function DappListBtn({ selectedChain }: { selectedChain: Chain }) {
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
    }, [selectedChain]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                {
                    dapps.length > 0 && (
                        <Button
                            variant={`link`}
                            className="text-white ml-auto mt-2 group"
                            size="lg"
                            onClick={() => va.track('ViewAllDappBtnClicked', { chainName: selectedChain.name })}
                        >
                            View all
                            <MoveRight className="ml-2 opacity-0 ease-in-out group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                        </Button>
                    )
                }
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] md:max-h-[75vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>
                        dApps on&nbsp;<strong>{selectedChain.name}</strong>
                    </DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6">
                    {
                        dapps.length === 0 && (
                            <div>
                                No dApps found
                            </div>
                        )
                    }
                    {
                        dapps.map((dapp, index) => (
                            <div key={index}
                                className="transition hover:-translate-y-1"
                            >
                                <DappCard dapp={dapp} />
                            </div>
                        ))
                    }
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default DappListBtn;