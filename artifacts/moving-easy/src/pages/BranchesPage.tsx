import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-foreground">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black">
              Moving Easy Limited branches
            </h1>
            <p className="mt-3 text-muted-foreground text-lg max-w-2xl">
              We are based in Manukau, Auckland, New Zealand and provide services across New Zealand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-border/60 rounded-2xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-black">Auckland</h2>
                    <p className="text-sm text-muted-foreground mt-1">Manukau</p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-muted/30 border border-border/60 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-black" />
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <a className="hover:text-black transition-colors" href="tel:+642041440090">
                      02041440090
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <a className="hover:text-black transition-colors" href="mailto:info@movingeasy.co.nz">
                      info@movingeasy.co.nz
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Manukau, Auckland, New Zealand</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

