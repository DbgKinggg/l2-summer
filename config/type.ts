import {Chain as ChainType} from "wagmi";

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
  github: string;
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
  website: string[];
  twitter_handle: string | null;
  image_file_name: string;
  address: string;
};
