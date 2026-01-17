import Link from "next/link";
import { ArrowRight, House } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center space-y-8 animate-in fade-in duration-1000">
      <div className="space-y-4">
        <div className="mx-auto w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
          <House className="h-8 w-8" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Bienvenue chez
          <span className="block mt-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Francohouse
          </span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto leading-relaxed">
          Connectez-vous au Wi-Fi, contrôlez votre espace et profitez de votre séjour.
        </p>
      </div>

      <div className="pt-8">
        <Link href="/wifi">
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg font-medium group transition-all duration-300 hover:scale-105"
          >
            Entrer
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <div className="fixed bottom-8 text-xs text-muted-foreground/50 uppercase tracking-widest">
        Expérience Francohouse
      </div>
    </div>
  );
}
