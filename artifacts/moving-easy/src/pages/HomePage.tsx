import { Link } from "wouter";
import { 
  MapPin, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Home, 
  Building2, 
  Briefcase, 
  Sofa, 
  Truck, 
  PackageOpen, 
  Music, 
  Trash2,
  MessageSquare,
  BadgeDollarSign,
  Map,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OperatorCard } from "@/components/OperatorCard";
import { ReviewCard } from "@/components/ReviewCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-foreground">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* A) HERO SECTION */}
        <section className="py-20 md:py-32 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight mb-6 max-w-4xl leading-tight">
              Moving Easy Limited - Two Movers And A Truck
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
              Make your furniture moving and freight services easy across New Zealand.
            </p>

            {/* Quick Quote Widget */}
            <div className="bg-white p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-border/50 max-w-4xl w-full flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Moving from..." 
                  className="pl-12 h-14 border-border bg-muted/20 focus-visible:ring-black text-base rounded-xl"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Moving to..." 
                  className="pl-12 h-14 border-border bg-muted/20 focus-visible:ring-black text-base rounded-xl"
                />
              </div>
              <div className="flex-1 relative hidden sm:block">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  type="date"
                  className="pl-12 h-14 border-border bg-muted/20 focus-visible:ring-black text-base rounded-xl text-foreground"
                />
              </div>
              <Link href="/quote" className="md:w-auto w-full">
                <Button className="h-14 px-8 w-full bg-black hover:bg-black/90 text-white font-semibold text-lg rounded-xl transition-all">
                  Quote
                </Button>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-black fill-black" />
                  ))}
                </div>
                <span className="text-black font-semibold">$60/HH</span> Starting Rate
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-black" />
                <span className="text-black font-semibold">NZ-wide</span> Service Area
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-black" />
                <span className="text-black font-semibold">100+</span> movers network
              </div>
            </div>
          </div>
        </section>

        {/* B) MOST POPULAR SERVICES */}
        <section className="py-20 bg-muted/10 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-tight">Our services include</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: Home, label: "House Furniture Moving" },
                { icon: Building2, label: "Packing Services" },
                { icon: Briefcase, label: "Storage Services" },
                { icon: Sofa, label: "Junk Removal" },
                { icon: Truck, label: "Office Relocation" },
                { icon: PackageOpen, label: "Freight Services" },
                { icon: Music, label: "Free WINZ Quotes" },
                { icon: Trash2, label: "Weekday Discount" },
              ].map((service, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-border flex flex-col items-center justify-center text-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="p-3 bg-muted/30 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base">{service.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* C) CUSTOMER REVIEWS */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Welcome to Moving Easy Limited</h2>
              <p className="text-lg text-muted-foreground">One stop shop for furniture moving and freight needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ReviewCard 
                name="Moving Easy Limited"
                location="Auckland, New Zealand"
                rating={5}
                date="Service update"
                text="Moving Easy Limited has set its goals towards the best customer service as an inter state and outer state furniture moving and freight company."
              />
              <ReviewCard 
                name="Free Moving Estimate"
                location="Nationwide"
                rating={5}
                date="Book today"
                text="Are you moving to a new house and exploring your relocation options? Request your free moving estimate today and book your move."
              />
              <ReviewCard 
                name="Service Coverage"
                location="Inside and Outside Auckland"
                rating={4}
                date="Current offers"
                text="Services include moving, packing, storage, manpower service, junk removal, WINZ quotes, 10% student discount, and weekday discounts."
              />
            </div>
          </div>
        </section>

        {/* D) GO ABOVE & BEYOND */}
        <section className="py-24 bg-[#0a0a0a] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">The first step is choosing us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Long-distance expertise</h3>
                <p className="text-white/70">We have proudly moved New Zealanders all over the country with a network of more than 100 movers.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <MessageSquare className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Care for prized possessions</h3>
                <p className="text-white/70">We understand how important your household items are and handle every move with extra care.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <BadgeDollarSign className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Licensed and protected</h3>
                <p className="text-white/70">Our experienced professionals are fully licensed and protected when moving what matters to you.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <Map className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Local or cross-country</h3>
                <p className="text-white/70">Whether your move is local or cross-country, we make relocation easier and more reliable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* E) ONE SEAMLESS EXPERIENCE (STATS BANNER) */}
        <section className="py-16 bg-white border-b border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/30">
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">1-2 hrs</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Per Room Guide</p>
              </div>
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">100+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Mover Network</p>
              </div>
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">$60/HH</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Starting Price</p>
              </div>
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">1 Day</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Local Completion</p>
              </div>
            </div>
          </div>
        </section>

        {/* F) HOW IT WORKS */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center tracking-tight">How long does it take to move locally</h2>
            
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute -inset-4 bg-muted/20 rounded-3xl -z-10 transform -rotate-2"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" 
                    alt="Create a listing" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-border/50"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white text-xl font-bold mb-6">1</div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">1. The size of your household</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    If you are transporting and packing a lot of items, your move may take longer. Smaller homes and apartments are usually faster to complete.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute -inset-4 bg-muted/20 rounded-3xl -z-10 transform rotate-2"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80" 
                    alt="Compare quotes" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-border/50"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white text-xl font-bold mb-6">2</div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">2. The items you are moving</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Heavy and delicate items such as pianos, cabinets, and freezers need extra care and can increase the total moving time.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute -inset-4 bg-muted/20 rounded-3xl -z-10 transform -rotate-2"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80" 
                    alt="Book and move" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-border/50"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white text-xl font-bold mb-6">3</div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">3. Your possession dates</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Gaps between move-out and possession dates can add timeline delays, but most local moves are completed within a single working day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* G) MEET THE DRIVERS */}
        <section className="py-24 bg-muted/10 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Moving Easy Limited branches</h2>
                <p className="text-lg text-muted-foreground">Our team supports moves across Auckland and throughout New Zealand.</p>
              </div>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white transition-colors">
                View all services
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <OperatorCard 
                name="Auckland"
                location="Manukau"
                truckType="Household Moving"
                rating={4.9}
                reviews={127}
                bio="We provide furniture moving, freight, and relocation services across Auckland with experienced movers."
                initials="AK"
                colorClass="bg-black text-white"
              />
              <OperatorCard 
                name="Nationwide"
                location="New Zealand"
                truckType="Freight Services"
                rating={4.8}
                reviews={89}
                bio="Inside and outside Auckland, we connect you with reliable movers for interstate and outer state relocations."
                initials="NZ"
                colorClass="bg-zinc-800 text-white"
              />
              <OperatorCard 
                name="Customer Support"
                location="Contact Us"
                truckType="Booking Assistance"
                rating={5.0}
                reviews={203}
                bio="For general enquiries and bookings, our team is ready to assist with your next move."
                initials="ME"
                colorClass="bg-zinc-600 text-white"
              />
            </div>
          </div>
        </section>

        {/* H) RESOURCES & TIPS */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Additional services</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Lawn Mowing Services", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80" },
                { title: "Cleaning Services", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
                { title: "Make a Booking", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" },
                { title: "Contact Us", img: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&q=80" }
              ].map((article, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-xl mb-4 border border-border">
                    <img src={article.img} alt={article.title} className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="font-semibold text-lg group-hover:underline decoration-2 underline-offset-4">{article.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* I) BOTTOM CTA */}
        <section className="py-28 bg-[#0a0a0a] text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to move?<br/>Book your move today.
            </h2>
            <Link href="/booking">
              <Button size="lg" className="h-16 px-10 text-xl font-bold bg-white text-black hover:bg-white/90 shadow-xl rounded-xl">
                Make a booking
              </Button>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
