import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Button from "@/components/ui/button"

// Global Constants
const BRAND_NAME = "Barchi"

export default function JournalPage({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void
}) {
  const articles = [
    {
      id: 1,
      title: "Understanding Your Skin Barrier: The First Line of Defense",
      date: "May 15, 2025",
      excerpt:
        "Delve into the science of your skin's natural protective layer and why it's crucial for overall skin health...",
      category: "Skincare Science",
      image: "/images/jou1.jpeg",
    },
    {
      id: 2,
      title: "The Art of Layering: How Aegis Veil Enhances Your Makeup",
      date: "May 10, 2025",
      excerpt:
        "Discover tips and tricks for achieving a flawless makeup look when using The Aegis Veil as your protective base...",
      category: "Makeup Tips",
      image: "/images/jou2.jpeg",
    },
    {
      id: 3,
      title: "Ingredient Spotlight: The Power of Bio-Adaptive Polymers",
      date: "May 5, 2025",
      excerpt:
        "A closer look at the innovative polymer technology that makes The Aegis Veil so effective and unique...",
      category: "Ingredient Deep Dive",
      image: "/images/jou3.png",
    },
    {
      id: 4,
      title: "Beyond the Hype: What 'Dermatologist-Tested' Really Means for Barchi",
      date: "April 28, 2025",
      excerpt:
        "An insight into our rigorous testing protocols and commitment to safety and efficacy in every Barchi product.",
      category: "Brand Insights",
      image: "/images/jou4.jpeg",
    },
  ]

  return (
    <div className="animate-fadeIn py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Barchi Insights</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the latest in skincare science, makeup artistry, and the philosophy behind {BRAND_NAME}.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                // src={`images/productb4.png?height=250&width=400`}
                // src = {article.image}
                src={article.image || "/images/jou5.jpeg"}
                alt={article.title}
                className="w-full h-52 object-cover"
                width={400}
                height={250}
                priority={true}
              />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs text-teal-600 font-semibold uppercase mb-1">{article.category}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-teal-700 transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{article.excerpt}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <a href="#" className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center">
                    Read More <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button primary>Load More Articles</Button>
        </div>
      </div>
    </div>
  )
}
