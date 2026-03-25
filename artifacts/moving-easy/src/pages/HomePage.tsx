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
              New Zealand's expert way to move for less
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
              Connect directly with verified truck owner-operators.
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
                  Get Quotes
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
                <span className="text-black font-semibold">4.8/5</span> Rating
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-black" />
                <span className="text-black font-semibold">2,400+</span> moves completed
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-black" />
                <span className="text-black font-semibold">500+</span> drivers
              </div>
            </div>
          </div>
        </section>

        {/* B) MOST POPULAR SERVICES */}
        <section className="py-20 bg-muted/10 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-tight">Our most popular services</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: Home, label: "House Moving" },
                { icon: Building2, label: "Apartment Moving" },
                { icon: Briefcase, label: "Office Relocation" },
                { icon: Sofa, label: "Furniture Removal" },
                { icon: Truck, label: "Man with a Van" },
                { icon: PackageOpen, label: "TradeMe Delivery" },
                { icon: Music, label: "Piano Moving" },
                { icon: Trash2, label: "Rubbish Removal" },
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">What do our customers say?</h2>
              <p className="text-lg text-muted-foreground">4.8 out of 5 from 500+ reviews</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ReviewCard 
                name="Jane R."
                location="Auckland"
                rating={5}
                date="2 weeks ago"
                text="Made our Auckland move so easy! Mike was professional and careful with our furniture. Got 5 quotes in under an hour and chose the best fit."
              />
              <ReviewCard 
                name="Tom H."
                location="Wellington"
                rating={5}
                date="1 month ago"
                text="Sarah was punctual and incredibly efficient. Saved $400 compared to the traditional removal company we used last time. Highly recommend!"
              />
              <ReviewCard 
                name="Emma L."
                location="Christchurch"
                rating={4}
                date="3 months ago"
                text="Used Moving Easy twice now. Always great drivers, always on time, always reasonable prices. The communication directly with the driver gives peace of mind."
              />
            </div>
          </div>
        </section>

        {/* D) GO ABOVE & BEYOND */}
        <section className="py-24 bg-[#0a0a0a] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">We go above and beyond</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Verified operators</h3>
                <p className="text-white/70">Every driver on our platform is carefully vetted for your peace of mind.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <MessageSquare className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Direct communication</h3>
                <p className="text-white/70">Chat directly with drivers to discuss details before you book.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <BadgeDollarSign className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparent pricing</h3>
                <p className="text-white/70">No hidden fees or surprise charges. The quote you accept is what you pay.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <Map className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">NZ-wide coverage</h3>
                <p className="text-white/70">From Cape Reinga to Bluff, we've got independent movers ready to help.</p>
              </div>
            </div>
          </div>
        </section>

        {/* E) ONE SEAMLESS EXPERIENCE (STATS BANNER) */}
        <section className="py-16 bg-white border-b border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/30">
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">2,400+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Moves Completed</p>
              </div>
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">500+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Active Drivers</p>
              </div>
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">4.8<span className="text-2xl">★</span></p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Average Rating</p>
              </div>
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">NZ</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Wide Coverage</p>
              </div>
            </div>
          </div>
        </section>

        {/* F) HOW IT WORKS */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center tracking-tight">How Moving Easy works</h2>
            
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
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Create your listing</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Tell us what you're moving, where it's going, and when. Add photos and details to get the most accurate quotes. It's completely free to post.
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
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Compare quotes</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Verified owner-operators in your area will send you competitive quotes. Review their profiles, read past customer feedback, and message them directly with any questions.
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
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Book and move</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Accept the quote that works best for you. Your driver will arrive on the scheduled day to handle your move safely and efficiently.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Meet some of our drivers</h2>
                <p className="text-lg text-muted-foreground">Experienced professionals ready to help you move.</p>
              </div>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white transition-colors">
                View all drivers
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <OperatorCard 
                name="Mike Taylor"
                location="Auckland Central"
                truckType="5T Box Truck"
                rating={4.9}
                reviews={127}
                bio="10+ years experience moving furniture in Auckland. I pride myself on being careful, punctual, and friendly."
                initials="MT"
                colorClass="bg-black text-white"
              />
              <OperatorCard 
                name="Sarah King"
                location="Wellington Region"
                truckType="3T Transit Van"
                rating={4.8}
                reviews={89}
                bio="Perfect for apartment moves or TradeMe pickups. Fast, efficient service around Wellington and the Hutt Valley."
                initials="SK"
                colorClass="bg-zinc-800 text-white"
              />
              <OperatorCard 
                name="Dave Larsen"
                location="Christchurch"
                truckType="8T Furniture Truck"
                rating={5.0}
                reviews={203}
                bio="Inter-city specialist. If you're moving house across the South Island, my large truck can handle full family homes."
                initials="DL"
                colorClass="bg-zinc-600 text-white"
              />
            </div>
          </div>
        </section>

        {/* H) RESOURCES & TIPS */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Moving resources & tips</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Ultimate Moving Checklist", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80" },
                { title: "How to Pack Fragile Items", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
                { title: "Moving Costs Guide 2025", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" },
                { title: "Preparing Your Pets for a Move", img: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&q=80" }
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
              Ready to move?<br/>Get free quotes in minutes.
            </h2>
            <Link href="/quote">
              <Button size="lg" className="h-16 px-10 text-xl font-bold bg-white text-black hover:bg-white/90 shadow-xl rounded-xl">
                Post your move
              </Button>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
