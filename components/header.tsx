"use client"

import type React from "react"

import { useState } from "react"
import { Search, User, ShoppingBag, Menu, X } from "lucide-react"

// Global Constants
const BRAND_NAME = "Barchi"

// Navigation Item Component
const NavItem = ({
  children,
  onClick,
  isActive,
  isMobile,
}: {
  children: React.ReactNode
  onClick: () => void
  isActive: boolean
  isMobile?: boolean
}) => (
  <li
    className={`cursor-pointer ${isMobile ? "py-3 px-4 text-lg" : "px-3 py-2 text-sm"} hover:text-teal-500 transition-colors duration-300 relative group ${isActive ? "text-teal-600 font-semibold" : "text-gray-700"}`}
    onClick={onClick}
  >
    {children}
    {!isMobile && (
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${isActive ? "scale-x-100" : ""}`}
      ></span>
    )}
  </li>
)

// Header Component
export default function Header({
  setCurrentPage,
  currentPage,
}: {
  setCurrentPage: (page: string) => void
  currentPage: string
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navLinks = ["Home", "The Aegis Veil", "Our Science", "Philosophy", "Journal", "Contact"]

  const handleNavClick = (page: string) => {
    setCurrentPage(page)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              onClick={() => handleNavClick("Home")}
              className="text-3xl font-bold text-gray-800 cursor-pointer tracking-tight"
            >
              {BRAND_NAME}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavItem key={link} onClick={() => handleNavClick(link)} isActive={currentPage === link}>
                  {link}
                </NavItem>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-600 hover:text-teal-500 cursor-pointer" />
            <User className="h-5 w-5 text-gray-600 hover:text-teal-500 cursor-pointer" />
            <ShoppingBag className="h-5 w-5 text-gray-600 hover:text-teal-500 cursor-pointer" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-teal-500 focus:outline-none p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-2 z-40">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <NavItem key={link} onClick={() => handleNavClick(link)} isActive={currentPage === link} isMobile>
                {link}
              </NavItem>
            ))}
            <li className="py-3 px-4 text-lg text-gray-700">
              <div className="flex items-center space-x-6 mt-2">
                <Search className="h-6 w-6 hover:text-teal-500 cursor-pointer" />
                <User className="h-6 w-6 hover:text-teal-500 cursor-pointer" />
                <ShoppingBag className="h-6 w-6 hover:text-teal-500 cursor-pointer" />
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
