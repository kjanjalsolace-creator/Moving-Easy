import { Link } from "wouter";
import { Truck, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                <Truck className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-background">
                Moving Easy
              </span>
            </div>
            <p className="text-sm text-background/60 mb-6 max-w-xs">
              New Zealand's trusted marketplace connecting you directly with verified truck owner-operators for local and nationwide moves.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-background font-semibold mb-4">Customers</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">How it works</Link></li>
              <li><Link href="/quote" className="text-sm hover:text-primary transition-colors">Get Quotes</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Find a Mover</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Trust & Safety</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Customer FAQs</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-background font-semibold mb-4">Drivers</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Register as a Driver</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Driver Benefits</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Driver App</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Driver FAQs</Link></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="text-background font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Moving Easy Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium bg-background/10 px-3 py-1 rounded-full text-background/80">
              Proudly New Zealand
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
