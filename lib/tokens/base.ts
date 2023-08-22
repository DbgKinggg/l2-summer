import {Token} from "@/config/type";

const tokens: Token[] = [
  {
    name: "USDCoin",
    symbol: "USDC",
    address: "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca",
    twitter_handle: "circle",
    website: ["https://www.circle.com/en/usdc"],
    image_file_name: "usdc.png",
  },
  {
    name: "Wrapped ETH",
    symbol: "WETH",
    address: "0x4200000000000000000000000000000000000006",
    twitter_handle: null,
    website: [],
    image_file_name: "weth.png",
  },
  {
    name: "Dai Stablecoin",
    symbol: "DAI",
    address: "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
    twitter_handle: "MakerDAO",
    website: ["https://makerdao.com/"],
    image_file_name: "dai.png",
  },
  {
    name: "Bald",
    symbol: "BALD",
    address: "0x27d2decb4bfc9c76f0309b8e88dec3a601fe25a8",
    twitter_handle: null,
    website: [],
    image_file_name: "bald.png",
  },
  {
    name: "Base",
    symbol: "BASE",
    address: "0xd07379a755A8f11B57610154861D694b2A0f615a",
    twitter_handle: null,
    website: [],
    image_file_name: "base.png",
  },
];

export {tokens};
