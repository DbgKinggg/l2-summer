import { Button } from "@/components/ui/button";
import { Coins } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Chain, Token } from "@/config/type";
import { useEffect } from "react";
import { DataTable } from "@/components/shared/data-table";
import { columns } from '@/lib/tokens/shared'
import { useState } from "react";
import { ChainList } from "@/config/constant";

async function getTokens(chainName: string) {
    if (chainName === ChainList.BASE) {
        return (await import('../../lib/tokens/base')).tokens;
    }

    if (chainName === ChainList.ARBITRUM) {
        return (await import('../../lib/tokens/arbitrum')).tokens;
    }

    return [];
}

function TokensBtn({ selectedChain }: { selectedChain: Chain }) {
    const [tokens, setTokens] = useState<Token[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const tokens = await getTokens(selectedChain.name);

                setTokens(tokens);
            } catch (err) {
                console.log('Error occured when fetching books');
            }
        })();
    }, []);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Coins width={20} height={20} />
                    Tokens
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl md:max-h-[75vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>
                        Tokens on&nbsp;<strong>{selectedChain.name}</strong>
                    </DialogTitle>
                </DialogHeader>
                <div className="overflow-x-auto">
                    <DataTable columns={columns} data={tokens} hiddenFields={{ 'name': false }} />
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default TokensBtn;