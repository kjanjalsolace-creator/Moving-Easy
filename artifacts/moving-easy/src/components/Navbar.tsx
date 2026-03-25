import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Truck, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location !== "/"
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-primary-foreground p-2 rounded-xl group-hover:bg-primary/90 transition-colors shadow-sm">
                <Truck className="h-6 w-6" />
              </div>
              <span className={`text-xl font-bold tracking-tight ${isScrolled || location !== "/" ? "text-foreground" : "text-white drop-shadow-sm md:text-foreground"}`}>
                Moving Easy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled || location !== "/" ? "text-muted-foreground" : "text-white/90 md:text-muted-foreground"}`}>
              How It Works
            </Link>
            <Link href="/" className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled || location !== "/" ? "text-muted-foreground" : "text-white/90 md:text-muted-foreground"}`}>
              Owner Operators
            </Link>
            <Link href="/" className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled || location !== "/" ? "text-muted-foreground" : "text-white/90 md:text-muted-foreground"}`}>
              Reviews
            </Link>
            <div className="flex items-center gap-4 ml-4">
              <Button variant="ghost" className={isScrolled || location !== "/" ? "" : "text-white hover:text-white/90 hover:bg-white/10 md:text-foreground md:hover:bg-muted"}>
                Log In
              </Button>
              <Link href="/quote">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-md px-6 rounded-full transition-transform active:scale-95">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled || location !== "/" ? "text-foreground" : "text-white"} hover:bg-black/10 transition-colors`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <Link href="/" className="px-4 py-3 rounded-lg hover:bg-muted font-medium">
            How It Works
          </Link>
          <Link href="/" className="px-4 py-3 rounded-lg hover:bg-muted font-medium">
            Owner Operators
          </Link>
          <Link href="/" className="px-4 py-3 rounded-lg hover:bg-muted font-medium">
            Reviews
          </Link>
          <div className="h-px bg-border my-2"></div>
          <Button variant="outline" className="w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
            Log In
          </Button>
          <Link href="/quote" className="w-full">
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
