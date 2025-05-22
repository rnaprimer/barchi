"use client"

import Image from "next/image"
import { Layers, Droplets, Microscope, FlaskConical } from "lucide-react"
import Button from "@/components/ui/button"

// Global Constants
const BRAND_NAME = "Barchi"
const PRODUCT_NAME = "Aegis Veil"

export default function OurSciencePage({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void
}) {
  const sciencePillars = [
    {
      // image: "/images/jou2.jpeg",
      title: "Bio-Mimetic Film Technology",
      icon: Layers,
      description:
        "Our core technology involves creating an ultra-thin, flexible film that mimics the skin's outermost layer. This 'second skin' is breathable, comfortable, and acts as a formidable barrier.",
        
    },
    {
      // image: "/images/jou4.jpeg",
      title: "Selective Permeability",
      icon: Droplets,
      description:
        "The Aegis Veil is engineered to be selectively permeable. It allows skin to breathe and perspire naturally while blocking the penetration of larger cosmetic molecules and environmental pollutants.",
    },
    {
      title: "Micro-Surface Optimisation",
      icon: Microscope,
      description:
        "The film creates an exceptionally smooth micro-surface on the skin. This not only enhances makeup application for a flawless finish but also reduces friction and mechanical stress on the skin.",
    },
    {
      title: "Synergistic Ingredient Delivery",
      icon: FlaskConical,
      description:
        "While primarily protective, The Aegis Veil can be formulated to slowly release beneficial, skin-compatible ingredients, offering sustained nourishment throughout the day.",
    },
  ]

  return (
    <div className="animate-fadeIn py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">The Science of {BRAND_NAME}</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            At {BRAND_NAME}, innovation is at our core. We fuse cutting-edge dermatological research with advanced
            material science to create products that are both highly effective and exceptionally gentle.
          </p>
        </header>

        {/* Core Technology Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Technological Pillars</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {sciencePillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={`/images/jou1.jpeg?height=300&width=400`}
                  // src={sciencePillars.image || "/images/jou1.jpeg"}
                  alt={pillar.title}
                  className="w-full h-56 object-cover rounded-md mb-6"
                  width={400}
                  height={300}
                />
                <div className="flex items-center mb-3">
                  <pillar.icon size={28} className="text-teal-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-800">{pillar.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research & Development */}
        <section className="mb-16 md:mb-24 p-8 md:p-12 bg-white rounded-xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Commitment to Research</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our dedicated team of scientists and dermatologists continuously explores new frontiers in skin barrier
                technology. We conduct rigorous testing for safety and efficacy, ensuring that every {BRAND_NAME}{" "}
                product meets the highest standards of quality and performance.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe in transparency and evidence-based skincare. While we can't share proprietary details, we are
                committed to publishing summaries of our research findings and collaborating with the scientific
                community.
              </p>
              <Button primary onClick={() => setCurrentPage("Journal")}>
                Read Our Insights
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/productb4.png?height=400&width=600"
                alt="Barchi Research Lab"
                className="rounded-lg shadow-md w-full"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* The Aegis Veil - How it Works Visual */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Visualizing The {PRODUCT_NAME}</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src="/images/concept2.png?height=400&width=800"
              alt="How Aegis Veil Works Diagram"
              className="w-full rounded-md"
              width={800}
              height={400}
            />
            <p className="mt-4 text-gray-600 text-sm">
              Conceptual diagram: The {PRODUCT_NAME} forms a protective, breathable layer above the epidermis, shielding
              it from external elements while allowing skin to function naturally.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
