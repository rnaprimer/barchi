"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomePage from "@/components/pages/home-page"
import ProductPage from "@/components/pages/product-page"
import OurSciencePage from "@/components/pages/our-science-page"
import PhilosophyPage from "@/components/pages/philosophy-page"
import JournalPage from "@/components/pages/journal-page"
import ContactPage from "@/components/pages/contact-page"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("Home")

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage setCurrentPage={setCurrentPage} />
      case "The Aegis Veil":
        return <ProductPage setCurrentPage={setCurrentPage} />
      case "Our Science":
        return <OurSciencePage setCurrentPage={setCurrentPage} />
      case "Philosophy":
        return <PhilosophyPage setCurrentPage={setCurrentPage} />
      case "Journal":
        return <JournalPage setCurrentPage={setCurrentPage} />
      case "Contact":
        return <ContactPage />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  )
}
