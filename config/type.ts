import {Chain as ChainType} from "wagmi";
import {DappCategory} from "./constant";

type Twitter = {
  handle: string;
  url: string;
};

export type Chain = {
  name: string;
  description: string;
  twitter: Twitter;
  website: string;
  explorer: string;
  explorer_contract: string;
  github: string | null;
  bridge: string;
  colors: {
    background: string;
    text: string;
  };
  icon: string;
  chains: ChainType[];
};

export type Token = {
  symbol: string;
  name: string;
  website: {
    name: string;
    url: string;
  }[];
  twitter_handle: string | null;
  image_file_name: string;
  address: string;
};

export type TokenWithLink = {
  symbol: string;
  name: string;
  website: {
    name: string;
    url: string;
  }[];
  twitter_handle: string | null;
  image_file_name: string;
  address: string;
  explorer_contract: string;
};

export type Dapp = {
  name: string;
  url: string;
  image_url: string;
  categories: DappCategory[];
  description: string;
};
