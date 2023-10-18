import {DappCategory} from "@/config/constant";

const dapps = [
  {
    name: "Merkly",
    url: "https://minter.merkly.com/",
    image_url: "merkly.jpeg",
    categories: [DappCategory.INFRASTRUCTURE],
    description: "Multifunctional Omnichain Solution",
  },
  {
    name: "ScrollNS",
    url: "https://scrollns.com/",
    image_url: "scrollns.jpeg",
    categories: [DappCategory.INFRASTRUCTURE],
    description:
      "ScrollNS, the First Omnichain Naming Service on the Scroll network, built by @star_protocol, revolutionizes the interoperability of DID & blockchain domains.",
  },
  {
    name: "Zonic",
    url: "https://zonic.app/",
    image_url: "zonic.jpeg",
    categories: [DappCategory.NFT],
    description: "NFT Marketplace across Ethereum Layer2",
  },
  {
    name: "Skydrome",
    url: "https://skydrome.finance/",
    image_url: "skydrome.jpeg",
    categories: [DappCategory.DEX, DappCategory.DEFI],
    description: "The leading ve(3,3) exchange on Scroll",
  },
  {
    name: "rhino.fi",
    url: "https://rhino.fi/",
    image_url: "rhino.fi.png",
    categories: [DappCategory.DEFI],
    description:
      "The worlds best multichain DeFi aggregator, from one self-custodial layer 2 wallet. Trade. Swap. Invest. Earn.",
  },
  {
    name: "Owlto Finance",
    url: "https://owlto.finance/",
    image_url: "owlto_finance.png",
    categories: [DappCategory.INFRASTRUCTURE],
    description: "The Decentralized Cross-Rollup Bridge Focused On Layer 2",
  },
];

export {dapps};
