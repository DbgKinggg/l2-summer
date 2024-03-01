import {linea} from "wagmi/chains";
import {Chain} from "./type";
import {
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
import {defineChain} from "viem";

export enum ChainList {
  SCROLL = "Scroll",
  BASE = "Base",
  OPTIMISM = "Optimism",
  ARBITRUM = "Arbitrum",
  POLYGON = "Polygon",
  POLYGON_ZKEVM = "Polygon zkEVM",
  ZKSYNC = "zkSync",
  STARKNET = "StarkNet",
  LINEA = "Linea",
  BLAST = "Blast",
}

export const blast = /*#__PURE__*/ defineChain({
  id: 81457,
  name: "Blast",
  network: "blast",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {http: ["https://rpc.blast.io"]},
    public: {http: ["https://rpc.blast.io"]},
  },
  blockExplorers: {
    default: {name: "Blastscan", url: "https://blastscan.io"},
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 212929,
    },
  },
  sourceId: 1,
});

export const blastSepolia = /*#__PURE__*/ defineChain({
  id: 168_587_773,
  name: "Blast Sepolia",
  network: "blast-sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.blast.io"],
    },
    public: {
      http: ["https://sepolia.blast.io"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blastscan",
      url: "https://testnet.blastscan.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 756690,
    },
  },
  testnet: true,
  sourceId: 11_155_111,
});

const chains: Chain[] = [
  {
    name: ChainList.BLAST,
    description:
      "The only Ethereum L2 with native yield for ETH and stablecoins.",
    twitter: {
      handle: "Blast_L2",
      url: "https://twitter.com/Blast_L2",
    },
    website: "https://blast.io/",
    explorer: "https://blastscan.io",
    explorer_contract: "https://blastscan.io/token/",
    github: null,
    bridge: "https://blast.io/en/bridge",
    colors: {
      background: "#000000",
      text: "#fcfb04",
    },
    icon: "blast.png",
    chains: [blast, blastSepolia],
  },
  {
    name: ChainList.SCROLL,
    description:
      "Scroll seamlessly extends Ethereum’s capabilities through zero knowledge tech and EVM compatibility.",
    twitter: {
      handle: "Scroll_ZKP",
      url: "https://twitter.com/Scroll_ZKP",
    },
    website: "https://scroll.io/",
    explorer: "https://scrollscan.com",
    explorer_contract: "https://scrollscan.com/token/",
    github: "https://github.com/scroll-tech",
    bridge: "https://scroll.io/bridge",
    colors: {
      background: "#ffdab0",
      text: "white",
    },
    icon: "scroll-icon.png",
    chains: [scroll, scrollSepolia, scrollTestnet],
  },
  {
    name: ChainList.BASE,
    description:
      "Base is a secure, low-cost, builder-friendly Ethereum L2 built to bring the next billion users onchain. Built on OP Stack.",
    twitter: {
      handle: "BuildOnBase",
      url: "https://twitter.com/BuildOnBase",
    },
    website: "https://base.org",
    explorer: "https://base.blockscout.com",
    explorer_contract: "https://base.blockscout.com/token/",
    github: "https://github.com/base-org",
    bridge: "https://bridge.base.org",
    colors: {
      background: "#1a53f4",
      text: "white",
    },
    icon: "base-icon.png",
    chains: [base, baseGoerli],
  },
  {
    name: ChainList.OPTIMISM,
    description:
      "Founded in 2019, Optimism is an L2 blockchain built by Ethereum developers that processes its transactions in batches using optimistic rollups. Users gain access to cheap and near instantaneous transactions are cheap and nearly instantaneous. Developers can use Optimism as a fast, stable, scalable and secure solution to programmes requiring Ethereum apps.",
    twitter: {
      handle: "optimismFND",
      url: "https://twitter.com/optimismFND",
    },
    website: "https://www.optimism.io",
    explorer: "https://optimistic.etherscan.io",
    explorer_contract: "https://optimistic.etherscan.io/token/",
    github: "https://github.com/ethereum-optimism",
    bridge: "https://app.optimism.io/bridge",
    colors: {
      background: "#ec3232",
      text: "white",
    },
    icon: "op-icon.svg",
    chains: [optimism, optimismGoerli],
  },
  {
    name: ChainList.ARBITRUM,
    description:
      "Arbitrum is an Ethereum layer2 scaling solution that supports smart contracts without the limitations of scalability and privacy. Users enjoy low transaction fees and less congestion on Arbitrum.",
    twitter: {
      handle: "arbitrum",
      url: "https://twitter.com/arbitrum",
    },
    website: "https://arbitrum.foundation",
    explorer: "https://arbiscan.io",
    explorer_contract: "https://arbiscan.io/token/",
    github: "https://github.com/OffchainLabs",
    bridge: "https://bridge.arbitrum.io",
    colors: {
      background: "#36a0f0",
      text: "white",
    },
    icon: "arbitrum-icon.png",
    chains: [arbitrum, arbitrumGoerli],
  },
  {
    name: ChainList.POLYGON,
    description:
      "Polygon (previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.",
    twitter: {
      handle: "0xPolygon",
      url: "https://twitter.com/0xPolygon",
    },
    website: "https://polygon.technology/polygon-pos",
    explorer: "https://polygonscan.com/",
    explorer_contract: "https://polygonscan.com/token/",
    github: "https://github.com/maticnetwork",
    bridge: "https://wallet.polygon.technology/polygon/bridge",
    colors: {
      background: "#8343f3",
      text: "white",
    },
    icon: "polygon-icon.png",
    chains: [polygon, polygonMumbai],
  },
  {
    name: ChainList.POLYGON_ZKEVM,
    description:
      "Polygon zkEVM is an EVM equivalent ZK rollup scaling solution. All existing smart contracts, developer toolings and wallets work seamlessly. Polygon zkEVM uses the zero-knowledge proofs (validity proofs) to lower transaction costs and increase throughput, while inheriting the base-layer security of Ethereum.",
    twitter: {
      handle: "0xPolygon",
      url: "https://twitter.com/0xPolygon",
    },
    website: "https://polygon.technology/polygon-zkevm",
    explorer: "https://zkevm.polygonscan.com/",
    explorer_contract: "https://zkevm.polygonscan.com/token/",
    github: "https://github.com/maticnetwork",
    bridge: "https://wallet.polygon.technology/zkEVM-Bridge/bridge",
    colors: {
      background: "#8343f3",
      text: "white",
    },
    icon: "polygon-icon.png",
    chains: [polygonZkEvm, polygonZkEvmTestnet],
  },
  {
    name: ChainList.ZKSYNC,
    description:
      "zkSync Era is a Layer-2 protocol that scales Ethereum with cutting-edge ZK tech. Our mission is not only to merely increase Ethereum's throughput, but to fully preserve its foundational values – freedom, self-sovereignty, decentralization – at scale.",
    twitter: {
      handle: "zksync",
      url: "https://twitter.com/zksync",
    },
    website: "https://zksync.io",
    explorer: "https://explorer.zksync.io",
    explorer_contract: "https://explorer.zksync.io/address/",
    github: "https://github.com/matter-labs",
    bridge: "https://portal.zksync.io/bridge",
    colors: {
      background: "#8f91fc",
      text: "white",
    },
    icon: "zksync-icon.png",
    chains: [zkSync, zkSyncTestnet],
  },
  {
    name: ChainList.STARKNET,
    description:
      "StarkNet is a Zero-Knowledge Rollup (ZK-Rollup) that is decentralized, permissionless, and censorship-resistant. It supports general computation over Ethereum.",
    twitter: {
      handle: "Starknet",
      url: "https://twitter.com/Starknet",
    },
    website: "https://www.starknet.io",
    explorer: "https://starkscan.co",
    explorer_contract: "https://starkscan.co/token/",
    github: "https://github.com/starknet-io",
    bridge: "https://starkgate.starknet.io",
    colors: {
      background: "#eb786b",
      text: "white",
    },
    icon: "starknet-icon.webp",
    chains: [],
  },
  {
    name: ChainList.LINEA,
    description:
      "Linea is a developer-ready Ethereum-equivalent zkEVM network that utilizes zero knowledge technology and rollups. It also features technology like quantum-resistant lattice-based cryptography and its Canonical Messaging Sevice.",
    twitter: {
      handle: "LineaBuild",
      url: "https://twitter.com/LineaBuild",
    },
    website: "https://linea.build",
    explorer: "https://explorer.linea.build",
    explorer_contract: "https://explorer.linea.build/token/",
    github: "https://github.com/Consensys",
    bridge: "https://bridge.linea.build",
    colors: {
      background: "#121212",
      text: "white",
    },
    icon: "linea-icon.avif",
    chains: [linea, lineaTestnet],
  },
];

enum DappCategory {
  DEFI = "DeFi",
  INFRASTRUCTURE = "Infrastructure",
  NFT = "NFT",
  GAMES = "Games",
  LENDING = "Lending",
  DEX = "DEX",
  WALLET = "Wallet",
  PROTOCOL = "Protocol",
  API = "API",
  GAME = "Game",
  TRADING = "Trading",
  MEME = "MEME",
  BOT = "Bot",
  OTHERS = "Others",
}

export {chains, DappCategory};
