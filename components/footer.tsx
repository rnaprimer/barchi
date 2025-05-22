import { Linkedin, Instagram, Twitter, ChevronRight } from "lucide-react"

// Global Constants
const BRAND_NAME = "Barchi"
const TAGLINE = "Invisible Science. Visible Radiance."

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">{BRAND_NAME}</h3>
            <p className="text-sm mb-4">{TAGLINE}</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  The Aegis Veil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Our Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Newsletter</h4>
            <p className="text-sm mb-3">Subscribe for latest updates and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded-l-md text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-r-md text-sm transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved. Crafted with science and passion.
          </p>
        </div>
      </div>
    </footer>
  )
}
