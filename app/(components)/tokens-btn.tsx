import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Coins } from "lucide-react";

function TokensBtn() {
    const { toast } = useToast();

    return (
        <Button
            onClick={() => toast({
                variant: "default",
                title: "Coming soon",
                description: "This feature is coming soon!"
            })}
        >
            <Coins width={20} height={20} />
            Tokens
        </Button>
    );
}

export default TokensBtn;