import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const LogoutButton = () => {
  const { signOut } = useAuth();

  return (
    <Button variant="outline" onClick={signOut} className="flex items-center gap-2">
      <LogOut className="w-4 h-4" />
      Sair
    </Button>
  );
};

export default LogoutButton;