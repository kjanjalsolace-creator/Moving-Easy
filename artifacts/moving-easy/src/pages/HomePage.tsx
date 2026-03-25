import { Link } from "wouter";
import { MapPin, Calendar, Truck, ArrowRight, ShieldCheck, Clock, Users, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OperatorCard } from "@/components/OperatorCard";
import { ReviewCard } from "@/components/ReviewCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
              alt="Moving Easy Trucks" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-900/80 to-slate-900/70" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                New Zealand's #1 Moving Marketplace
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
                Connect with trusted truck owner-operators. <br className="hidden md:block"/>
                <span className="text-secondary">Get quotes in minutes.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
                Deal directly with experienced local drivers for affordable, flexible moving. No middlemen, no hidden fees, just great service.
              </p>

              {/* Quick Quote Widget */}
              <div className="bg-background rounded-2xl p-2 md:p-3 shadow-xl border border-border/50 max-w-4xl flex flex-col md:flex-row gap-2 md:gap-3 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    placeholder="Moving from..." 
                    className="pl-10 h-14 border-0 bg-muted/50 focus-visible:ring-1 focus-visible:bg-background text-base rounded-xl"
                  />
                </div>
                <div className="hidden md:flex items-center justify-center text-muted-foreground/30">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    placeholder="Moving to..." 
                    className="pl-10 h-14 border-0 bg-muted/50 focus-visible:ring-1 focus-visible:bg-background text-base rounded-xl"
                  />
                </div>
                <div className="flex-1 relative hidden sm:block">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    type="date"
                    className="pl-10 h-14 border-0 bg-muted/50 focus-visible:ring-1 focus-visible:bg-background text-base rounded-xl text-foreground"
                  />
                </div>
                <Link href="/quote">
                  <Button className="h-14 px-8 w-full md:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg rounded-xl shadow-lg hover:-translate-y-0.5 transition-all">
                    Get Quotes
                  </Button>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium text-white/70">
                <div className="flex items-center gap-1.5 bg-black/20 rounded-full px-3 py-1 backdrop-blur-sm">
                  <CheckIcon className="h-4 w-4 text-secondary" /> 2,400+ Moves
                </div>
                <div className="flex items-center gap-1.5 bg-black/20 rounded-full px-3 py-1 backdrop-blur-sm">
                  <CheckIcon className="h-4 w-4 text-secondary" /> 500+ Verified Drivers
                </div>
                <div className="flex items-center gap-1.5 bg-black/20 rounded-full px-3 py-1 backdrop-blur-sm">
                  <StarIcon className="h-4 w-4 text-yellow-400 fill-yellow-400" /> 4.8 Avg Rating
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">How Moving Easy Works</h2>
              <p className="text-muted-foreground text-lg">
                We've simplified the process of finding reliable transport. Three easy steps to get you moving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border border-dashed border-2 border-border/50 z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-background rounded-full border-4 border-primary/20 flex items-center justify-center shadow-lg mb-6 group-hover:border-primary group-hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center absolute top-0 right-1/2 translate-x-12 -translate-y-2 shadow-sm">1</div>
                <h3 className="text-xl font-bold mb-3">Tell us about your move</h3>
                <p className="text-muted-foreground">Enter your pickup and drop-off locations, preferred dates, and what you need to move.</p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-background rounded-full border-4 border-secondary/20 flex items-center justify-center shadow-lg mb-6 group-hover:border-secondary group-hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Truck className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <div className="bg-secondary text-secondary-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center absolute top-0 right-1/2 translate-x-12 -translate-y-2 shadow-sm">2</div>
                <h3 className="text-xl font-bold mb-3">Get quotes from drivers</h3>
                <p className="text-muted-foreground">Verified truck owner-operators operating in your area will send you competitive quotes directly.</p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-background rounded-full border-4 border-primary/20 flex items-center justify-center shadow-lg mb-6 group-hover:border-primary group-hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center absolute top-0 right-1/2 translate-x-12 -translate-y-2 shadow-sm">3</div>
                <h3 className="text-xl font-bold mb-3">Book and move</h3>
                <p className="text-muted-foreground">Compare profiles, read reviews, and book the driver that best fits your budget and needs.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/quote">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 font-semibold px-8 rounded-full">
                  Start Your Request <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why book through Moving Easy?</h2>
                <p className="text-lg text-muted-foreground mb-10">
                  We empower independent drivers and provide customers with a transparent, cost-effective alternative to traditional moving companies.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Banknote className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Lower Prices</h4>
                      <p className="text-sm text-muted-foreground">Deal directly with drivers. No corporate overheads means better rates for you.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Verified Operators</h4>
                      <p className="text-sm text-muted-foreground">Every driver is vetted. Read real reviews from previous customers before booking.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Flexible Options</h4>
                      <p className="text-sm text-muted-foreground">Find drivers available on your exact dates with the right truck size for the job.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <ShieldCheck className="h-5 w-5 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Secure & Transparent</h4>
                      <p className="text-sm text-muted-foreground">Clear communication, no hidden fees. You know exactly who is turning up on moving day.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                {/* landing page hero scenic mountain landscape */}
                <img 
                  src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&h=600&fit=crop" 
                  alt="Mover carrying a box" 
                  className="rounded-3xl shadow-xl w-full object-cover h-[500px]"
                />
                
                {/* Floating trust badge */}
                <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-xl border border-border flex items-center gap-4 animate-in slide-in-from-bottom duration-700 delay-300">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <StarIcon className="h-6 w-6 fill-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Customer Rating</p>
                    <p className="text-xl font-bold">4.8/5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OWNER OPERATORS SHOWCASE */}
        <section className="py-20 bg-muted/30 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Meet some of our drivers</h2>
                <p className="text-muted-foreground text-lg">
                  Browse profiles of independent operators ready to help with your move.
                </p>
              </div>
              <Button variant="link" className="text-primary font-semibold hover:underline px-0">
                View all drivers <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <OperatorCard 
                name="Mike Taylor"
                location="Auckland Central"
                truckType="5T Box Truck with Tail Lift"
                rating={4.9}
                reviews={127}
                bio="10+ years experience moving furniture in Auckland. I pride myself on being careful, punctual, and friendly. Blankets and ties included."
                initials="MT"
                colorClass="bg-blue-600"
              />
              <OperatorCard 
                name="Sarah King"
                location="Wellington Region"
                truckType="3T Transit Van"
                rating={4.8}
                reviews={89}
                bio="Perfect for 1-2 bedroom apartment moves or TradeMe pickups. Fast, efficient service around Wellington and the Hutt Valley."
                initials="SK"
                colorClass="bg-emerald-600"
              />
              <OperatorCard 
                name="Dave Larsen"
                location="Christchurch / South Island"
                truckType="8T Furniture Truck"
                rating={5.0}
                reviews={203}
                bio="Inter-city specialist. If you're moving house across the South Island, my large truck and experienced offsider can handle full family homes."
                initials="DL"
                colorClass="bg-orange-600"
              />
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Loved by Kiwis nationwide</h2>
              <p className="text-muted-foreground text-lg">Don't just take our word for it.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ReviewCard 
                name="Jane R."
                location="Moved to Auckland CBD"
                rating={5}
                date="2 weeks ago"
                text="Made our Auckland move so easy! Mike was professional and careful with our furniture. Got 5 quotes in under an hour and chose the best fit."
              />
              <ReviewCard 
                name="Tom H."
                location="Moved to Lower Hutt"
                rating={5}
                date="1 month ago"
                text="Sarah was punctual and incredibly efficient. Saved $400 compared to the traditional removal company we used last time. Highly recommend!"
              />
              <ReviewCard 
                name="Emma L."
                location="Moved to Rolleston"
                rating={4}
                date="3 months ago"
                text="Used Moving Easy twice now. Always great drivers, always on time, always reasonable prices. The communication directly with the driver gives peace of mind."
              />
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to make your move easier?</h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Join thousands of New Zealanders who've found affordable, reliable movers through our platform. Post your job for free today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quote">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:-translate-y-1 transition-all">
                  Get Free Quotes Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-transparent border-white text-white hover:bg-white/10">
                Register as a Driver
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
