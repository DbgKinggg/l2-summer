"use client";

import { Drawer } from "vaul";
import { RefObject } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/button";
import { X, Check, Twitter } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import Link from "next/link";


export function ShareDrawer({ refVal }: { refVal: RefObject<HTMLDivElement> }) {
    const { toast } = useToast()
    const [isSharing, setIsSharing] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState<string>('');

    const twitterUrl = new URL("https://twitter.com/intent/tweet");
    const sharingText = "Just crafted my L2 ranking on l2summer.xyz 🚀 Join me, learn more about L2 & create your own ranking! 💡 #Layer2 #l2summer";
    twitterUrl.searchParams.set(
        "text",
        sharingText
    );

    const convertRankingToImage = async () => {
        console.log(1);
        if (refVal === null || refVal.current === null) {
            toast({
                variant: "destructive",
                title: "Failed to export image",
                description: "Element not found"
            })
            return;
        }

        try {
            setIsSharing(true);
            const url = await toPng(refVal.current, { cacheBust: false })
            setImageUrl(url);
        } catch (err: unknown) {
            const error = err as Error;

            toast({
                variant: "destructive",
                title: "Failed to export image",
                description: error.message ?? "Unknown error"
            })
        } finally {
            setIsSharing(false);
        }
    };


    return (
        <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>
                <Button
                    onClick={convertRankingToImage}
                >
                    Share
                </Button>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 transition-all backdrop-blur-md" />
                <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
                    <div className="p-4 bg-white rounded-t-[10px] flex-1">
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                        <Drawer.Close className="absolute right-3 top-3 hidden md:inline-block">
                            <X size={24} className="hover:opacity-70 transition-all" />
                        </Drawer.Close>
                        <div className="max-w-md mx-auto">
                            <Drawer.Title className="font-medium mb-4">
                                Share your Layer 2 ranking
                            </Drawer.Title>
                            <div className="flex mt-4">
                                {
                                    imageUrl.length <= 0
                                        ? (
                                            <Skeleton className="h-80 w-80 mx-auto" />
                                        )
                                        : (
                                            <img
                                                src={imageUrl}
                                                className="w-80 mx-auto rounded-3xl"
                                                alt="ranking preview"
                                            />
                                        )
                                }
                            </div>
                            <Alert className="mt-6">
                                <Check className="h-4 w-4" />
                                <AlertTitle>Here we go!</AlertTitle>
                                <AlertDescription>
                                    <p>You can share this image by right-clicking it to copy or save it</p>
                                    <Button className="mt-2" asChild>
                                        <Link href={twitterUrl} target="_blank">
                                            <Twitter className="mr-2 h-4 w-4" />
                                            Share
                                        </Link>
                                    </Button>
                                </AlertDescription>
                            </Alert>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}
