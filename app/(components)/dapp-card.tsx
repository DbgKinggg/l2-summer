import { Dapp } from "@/config/type";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

type DappCardProps = {
    dapp: Dapp;
    descriptionClasses?: string;
};

function DappCard({ dapp, descriptionClasses }: DappCardProps) {
    return (
        <Link
            href={dapp.url}
            target="_blank"
            className="flex flex-col rounded-3xl px-6 py-6 bg-white/20 border shadow-md h-full"
        >
            <div className="flex flex-col gap-y-2 md:flex-row gap-x-2">
                <Image
                    src={`/dapps/${dapp.image_url}`}
                    className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                    width={100}
                    height={100}
                    alt={dapp.name}
                />
                <span className="md:text-lg font-medium my-auto break-all">{dapp.name}</span>
            </div>
            <div className="flex gap-x-1 mt-3">
                {
                    dapp.categories.map((category, index) => {
                        return (
                            <Badge
                                key={index}
                                variant={`default`}
                            >
                                {category}
                            </Badge>
                        );
                    })
                }
            </div>
            <p className={clsx(`mt-3 text-sm md:text-base`, descriptionClasses)}>
                {dapp.description}
            </p>
        </Link>
    );
}

export default DappCard;