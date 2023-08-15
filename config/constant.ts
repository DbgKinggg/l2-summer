import {Chain} from "./type";

const chains: Chain[] = [
  {
    name: "Base",
    description:
      "Base is a secure, low-cost, builder-friendly Ethereum L2 built to bring the next billion users onchain. Built on OP Stack",
    twitter: {
      handle: "BuildOnBase",
      url: "https://twitter.com/BuildOnBase",
    },
    website: "https://base.org",
    explorer: "https://base.blockscout.com",
    github: "https://github.com/base-org",
    bridge: "https://bridge.base.org",
    colors: {
      background: "#1a53f4",
      text: "white",
    },
    icon: "base-icon.png",
  },
  {
    name: "Optimism",
    description:
      "Founded in 2019, Optimism is an L2 blockchain built by Ethereum developers that processes its transactions in batches using optimistic rollups. Users gain access to cheap and near instantaneous transactions are cheap and nearly instantaneous. Developers can use Optimism as a fast, stable, scalable and secure solution to programmes requiring Ethereum apps.",
    twitter: {
      handle: "optimismFND",
      url: "https://twitter.com/optimismFND",
    },
    website: "https://www.optimism.io",
    explorer: "https://optimistic.etherscan.io",
    github: "https://github.com/ethereum-optimism",
    bridge: "https://app.optimism.io/bridge",
    colors: {
      background: "#ec3232",
      text: "white",
    },
    icon: "op-icon.svg",
  },
  {
    name: "Arbitrum",
    description:
      "Arbitrum is an Eth layer2 scaling solution that supports smart contracts without the limitations of scalability and privacy. Users enjoy low transaction fees and less congestion on Arbitrum.",
    twitter: {
      handle: "arbitrum",
      url: "https://twitter.com/arbitrum",
    },
    website: "https://arbitrum.foundation",
    explorer: "https://arbiscan.io",
    github: "https://github.com/OffchainLabs",
    bridge: "https://bridge.arbitrum.io",
    colors: {
      background: "#36a0f0",
      text: "white",
    },
    icon: "arbitrum-icon.png",
  },
  {
    name: "Polygon",
    description:
      "Polygon zkEVM is an EVM equivalent ZK rollup scaling solution. All existing smart contracts, developer toolings and wallets work seamlessly. Polygon zkEVM uses the zero-knowledge proofs (validity proofs) to lower transaction costs and increase throughput, while inheriting the base-layer security of Ethereum.",
    twitter: {
      handle: "0xPolygon",
      url: "https://twitter.com/0xPolygon",
    },
    website: "https://polygon.technology",
    explorer: "https://polygon.technology",
    github: "https://github.com/maticnetwork",
    bridge: "https://wallet.polygon.technology/zkEVM-Bridge/bridge",
    colors: {
      background: "#8343f3",
      text: "white",
    },
    icon: "polygon-icon.png",
  },
  {
    name: "zkSync",
    description:
      "zkSync Era is a Layer-2 protocol that scales Ethereum with cutting-edge ZK tech. Our mission is not only to merely increase Ethereum's throughput, but to fully preserve its foundational values – freedom, self-sovereignty, decentralization – at scale.",
    twitter: {
      handle: "zksync",
      url: "https://twitter.com/zksync",
    },
    website: "https://zksync.io",
    explorer: "https://explorer.zksync.io",
    github: "https://github.com/matter-labs",
    bridge: "https://portal.zksync.io/bridge",
    colors: {
      background: "#1c68ff",
      text: "white",
    },
    icon: "zksync-icon.png",
  },
  {
    name: "StarkNet",
    description:
      "StarkNet is a Zero-Knowledge Rollup (ZK-Rollup) that is decentralized, permissionless, and censorship-resistant. It supports general computation over Ethereum. Developers create applications on StarkNet allowing users to send transactions the same way they do with Ethereum today. All StarkNet transactions are periodically batched, and their validity is proven on a stark proof, which is then verified on the Ethereum Blockchain.",
    twitter: {
      handle: "Starknet",
      url: "https://twitter.com/Starknet",
    },
    website: "https://www.starknet.io",
    explorer: "https://starkscan.co",
    github: "https://github.com/starknet-io",
    bridge: "https://starkgate.starknet.io",
    colors: {
      background: "#0d0c4f",
      text: "white",
    },
    icon: "starknet-icon.webp",
  },
  {
    name: "Linea",
    description:
      "Linea is a developer-ready Ethereum-equivalent zkEVM network that utilizes zero knowledge technology and rollups. It also features technology like quantum-resistant lattice-based cryptography and its Canonical Messaging Sevice.",
    twitter: {
      handle: "LineaBuild",
      url: "https://twitter.com/LineaBuild",
    },
    website: "https://linea.build",
    explorer: "https://explorer.linea.build",
    github: "https://github.com/Consensys",
    bridge: "https://bridge.linea.build",
    colors: {
      background: "#121212",
      text: "white",
    },
    icon: "linea-icon.avif",
  },
];

export {chains};
