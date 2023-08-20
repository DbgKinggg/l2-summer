import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { AppWindow } from "lucide-react";

function DAppBtn() {
    const { toast } = useToast();

    return (
        <Button
            onClick={() => toast({
                variant: "default",
                title: "Coming soon",
                description: "This feature is coming soon!"
            })}
        >
            <AppWindow className="mr-1" width={20} height={20} />
            dApps
        </Button>
    );
}

export default DAppBtn;