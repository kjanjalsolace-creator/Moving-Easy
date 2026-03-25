import { Link } from "wouter";
import { Truck, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white/80 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Truck className="h-6 w-6 text-white" strokeWidth={1.5} />
              <span className="text-xl font-semibold tracking-tight text-white">
                Moving Easy
              </span>
            </div>
            <p className="text-sm text-white/60 mb-8 max-w-xs leading-relaxed">
              New Zealand's trusted marketplace connecting you directly with verified truck owner-operators for local and nationwide moves.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-tight">Customers</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">How it works</Link></li>
              <li><Link href="/quote" className="text-sm text-white/60 hover:text-white transition-colors">Get Quotes</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Find a Mover</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Trust & Safety</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Customer FAQs</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-tight">Drivers</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Register as a Driver</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Driver Benefits</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Driver App</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Driver FAQs</Link></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-tight">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Moving Easy Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium bg-white/10 px-3 py-1.5 rounded-full text-white/80">
              Proudly New Zealand
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
