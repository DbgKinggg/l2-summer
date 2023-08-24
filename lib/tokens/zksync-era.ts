import {Token} from "@/config/type";

const tokens: Token[] = [
  {
    name: "USDCoin",
    symbol: "USDC",
    address: "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4",
    twitter_handle: "circle",
    website: [
      {
        name: "Circle",
        url: "https://www.circle.com/en/usdc",
      },
    ],
    image_file_name: "usdc.png",
  },
  {
    name: "Wrapped ETH",
    symbol: "WETH",
    address: "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91",
    twitter_handle: null,
    website: [],
    image_file_name: "weth.png",
  },
  {
    name: "Cheems Token",
    symbol: "CHEEMS",
    address: "0x08f328c72a9b420b7568415ed331a1c236e6f620",
    twitter_handle: "LordCheems_",
    website: [
      {
        name: "Cheems",
        url: "https://cheems.pet/",
      },
    ],
    image_file_name: "cheems.png",
  },
];

export {tokens};
