import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/layout/SiteLayout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Software from "./pages/Software";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/resources/Blog";
import Guides from "./pages/resources/Guides";
import FAQ from "./pages/resources/FAQ";
import ArticlePage from "./pages/resources/Article";
import { articles } from "./pages/resources/articleData";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <SiteLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/software" element={<Software />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/guides" element={<Guides />} />
            <Route path="/resources/faq" element={<FAQ />} />
            {Object.values(articles).map((a) => (
              <Route
                key={a.slug}
                path={`/resources/${a.slug}`}
                element={<ArticlePage article={a} />}
              />
            ))}
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SiteLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
