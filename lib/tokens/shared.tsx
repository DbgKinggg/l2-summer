import { ColumnDef } from "@tanstack/react-table";
import { Token } from "@/config/type";
import Image from "next/image";
import { Copy, Twitter, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { copyToClipboard } from "../utils";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const columns: ColumnDef<Token>[] = [
  {
    header: "Token",
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
    header: "Contract Address",
    cell: ({ row }) => {
      const token = row.original;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { toast } = useToast();

      return (
        <div className="text-xs flex gap-x-1">
          <span className="my-auto">{token.address}</span>
          <TooltipProvider delayDuration={3}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"ghost"} size={"icon"}
                  onClick={() => {
                    copyToClipboard(token.address);
                    toast({
                      title: 'Contract address copied!'
                    });
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
        <div className="flex gap-x-1">
          {
            token.twitter_handle && (
              <Button variant={"default"} size={"sm"} asChild>
                <Link
                  href={`https://twitter.com/${token.twitter_handle}`}
                  target="_blank"
                >
                  <Twitter className="w-4 h-4 mr-1" />
                  Twitter
                </Link>
              </Button>
            )
          }
          {
            token.website.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"default"} size={"sm"} asChild>
                    <Link
                      href={`https://twitter.com/${token.twitter_handle}`}
                      target="_blank"
                    >
                      <LinkIcon className="w-4 h-4 mr-1" />
                      Website
                    </Link>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {
                    token.website.map(website => (
                      <DropdownMenuItem key={website.url} className="cursor-pointer" asChild>
                        <Link
                          href={website.url}
                          target="_blank"
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
