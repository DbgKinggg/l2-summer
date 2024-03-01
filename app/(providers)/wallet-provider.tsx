"use client"
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import React from 'react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import {
    mainnet,
    base,
    baseGoerli,
    optimism,
    optimismGoerli,
    arbitrum,
    arbitrumGoerli,
    polygon,
    polygonMumbai,
    polygonZkEvm,
    polygonZkEvmTestnet,
    zkSync,
    zkSyncTestnet,
    lineaTestnet,
    scroll,
    scrollSepolia,
    scrollTestnet,
} from "viem/chains";
import { blast, blastSepolia } from '@/config/constant'

const chains = [
    mainnet,
    base,
    baseGoerli,
    optimism,
    optimismGoerli,
    arbitrum,
    arbitrumGoerli,
    polygon,
    polygonMumbai,
    polygonZkEvm,
    polygonZkEvmTestnet,
    zkSync,
    zkSyncTestnet,
    lineaTestnet,
    scroll,
    scrollSepolia,
    scrollTestnet,
    blast,
    blastSepolia
]
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID

type Web3ModalProviderType = {
    children: React.ReactNode
};

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

const Web3ModalProvider = ({ children }: Web3ModalProviderType) => {
    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                {children}
            </WagmiConfig>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient}
                themeVariables={{
                    '--w3m-font-family': 'Roboto, sans-serif',
                    '--w3m-accent-color': 'white',
                    '--w3m-accent-fill-color': '#3d474e'
                }}
            />
        </>
    )
}

export default Web3ModalProvider