import {DappCategory} from "@/config/constant";

const dapps = [
  {
    name: "Thruster",
    url: "https://www.thruster.finance/",
    image_url: "thruster.jpeg",
    categories: [DappCategory.DEX, DappCategory.DEFI],
    description:
      "Built by degens, for degens. Thruster is a DEX for the best builders, yield seekers, and traders on Blast.",
  },
  {
    name: "PACMOON",
    url: "https://pacmoon.io/",
    image_url: "pacmoon.png",
    categories: [DappCategory.MEME],
    description: "Blast’s community coin.",
  },
  {
    name: "YOLO GAMES",
    url: "https://yologames.io/",
    image_url: "yolo.jpeg",
    categories: [DappCategory.GAME],
    description: "𝐆𝐎 𝐁𝐈𝐆 𝐎𝐑 𝐆𝐎 𝐇𝐎𝐌𝐄",
  },
  {
    name: "Bebop",
    url: "https://bebop.xyz/",
    image_url: "bebop.png",
    categories: [
      DappCategory.TRADING,
      DappCategory.API,
      DappCategory.INFRASTRUCTURE,
    ],
    description:
      "Seamless and efficient crypto trading for everyone. Web3 trading app and API that finds the best route for all your trades.",
  },
  {
    name: "Juice",
    url: "https://www.juice.finance/",
    image_url: "juice.jpeg",
    categories: [DappCategory.DEFI],
    description:
      "A disruptive Cross-Margin DeFi account to maximize points and yields.",
  },
  {
    name: "ZeroLend",
    url: "https://zerolend.xyz/",
    image_url: "zerolend.jpeg",
    categories: [DappCategory.DEFI, DappCategory.LENDING],
    description:
      "A user-friendly and frictionless lending experience to onboard the masses to Defi",
  },
  {
    name: "PacBot",
    url: "https://t.me/PacBotapp",
    image_url: "pacbot.jpeg",
    categories: [DappCategory.BOT],
    description:
      "Your social trading app that helps you earn more. | Built by traders, for traders.",
  },
  {
    name: "SynFutures Protocol",
    url: "https://link3.to/synfutures_defi",
    image_url: "syncfutures.jpeg",
    categories: [DappCategory.PROTOCOL],
    description: "Decentralized Derivatives Protocol.",
  },
];

export {dapps};
