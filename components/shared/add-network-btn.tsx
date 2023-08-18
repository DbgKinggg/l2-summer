"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { Chain } from "@/config/type";
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
import { Chain as ChainType } from "wagmi";
import { useToast } from "@/components/ui/use-toast"
import va from '@vercel/analytics'

function AddNetworkBtn({ chain }: { chain: Chain }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="secondary">Add Network</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownList chain={chain} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function DropdownList({ chain }: { chain: Chain }) {
    const { isConnected } = useAccount();
    const { open } = useWeb3Modal();
    const { toast } = useToast()

    async function handleAddChain(chain: ChainType) {
        try {
            va.track('AddChain', { chain: chain.name, chainId: chain.id })
            // @ts-ignore:next-line
            const ethereum = typeof window !== undefined ? window?.ethereum : undefined;

            const walletClient = createWalletClient({
                chain: mainnet,
                transport: custom(ethereum)
            })

            await walletClient.addChain({
                chain
            })
        } catch (err: unknown) {
            const error = err as Error;
            console.error('Failed to add chain', error);

            toast({
                variant: "destructive",
                title: "Failed to add chain",
                description: error.message ?? "Unknown error"
            })
        }
    }

    if (!isConnected) {
        return (
            <DropdownMenuItem onClick={open} className="cursor-pointer">
                Connect Wallet
            </DropdownMenuItem>
        );
    }

    if (chain.chains.length === 0) {
        return (
            <DropdownMenuItem>
                Not Available
            </DropdownMenuItem>
        );
    }

    return (
        <>
            {
                chain.chains.map((chain) => (
                    <DropdownMenuItem key={chain.id} className="cursor-pointer"
                        onClick={() => handleAddChain(chain)}
                    >
                        {chain.name}
                    </DropdownMenuItem>
                ))
            }
        </>
    );
}


export default AddNetworkBtn