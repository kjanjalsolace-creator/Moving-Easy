import { Link } from "wouter";
import { useMemo, useState } from "react";
import { 
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
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OperatorCard } from "@/components/OperatorCard";
import { ReviewCard } from "@/components/ReviewCard";

export default function HomePage() {
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);

  const heroImages = useMemo(
    () => [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600&q=80&auto=format&fit=crop",
    ],
    []
  );

  const heroImage = heroImages[heroSlideIdx % heroImages.length];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-foreground">
      <Navbar />

      <main className="flex-grow">
        {/* A) HERO SECTION */}
        <section className="py-10 md:py-16 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-muted/10 border border-border/60">
              <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] items-stretch">
                <div className="relative z-10 p-6 md:p-6">
                  <div className="w-full md:w-[420px]">
                    <div className="bg-white rounded-2xl border border-border/60 shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-6">
                      <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight">
                        NZ’s best moving teams — ready for your move
                      </h1>
                      <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                        Moving Easy Limited provides low-cost moving specialists for Home Moves, Furniture Moves, Office Relocation, and more.
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-4 w-4 text-black fill-black" />
                          <span className="font-semibold text-black">4.8</span>
                        </span>
                        <span>•</span>
                        <span>NZ-wide service</span>
                        <span>•</span>
                        <span className="text-black font-semibold">$60/HH</span>
                      </div>

                      <div className="mt-5">
                        <Link href="/quote" className="block">
                          <Button className="h-12 w-full bg-black hover:bg-black/90 text-white font-semibold rounded-xl">
                            Get Quote
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[320px] md:min-h-[520px]">
                  <img
                    src={heroImage}
                    alt="Moving truck ready for service"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />

                  <div className="absolute right-5 top-1/2 -translate-y-1/2">
                    <button
                      type="button"
                      onClick={() => setHeroSlideIdx((i) => (i + 1) % heroImages.length)}
                      className="h-12 w-12 rounded-lg bg-white/90 border border-white/60 shadow-sm flex items-center justify-center hover:bg-white transition-colors"
                      aria-label="Next hero image"
                    >
                      <ArrowRight className="h-6 w-6 text-black" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="hidden md:block h-6" />
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
                { icon: Trash2, label: "Lawn Mowing Services" },
                { icon: BadgeDollarSign, label: "Cleaning Services" },
                { icon: Music, label: "Free Winz Quotes" },
                { icon: PackageOpen, label: "Freight Services" },
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
              <p className="text-lg text-muted-foreground">Sample customer content placeholder.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ReviewCard 
                name="Customer Name"
                location="City"
                rating={5}
                date="Recent review"
                text="Dummy testimonial text. Replace with real review content from your source when available."
              />
              <ReviewCard 
                name="Customer Name"
                location="City"
                rating={5}
                date="Recent review"
                text="Dummy testimonial text. Replace with real review content from your source when available."
              />
              <ReviewCard 
                name="Customer Name"
                location="City"
                rating={4}
                date="Recent review"
                text="Dummy testimonial text. Replace with real review content from your source when available."
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
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">12+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Placeholder Metric</p>
              </div>
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">34+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Placeholder Metric</p>
              </div>
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">56+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Placeholder Metric</p>
              </div>
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">78+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Placeholder Metric</p>
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
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80&auto=format&fit=crop" 
                    alt="Household moving truck and crew" 
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
                    src="https://images.unsplash.com/photo-1616627986114-3c1d0d3ee8b1?w=1200&q=80&auto=format&fit=crop" 
                    alt="Packed boxes ready for transport" 
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
                    src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=1200&q=80&auto=format&fit=crop" 
                    alt="Calendar and planning a moving date" 
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
                { title: "Lawn Mowing Services", img: "https://images.unsplash.com/photo-1599685315640-9ceab2a6a5c0?w=1200&q=80&auto=format&fit=crop" },
                { title: "Cleaning Services", img: "https://images.unsplash.com/photo-1581579184683-0b7f4b9b6b76?w=1200&q=80&auto=format&fit=crop" },
                { title: "Make a Booking", img: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=1200&q=80&auto=format&fit=crop" },
                { title: "Contact Us", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format&fit=crop" }
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
