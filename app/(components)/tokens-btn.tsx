import { Button } from "@/components/ui/button";
import { Coins } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Chain, Token, TokenWithLink } from "@/config/type";
import { useEffect } from "react";
import { DataTable } from "@/components/shared/data-table";
import { columns } from '@/lib/tokens/shared'
import { useState } from "react";
import { ChainList } from "@/config/constant";

function addExplorerLinkToToken(tokens: Token[], explorerContract: string): TokenWithLink[] {
    return tokens.map(token => {
        return {
            ...token,
            explorer_contract: explorerContract + token.address,
        };
    });
}

async function getTokensFromFile(chainName: string) {
    if (chainName === ChainList.BASE) {
        return (await import('../../lib/tokens/base')).tokens;
    }

    if (chainName === ChainList.ARBITRUM) {
        return (await import('../../lib/tokens/arbitrum')).tokens;
    }

    if (chainName === ChainList.OPTIMISM) {
        return (await import('../../lib/tokens/optimism')).tokens;
    }

    if (chainName === ChainList.POLYGON) {
        return (await import('../../lib/tokens/polygon')).tokens;
    }

    if (chainName === ChainList.POLYGON_ZKEVM) {
        return (await import('../../lib/tokens/polygon-zkevm')).tokens;
    }

    if (chainName === ChainList.ZKSYNC) {
        return (await import('../../lib/tokens/zksync-era')).tokens;
    }

    if (chainName === ChainList.STARKNET) {
        return (await import('../../lib/tokens/starknet')).tokens;
    }

    if (chainName === ChainList.LINEA) {
        return (await import('../../lib/tokens/linea')).tokens;
    }

    return [];
}

async function getTokens(chainName: string, explorerContract: string) {
    const tokens = await getTokensFromFile(chainName);

    return addExplorerLinkToToken(tokens, explorerContract);
}

function TokensBtn({ selectedChain }: { selectedChain: Chain }) {
    const [tokens, setTokens] = useState<Token[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const tokens = await getTokens(selectedChain.name, selectedChain.explorer_contract);

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