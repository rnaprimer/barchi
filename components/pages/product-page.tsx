"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import Button from "@/components/ui/button"

// Global Constants
const PRODUCT_NAME = "Aegis Veil"
const PRODUCT_TAGLINE = "Your Invisible Canvas, Perfected by Science."

export default function ProductPage({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void
}) {
  const benefits = [
    "Forms an invisible, breathable barrier.",
    "Protects skin from cosmetic ingredients and pollutants.",
    "Creates a smooth canvas for flawless makeup application.",
    "Lightweight, non-greasy, and quick-absorbing.",
    "Suitable for all skin types, including sensitive skin.",
    "Scientifically formulated and dermatologist-tested (concept).",
  ]

  const ingredients = [
    {
      name: "Bio-Adaptive Polymer Matrix",
      description: "A proprietary blend of flexible film-formers that create a breathable, protective second skin.",
    },
    { name: "Ceramide Complex NP", description: "Reinforces the natural skin barrier and helps retain moisture." },
    {
      name: "Antioxidant Elixir (Green Tea & Vitamin E)",
      description: "Protects against environmental stressors and free radical damage.",
    },
    { name: "Hyaluronic Acid Microspheres", description: "Provide lightweight hydration and plump the skin surface." },
  ]

  return (
    <div className="animate-fadeIn py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Hero */}
        <section className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="lg:w-1/2">
            <Image
              src="/images/heroimg.png?height=600&width=700"
              alt={PRODUCT_NAME}
              className="w-full rounded-xl shadow-2xl object-cover"
              width={700}
              height={600}
            />
            {/* Thumbnail images */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src={`/images/prob${i}.png?height=120&width=150`}
                  alt={`Aegis Veil View ${i}`}
                  className="rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                  width={150}
                  height={120}
                />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">{PRODUCT_NAME}</h1>
            <p className="text-xl text-teal-600 font-semibold mb-6">{PRODUCT_TAGLINE}</p>
            <p className="text-gray-600 mb-6 text-lg">
              The pinnacle of skin protection and makeup preparation. {PRODUCT_NAME} is meticulously engineered to
              provide an ultra-thin, imperceptible barrier that shields your delicate skin from the daily onslaught of
              cosmetic ingredients and environmental pollutants.
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-800">$75.00</span>
              {/* Add to cart, quantity selector etc. */}
            </div>
            <Button primary className="w-full sm:w-auto text-lg px-10 py-4">
              Add to Bag
            </Button>
            <p className="text-sm text-gray-500 mt-4">Free shipping on orders over $50.</p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16 md:mb-24 p-8 bg-slate-50 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-md shadow-sm">
                <CheckCircle size={24} className="text-teal-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Use Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How to Use {PRODUCT_NAME}</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="bg-teal-100 text-teal-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cleanse</h3>
              <p className="text-gray-600 text-sm">
                Start with a clean, dry face. Ensure all previous products are fully absorbed.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="bg-teal-100 text-teal-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Apply</h3>
              <p className="text-gray-600 text-sm">
                Dispense 2-3 drops of {PRODUCT_NAME} onto fingertips. Gently spread a thin, even layer across your
                entire face.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="bg-teal-100 text-teal-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Set & Beautify</h3>
              <p className="text-gray-600 text-sm">
                Allow 30-60 seconds for the veil to set. Proceed with your favorite makeup routine, enjoying enhanced
                application and protection.
              </p>
            </div>
          </div>
        </section>

        {/* Ingredients Spotlight */}
        <section className="mb-16 md:mb-24 p-8 bg-gray-800 text-white rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Ingredient Spotlight</h2>
          <div className="space-y-6">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-md">
                <h4 className="text-xl font-semibold text-teal-400 mb-1">{ingredient.name}</h4>
                <p className="text-gray-300 text-sm">{ingredient.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-gray-400">
            For a full ingredient list, please refer to product packaging.
          </p>
        </section>

        {/* Related Products / Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Ready to Transform Your Routine?</h2>
          <Button primary onClick={() => setCurrentPage("Home")} className="text-lg">
            Explore More from Barchi
          </Button>
        </section>
      </div>
    </div>
  )
}
