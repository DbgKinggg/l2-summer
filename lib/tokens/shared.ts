import {ColumnDef} from "@tanstack/react-table";
import {Token} from "@/config/type";

const columns: ColumnDef<Token>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "twitter_handle",
    header: "Twitter",
  },
];

export {columns};
