import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Truck, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES = [
  { id: 'moving-companies', label: 'Moving companies', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', description: 'Find reliable moving companies for your next big move.', hasSub: true },
  { id: 'car-transport', label: 'Car transport', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80', description: 'Safe and secure vehicle transportation across NZ.', hasSub: true },
  { id: 'motorcycle-transport', label: 'Motorcycle transport', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80', description: 'Specialised transport for motorcycles and scooters.', hasSub: true },
  { id: 'furniture-removals', label: 'Furniture removals', image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&q=80', description: 'Careful handling of your precious furniture pieces.', hasSub: false },
  { id: 'pet-transport', label: 'Pet transport', image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80', description: 'Comfortable and safe travel for your furry friends.', hasSub: false },
  { id: 'man-with-van', label: 'Man with a Van', image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&q=80', description: 'Perfect for small moves and single item deliveries.', hasSub: true },
  { id: 'piano-movers', label: 'Piano movers', image: 'https://images.unsplash.com/photo-1512733596533-7b46b5c3a4b0?w=600&q=80', description: 'Expert piano moving with specialised equipment.', hasSub: true },
  { id: 'trademe-delivery', label: 'TradeMe delivery', image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80', description: 'Quick and affordable delivery for your TradeMe purchases.', hasSub: false, active: true },
  { id: 'boat-transport', label: 'Boat transport', image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&q=80', description: 'Professional boat haulage and relocation services.', hasSub: false },
  { id: 'machinery-transport', label: 'Machinery Transport', image: 'https://images.unsplash.com/photo-1565791380713-1756b9a05343?w=600&q=80', description: 'Heavy machinery and equipment transport solutions.', hasSub: false },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [hoveredServiceId, setHoveredServiceId] = useState(SERVICES[0].id);
  const [location] = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsServicesHovered(false);
  }, [location]);

  const activeService = SERVICES.find(s => s.id === hoveredServiceId) || SERVICES[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <Truck className="h-6 w-6 text-black" strokeWidth={1.5} />
              <span className="text-xl font-semibold tracking-tight text-black">
                Moving Easy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center h-full">
            <div 
              className="h-full flex items-center px-4"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <button className="text-sm font-medium text-foreground hover:text-black transition-colors flex items-center gap-1">
                Services <ChevronDown className="h-4 w-4" />
              </button>
              
              {/* Dropdown Menu */}
              {isServicesHovered && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-lg border-b border-border z-50 animate-in fade-in duration-200">
                  <div className="max-w-6xl mx-auto flex">
                    {/* Left Side: Image & Description */}
                    <div className="w-[35%] p-8 bg-muted/20 border-r border-border flex flex-col">
                      <div className="rounded-lg overflow-hidden aspect-[4/3] mb-6 shadow-sm border border-border">
                        <img 
                          src={activeService.image} 
                          alt={activeService.label} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{activeService.label}</h3>
                      <p className="text-muted-foreground leading-relaxed">{activeService.description}</p>
                    </div>
                    
                    {/* Right Side: Links */}
                    <div className="w-[65%] p-8">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {SERVICES.map((service) => (
                          <Link 
                            key={service.id} 
                            href="/" 
                            className={`flex items-center justify-between py-2 text-base transition-colors ${
                              hoveredServiceId === service.id 
                                ? "text-black font-semibold" 
                                : "text-muted-foreground hover:text-black"
                            } ${service.active ? 'underline decoration-2 underline-offset-4' : ''}`}
                            onMouseEnter={() => setHoveredServiceId(service.id)}
                          >
                            {service.label}
                            {service.hasSub && <ChevronDown className="h-4 w-4 opacity-50 -rotate-90" />}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/" className="px-4 text-sm font-medium text-foreground hover:text-black transition-colors">
              How It Works
            </Link>
            <Link href="/" className="px-4 text-sm font-medium text-foreground hover:text-black transition-colors">
              Drivers
            </Link>
            <Link href="/" className="px-4 text-sm font-medium text-foreground hover:text-black transition-colors">
              Resources
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground hover:text-black hover:bg-muted font-medium">
              Log In
            </Button>
            <Link href="/quote">
              <Button className="bg-black hover:bg-black/90 text-white font-semibold px-6 rounded-md">
                Get a Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <div className="font-semibold px-4 text-sm text-muted-foreground uppercase tracking-wider mb-2">Services</div>
          {SERVICES.slice(0, 5).map(s => (
            <Link key={s.id} href="/" className="px-4 py-2 text-foreground hover:bg-muted rounded-md font-medium">
              {s.label}
            </Link>
          ))}
          <div className="h-px bg-border my-2"></div>
          <Link href="/" className="px-4 py-2 text-foreground hover:bg-muted rounded-md font-medium">
            How It Works
          </Link>
          <Link href="/" className="px-4 py-2 text-foreground hover:bg-muted rounded-md font-medium">
            Drivers
          </Link>
          <div className="h-px bg-border my-2"></div>
          <Button variant="outline" className="w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
            Log In
          </Button>
          <Link href="/quote" className="w-full">
            <Button className="w-full bg-black text-white hover:bg-black/90 font-semibold">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
