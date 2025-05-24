"use client"

import Image from "next/image"
import { Shield, FlaskConical, Layers, Sparkles } from "lucide-react"
import Button from "@/components/ui/button"

// Global Constants
const BRAND_NAME = "Barchi"
const TAGLINE = "Invisible Science. Visible Radiance."
const PRODUCT_NAME = "Aegis Veil"
const PRODUCT_TAGLINE = "Your Invisible Canvas, Perfected by Science."

export default function HomePage({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void
}) {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-slate-100 py-20 md:py-32 min-h-[calc(100vh-80px)] flex items-center">
        <div className="absolute inset-0 opacity-10">
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            {BRAND_NAME}: <span className="text-teal-600">{TAGLINE}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Experience the revolutionary {PRODUCT_NAME}, an imperceptible shield that safeguards your skin, allowing you
            to embrace any cosmetic with absolute confidence.
          </p>
          <div className="space-x-4">
            <Button primary onClick={() => setCurrentPage("The Aegis Veil")}>
              Discover {PRODUCT_NAME}
            </Button>
            <Button onClick={() => setCurrentPage("Our Science")}>Explore the Science</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">Why {BRAND_NAME}?</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Shield size={48} className="mx-auto mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ultimate Protection</h3>
              <p className="text-gray-600 text-sm">
                Our scientifically formulated barrier defends against cosmetic-related stress and environmental
                aggressors.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Layers size={48} className="mx-auto mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Truly Invisible</h3>
              <p className="text-gray-600 text-sm">
                A breathable, imperceptible film that feels like nothing but protects like everything. Perfect canvas
                for any makeup.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <FlaskConical size={48} className="mx-auto mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Science-Backed</h3>
              <p className="text-gray-600 text-sm">
                Developed with cutting-edge research and premium, skin-loving ingredients for proven efficacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/productb1.png"
                alt={PRODUCT_NAME}
                className="rounded-lg shadow-2xl w-full"
                width={600}
                height={500}
                quality={85}
                priority={true}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMj4xLy4vLi4+QT5APj49QT48LzFBPkVFRUVBRUFBRUVFRUVFRUX/2wBDAR0XFyAeIB4gHh4gIB4lICAgICUmJSUlJSUxJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSX/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet {PRODUCT_NAME}</h2>
              <p className="text-gray-600 mb-6 text-lg">{PRODUCT_TAGLINE}</p>
              <p className="text-gray-600 mb-6">
                A feather-light serum that forms an undetectable, breathable barrier, {PRODUCT_NAME} is your skin's
                first line of defense. It creates a perfectly smooth canvas for makeup application while shielding your
                skin from potential irritants and pollutants.
              </p>
              <Button primary onClick={() => setCurrentPage("The Aegis Veil")}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Snippet */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles size={40} className="mx-auto mb-4 text-teal-500" />
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Loved by Beauty Innovators</h2>
          <blockquote className="max-w-2xl mx-auto text-gray-600 text-lg italic">
            "{BRAND_NAME} has revolutionized my makeup routine. I can finally experiment with bold looks without
            worrying about my sensitive skin. {PRODUCT_NAME} is a game-changer!"
          </blockquote>
          <p className="mt-4 text-gray-800 font-semibold">- Alex R., Professional Makeup Artist</p>
        </div>
      </section>
    </div>
  )
}