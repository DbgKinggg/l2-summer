import {Token} from "@/config/type";

const tokens: Token[] = [
  {
    name: "USDB",
    symbol: "USDB",
    address: "0x4300000000000000000000000000000000000003",
    twitter_handle: null,
    website: [],
    image_file_name: "USDB.svg",
  },
  {
    name: "Wrapped Ether",
    symbol: "WETH",
    address: "0x4300000000000000000000000000000000000004",
    twitter_handle: null,
    website: [],
    image_file_name: "weth.png",
  },
  {
    name: "P@cman Blastoff",
    symbol: "PACM",
    address: "0x0B4d0ee29857c3961b380d4ec138EA5814E346b9",
    twitter_handle: "pacman_blastoff",
    website: [
      {
        name: "P@cman Blastoff",
        url: "https://www.pacman.meme/",
      },
    ],
    image_file_name: "PACM.jpeg",
  },
  {
    name: "$PUMP",
    symbol: "PUMP",
    address: "0x216A5a1135A9dab49FA9Ad865E0f22FE22b5630A",
    twitter_handle: "realpumpitcoin",
    website: [
      {
        name: "$PUMP Telegram",
        url: "https://t.me/pumpitcoingroup",
      },
    ],
    image_file_name: "PUMP.jpeg",
  },
];

export {tokens};
