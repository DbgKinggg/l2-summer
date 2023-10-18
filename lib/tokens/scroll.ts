import {Token} from "@/config/type";

const tokens: Token[] = [
  {
    name: "Tether USD",
    symbol: "USDT",
    address: "0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df",
    twitter_handle: "Tether_to",
    website: [
      {
        name: "Tether",
        url: "https://tether.to/",
      },
    ],
    image_file_name: "usdt.png",
  },
  {
    name: "USDCoin",
    symbol: "USDC",
    address: "0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df",
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
    address: "0x5300000000000000000000000000000000000004",
    twitter_handle: null,
    website: [],
    image_file_name: "weth.png",
  },
];

export {tokens};
