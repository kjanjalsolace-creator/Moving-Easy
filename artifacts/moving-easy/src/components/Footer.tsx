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
              Moving Easy Limited provides furniture moving and freight services across Auckland and throughout New Zealand.
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
            <h4 className="text-white font-semibold mb-6 tracking-tight">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">House Furniture Moving</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Packing Services</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Storage Services</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Junk Removal</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Freight Services</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-tight">Offers</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Free WINZ Quotes</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">10% Student Discount</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Weekday Discount</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Make A Booking</Link></li>
              <li><Link href="/quote" className="text-sm text-white/60 hover:text-white transition-colors">Quote Form</Link></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-tight">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="tel:+642041440090" className="text-sm text-white/60 hover:text-white transition-colors">02041440090</a></li>
              <li><a href="mailto:info@movingeasy.co.nz" className="text-sm text-white/60 hover:text-white transition-colors">info@movingeasy.co.nz</a></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Manukau, Auckland</Link></li>
              <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">New Zealand</Link></li>
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
