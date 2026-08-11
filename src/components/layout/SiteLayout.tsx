import { ReactNode, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ExitIntentPopup } from "./ExitIntentPopup";
import { useLocation } from "react-router-dom";

export const SiteLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--canvas))]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};
