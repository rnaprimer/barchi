"use client"

import Image from "next/image"
import { FlaskConical, Shield, Sparkles, CheckCircle } from "lucide-react"
import Button from "@/components/ui/button"

// Global Constants
const BRAND_NAME = "Barchi"

export default function PhilosophyPage({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void
}) {
  return (
    <div className="animate-fadeIn py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Our Philosophy</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            At {BRAND_NAME}, we believe beauty and science are intrinsically linked. Our mission is to empower you to
            express your unique beauty without compromising your skin's health.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24 items-center">
          <div>
            <Image
              src="/images/productb3.png?height=450&width=600"
              alt="Our Values"
              className="rounded-xl shadow-xl w-full"
              width={600}
              height={450}
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Core Values</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <FlaskConical size={24} className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-gray-800">Innovation Through Science:</strong> We are committed to rigorous
                  research and development, leveraging the latest scientific advancements to create groundbreaking
                  skincare solutions.
                </span>
              </li>
              <li className="flex items-start">
                <Shield size={24} className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-gray-800">Protection as Priority:</strong> We believe that healthy skin is the
                  foundation of beauty. Our products are designed to protect and fortify your skin's natural defenses.
                </span>
              </li>
              <li className="flex items-start">
                <Sparkles size={24} className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-gray-800">Empowering Beauty Choices:</strong> We want you to feel free to
                  explore and enjoy cosmetics. Our protective solutions enable you to use a wide range of products with
                  confidence.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={24} className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-gray-800">Transparency & Integrity:</strong> We are open about our ingredients
                  and processes. We build trust through honesty and by delivering on our promises.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-slate-50 p-8 md:p-12 rounded-xl shadow-lg mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">The {BRAND_NAME} Story</h2>
          <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed space-y-4">
            <p>
              {BRAND_NAME} was born from a simple yet profound realization: the desire for cosmetic expression shouldn't
              come at the cost of skin health. Our founder, a passionate researcher Barsha Balabantaray and RNAPrimer
            , witnessed firsthand the challenges many faced from sensitivity to concerns about long-term
              effects of daily makeup use.
            </p>
            <p>
              Driven by a vision to create a "safety net" for the skin, the journey began. Years of research into
              advanced polymers, skin barrier function, and cosmetic interactions led to the development of our flagship
              technology the invisible, protective veil.
            </p>
            <p>
              Today, {BRAND_NAME} stands for a new era in beauty, one where science serves as the ultimate guardian,
              allowing your creativity and confidence to shine, unburdened. We are more than just a skincare brand; we
              are your partners in healthy, expressive beauty.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Join Our Journey</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Become part of a community that values both scientific innovation and the art of beauty.
          </p>
          <Button primary onClick={() => setCurrentPage("Contact")}>
            Connect With Us
          </Button>
        </section>
      </div>
    </div>
  )
}
