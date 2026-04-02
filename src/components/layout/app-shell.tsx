import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <a href="#contenu" className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">{children}</main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
