import { ColumnDef } from "@tanstack/react-table";
import { TokenWithLink } from "@/config/type";
import Image from "next/image";
import { Copy, Twitter, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { copyToClipboard, truncateMiddle } from "../utils";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import va from '@vercel/analytics';

const columns: ColumnDef<TokenWithLink>[] = [
  {
    header: "Token",
    accessorKey: 'symbol',
    cell: ({ row }) => {
      const token = row.original;

      return (
        <div className="flex">
          <div className="flex-shrink-0 overflow-hidden mr-1 my-auto">
            <Image
              width={20}
              height={20}
              className="rounded-full"
              src={`/tokens/${token.image_file_name}`}
              alt={token.name}
            />
          </div>
          <span className="font-bold mr-1">{token.name}</span>
          {token.symbol}
        </div>
      );
    },
  },
  {
    header: "Name",
    accessorKey: 'name',
  },
  {
    header: "Contract Address",
    accessorKey: 'address',
    cell: ({ row }) => {
      const token = row.original;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { toast } = useToast();
      const truncatedAddress = truncateMiddle(token.address, 8, 8);

      return (
        <div className="text-xs flex gap-x-1">
          <TooltipProvider delayDuration={3}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link className="my-auto"
                  href={token.explorer_contract}
                  target="_blank"
                  onClick={() => {
                    va.track('ContractAddressClicked',
                      {
                        token: token.name,
                        symbol: token.symbol,
                        address: token.address
                      }
                    )
                  }}
                >
                  {truncatedAddress}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Open on Explorer</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={3}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"ghost"} size={"icon"}
                  onClick={() => {
                    copyToClipboard(token.address);
                    toast({
                      title: 'Contract address copied!'
                    });
                    va.track('CopyContractAddressClicked',
                      {
                        token: token.name,
                        symbol: token.symbol,
                        address: token.address
                      }
                    )
                  }}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to copy</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    }
  },
  {
    id: 'Action',
    cell: ({ row }) => {
      const token = row.original;

      return (
        <div className="flex gap-x-1 justify-end">
          {
            token.twitter_handle && (
              <Button variant={"default"} size={"sm"} asChild>
                <Link
                  href={`https://twitter.com/${token.twitter_handle}`}
                  target="_blank"
                  onClick={() => {
                    va.track('TokenTwitterClicked',
                      {
                        token: token.name,
                        symbol: token.symbol,
                        address: token.address
                      }
                    )
                  }}
                >
                  <Twitter className="w-4 h-4" />
                </Link>
              </Button>
            )
          }
          {
            token.website.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"default"} size={"sm"}>
                    <LinkIcon className="w-4 h-4 mr-1" />
                    Website
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {
                    token.website.map(website => (
                      <DropdownMenuItem key={website.url} className="cursor-pointer" asChild>
                        <Link
                          href={website.url}
                          target="_blank"
                          onClick={() => {
                            va.track('TokenWebsiteClicked', {
                              token: token.name,
                              symbol: token.symbol,
                              address: token.address,
                              website: website.name,
                              websiteUrl: website.url
                            })
                          }}
                        >
                          {website.name}
                        </Link>
                      </DropdownMenuItem>
                    ))
                  }
                </DropdownMenuContent>
              </DropdownMenu>
            )
          }
        </div>
      );
    }
  },
];

export { columns };
